import Image from "next/image";
import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";

type MovieCardProp = {
    id: number,
    poster: string,
    title: string,
    release_date: string
}

const MovieCard = (props: MovieCardProp) => {
    return (
        <div className="relative">
            <Link href={`/movies/${props.id}`} >
                <div data-testid="movie-card" className="">
                    <div className="img w-full">
                        <Image src={`https://image.tmdb.org/t/p/original/${props.poster}`} className="w-max" width={200} height={300} alt={props.title} data-testid="movie-poster"/>
                    </div>
                    <div className="details mt-[1rem]">
                        <p className="movie-title mb-[1rem] font-bold md:text-base text-[.8rem]" datat-testid="movie-title">{props.title}</p>

                        <span className="realease-date text-gray-500 md:text-base text-[.8rem]" data-testid="movie-release-date">Realease Date: {props.release_date}</span>
                    </div>
                </div>
            </Link>
            {/* whitelist */}
            <div className="absolute right-[10%] top-[5%] whitelist bg-gray-300/50 p-[.5rem] rounded-[50%] cursor-pointer">
                <BsHeartFill className="text-white text-[1rem]" />
            </div>
        </div>
    )
}

export default MovieCard