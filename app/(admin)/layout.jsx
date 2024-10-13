import { assets } from "@/Assets/assets";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Components/Sidebar";
export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-8 max-h-[60px] px-12 border-b border-gray-200">
            <h3 className="font-semibold ">Admin Panel</h3>
            <Image src={assets.profile_icon} width={40} alt="Admin logo" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
