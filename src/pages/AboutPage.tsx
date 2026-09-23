import { useLocation } from 'react-router-dom'
import { Crosshair, Eye, ShieldCheck } from 'lucide-react'
import { type Locale } from '../content/site'
import { getCopy, pathFor } from '../lib/i18n'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { FeatureBanner } from '../components/FeatureBanner'

export function AboutPage({locale}:{locale:Locale}) {
  const c=getCopy(locale); const location=useLocation(); const p=c.pages.about
  const items=locale==='pt'?[
    ['Propósito','Tornar o fluxo físico tão confiável quanto o fluxo digital.'],
    ['Visão','Ser a camada de inteligência física entre a operação logística e os sistemas de gestão.'],
    ['Princípio','Tecnologia aplicada à operação real, com precisão, robustez e mensuração.']
  ]:locale==='en'?[
    ['Purpose','Make physical flow as trustworthy as digital flow.'],
    ['Vision','Become the physical-intelligence layer between logistics operations and management systems.'],
    ['Principle','Technology applied to real operations with precision, robustness and measurement.']
  ]:[
    ['Propósito','Hacer el flujo físico tan confiable como el flujo digital.'],
    ['Visión','Ser la capa de inteligencia física entre la operación logística y los sistemas de gestión.'],
    ['Principio','Tecnología aplicada a la operación real, con precisión, robustez y medición.']
  ]
  const icons=[Crosshair,Eye,ShieldCheck]
  return <>
    <SEO locale={locale} title={`${p.title} | TagSense`} description={p.subtitle} path={location.pathname}/>
    <PageHero eyebrow="TAGSENSE" title={p.title} subtitle={p.subtitle} image="/media/problem_detail_bg.png"/>
    <section className="section"><div className="container"><div className="grid grid-3">{items.map((x,i)=>{const I=icons[i];return <div className="card" key={x[0]}><div className="icon-box"><I/></div><div className="eyebrow">{x[0]}</div><h3 style={{fontSize:'1.6rem',marginTop:14}}>{x[1]}</h3></div>})}</div></div></section>
    <FeatureBanner
      eyebrow="WHY TAGSENSE"
      title={locale==='pt'?'O mundo físico não pode ser um detalhe do sistema.':locale==='en'?'The physical world cannot be a footnote in the system.':'El mundo físico no puede ser un detalle del sistema.'}
      body={locale==='pt'?'A TagSense nasce da ideia de que estoque, docas, cargas e movimentações precisam ter a mesma confiabilidade que os dados digitais.':locale==='en'?'TagSense starts from the idea that inventory, docks, loads and movements must be as trustworthy as digital data.':'TagSense nace de la idea de que inventario, muelles, cargas y movimientos deben ser tan confiables como los datos digitales.'}
      image="/media/problem_detail_bg.png"
      href={pathFor(locale,'contact')}
      cta={locale==='pt'?'Falar com a TagSense':locale==='en'?'Talk to TagSense':'Hablar con TagSense'}
      icon={Eye}
      meta={['RFID','Edge','Software','Operations']}
    />
  </>
}
