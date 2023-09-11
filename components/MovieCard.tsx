import Image from "next/image";
import Link from "next/link";

type MovieCardProp = {
    id: number,
    poster: string,
    title: string,
    release_date: string
}

const MovieCard = (props: MovieCardProp) => {
    return (
        <Link href={`/movies/${props.id}`} >
            <div data-testid="movie-card" className="">
                <div className="img w-full">
                    <Image src={`https://image.tmdb.org/t/p/original/${props.poster}`} className="w-max object-cover " width={200} height={300} alt={props.title} data-testid="movie-poster"/>
                </div>
                <div className="details mt-[1rem]">
                    <p className="movie-title mb-[1rem] font-bold" datat-testid="movie-title">{props.title}</p>
                    <span className="realease-date text-gray-500" data-testid="movie-release-date">Realease Date: {props.release_date}</span>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard