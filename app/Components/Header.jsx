import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const [email, setEmail] = useState("");
  const onsubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Error");
    }
  };

  return (
    <header className="bg-white shadow-md z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/">
              <Image src={assets.logo} width={180} alt="Logo" />
            </Link>
          </div>

          {/* Navigation Section */}
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="">
              <div className="flex items-center gap-6 text-sm">
                <Link
                  className="text-[#08a88a]  hover:text-black text-4xl transition-all duration-200 ease-in-out"
                  href="https://github.com/thisisumarali"
                  target="_blanck"
                >
                  <FaGithub />
                </Link>
                <Link
                  className="border-2 border-black hidden md:block text-black py-2 px-6 sm:px-8 hover:bg-[#08a88a] hover:text-white transition-all duration-200 ease-in-out"
                  href="https://www.umarkhan.tech/"
                  target="_blanck"
                >
                  Portfolio
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Header Banner and Email Subscription */}
      <div className="bg-gray-100 py-4 sm:py-6 px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl text-center font-bold text-gray-800 py-2">
          LATEST BLOG
        </h1>
        <form
          className="flex justify-center max-w-lg mx-auto mt-6 border border-black rounded-lg "
          onSubmit={onsubmitHandler}
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 py-3 w-full outline-none text-gray-700"
          />
          <button
            type="submit"
            className="bg-[#08a88a] text-white py-3 px-6 hover:bg-gray-800 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
