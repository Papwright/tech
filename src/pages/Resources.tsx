import Navigation from "@/components/Navigation";
import ResourcesSection from "@/components/Resources";
import Footer from "@/components/Footer";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
