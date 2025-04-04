import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";
import Faqs from "@/sections/Faqs";
import Footer from "@/sections/Footer";
export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Features />
            <Integrations />
            <Faqs />
            <Footer />
        </>
    )
}
