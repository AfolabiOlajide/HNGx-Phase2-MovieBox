// local imports
import { formatImageLink } from "@/lib/exports";
import getMovie from "@/lib/getMovie"
import Image from "next/image";

type Params = {
    params: {
        id: string
    }
}

export default async function MovieDetails({ params: { id } }: Params){
    const movieData: Promise<MovieDetail> = getMovie(id);
    const movie = await movieData;
    const releaseDate = new Date(movie.release_date).toUTCString();

    return(
        <div className="movie-details pb-[6rem] pt-[2rem]">
            <Image src={formatImageLink(movie.backdrop_path)} className="w-full" alt={movie.title} width={300} height={300} priority unoptimized={true}/>
            <div className="title my-[1rem]">
                <h1 className="text-[1.3rem] md:text-[2rem]" data-testid="movie-title">Title: {movie.title}</h1>
            </div>
            <div className="overview">
                <p className="text-[.7rem] md:text-base" data-testid="movie-overview">{movie.overview}</p>
            </div>
            <div className="genres flex items-center gap-[1.2rem] mt-[1rem] text-[.7rem] md:text-base">
                Genre:
                {movie.genres.map(genre => (
                    <span key={genre.id} className="text-main">{genre.name}</span>
                ))}
            </div>
            <div className="others flex gap-[2rem] mt-[2rem]">
                <span className="text-[.7rem] md:text-base" data-testid="movie-release-date">Release Date: <span className="text-main">{releaseDate}</span></span>
                <span className="text-[.7rem] md:text-base" data-testid="movie-runtime">Time: <span className="text-main">{movie.runtime} minutes</span></span>
            </div>
        </div>
    )
}