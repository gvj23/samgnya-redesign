import Header from "../components/Header";
import Hero from "../components/Hero";
import QuickIntro from "../components/QuickIntro";
import MissionCards from "../components/MissionCards";
import InitiativesPreview from "../components/InitiativesPreview";
import PartnersStrip from "../components/PartnersStrip";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <QuickIntro />
            <MissionCards />
            <InitiativesPreview />
            <PartnersStrip />
            <Footer />
        </div>
    );
}
