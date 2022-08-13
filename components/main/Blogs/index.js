import { useState } from "react";
import BlogCard from "./BlogCard";
import styles from "./style.module.css";

const Blogs = (props) => {
  const [blogs, setBlogs] = useState([
    {
      name: "How to deploy React app on remote Linux server using NGINX in Linode",
      description:
        "Linode products, services, and people enable developers and businesses to build, deploy, and scale applications more easily and cost-effectively in the cloud.",
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--aWdeRRJz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0ueeu67ratzne0es3t3d.png",
      ribbon: "dev.to",
      link: "https://dev.to/devstardude/how-to-deploy-react-app-on-remote-linux-server-using-nginx-in-linode-3iid",
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
