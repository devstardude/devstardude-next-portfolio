import { useState } from "react";
import BlogCard from "./BlogCard";
import styles from "./style.module.css";

const Blogs = (props) => {
  const [blogs, setBlogs] = useState([
    {
      name: "Blog 1",
      description: "Hello mf",
      image:
        "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ribbon:"Hashnode"
    },
  ]);
  return (
    <div>
      <h2>Blogs</h2>
      <p>Here are some of my Tech blogs.</p>
      <div className={`${styles.ProjectBox} bg-slate-200 dark:bg-slate-800`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[2rem] gap-10  ">
          {blogs.map((i) => (
            <BlogCard item={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
