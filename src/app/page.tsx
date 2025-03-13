"use client";
import Image from "next/image";
import { useAuth } from "@/context/Authcontext";
import Link from "next/link";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
      

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/login" className="">
            <button className="text-white bg-black hover:bg-neutral-900 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer ">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="text-white bg-black hover:bg-neutral-900 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer ">
              Register
            </button>
          </Link>
          <Link href="/user">
            <button className="text-white bg-black hover:bg-neutral-900 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer ">
              Profile
            </button>
          </Link>
        </div>
      </main>
     
    </div>
  );
}
