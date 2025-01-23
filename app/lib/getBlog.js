
const getBlog = async (id) => {
    const blogs = await fetch(` https://jsonplaceholder.typicode.com/posts/${id}`)
    return blogs.json();
};

export default getBlog;