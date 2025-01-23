import getBlog from "@/app/lib/getBlog";

const BlogDatelis = async ({ params }) => {
    const { id } = await params;
    const blog = await getBlog(id);
    return (
        <div className="mt-10">

            <h1 className="text-2xl font-semibold">Blog Datelis</h1>

            <div className="mt-5">
                <h1 className="text-xl">Blog No. {id}</h1>
                <h1 className="text-2xl font-semibold">{blog?.title}</h1>
                <p>{blog?.body}</p>
            </div>
        </div>
    );
};

export default BlogDatelis;