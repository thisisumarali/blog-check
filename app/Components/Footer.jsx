import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#08a88a] py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-6">
        {/* Footer Logo */}
        <Link href="/">
          <Image src={assets.logo_light} width={180} alt="Logo" />
        </Link>

        {/* Copyright Text */}
        <p className="text-sm text-white text-center flex items-center">
          All rights reserved. © 2024 Umar Khan
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Image src={assets.facebook_icon} alt="Facebook" width={40} />
          <Image src={assets.twitter_icon} alt="Twitter" width={40} />
          <Image src={assets.googleplus_icon} alt="Google+" width={40} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
