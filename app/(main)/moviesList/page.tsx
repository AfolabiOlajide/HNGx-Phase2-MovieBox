
// local imports
import MovieListWrapper from "./components/MovieListWrapper";

export default async function MovieList(){


    return(
        <main className="w-[95%] md:w-[80%] m-auto pt-[2rem] md:pt-[7rem]">
            <h1 className="text-[1rem] md:text-[2rem] mb-[2rem]">Movies List</h1>
            <div className="featured-movies gap-x-[2rem] gap-y-[3rem] grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
                <MovieListWrapper/>
            </div>
        </main>
    )
}