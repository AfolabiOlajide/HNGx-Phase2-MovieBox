"use client"
import Image from "next/image";
import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";
import { useState } from "react";
import { toast } from 'react-toastify';

// local import
import { formatImageLink } from "@/lib/exports";

type MovieCardProp = {
    id: number,
    poster: string,
    title: string,
    release_date: string
}

const MovieCard = (props: MovieCardProp) => {
    const [ clickedState, setClickedState ] = useState<boolean>(false);
    const releaseDate = new Date(props?.release_date).toUTCString();

    const handleClickedState = ()=> {
        if(clickedState){
            toast('❗ Removed from whitelist', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }else{
            toast('❤️ Added to whitelist', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        
        setClickedState(prev => !prev);
    }

    return (
        <div className="relative">
            <Link href={`/movies/${props.id}`} >
                <div data-testid="movie-card" className="">
                    <div className="img w-full">
                        <Image src={formatImageLink(props.poster)} className="w-max" width={200} height={300} alt={props.title} data-testid="movie-poster"/>
                    </div>
                    <div className="details mt-[1rem]">
                        <p className="movie-title mb-[1rem] font-bold md:text-base text-[.7rem]" data-testid="movie-title">{props.title}</p>
                        <p>
                            Realease Date: 
                            <span className="realease-date text-gray-500 md:text-base text-[.7rem]" data-testid="movie-release-date">{releaseDate}</span>
                        </p>
                    </div>
                </div>
            </Link>
            {/* whitelist */}
            <div className={`absolute right-[10%] top-[5%] whitelist ${clickedState ? "bg-red-300/50" : "bg-gray-300/50"} p-[.5rem] rounded-[50%] cursor-pointer`} onClick={handleClickedState}>
                <BsHeartFill className={`${clickedState ? "text-red-500" : "text-white"} text-[1rem]`} />
            </div>
        </div>
    )
}

export default MovieCard