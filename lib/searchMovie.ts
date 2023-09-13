export default async function searchMovie(searchParam: string) {
    const url =
        `https://api.themoviedb.org/3/search/movie?query=${searchParam}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
            `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        },
    };

    const res = await fetch(url, options);

    return res.json();
}
