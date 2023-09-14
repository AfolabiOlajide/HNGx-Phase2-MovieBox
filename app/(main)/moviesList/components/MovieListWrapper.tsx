import getAllMovies from "@/lib/getAllMovies";
import MovieCard from "@/components/MovieCard";

const MovieListWrapper = async() => {
    const moviesData: Promise<MoviesResult> = getAllMovies(`1`);
    const movies = await moviesData;

    return (
        movies?.results?.map(movies => (
            <MovieCard key={movies?.id} id={movies?.id} title={movies?.title} release_date={movies?.release_date} poster={movies?.poster_path} />
        ))
    )
}

export default MovieListWrapper