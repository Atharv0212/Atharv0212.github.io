import LeadershipArticles from './components/articles/LeadershipArticles';
import Experience from './components/experience/Experience';
import Hero from './components/hero/Hero';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import SideDecorations from './components/layout/SideDecorations';
import DeveloperMetrics from './components/metrics/DeveloperMetrics';
import FeaturedWorks from './components/projects/FeaturedWorks';
import Skills from './components/skills/Skills';

export default function App() {
  return (
    <>
      <SideDecorations />
      <div className="max-w-[1440px] mx-auto px-8 lg:px-14 py-6 relative">
        <Header />
        <main>
          <Hero />
          <DeveloperMetrics />
          <Skills />
          <FeaturedWorks />
          <Experience />
          <LeadershipArticles />
        </main>
        <Footer />
      </div>
    </>
  );
}
