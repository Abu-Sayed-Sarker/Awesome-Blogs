
const BlogDatelis = async ({ params }) => {
    const { id } = await params;
    return (
        <div>
            id is  {id}
        </div>
    );
};

export default BlogDatelis;