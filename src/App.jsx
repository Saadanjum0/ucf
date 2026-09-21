import { useEffect } from 'react';
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
import { usePath } from './router';
import AreasOfCare from './pages/Departments';
import Services from './pages/Services';
import ServicesDetail from './pages/ServicesDetail';
import About from './pages/About';
import Faq from './pages/Faq';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';
import { PatientCenter, Doctors } from './pages/SimplePages';

function Home() {
  return (
    <>
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
    </>
  );
}

const ROUTES = {
  '/': { title: 'Community Health & Life Center – Family Medicine & Primary Care in Sugar Land, TX', Page: Home },
  '/departments': { title: 'Areas of Care – Community Health & Life Center', Page: AreasOfCare },
  '/patient-center': { title: 'Patient Center – Community Health & Life Center', Page: PatientCenter },
  '/services': { title: 'Services – Community Health & Life Center', Page: Services },
  '/services-detail': { title: 'Services Detail – Community Health & Life Center', Page: ServicesDetail },
  '/about-us': { title: 'About Us – Community Health & Life Center', Page: About },
  '/faq': { title: 'FAQ – Community Health & Life Center', Page: Faq },
  '/blog': { title: 'Blog – Community Health & Life Center', Page: BlogPage },
  '/contact-us': { title: 'Contact Us – Community Health & Life Center', Page: Contact },
  '/doctors-staff': { title: 'Doctors & Staff – Community Health & Life Center', Page: Doctors },
};

export default function App() {
  const path = usePath();
  const route = ROUTES[path] || ROUTES['/'];
  useReveal([path]);
  useEffect(() => { document.title = route.title; }, [route]);
  const { Page } = route;
  return (
    <>
      <Header path={path} />
      <main key={path} className={path === '/' ? '' : 'inner'}>
        <Page />
      </main>
      <Footer />
    </>
  );
}
