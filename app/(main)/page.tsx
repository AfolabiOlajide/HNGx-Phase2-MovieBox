import FeaturedMovies from "@/components/FeaturedMovies";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <FeaturedMovies />
    </main>
  )
}
