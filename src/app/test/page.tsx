'use client'
import axiosInstance from "@/utils/http";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TestPage() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get("/auth");
                if (response.status === 200) {
                    const {id} = response.data;
                    setData(id);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally{
                setLoading(false); // Set loading to false when done
            }
        };

        fetchData();
    }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         {loading && <div>Loading...</div>}
        {data && data}
    </div>
  );
}
