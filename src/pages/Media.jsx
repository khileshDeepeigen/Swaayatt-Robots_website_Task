import MediaHero from "../components/media/MediaHero.jsx";
import FeaturedStories from "../components/media/FeaturedStories";
import InTheMedia from "../components/media/InTheMedia";
import TwitterSpotlight from "../components/media/TwitterSpotlight";
import NewsArticles from "../components/media/NewsArticles";
import FeaturedOn from "../components/media/FeaturedOn";

export default function Media() {
  return (
    <main className="w-full">
      <MediaHero />
      <FeaturedStories />
      <InTheMedia />
      <TwitterSpotlight />
      <NewsArticles />
      <FeaturedOn />
    </main>
  );
}
