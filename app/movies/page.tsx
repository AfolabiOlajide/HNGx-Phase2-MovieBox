"use client"
import { Metadata } from "next";
import { useState, useEffect } from "react";

// local imports
import getAllMovies from "@/lib/getAllMovies";
import MovieCard from "@/components/MovieCard";

export const metadata: Metadata = {
    title: "Movies",
    description: "Top Rated Movies List"
}

export default async function MovieList(){
    const [pageNumber, setPageNumber] = useState(1);
    const [movieData, setMovieData] = useState<MoviesResult>()

    // Movie request
    useEffect(() => {
        const fetchData = async () => {
            const movies = await getAllMovies(`${pageNumber}`);
            setMovieData(movies);
        }

        fetchData();
    
    }, [pageNumber]);

    // --------------------------------
    const previousPage = ()=> {
        if(pageNumber > 1){
            setPageNumber(prev => prev-1);
        }
    }

    // --------------------------------
    const nextPage = ()=> {
        if(pageNumber < movieData?.total_pages){
            setPageNumber(prev => prev+1);
        }
    }

    const content = movieData?.results.map(movies => (
        <MovieCard key={movies?.id} id={movies?.id} title={movies?.title} release_date={movies?.release_date} poster={movies?.poster_path} />
    ))

    return(
        <main className="w-[80%] m-auto">
            <h1 className="text-[1rem] md:text-[2rem] mb-[2rem]">Movies List</h1>
            <div className="featured-movies gap-x-[2rem] gap-y-[3rem] grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
                { content }
            </div>
            <div className="pagination flex gap-[3rem] mx-auto w-max mt-[2rem]">
            <button className="bg-main text-white rounded-md py-[.3rem] px-[1rem]" onClick={previousPage}>previous</button>
            <button className="bg-main text-white rounded-md py-[.3rem] px-[1rem]" onClick={nextPage}>next</button>
            </div>
        </main>
    )
}