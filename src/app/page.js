import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoDemo from '@/components/VideoDemo';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Download from '@/components/Download';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoDemo />
      <Features />
      <Pricing />
      <Download />
      <Contact />
      <Footer />
    </main>
  );
}
