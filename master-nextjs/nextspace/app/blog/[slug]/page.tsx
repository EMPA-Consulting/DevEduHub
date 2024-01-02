export const revalidate = 1200; // not used, just for ISR demonstration (Incremental Static Regeneration)

interface Post {
  title: string;
  content: string;
  slug: string;
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
// function generateStaticParams is not used, but would be useful to generate static pages for each blog post in advance.
// This is only recommended for dynamic data that does not change often to improve performance.
// To implement ISR and allow pages to be rebuilt on demand, use revalidate option. 

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  // deduped
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
