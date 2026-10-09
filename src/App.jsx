import Navbar from "./Components/Navbar";
import Logos from "./Components/Projects/Logos";
import StationaryDesign from "./Components/Projects/StationaryDesign";
import RecentWork from "./Components/RecentWork";
import WorkProcess from "./Components/WorkProcess";
import Websites from "./Components/Projects/Websites"
import UIUX from "./Components/Projects/UIUX";
import SocialMedia from "./Components/Projects/SocialMedia";
import Packaging from "./Components/Projects/Packaging";
import Brouchers from "./Components/Projects/Brouchers";
import Labels from "./Components/Projects/Labels";
import Features from "./Components/Features";
import FAQ from "./Components/FAQ";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/Scroll-To-Top";
import Hero from "./Components/Hero/Hero";


function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero/>
        <RecentWork/>
        <WorkProcess/>
        <Logos/>
        <StationaryDesign/>
        <Websites/>
        <UIUX/>
        <SocialMedia/>
        <Packaging/>
        <Brouchers/>  
        <Labels/>
        <Features/>
        <FAQ/>
        <ContactUs/>
      </main>
      <Footer/>
      <ScrollToTop/>
    
    
    </>
  );
}

export default App;