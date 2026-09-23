import { useLocation, Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Boxes, Layers3, Network, Radar, TrendingUp } from 'lucide-react'
import { type Locale } from '../content/site'
import { getCopy, pathFor } from '../lib/i18n'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'\nimport { FeatureBanner } from '../components/FeatureBanner'

export function InvestorsPage({locale}:{locale:Locale}) {
  const c=getCopy(locale); const location=useLocation(); const p=c.pages.investors
  const icons=[Radar,Layers3,BarChart3,TrendingUp,Boxes,Network]
  return <>
    <SEO locale={locale} title={`${p.title} | TagSense`} description={p.subtitle} path={location.pathname}/>
    <PageHero eyebrow={c.nav.investors.toUpperCase()} title={p.title} subtitle={p.subtitle} image="/media/platform_detail_bg.png"/>
    <section className="section"><div className="container"><div className="grid grid-3">{c.investors.cards.map((x:[string,string],i:number)=>{const I=icons[i];return <div className="card investor-card" key={x[0]}><div className="icon-box"><I/></div><h3>{x[0]}</h3><p>{x[1]}</p></div>})}</div></div></section>
    <section className="section alt"><div className="container"><div className="section-head"><div><div className="eyebrow">LAND & EXPAND</div><h2>Dock → Tunnel → Receive → Inventory → Drone</h2></div><p>{locale==='pt'?'A estratégia de entrada reduz o risco inicial do cliente e amplia a receita por operação conforme a plataforma prova valor.':locale==='en'?'The entry strategy reduces initial customer risk and expands revenue per operation as the platform proves value.':'La estrategia de entrada reduce el riesgo inicial del cliente y amplía los ingresos por operación a medida que la plataforma demuestra valor.'}</p></div></div></section>
    <section className="section"><div className="container"><div className="surface cta-panel"><h2>{locale==='pt'?'Converse com a TagSense sobre a tese de investimento.':locale==='en'?'Talk to TagSense about the investment thesis.':'Hable con TagSense sobre la tesis de inversión.'}</h2><p>{locale==='pt'?'A área pública apresenta visão, modelo e estratégia sem expor valuation, cap table ou métricas ainda não validadas.':locale==='en'?'The public area presents vision, model and strategy without exposing valuation, cap table or unvalidated metrics.':'El área pública presenta visión, modelo y estrategia sin exponer valoración, cap table o métricas no validadas.'}</p><Link className="btn btn-primary" to={`${pathFor(locale,'contact')}?type=investor`}>{locale==='pt'?'Fale com a TagSense':locale==='en'?'Contact TagSense':'Habla con TagSense'}<ArrowRight size={18}/></Link></div></div></section>
  </>
}
