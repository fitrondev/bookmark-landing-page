import Downloads from "./components/layouts/Downloads";
import Faq from "./components/layouts/Faq";
import Features from "./components/layouts/Features";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Hero from "./components/layouts/Hero";
import Join from "./components/layouts/Join";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Downloads />
      <Faq />
      <Join />
      <Footer />
    </>
  );
}
