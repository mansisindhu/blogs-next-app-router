import { currentUser } from '@clerk/nextjs/server'

export default async function CreateBlog() {
    const userInfo = await currentUser();
    console.log(userInfo)
    const createBlog = async (formData: FormData) => {
        "use server";

        const title = formData.get("title");
        const content = formData.get("content")

        await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs/api`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content,
                author: {
                    id: userInfo?.id,
                    name: `${userInfo?.firstName} ${userInfo?.lastName}`
                }
            })
        })
    } 

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
            <form action={createBlog}>
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
