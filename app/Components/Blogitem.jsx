"use client";
import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogitem = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-[350px] sm:max-w-[320px] bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="rounded-t-lg"
        />
      </Link>
      <div className="p-4">
        <p className="inline-block bg-[#08a88a] text-white text-xs font-semibold px-2 py-1 rounded-full">
          {category}
        </p>
        <h5 className="mt-3 text-xl font-bold text-gray-800">{title}</h5>
        <p
          className="mt-2 text-sm text-gray-600 line-clamp-3 "
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
        ></p>
        <Link
          href={`/blogs/${id}`}
          className="mt-4 inline-flex items-center text-[#08a88a]-600 font-medium hover:underline"
        >
          Read More
          <Image src={assets.arrow} alt="arrow" className="ml-2" width={12} />
        </Link>
      </div>
    </div>
  );
};

export default Blogitem;
