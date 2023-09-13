export default async function getMovie(movieId: string) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        },
    };
    const res = await fetch(url, options);

    if (!res.ok) throw new Error("Failed to fetch movie data");

    return res.json();
}
