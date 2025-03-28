"use client";
import Image from "next/image";
import { useAuth } from "@/context/auth-context";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import BlogAll from "@/components/blog/blog-all";

export default function Home() {

  return (

    <main className="max-w-7xl m-auto">
      <div className="flex flex-col  w-full  gap-4 pt-9">
          <div>
            <h1 className="text-2xl font-bold tracking-tight ">All Blogs</h1>
          </div>
          <BlogAll/>
      </div>

      
     




    </main>

  );
}
