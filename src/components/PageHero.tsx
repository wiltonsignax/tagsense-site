export function PageHero({ eyebrow, title, subtitle, image='/media/platform_detail_bg.png' }:{eyebrow:string;title:string;subtitle:string;image?:string}) {
  return (
    <section className="page-hero">
      <div className="visual"><img src={image} alt="" aria-hidden="true" /></div>
      <div className="container page-hero-layout">
        <div className="page-hero-copy">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <aside className="page-hero-rail" aria-hidden="true">
          <span>TAGSENSE</span>
          <strong>PHYSICAL<br/>INTELLIGENCE</strong>
          <i/>
        </aside>
      </div>
      <div className="page-hero-scanline" aria-hidden="true"/>
    </section>
  )
}
