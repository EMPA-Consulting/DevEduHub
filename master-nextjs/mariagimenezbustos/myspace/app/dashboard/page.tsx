import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { SignOutButton } from "@/components/buttons";
import { redirect } from "next/navigation";
import { prisma } from '@/lib/prisma';
import { ProfileForm } from "./ProfileForm";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    console.log(authOptions)
    if (!session) {
        redirect("/api/auth/signin");
    }

    const currentUserEmail = session?.user?.email!;
    console.log(session)
    console.log(session.user)
    console.log(currentUserEmail);
    const user = await prisma.user.findUnique({
        where: {
            email: currentUserEmail,
        },
    });

    return (
        <div>
            <h1>Dashboard</h1>
            <ProfileForm user={user} />
        </div>
    )
}