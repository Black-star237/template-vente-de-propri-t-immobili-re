
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PropertyCategories from '@/components/PropertyCategories';
import FeaturedProperties from '@/components/FeaturedProperties';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <PropertyCategories />
        <FeaturedProperties />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
