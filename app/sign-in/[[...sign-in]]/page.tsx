import { SignIn } from "@clerk/nextjs";

export default function Login() {
    return <div className="flex justify-center items-center min-h-[calc(100vh-154px)]">
       <SignIn />
    </div>
}