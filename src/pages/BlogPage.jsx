import { useState } from 'react';
import { PageHero } from '../components/inner/Common';
import { ArrowRightIcon } from '../components/Icons';
import { POSTS } from '../data';

function Post({ img, cat, title, href }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <article className="post blog-page-post">
      <div className="post-thumb">
        <a href={href} onClick={(e) => e.preventDefault()}>
          <img src={`/img/${img}`} alt="" className={loaded ? 'loaded' : ''} onLoad={() => setLoaded(true)} />
          <div className="overlay" />
        </a>
      </div>
      <div className="post-content">
        <div className="post-cat"><a href="#" onClick={(e) => e.preventDefault()}>{cat}</a></div>
        <h3 className="post-title"><a href={href} onClick={(e) => e.preventDefault()}>{title}</a></h3>
        <div className="post-meta">
          <a className="post-readmore" href={href} onClick={(e) => e.preventDefault()}>Read More<ArrowRightIcon /></a>
        </div>
      </div>
    </article>
  );
}

const Prev = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>;
const Next = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>;

export default function BlogPage() {
  return (
    <>
      <PageHero image="confident-female-doctor-therapist-sitting-at-desk.webp" tag="our Blog" sub="Insights that inspire" title="Stories of Care That Shape Our Journey" intro="Health tips, practice news, and insights from the team at Community Health & Life Center." />
      <section className="blog-page">
        <div className="gv-container">
          <div className="gv-col" style={{ width: '100%' }}>
            <div className="gv-col-wrap">
              <div className="blog-page-grid">
                {POSTS.map((p) => <Post key={p.title} {...p} />)}
              </div>
              <div className="pagination">
                <a className="btn-pagination prev disabled" href="#" onClick={(e) => e.preventDefault()} title="Prev"><Prev /> Prev</a>
                <a className="btn-pagination next" href="#" onClick={(e) => e.preventDefault()} title="Next">Next <Next /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
