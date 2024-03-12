import { type NextPage } from "next";
import { SignInButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

import { LoadingPage, LoadingSpinner } from "~/components/loading";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";

dayjs.extend(relativeTime);

const CreatePostWizard = () => {
  const { user } = useUser();

  const [input, setInput] = useState("");

  const ctx = api.useUtils()

  const { mutate, isLoading: isPosting } = api.posts.create.useMutation({
    onSuccess: () => {
      setInput("");
      void ctx.posts.getAll.invalidate();
    },
    onError: (e) => {
      const errorMsg = e.data?.zodError?.fieldErrors.content;

      if (errorMsg && errorMsg[0]) toast.error(errorMsg[0]);
      else toast.error("Failed to post! Please try again later.");
    }
  });

  if (!user) return null;

  return (
    <div className="flex gap-3 w-full">
      <Image 
        src={user.imageUrl} 
        alt="Profile image" 
        className="rounded-full" 
        width={56} 
        height={56} 
      />
      <input 
        placeholder="Type some emojis!" 
        className="bg-transparent grow outline-none" 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (input !== "") {
              mutate({ content: input });
            }
          }
        }}
        disabled={isPosting}
      />
      {input !== "" && !isPosting && (
      <button onClick={() => mutate({ content: input })} >
        Post
      </button>
      )}
      {isPosting && (
      <div className="flex items-center justify-center">
        <LoadingSpinner size={20} />
      </div>
      )}
    </div>
  )
};

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  
  return (
    <div key={post.id} className="p-4 border-b border-slate-400 flex gap-3">
      <Image 
        src={author.profilePicture} 
        className="rounded-full" 
        alt={`@${author.username}'s profile picture`} 
        width={56} 
        height={56} 
      />
      <div className="flex flex-col">
        <div className="flex text-slate-300 gap-1">
          <Link href={`/@${author.username}`}>
            <span>{`@${author.username}`}</span>
          </Link>
          <Link href={`/post/${post.id}`}>
            <span className="font-thin">{` · ${dayjs(post.createdAt).fromNow()}`}</span>
          </Link>
        </div>
        <span className="text-2xl">{post.content}</span>
      </div>
    </div>
  )
}

const Feed = () => {
  const { data, isLoading: postsLoading } = api.posts.getAll.useQuery();

  if (postsLoading) return <LoadingPage />

  if (!data) return <div>Something went wrong</div>

  return (
    <div className="flex flex-col">
      {data.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.id} />
      ))}
    </div>
  )
}

const Home: NextPage = () => {
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  // Start fetching ASAP
  api.posts.getAll.useQuery();

  // Return empty div if user isn't loaded yet
  if (!userLoaded) return <div />;
  
  return (
    <main className="flex justify-center h-screen">
      <div className="h-full w-full md:max-w-2xl border-x border-slate-400">
        <div className="border-b border-slate-400 p-4 flex">
          {!isSignedIn && <div className="flex justify-center"><SignInButton /></div>}
          {isSignedIn && <CreatePostWizard />}
        </div>
        
        <Feed />
      </div>
    </main>
  );
};

export default Home;
