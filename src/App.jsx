import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import InnerHeader from './components/InnerHeader';
import DonateCta from './components/DonateCta';
import ComingSoon from './components/ComingSoon';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Medical from './components/pages/Medical';
import Dental from './components/pages/Dental';
import Free from './components/pages/Free';
import Social from './components/pages/Social';
import Skeleton from './components/pages/Skeleton';
import Contact from './components/pages/Contact';
import { useScrollEffects } from './hooks/useScrollEffects';

const META = {
  home: ['Home', ''],
  about: ['About Us', 'A nonprofit committed to bridging the gap in access to essential health and educational resources for underserved communities.'],
  medical: ['Medical Services', 'Comprehensive preventive and primary medical care, delivered directly and through our partner network.'],
  dental: ['Dental Services', 'Preventive and primary dental care for families across our service area.'],
  free: ['Free Programs', 'State-funded public health programs for individuals and families who need them most. Eligibility required.'],
  social: ['Social Services', 'Resources, guidance and programs that promote health, safety and overall well-being.'],
  education: ['Educational Programs', 'Skill development and education initiatives for the communities we serve.'],
  history: ['History', 'How United Community Foundation began, and how it has grown.'],
  board: ['Board of Directors', 'The people who guide and govern the foundation.'],
  locations: ['Locations', 'Where to find us across Texas.'],
  privacy: ['Notice of Privacy', 'How we protect and handle your health information.'],
  contact: ['Contact Us', 'Call, email or send us a message and a care coordinator will follow up.'],
};

const PENDING_PAGES = new Set(['education', 'history', 'board', 'locations', 'privacy']);
const SERVICE_PAGES = new Set(['medical', 'dental', 'free', 'social', 'education']);
const ABOUT_PAGES = new Set(['about', 'history', 'board']);

function useWide() {
  const [wide, setWide] = useState(() => typeof window !== 'undefined' ? window.innerWidth >= 1080 : true);
  useEffect(() => {
    const onResize = () => setWide(window.innerWidth >= 1080);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return wide;
}

export default function App() {
  const [page, setPage] = useState('home');
  const wide = useWide();

  useScrollEffects(page);

  const go = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [title, lede] = META[page] || META.home;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#faf9f6', overflowX: 'hidden' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 90, background: 'transparent', pointerEvents: 'none' }}>
        <div id="ucfProgress" style={{ height: '100%', width: '0%', background: 'linear-gradient(90deg,#4a8d96,#2D5A61)', boxShadow: '0 0 12px rgba(45,90,97,.6)' }} />
      </div>

      {wide && <TopBar />}

      <Nav
        page={page}
        wide={wide}
        onNav={go}
        isAbout={ABOUT_PAGES.has(page)}
        isServices={SERVICE_PAGES.has(page)}
      />

      {page === 'home' && <Home onNav={go} />}

      {page !== 'home' && <InnerHeader title={title} lede={lede} onNav={go} />}

      {page === 'about' && <ComingSoon><About /></ComingSoon>}
      {page === 'medical' && <ComingSoon><Medical /></ComingSoon>}
      {page === 'dental' && <ComingSoon><Dental /></ComingSoon>}
      {page === 'free' && <ComingSoon><Free onNav={go} /></ComingSoon>}
      {page === 'social' && <ComingSoon><Social /></ComingSoon>}
      {PENDING_PAGES.has(page) && <ComingSoon><Skeleton /></ComingSoon>}
      {page === 'contact' && <Contact />}

      <DonateCta onNav={go} />

      <Footer onNav={go} />

      <BackToTop />
    </div>
  );
}
