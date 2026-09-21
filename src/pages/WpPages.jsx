import { PageBanner } from '../components/inner/Common';
import { WP_PAGES } from '../wpData';

/* Generic WordPress page: banner + the page's own block HTML, verbatim */
export function WpTemplatePage({ slug }) {
  const page = WP_PAGES[slug];
  if (!page) return <NotFound />;
  return (
    <>
      <PageBanner title={page.title} />
      <section className="wp-page">
        <main className="wp-prose black" dangerouslySetInnerHTML={{ __html: page.content }} />
      </section>
    </>
  );
}

export function NotFound() {
  return (
    <section className="nf-section">
      <div className="nf-overlay" />
      <div className="nf-box">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
        <a className="gv-btn btn-primary nf-btn" href="/"><span>Back To Home</span></a>
      </div>
    </section>
  );
}
