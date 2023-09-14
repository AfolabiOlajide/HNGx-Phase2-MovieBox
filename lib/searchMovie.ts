export default async function searchMovie(searchParam: string) {
    const url =
        `https://api.themoviedb.org/3/search/movie?query=${searchParam}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
            `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWQ5NGVjOTMzOWNiYjA2Y2IxYmUxZGZkNGY4N2UwMyIsInN1YiI6IjY0ZmU2NTU5YzJmZjNkMDBlMTJmYzliYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Y_4FuxRbLwe1HqRUNyp6LRHZESpKPYDa9hF6ElT8AM`,
        },
    };

    const res = await fetch(url, options);

    return res.json();
}
