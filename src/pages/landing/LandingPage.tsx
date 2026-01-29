import TopBar from "../../components/landing/TopBar";
import Navbar from "../../components/landing/NavBar";
import Hero from "../../components/landing/Hero";
import FeaturesBar from "../../components/landing/FeaturesBar";
import AboutSection from "../../components/landing/AboutSection";
import ServicesSection from "../../components/landing/ServicesSection";
import ObjectivesSection from "../../components/landing/ObjetivesSection";
import ProjectsSection from "../../components/landing/ProjectsSection";
import TrajectorySection from "../../components/landing/TrajectorySection";
import ClientsSection from "../../components/landing/ClientsSection";
import BusinessPlanSection from "../../components/landing/BussinesPlanSection";
import Footer from "../../components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <TopBar />
      <Navbar/>

      <Hero />
      <FeaturesBar />
      <AboutSection />
      <ServicesSection />
      <ObjectivesSection />
      <ProjectsSection />
      <TrajectorySection />
      <ClientsSection />
      <BusinessPlanSection />
      <Footer />
    </>
  );
}
