"use client";

import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: { id: params.id },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-800 py-6 px-6 md:px-16 lg:px-32">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo_light.png"
              width={130}
              height={130}
              alt="logo"
              className="w-[100px] sm:w-auto"
            />
          </Link>
          <Link href="https://www.umarkhan.tech/">
            <button className="border-2 border-white text-white py-2 px-6 sm:px-8 hover:bg-white hover:text-black transition-all duration-200 ease-in-out">
              Portfolio
            </button>
          </Link>
        </div>
        <div className="text-center my-24">
          <h1 className="text-3xl sm:text-6xl font-bold text-white max-w-[800px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.authorImg}
            width={60}
            height={60}
            alt="author"
            className="mx-auto mt-8 border border-gray-300 rounded-full"
          />
          <p className="mt-3 text-gray-400 text-lg">
            Written by: {data.author}
          </p>
        </div>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          width={1280}
          height={720}
          className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
        <br />
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article on social media.
          </p>
          <div className="flex space-x-4">
            <Link href="#">
              <Image src={assets.facebook_icon} width={50} alt="Facebook" />
            </Link>
            <Link href="#">
              <Image src={assets.twitter_icon} width={50} alt="Twitter" />
            </Link>
            <Link href="#">
              <Image src={assets.googleplus_icon} width={50} alt="Google+" />
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Umar khan Blogs All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="#">
              <Image src={assets.facebook_icon} width={40} alt="Facebook" />
            </Link>
            <Link href="#">
              <Image src={assets.twitter_icon} width={40} alt="Twitter" />
            </Link>
            <Link href="#">
              <Image src={assets.googleplus_icon} width={40} alt="Google+" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  ) : (
    <> </>
  );
};

export default page;
