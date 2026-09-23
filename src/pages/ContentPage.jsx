import { PageHero, IconList, GreyAccordion, ServiceCard } from '../components/inner/Common';
import { Subhead } from '../components/Departments';
import { PortalCta } from '../components/Extras';
import { SITE } from '../data';
import { CONTENT_PAGES } from '../contentPages';

/* Rich inner page: photo hero, intro block with optional bullet list,
   icon-card grid, optional accordion, closing CTA band. Mirrors the
   structure used by /services and /departments. */
export default function ContentPage({ slug }) {
  const page = CONTENT_PAGES[slug];
  if (!page) return null;
  const { hero, intro, cards, list, accordion, closing } = page;

  return (
    <>
      <PageHero
        image={hero.image}
        tag={hero.tag}
        sub={hero.sub}
        title={hero.title}
        intro={hero.intro}
        titleWidth={hero.titleWidth || 670}
      />

      <section className="cp-intro">
        <div className="gv-container">
          <div className="gv-col cp-intro-left">
            <div className="gv-col-wrap">
              <Subhead tag={intro.tag} sub={intro.sub} center={false} onWhite />
              <h2 className="gv-h2 left cp-h2">{intro.heading}</h2>
            </div>
          </div>
          <div className="gv-col cp-intro-right">
            <div className="gv-col-wrap">
              {intro.body.map((p) => <p className="gv-p cp-p" key={p}>{p}</p>)}
              {list && <IconList items={list} className="cp-list" />}
            </div>
          </div>
        </div>
      </section>

      {cards && cards.length > 0 && (
        <section className="cp-cards">
          <div className="gv-container">
            <div className="gv-col" style={{ width: '100%' }}>
              <div className="gv-col-wrap center">
                <Subhead tag={cards.length > 4 ? 'What We Offer' : 'Highlights'} sub={intro.sub} />
                <h2 className="gv-h2 center cp-cards-h2">{page.cardsHeading}</h2>
                <div className="cp-card-grid">
                  {cards.map((c, i) => (
                    <ServiceCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} delay={`${0.05 * i}s`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {accordion && accordion.length > 0 && (
        <section className="cp-faq">
          <div className="gv-container">
            <div className="gv-col" style={{ width: '100%' }}>
              <div className="gv-col-wrap center">
                <Subhead tag="Details" sub="Good to Know" onWhite />
                <h2 className="gv-h2 center cp-faq-h2">{page.accordionHeading}</h2>
                <div className="cp-faq-acc gv-anim" data-anim="fadeInDown">
                  <GreyAccordion items={accordion} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {closing && (
        <section className="cp-closing">
          <div className="gv-container">
            <div className="gv-col" style={{ width: '100%' }}>
              <div className="gv-col-wrap center">
                <h2 className="gv-h2 center cp-closing-h2">{closing.heading}</h2>
                <p className="gv-p cp-closing-p">{closing.body}</p>
                <div className="cp-closing-btns">
                  <a className="gv-btn btn-primary" href="/contact-us/"><span>{closing.cta || 'Request Services'}</span></a>
                  <a className="gv-btn btn-outline" href={SITE.phoneHref}><span>Call {SITE.phone}</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <PortalCta />
    </>
  );
}
