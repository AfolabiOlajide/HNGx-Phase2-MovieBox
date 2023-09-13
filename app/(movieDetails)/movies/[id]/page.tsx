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

    return(
        <div className="movie-details pb-[6rem] pt-[2rem]">
            <Image src={formatImageLink(movie.backdrop_path)} className="w-full" alt={movie.title} width={300} height={300} priority unoptimized={true}/>
            <div className="title my-[1rem]">
                <h1 className="text-[2rem]" data-testid="movie-title">Title: {movie.title}</h1>
            </div>
            <div className="overview">
                <p className="" data-testid="movie-overview">{movie.overview}</p>
            </div>
            <div className="genres flex gap-[1.2rem] mt-[1rem]">
                Genre:
                {movie.genres.map(genre => (
                    <span key={genre.id} className="text-main">{genre.name}</span>
                ))}
            </div>
            <div className="others flex gap-[2rem] mt-[2rem]">
                <span className="" data-testid="movie-release-date">Release Date: <span className="text-main">{movie.release_date}</span></span>
                <span className="" data-testid="movie-runtime">Time: <span className="text-main">{movie.runtime} minutes</span></span>
            </div>
        </div>
    )
}