import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Screenshots />
      <DownloadSection />
      <Footer />
    </main>
  );
}
