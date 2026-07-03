import { ModalProvider } from "@/components/ModalProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Coast from "@/components/Coast";
import Routes from "@/components/Routes";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Modals from "@/components/Modals";

export default function Home() {
  return (
    <ModalProvider>
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Fleet />
      <Coast />
      <Routes />
      <Story />
      <Testimonials />
      <Instagram />
      <Contact />
      <Footer />
      <Modals />
    </ModalProvider>
  );
}
