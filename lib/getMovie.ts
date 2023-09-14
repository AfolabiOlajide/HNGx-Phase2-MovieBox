export default async function getMovie(movieId: string) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
    };

    try {
        const res = await fetch(url, options);
        return res.json();
    } catch (error) {
        console.log(error);
    }
}
