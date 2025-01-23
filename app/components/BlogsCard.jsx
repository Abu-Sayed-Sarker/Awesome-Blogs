import Link from "next/link";

const BlogsCard = ({ blog }) => {
    const { id, title } = blog || {}
    return (

        <Link href={`blogs/${id}`} className="card  bg-purple-400/10 hover:bg-purple-400/50 cursor-pointer">

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            </div>

        </Link>
    );
};

export default BlogsCard;