import { ArrowRight, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export function FeatureBanner({
  eyebrow,
  title,
  body,
  image,
  href,
  cta,
  icon: Icon,
  reverse=false,
  meta=[]
}:{
  eyebrow:string
  title:string
  body:string
  image:string
  href:string
  cta:string
  icon:LucideIcon
  reverse?:boolean
  meta?:string[]
}) {
  return <section className={`feature-banner ${reverse?'reverse':''}`}>
    <div className="feature-banner-media"><img src={image} alt="" aria-hidden="true"/></div>
    <div className="feature-banner-shade"/>
    <div className="container feature-banner-grid">
      <div className="feature-banner-copy">
        <div className="feature-banner-icon"><Icon size={26}/></div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        <p>{body}</p>
        {meta.length>0 && <div className="feature-banner-meta">{meta.map(x=><span key={x}>{x}</span>)}</div>}
        <Link className="feature-banner-link" to={href}>{cta}<ArrowRight size={18}/></Link>
      </div>
      <div className="feature-banner-ghost" aria-hidden="true">{eyebrow.replace('TAGSENSE ','')}</div>
    </div>
  </section>
}
