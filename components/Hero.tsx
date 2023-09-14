'use client'
import { useState, useEffect } from "react";
import getAllMovies from "@/lib/getAllMovies";
import Image from "next/image";
import { formatImageLink } from "@/lib/exports";
import Link from "next/link";

const Hero = () => {
    const [ activeIndex, setActiveIndex ] = useState<number>(0);
    const [ moviesData, setMoviesData ] = useState<MoviesResult>();
    const heroMovies = moviesData?.results?.slice(0,5);

    useEffect(() => {
        async function getMoviesData(){
            const moviesDataResult: MoviesResult = await getAllMovies('1');
            setMoviesData(moviesDataResult);
        }
        getMoviesData();
    }, []);

    // useEffect(()=> {
    //     const interval = setInterval(() => {
    //         if(activeIndex < 5){
    //             setActiveIndex(prev => prev+1);
    //         }else{
    //             setActiveIndex(0);
    //         }
    //     }, 2000);

    //     return () => clearInterval(interval);
    // },[setActiveIndex]);


    return (
        <div className={` overflow-hidden -translate-x-[${activeIndex*20}%] transform-index flex w-[500vw]`}>
                {
                    heroMovies?.map(movie => (
                        <div className="movie relative w-screen h-max lg:h-screen overflow-hidden">
                            <div className="img w-full ">
                                <Image src={formatImageLink(movie.backdrop_path)} className="w-full" width={30} height={30} alt={movie.title} unoptimized/>
                            </div>
                            <div className="absolute details bg-black/50 top-0 bottom-0 right-0 left-0 h-full">
                                <div className="content absolute top-[20%] left-[10%] w-[30%]">
                                    <h1 className="text-[1rem] md:text-[3rem] lg:text-[5rem] text-white">{movie.title}</h1>
                                    <p className="text-[0.6rem] md:text-[1rem] text-white mb-[2rem]">{movie.overview}</p>
                                    {/*  */}
                                    <Link href={`/movies/${movie.id}`} className="">
                                        <button className="p-[.7rem] text-[0.7rem] md:text-base md:p-[1rem] text-white bg-main outline-none border-none rounded-lg">Movie Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}

export default Hero;


// colors: {
//     main: "#BE123C"
// },