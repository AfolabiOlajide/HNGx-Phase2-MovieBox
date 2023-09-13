import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

// local Imports
import getTopRatedMovies from "@/lib/getTopRatedMovies";
import MovieCard from "./MovieCard";

const FeaturedMovies = async () => {
    const moviesData: Promise<MoviesResult> = getTopRatedMovies();
    const movies = await moviesData;

    const featuredMovies = movies.results.slice(0,10);
    const content = featuredMovies.map(movies => (
        <MovieCard key={movies.id} id={movies.id} title={movies.title} release_date={movies.release_date} poster={movies.poster_path} />
    ))

    return (
        <div className="w-[95%] md:w-[80%] m-auto pt-[5rem]">
            <header className="flex justify-between mb-10">
                <h2 className="md:text-[2rem] text-[1rem]">Top 10 Rated</h2>
                <Link href={`/moviesList`} className="text-main flex items-center gap-[1rem]">
                    <span>See more</span>
                    <MdOutlineKeyboardArrowRight />
                </Link>
            </header>
            <div className="featured-movies gap-x-[2rem] gap-y-[3rem] grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
                { content }
            </div>
        </div>
    )
}

export default FeaturedMovies