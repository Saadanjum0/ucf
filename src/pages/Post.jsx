import { POSTS } from '../wpData';
import { NotFound } from './WpPages';

const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" /></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>;
const FbShare = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>;
const XShare = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>;
const WaShare = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>;

const fmt = (d) => new Date(d + 'T12:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function Post({ path }) {
  const post = POSTS.find((p) => p.path === path);
  if (!post) return <NotFound />;
  const url = encodeURIComponent(`https://communityhealthandlifecenter.com${post.path}/`);
  const recent = POSTS.slice(0, 3);
  return (
    <>
      <section className={`post-hero${post.image ? ' has-image' : ''}`} style={post.image ? { backgroundImage: `url(${post.image})` } : undefined}>
        <div className="post-hero-overlay" />
        <div className="gv-container">
          <div className="gv-col" style={{ width: '100%' }}>
            <div className="gv-col-wrap center">
              <span className="post-hero-cats">
                {post.categories.map((c, i) => <span key={c.slug}>{i > 0 && ', '}<a href={`/category/${c.slug}/`}>{c.name}</a></span>)}
              </span>
              <h1>{post.title}</h1>
              <div className="post-hero-meta">
                <span className="meta-icon"><CalendarIcon /></span><span className="meta-text">{fmt(post.date)}</span>
                <span className="meta-icon"><UserIcon /></span><span className="meta-text author-name">{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="post-page">
        <div className="gv-container">
          <div className="gv-col post-main">
            <div className="gv-col-wrap">
              <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
              <div className="post-foot">
                <div className="post-tags">
                  <p>Tags :</p>
                  <span>{post.tags.map((t, i) => <span key={t.slug}>{i > 0 && ', '}<a href={`/tag/${t.slug}/`}>{t.name}</a></span>)}</span>
                </div>
                <div className="post-share">
                  <p>Share This :</p>
                  <a target="_blank" rel="noopener" href={`https://www.facebook.com/sharer.php?u=${url}`} aria-label="Share on Facebook"><FbShare /></a>
                  <a target="_blank" rel="noopener" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${url}`} aria-label="Share on Twitter"><XShare /></a>
                  <a target="_blank" rel="noopener" href={`//api.whatsapp.com/send?text=${encodeURIComponent(post.title)}${url}`} aria-label="Share on Whatsapp"><WaShare /></a>
                </div>
              </div>
              <div className="post-divider" />
            </div>
          </div>
          <div className="gv-col post-side">
            <div className="gv-col-wrap">
              <div className="post-side-sticky">
                <div className="recent-box">
                  <h3>Recent Posts</h3>
                  {recent.map((r) => (
                    <a href={r.path + '/'} key={r.slug} className="recent-item">
                      <span className="guten-postlist-title">{r.title}</span>
                      <div className="guten-meta-date"><ClockIcon />&nbsp;{fmt(r.date)}</div>
                    </a>
                  ))}
                </div>
                <div className="cat-box">
                  <h3>Categories</h3>
                  <div className="guten-taxonomy-list" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
