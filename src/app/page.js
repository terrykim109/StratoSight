import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SearchSection from '@/components/SearchSection';
import KnowledgeGraph from '@/components/KnowledgeGraph';
import Trends from '@/components/Trends';
import LearningHub from '@/components/LearningHub';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <SearchSection />
      <KnowledgeGraph />
      <Trends />
      <LearningHub />
      <About />
      <Footer />   
    </>
  );
}