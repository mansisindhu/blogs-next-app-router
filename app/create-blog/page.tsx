// import { auth, currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

export default async function CreateBlog() {
    //     const { userId } = await auth();

    //     if (!userId) {
    //         redirect("/sign-in")
    //     }

    //   const user = await currentUser()

    //   console.log(userId, user)
    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
            <form>
                <div className="mb-6">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="border rounded px-3 py-2 w-full"
                        placeholder="Enter your blog post title"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="content"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Content:
                    </label>
                    <textarea
                        id="content"
                        rows={10}
                        name="content"
                        className="border rounded px-3 py-2 w-full"
                        placeholder="Enter your blog post content"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
