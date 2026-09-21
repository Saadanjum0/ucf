import Header from './components/Header';
import Hero from './components/Hero';
import FunFacts from './components/FunFacts';
import Departments from './components/Departments';
import Offer from './components/Offer';
import Promise from './components/Promise';
import Technology from './components/Technology';
import Insurance from './components/Insurance';
import Location from './components/Location';
import Blog from './components/Blog';
import Reviews from './components/Reviews';
import { Gallery, PortalCta, Instagram } from './components/Extras';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FunFacts />
        <Departments />
        <Offer />
        <Promise />
        <Technology />
        <Insurance />
        <Location />
        <Blog />
        <Reviews />
        <Gallery />
        <PortalCta />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
