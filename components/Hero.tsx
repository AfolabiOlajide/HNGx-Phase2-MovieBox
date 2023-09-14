'use client'
import { useState, useEffect } from "react";
import getAllMovies from "@/lib/getAllMovies";
import Image from "next/image";
import { formatImageLink } from "@/lib/exports";
import Link from "next/link";

const Hero = () => {
    const [ activeIndex, setActiveIndex ] = useState<number>(0);
    const [ start, setStart ] = useState<boolean>(true);
    const [ moviesData, setMoviesData ] = useState<MoviesResult>();
    const heroMovies = moviesData?.results?.slice(0,5);

    useEffect(() => {
        async function getMoviesData(){
            const moviesDataResult: MoviesResult = await getAllMovies('1');
            setMoviesData(moviesDataResult);
        }
        getMoviesData();
    }, []);

    useEffect(()=> {
        const interval = setInterval(() => {
            if(activeIndex === 4){
                setStart(false);
                setActiveIndex(activeIndex-1);
            }else if(activeIndex === 0){
                setStart(true);
                setActiveIndex(activeIndex+1);
            }

            if(start === true && activeIndex < 4){
                setActiveIndex(activeIndex+1);
            }else if(start === false && activeIndex > 0){
                setActiveIndex(activeIndex-1)
            }
        }, 5000);

        return () => clearInterval(interval);
    },[setActiveIndex, activeIndex]);

    const transLate = activeIndex === 0 ? "trans-0" :
                        activeIndex === 1 ? "trans-1" :
                        activeIndex === 2 ? "trans-2" :
                        activeIndex === 3 ? "trans-3" :
                        activeIndex === 4 ? "trans-4" : null;


    return (
        <div className={`${transLate} transform-index flex w-[500vw]`}>
                {
                    heroMovies?.map(movie => (
                        <div key={movie.id} className="movie relative w-screen h-max lg:h-screen overflow-hidden">
                            <div className="img w-full ">
                                <Image src={formatImageLink(movie.backdrop_path)} className="w-full" width={30} height={30} alt={movie.title} unoptimized/>
                            </div>
                            <div className="absolute details bg-black/50 top-0 bottom-0 right-0 left-0 h-full">
                                <div className="content absolute top-[10%] md:top-[20%] left-[10%] w-[50%] lg:w-[30%]">
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