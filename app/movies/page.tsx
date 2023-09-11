import { Metadata } from "next";
// import { useState } from "react";

// local imports
import getAllMovies from "@/lib/getAllMovies";
import MovieCard from "@/components/MovieCard";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Movies",
    description: "Top Rated Movies List"
}

export default async function MovieList(){
    // const [pageNumber, setPageNumber] = useState(1)
    const moviesData: Promise<MoviesResult> = getAllMovies(`1`);
    const movies = await moviesData;

    // const previousPage = ()=> {
    //     if(pageNumber > 1){
    //         setPageNumber(prev => prev-1)
    //     }
    // }

    // const nextPage = ()=> {
    //     if(pageNumber < movies.total_pages){
    //         setPageNumber(prev => prev+1)
    //     }
    // }

    const content = movies.results.map(movies => (
        <MovieCard key={movies.id} id={movies.id} title={movies.title} release_date={movies.release_date} poster={movies.poster_path} />
    ))

    return(
        <main className="w-[80%] m-auto">
            {/* <button onClick={previousPage}>previous</button>
            <button onClick={nextPage}>next</button> */}
            <h1 className="text-[2rem] mb-[2rem]">Movies</h1>
                <div className="featured-movies gap-x-[2rem] gap-y-[3rem] grid grid-cols-4">
                    { content }
                </div>
        </main>
    )
}