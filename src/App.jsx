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
import Contact from './pages/Contact';
import { PatientCenter, Doctors } from './pages/SimplePages';
import { BlogListing, TermListing } from './pages/Listing';
import Post from './pages/Post';
import { WpTemplatePage, NotFound } from './pages/WpPages';
import { POSTS, WP_PAGES, CATEGORIES, TAGS } from './wpData';

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

const SITE_SUFFIX = ' – Community Health & Life Center';
const STATIC = {
  '/': { title: 'Community Health & Life Center – Family Medicine & Primary Care in Sugar Land, TX', el: <Home /> },
  '/departments': { title: 'Areas of Care' + SITE_SUFFIX, el: <AreasOfCare /> },
  '/patient-center': { title: 'Patient Center' + SITE_SUFFIX, el: <PatientCenter /> },
  '/services': { title: 'Services' + SITE_SUFFIX, el: <Services /> },
  '/services-detail': { title: 'Services Detail' + SITE_SUFFIX, el: <ServicesDetail /> },
  '/about-us': { title: 'About Us' + SITE_SUFFIX, el: <About /> },
  '/faq': { title: 'FAQ' + SITE_SUFFIX, el: <Faq /> },
  '/contact-us': { title: 'Contact Us' + SITE_SUFFIX, el: <Contact /> },
  '/doctors-staff': { title: 'Doctors & Staff' + SITE_SUFFIX, el: <Doctors /> },
};

function resolve(path) {
  if (STATIC[path]) return STATIC[path];
  let m;
  if (path === '/blog') return { title: 'Blog' + SITE_SUFFIX, el: <BlogListing page={1} /> };
  if ((m = path.match(/^\/blog\/page\/(\d+)$/))) return { title: `Blog – Page ${m[1]}` + SITE_SUFFIX, el: <BlogListing page={+m[1]} /> };
  if ((m = path.match(/^\/(category|tag)\/([^/]+)(?:\/page\/(\d+))?$/))) {
    const term = (m[1] === 'category' ? CATEGORIES : TAGS).find((t) => t.slug === m[2]);
    return { title: (term ? term.name : m[2]) + SITE_SUFFIX, el: <TermListing type={m[1]} slug={m[2]} page={m[3] ? +m[3] : 1} /> };
  }
  if ((m = path.match(/^\/\d{4}\/\d{2}\/\d{2}\/[^/]+$/))) {
    const post = POSTS.find((p) => p.path === path);
    return { title: (post ? post.title : 'Page not found') + SITE_SUFFIX, el: <Post path={path} /> };
  }
  const slug = path.replace(/^\//, '');
  if (WP_PAGES[slug]) return { title: WP_PAGES[slug].title + SITE_SUFFIX, el: <WpTemplatePage slug={slug} /> };
  return { title: 'Page not found' + SITE_SUFFIX, el: <NotFound />, notFound: true };
}

export default function App() {
  const path = usePath();
  const route = resolve(path);
  useReveal([path]);
  useEffect(() => { document.title = route.title; }, [route.title]);
  return (
    <>
      <Header path={path} />
      <main key={path} className={path === '/' ? '' : 'inner'}>
        {route.el}
      </main>
      <Footer />
    </>
  );
}
