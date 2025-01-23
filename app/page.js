import getBlogs from "@/app/lib/getBlogs";
import BlogsCard from "./components/BlogsCard";

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold">All Blogs</h1>
      <div className="mt-5 grid lg:grid-cols-4 gap-5 md:grid-cols-3 grid-cols-1">
        {
          blogs.map(blog => <BlogsCard key={blog.id} blog={blog}></BlogsCard>)
        }
      </div>
    </div>
  );
}
