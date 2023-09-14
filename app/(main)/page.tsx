
// local imports
import getAllMovies from "@/lib/getAllMovies";
import FeaturedMovies from "@/components/FeaturedMovies";
import Hero from "@/components/Hero";


export default async function Home() {
  const allMoviesData: Promise<MoviesResult> = getAllMovies('1');
  const movies = await allMoviesData; 

  return (
    <main className="overflow-x-hidden">
      <Hero movies={movies.results}/>
      <FeaturedMovies />
    </main>
  )
}
