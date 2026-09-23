import { Layers3, RadioTower, Waypoints } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { type Locale } from '../content/site'
import { getCopy, modulePath } from '../lib/i18n'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { ModuleGrid } from '../components/ModuleGrid'
import { Flow } from '../components/Flow'
import { Architecture } from '../components/Architecture'
import { FeatureBanner } from '../components/FeatureBanner'

export function PlatformPage({locale}:{locale:Locale}) {
  const c=getCopy(locale); const location=useLocation()
  const title=locale==='pt'?'Plataforma TagSense':locale==='en'?'TagSense Platform':'Plataforma TagSense'
  const subtitle=locale==='pt'?'Uma camada de inteligência RFID entre a operação física e os sistemas de gestão.':locale==='en'?'An RFID intelligence layer between physical operations and management systems.':'Una capa de inteligencia RFID entre la operación física y los sistemas de gestión.'
  return <>
    <SEO locale={locale} title={`${title} | TagSense`} description={subtitle} path={location.pathname}/>
    <PageHero eyebrow={c.platform.eyebrow} title={title} subtitle={subtitle} image="/media/platform_detail_bg.png"/>

    <section className="section platform-opening"><div className="container">
      <div className="section-head"><div><div className="eyebrow">{locale==='pt'?'UM NÚCLEO. OITO MÓDULOS.':locale==='en'?'ONE CORE. EIGHT MODULES.':'UN NÚCLEO. OCHO MÓDULOS.'}</div><h2>{c.platform.title}</h2></div><p>{c.platform.subtitle}</p></div>
      <ModuleGrid locale={locale}/>
    </div></section>

    <FeatureBanner
      eyebrow="TAGSENSE EVENT ENGINE"
      title={locale==='pt'?'A leitura só ganha valor quando vira contexto.':locale==='en'?'A read only becomes valuable when it gains context.':'Una lectura solo gana valor cuando obtiene contexto.'}
      body={locale==='pt'?'EPC, antena, sequência, horário, localização, carga ativa e regras operacionais são combinados para transformar sinais RFID em eventos físicos confiáveis.':locale==='en'?'EPC, antenna, sequence, timestamp, location, active load and operational rules are combined to turn RFID signals into trusted physical events.':'EPC, antena, secuencia, hora, ubicación, carga activa y reglas operativas se combinan para convertir señales RFID en eventos físicos confiables.'}
      image="/media/arch_detail_bg.png"
      href={modulePath(locale,'connect')}
      cta={locale==='pt'?'Conhecer Connect':locale==='en'?'Explore Connect':'Conocer Connect'}
      icon={Waypoints}
      meta={['EPC','RSSI','Timestamp','Rules']}
    />

    <section className="section flow-stage"><div className="container">
      <div className="section-head"><div><div className="eyebrow">{c.flow.eyebrow}</div><h2>{c.flow.title}</h2></div><p>{locale==='pt'?'O software acompanha os principais pontos de controle do centro de distribuição.':locale==='en'?'The platform follows the key control points across the distribution center.':'La plataforma acompaña los principales puntos de control del centro de distribución.'}</p></div>
      <Flow locale={locale}/>
    </div></section>

    <FeatureBanner
      eyebrow="TAGSENSE DOCK"
      title={locale==='pt'?'Comece por um ponto onde o ROI pode ser medido.':locale==='en'?'Start where ROI can be measured.':'Empiece donde el ROI puede medirse.'}
      body={locale==='pt'?'A doca é a porta de entrada comercial: escopo controlado, integração objetiva e indicadores claros de erro, tempo e retrabalho.':locale==='en'?'The dock is the commercial entry point: controlled scope, focused integration and clear indicators for errors, time and rework.':'El muelle es el punto de entrada comercial: alcance controlado, integración objetiva e indicadores claros de error, tiempo y retrabajo.'}
      image="/media/strategy_detail_bg.png"
      href={modulePath(locale,'dock')}
      cta={locale==='pt'?'Ver Dock':locale==='en'?'View Dock':'Ver Dock'}
      icon={RadioTower}
      reverse
      meta={['POC','Land & Expand',locale==='pt'?'Mensurável':locale==='en'?'Measurable':'Medible']}
    />

    <section className="architecture-banner">
      <div className="architecture-banner-media"><img src="/media/arch_detail_bg.png" alt="" aria-hidden="true"/></div>
      <div className="architecture-banner-overlay"/>
      <div className="container architecture-banner-content">
        <div className="section-head"><div><div className="eyebrow">{c.architecture.eyebrow}</div><h2>{c.architecture.title}</h2></div><p>{c.architecture.subtitle}</p></div>
        <div className="architecture-glass"><Architecture locale={locale}/></div>
      </div>
    </section>

    <section className="section"><div className="container"><div className="surface cta-panel"><div className="icon-box" style={{margin:'0 auto 18px'}}><Layers3/></div><h2>{locale==='pt'?'Uma plataforma que cresce com a operação.':locale==='en'?'A platform that grows with the operation.':'Una plataforma que crece con la operación.'}</h2></div></div></section>
  </>
}
