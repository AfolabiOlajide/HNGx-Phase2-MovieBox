export default async function getAllMovies(page: string) {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
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
