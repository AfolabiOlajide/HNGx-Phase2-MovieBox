export default async function getMovie(movieId: string) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWQ5NGVjOTMzOWNiYjA2Y2IxYmUxZGZkNGY4N2UwMyIsInN1YiI6IjY0ZmU2NTU5YzJmZjNkMDBlMTJmYzliYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Y_4FuxRbLwe1HqRUNyp6LRHZESpKPYDa9hF6ElT8AM",
        },
    };
    const res = await fetch(url, options);

    if (!res.ok) throw new Error("Failed to fetch movie data");

    return res.json();
}
