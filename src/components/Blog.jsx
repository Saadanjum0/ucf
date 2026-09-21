import { useState } from 'react';
import { POSTS } from '../data';
import { Subhead } from './Departments';
import { ArrowRightIcon } from './Icons';

function Post({ img, cat, title, href }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <article className="post">
      <div className="post-thumb">
        <a href={href}>
          <img src={`/img/${img}`} alt="" className={loaded ? 'loaded' : ''} onLoad={() => setLoaded(true)} />
          <div className="overlay" />
        </a>
      </div>
      <div className="post-content">
        <div className="post-cat"><a href={`/category/${cat.toLowerCase()}/`}>{cat}</a></div>
        <h3 className="post-title"><a href={href}>{title}</a></h3>
        <div className="post-meta">
          <a className="post-readmore" href={href}>Read More<ArrowRightIcon /><span className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>about {title}</span></a>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <section className="blog">
      <div className="gv-container">
        <div className="blog-row">
          <div className="gv-col blog-head-col">
            <div className="gv-col-wrap">
              <Subhead tag="Our Blog" sub="Insights that Inspire" center={false} onWhite />
              <h2 className="gv-h2 left">From Our Blog</h2>
              <p className="gv-p intro">Health tips, clinic news, and insights for our community.</p>
            </div>
          </div>
          <div className="gv-col blog-grid-col">
            <div className="gv-col-wrap">
              <div className="blog-grid">
                {POSTS.map((p) => <Post key={p.title} {...p} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
