'use client'
import Image from "next/image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Bloglist from "./Components/Bloglist";

export default function Home() {
  return (
    <div>
      <Header />
      <Bloglist />
      <Footer />
    </div>
  );
}
