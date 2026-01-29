import TeamDirectory from "../../components/team/TeamDirectory";
import Navbar from "../../components/landing/NavBar";
import Footer from "../../components/landing/Footer";
import TopBar from "../../components/landing/TopBar";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <TeamDirectory />
      <Footer/>
    </div>
  );
}
