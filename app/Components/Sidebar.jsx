import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white w-72">
      <div className="px-4 py-6">
        <Link href="/admin">
          <Image src={assets.logo} width={150} />
        </Link>

        <div className="mt-6 space-y-3">
          <Link
            href="/admin"
            className=" rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 flex gap-2 items-center "
          >
            <Image src={assets.add_icon} width={20} /> <p>Add Blogs</p>
          </Link>
          <Link
            href="/blogList"
            className=" rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 flex gap-2 items-center "
          >
            <Image src={assets.blog_icon} width={20} /> <p>Blog List</p>
          </Link>
          <Link
            href="/subscription"
            className=" rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 flex gap-2 items-center "
          >
            <Image src={assets.email_icon} width={20} /> <p>Subscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
