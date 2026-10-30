import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecentPosts from './components/RecentPosts';
import FeaturedWorks from './components/FeaturedWorks';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <RecentPosts />
      <FeaturedWorks />
      <Footer />
    </main>
  );
}