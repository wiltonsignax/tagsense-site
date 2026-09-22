import { useLocation } from 'react-router-dom'
import { type Locale } from '../content/site'
import { getCopy } from '../lib/i18n'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { ModuleGrid } from '../components/ModuleGrid'
import { Flow } from '../components/Flow'
import { Architecture } from '../components/Architecture'

export function PlatformPage({locale}:{locale:Locale}) {
  const c=getCopy(locale); const location=useLocation()
  const title=locale==='pt'?'Plataforma TagSense':locale==='en'?'TagSense Platform':'Plataforma TagSense'
  const subtitle=locale==='pt'?'Uma camada de inteligência RFID entre a operação física e os sistemas de gestão.':locale==='en'?'An RFID intelligence layer between physical operations and management systems.':'Una capa de inteligencia RFID entre la operación física y los sistemas de gestión.'
  return <>
    <SEO locale={locale} title={`${title} | TagSense`} description={subtitle} path={location.pathname}/>
    <PageHero eyebrow={c.platform.eyebrow} title={title} subtitle={subtitle} image="/media/platform_detail_bg.png"/>
    <section className="section"><div className="container"><div className="section-head"><div><h2>{c.platform.title}</h2></div><p>{c.platform.subtitle}</p></div><ModuleGrid locale={locale}/></div></section>
    <section className="section alt"><div className="container"><div className="section-head"><div><div className="eyebrow">{c.flow.eyebrow}</div><h2>{c.flow.title}</h2></div><p>{locale==='pt'?'O software acompanha os principais pontos de controle do centro de distribuição.':locale==='en'?'The platform follows the key control points across the distribution center.':'La plataforma acompaña los principales puntos de control del centro de distribución.'}</p></div><Flow locale={locale}/></div></section>
    <section className="section"><div className="container"><div className="section-head"><div><div className="eyebrow">{c.architecture.eyebrow}</div><h2>{c.architecture.title}</h2></div><p>{c.architecture.subtitle}</p></div><Architecture locale={locale}/></div></section>
  </>
}
