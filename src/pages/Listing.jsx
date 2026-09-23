import { useState } from 'react';
import { PageHero, PageBanner } from '../components/inner/Common';
import { ArrowRightIcon } from '../components/Icons';
import { POSTS, CATEGORIES, TAGS } from '../wpData';

const PER_PAGE = 3;

function PostCard({ post, teal = false, TitleTag = 'h3' }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <article className="post blog-page-post">
      <div className="post-thumb">
        <a href={post.path + '/'}>
          {post.image && <img src={post.image} alt="" className={loaded ? 'loaded' : ''} onLoad={() => setLoaded(true)} />}
          <div className={`overlay${teal ? ' teal' : ''}`} />
        </a>
      </div>
      <div className="post-content">
        <div className="post-cat">
          {post.categories.map((c, i) => <span key={c.slug}>{i > 0 && ', '}<a href={`/category/${c.slug}/`}>{c.name}</a></span>)}
        </div>
        <TitleTag className="post-title"><a href={post.path + '/'}>{post.title}</a></TitleTag>
        <div className="post-meta">
          <a className="post-readmore" href={post.path + '/'}>Read More<ArrowRightIcon /></a>
        </div>
      </div>
    </article>
  );
}

const Prev = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>;
const Next = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>;

function Pagination({ page, pages, base }) {
  const link = (n) => (n <= 1 ? base : `${base}page/${n}/`);
  return (
    <div className="pagination">
      <a className={`btn-pagination prev${page <= 1 ? ' disabled' : ''}`} href={page <= 1 ? '#' : link(page - 1)} onClick={(e) => { if (page <= 1) e.preventDefault(); }} title="Prev"><Prev /> Prev</a>
      <a className={`btn-pagination next${page >= pages ? ' disabled' : ''}`} href={page >= pages ? '#' : link(page + 1)} onClick={(e) => { if (page >= pages) e.preventDefault(); }} title="Next">Next <Next /></a>
    </div>
  );
}

/* /blog/ and /blog/page/N/ */
export function BlogListing({ page = 1 }) {
  const pages = Math.ceil(POSTS.length / PER_PAGE);
  const items = POSTS.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  return (
    <>
      <PageHero image="confident-female-doctor-therapist-sitting-at-desk.webp" tag="our Blog" sub="Insights that inspire" title="Stories of Care That Shape Our Journey" intro="Program updates, community news, and health tips from the team at United Community Foundation." />
      <section className="blog-page">
        <div className="gv-container">
          <div className="gv-col" style={{ width: '100%' }}>
            <div className="gv-col-wrap">
              <div className="blog-page-grid">{items.map((p) => <PostCard key={p.slug} post={p} />)}</div>
              <Pagination page={page} pages={pages} base="/blog/" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* /category/:slug/ and /tag/:slug/ (banner template, teal overlays) */
export function TermListing({ type, slug, page = 1 }) {
  const terms = type === 'category' ? CATEGORIES : TAGS;
  const term = terms.find((t) => t.slug === slug);
  const all = POSTS.filter((p) => (type === 'category' ? p.categories : p.tags).some((t) => t.slug === slug));
  const pages = Math.max(1, Math.ceil(all.length / PER_PAGE));
  const items = all.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const title = term ? term.name : slug;
  return (
    <>
      <PageBanner title={<a href={`/${type}/${slug}/`}>{title}</a>} noImage />
      <section className="term-page">
        <div className="gv-container">
          <div className="gv-col" style={{ width: '100%' }}>
            <div className="gv-col-wrap">
              <div className="blog-page-grid">{items.map((p) => <PostCard key={p.slug} post={p} teal TitleTag="h2" />)}</div>
              {pages > 1 && <Pagination page={page} pages={pages} base={`/${type}/${slug}/`} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
