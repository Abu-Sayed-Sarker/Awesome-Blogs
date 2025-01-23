
const getBlogs = async () => {
    const blogs = await fetch("https://jsonplaceholder.typicode.com/posts")
    return blogs.json();
};

export default getBlogs;