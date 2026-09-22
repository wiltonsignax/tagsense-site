import { ArrowRight, CheckCircle2, CircleX, PackageCheck, RefreshCw, Route, ScanLine, ShieldCheck, TimerReset } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { type Locale } from '../content/site'
import { getCopy, pathFor } from '../lib/i18n'
import { SEO } from '../components/SEO'
import { ModuleGrid } from '../components/ModuleGrid'
import { Flow } from '../components/Flow'
import { Architecture } from '../components/Architecture'

export function HomePage({locale}:{locale:Locale}) {
  const c=getCopy(locale); const location=useLocation()
  const benefitIcons=[PackageCheck,TimerReset,Route,ShieldCheck,RefreshCw,ScanLine]
  return <>
    <SEO locale={locale} title={c.meta.title} description={c.meta.description} path={location.pathname}/>
    <section className="hero">
      <div className="hero-bg"><img src="/media/cover_detail_bg.png" alt="Centro de distribuição com portal RFID"/></div>
      <div className="container hero-copy">
        <div className="eyebrow">{c.hero.kicker}</div>
        <h1>{c.hero.title}</h1>
        <p>{c.hero.subtitle}</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to={pathFor(locale,'contact')}>{c.hero.primary}<ArrowRight size={18}/></Link>
          <Link className="btn btn-secondary" to={pathFor(locale,'platform')}>{c.hero.secondary}</Link>
        </div>
        <div className="hero-chips">{c.hero.chips.map((x:string)=><span className="chip" key={x}><i/>{x}</span>)}</div>
      </div>
    </section>

    <section className="thesis"><div className="container">
      <h2>{c.thesis.title}<br/><span className="accent">{c.thesis.highlight}</span></h2>
      <p>{c.thesis.body}</p>
    </div></section>

    <section className="section"><div className="container">
      <div className="section-head"><div><div className="eyebrow">{c.gaps.eyebrow}</div><h2>{c.gaps.title}</h2></div><p>{locale==='pt'?'A TagSense transforma pontos cegos em eventos verificáveis e rastreáveis.':locale==='en'?'TagSense turns blind spots into verifiable, traceable events.':'TagSense transforma puntos ciegos en eventos verificables y trazables.'}</p></div>
      <div className="gaps-stage">
        <img className="bg" src="/media/gaps_detail_bg.png" alt="Operação logística RFID"/>
        <div className="gaps-content">
          <div className="compare">
            <div className="compare-box"><h3><CircleX color="var(--red)"/>{locale==='pt'?'Sem TagSense':locale==='en'?'Without TagSense':'Sin TagSense'}</h3><ul className="compare-list">{c.gaps.problems.map((x:string)=><li key={x}><CircleX color="var(--red)"/>{x}</li>)}</ul></div>
            <div className="compare-box good"><h3><CheckCircle2 color="var(--blue-2)"/><span className="accent">{locale==='pt'?'Com TagSense':locale==='en'?'With TagSense':'Con TagSense'}</span></h3><ul className="compare-list">{c.gaps.solutions.map((x:string)=><li key={x}><CheckCircle2 color="var(--blue-2)"/>{x}</li>)}</ul></div>
          </div>
        </div>
      </div>
    </div></section>

    <section className="section alt"><div className="container">
      <div className="section-head"><div><div className="eyebrow">{c.platform.eyebrow}</div><h2>{c.platform.title}</h2></div><p>{c.platform.subtitle}</p></div>
      <ModuleGrid locale={locale}/>
    </div></section>

    <section className="section"><div className="container">
      <div className="section-head"><div><div className="eyebrow">{c.flow.eyebrow}</div><h2>{c.flow.title}</h2></div><p>{locale==='pt'?'Cada etapa produz evidência física que pode ser confrontada com o sistema.':locale==='en'?'Every stage creates physical evidence that can be reconciled with the system.':'Cada etapa produce evidencia física que puede compararse con el sistema.'}</p></div>
      <Flow locale={locale}/>
    </div></section>

    <section className="section alt"><div className="container">
      <div className="section-head"><div><div className="eyebrow">{c.architecture.eyebrow}</div><h2>{c.architecture.title}</h2></div><p>{c.architecture.subtitle}</p></div>
      <Architecture locale={locale}/>
    </div></section>

    <section className="section"><div className="container">
      <div className="section-head"><div><div className="eyebrow">{c.benefitSection.eyebrow}</div><h2>{c.benefitSection.title}</h2></div><p>{locale==='pt'?'O valor é medido na operação: erros evitados, tempo economizado, inventário mais confiável e rastreabilidade.':locale==='en'?'Value is measured in the operation: avoided errors, time saved, more reliable inventory and traceability.':'El valor se mide en la operación: errores evitados, tiempo ahorrado, inventario más confiable y trazabilidad.'}</p></div>
      <div className="grid grid-3">{c.benefitSection.cards.map((x:[string,string],i:number)=>{const I=benefitIcons[i];return <div className="card benefit-card" key={x[0]}><div className="icon-box"><I size={25}/></div><h3>{x[0]}</h3><p>{x[1]}</p></div>})}</div>
    </div></section>

    <section className="section alt"><div className="container">
      <div className="implementation-visual">
        <img src="/media/strategy_detail_bg.png" alt="Estratégia de implantação TagSense"/>
        <div className="implementation-copy"><div className="eyebrow">{c.implementation.eyebrow}</div><h2>{c.implementation.title}</h2><div className="phase-row">{c.implementation.phases.map((p:[string,string,string])=><div className="phase" key={p[0]}><b>{p[0]}</b><strong>{p[1]}</strong><span>{p[2]}</span></div>)}</div><div style={{marginTop:24}}><Link className="btn btn-secondary" to={pathFor(locale,'implementation')}>{locale==='pt'?'Ver estratégia de implantação':locale==='en'?'View deployment strategy':'Ver estrategia de implementación'}</Link></div></div>
      </div>
    </div></section>

    <section className="section"><div className="container"><div className="surface cta-panel"><div className="eyebrow" style={{justifyContent:'center'}}>{locale==='pt'?'PRÓXIMO PASSO':locale==='en'?'NEXT STEP':'PRÓXIMO PASO'}</div><h2>{locale==='pt'?'Veja o que realmente acontece na sua operação.':locale==='en'?'See what is really happening in your operation.':'Vea lo que realmente ocurre en su operación.'}</h2><p>{locale==='pt'?'Comece com uma POC controlada em uma doca e meça os resultados antes de expandir.':locale==='en'?'Start with a controlled single-dock POC and measure results before expanding.':'Empiece con una POC controlada en un muelle y mida los resultados antes de ampliar.'}</p><Link className="btn btn-primary" to={pathFor(locale,'contact')}>{c.nav.demo}<ArrowRight size={18}/></Link></div></div></section>
  </>
}
