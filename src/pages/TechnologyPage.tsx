import { useLocation } from 'react-router-dom'
import { Blocks, Cloud, Cpu, Fingerprint, GitBranch, RadioTower, ShieldCheck, Waypoints } from 'lucide-react'
import { type Locale } from '../content/site'
import { getCopy, pathFor } from '../lib/i18n'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'\nimport { FeatureBanner } from '../components/FeatureBanner'

export function TechnologyPage({locale}:{locale:Locale}) {
  const c=getCopy(locale); const location=useLocation(); const p=c.pages.technology
  const pt=[
    ['RFID UHF / RAIN RFID','Identificação sem linha de visada e leitura simultânea de múltiplos itens.'],
    ['TagSense Edge','Processamento local, cache e regras próximas da operação.'],
    ['TagSense Event Engine','Transforma leituras brutas em eventos físicos confiáveis.'],
    ['APIs & Integrações','Conecta WMS, ERP, TMS e sistemas próprios.'],
    ['Cloud','Gestão centralizada, regras, dashboards, analytics e auditoria.'],
    ['Segurança e auditoria','Trilha de eventos e integração sem expor credenciais no navegador.'],
    ['Hardware agnóstico','Camada de drivers para homologar leitores de diferentes fabricantes.'],
    ['Eventos e rastreabilidade','Histórico do recebimento à expedição.']
  ]
  const en=[['RFID UHF / RAIN RFID','Identification without line of sight and simultaneous multi-item reading.'],['TagSense Edge','Local processing, cache and rules close to operations.'],['TagSense Event Engine','Turns raw reads into trusted physical events.'],['APIs & Integrations','Connects WMS, ERP, TMS and custom systems.'],['Cloud','Centralized management, rules, dashboards, analytics and audit.'],['Security & audit','Event trail and integration without exposing privileged credentials in the browser.'],['Hardware agnostic','Driver layer for readers from multiple manufacturers.'],['Events & traceability','History from receiving to shipping.']]
  const es=[['RFID UHF / RAIN RFID','Identificación sin línea de visión y lectura simultánea de múltiples ítems.'],['TagSense Edge','Procesamiento local, caché y reglas cerca de la operación.'],['TagSense Event Engine','Transforma lecturas brutas en eventos físicos confiables.'],['APIs & Integraciones','Conecta WMS, ERP, TMS y sistemas propios.'],['Cloud','Gestión centralizada, reglas, dashboards, analytics y auditoría.'],['Seguridad y auditoría','Trazabilidad de eventos e integración sin exponer credenciales privilegiadas en el navegador.'],['Hardware agnóstico','Capa de drivers para lectores de distintos fabricantes.'],['Eventos y trazabilidad','Historial desde recepción hasta expedición.']]
  const items=locale==='pt'?pt:locale==='en'?en:es
  const icons=[RadioTower,Cpu,Waypoints,GitBranch,Cloud,ShieldCheck,Blocks,Fingerprint]
  return <>
    <SEO locale={locale} title={`${p.title} | TagSense`} description={p.subtitle} path={location.pathname}/>
    <PageHero eyebrow={c.nav.technology.toUpperCase()} title={p.title} subtitle={p.subtitle} image="/media/arch_detail_bg.png"/>
    <section className="section"><div className="container"><div className="technology-orbit">{items.map((x,i)=>{const I=icons[i];return <div className="card" key={x[0]}><div className="icon-box"><I/></div><h3>{x[0]}</h3><p>{x[1]}</p></div>})}</div></div></section>
  </>
}
