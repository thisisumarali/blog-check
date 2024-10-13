"use client";

import dynamic from "next/dynamic";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";

// Dynamically import JoditEditor, with ssr: false
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const page = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); // Initialize as null instead of false
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Umar Khan",
    authorImg: "/author.png",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditorChange = (newContent) => {
    setData((prevData) => ({ ...prevData, description: newContent }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!data.description.trim()) {
      toast.error("Blog description cannot be empty.");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(null); // Reset image
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "Umar Khan",
          authorImg: "/author.png",
        });
        setContent("");
      } else {
        toast.error("Error in submitting blog.");
      }
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            width={140}
            height={70}
            alt="Blog Thumbnail"
          />
        </label>
        <input
          type="file"
          id="image"
          hidden
          required
          onChange={(e) => setImage(e.target.files[0])}
        />

        <p className="text-4xl mt-4">Blog Title</p>
        <input
          type="text"
          placeholder="Type here"
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />

        <p className="text-4xl mt-4">Blog Description</p>
        <JoditEditor
          ref={editor}
          value={data.description}
          onChange={handleEditorChange}
          className="w-full sm:w-[500px] h-[500px] mt-4 px-4 py-3 border"
        />

        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          Add Blog
        </button>
      </form>
    </>
  );
};

export default page;
