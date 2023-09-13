"use client"; 
import Image from "next/image";
import { useEffect } from "react";

// 
import Blank from "@/assets/blank.svg"

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="w-80 mx-auto flex flex-col gap-[1rem] items-center justify-center mt-[5rem] pt-[3rem]">
            <Image src={Blank} className="w-full" width={30} alt="Broken Link" />
            <h2>Something went wrong!</h2>
            <button className="p-[1rem] rounded-lg text-white bg-main"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
}
