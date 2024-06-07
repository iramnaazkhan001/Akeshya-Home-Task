import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import CoreFeatures from "./Components/CoreFeatures";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import HomePage from "./Components/HomePage";
import Logos from "./Components/LogoPage";
import Process from "./Components/Process";
import Services from "./Components/Services";

export default function Home() {
  return (
    <div>
      <HomePage />
      <HeroSection />
      <Logos />
      <About/>
      <Services/>
      <Process/>
      <CoreFeatures/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
