import React, { useState, useEffect } from "react";
import Blogitem from "./Blogitem";
import axios from "axios";

const Bloglist = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <div className="flex justify-center gap-1 sm:gap-6 my-10">
        {["All", "Technology", "Startup", "Lifestyle"].map((category) => {
          const isActive = menu === category;
          const buttonClasses = `py-2 px-6 rounded-md font-semibold transition-all ${
            isActive
              ? "bg-[#08a88a] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`;

          return (
            <button
              key={category}
              onClick={() => setMenu(category)}
              className={buttonClasses}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Blog Items */}
      <div className="flex flex-wrap justify-center gap-6 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => menu === "All" || item.category === menu)
          .map((item, index) => (
            <Blogitem
              key={index}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default Bloglist;
