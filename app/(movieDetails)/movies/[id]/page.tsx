// local imports
import getMovie from "@/lib/getMovie"

type Params = {
    params: {
        id: string
    }
}

export default async function MovieDetails({ params: { id } }: Params){
    const movieData: Promise<MovieDetail> = getMovie(id);
    const movie = await movieData;

    return(
        <div className="movie-details">
            <h1 className="" data-testid="movie-title">{movie.title}</h1>
            <br />
            <p className="" data-testid="movie-overview">{movie.overview}</p>
            <br />
            <span className="" data-testid="movie-release-date">Release Date: {movie.release_date}</span>
            <br />
            <span className="" data-testid="movie-runtime">Time: {movie.runtime} minutes</span>
        </div>
    )
}