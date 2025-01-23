import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) {
        return redirect("/api/auth/login")
    }
    return (
        <div className="text-3xl">
            Hello {user?.given_name} {user?.family_name} Welcome  to your profile!
        </div>
    );
};

export default page;