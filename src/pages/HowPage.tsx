import { useLocation } from 'react-router-dom'
import { Activity, Cloud, Cpu, RadioTower } from 'lucide-react'
import { type Locale } from '../content/site'
import { getCopy } from '../lib/i18n'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Architecture } from '../components/Architecture'

export function HowPage({locale}:{locale:Locale}) {
  const c=getCopy(locale); const location=useLocation(); const p=c.pages.how
  const steps = locale==='pt' ? [
    ['01','RFID Read','EPC, leitor, antena, RSSI, data/hora e localização.'],
    ['02','Event Engine','Interpreta sequências de leitura, contexto e regras do processo.'],
    ['03','Evento físico','Conclui que um volume entrou, saiu, cruzou uma doca ou foi conferido.'],
    ['04','Ação de negócio','Gera alerta, bloqueio, confirmação, dashboard ou retorno ao WMS/TMS.']
  ] : locale==='en' ? [
    ['01','RFID Read','EPC, reader, antenna, RSSI, timestamp and location.'],
    ['02','Event Engine','Interprets read sequences, context and process rules.'],
    ['03','Physical event','Determines that an item entered, left, crossed a dock or was verified.'],
    ['04','Business action','Triggers an alert, block, confirmation, dashboard event or WMS/TMS feedback.']
  ] : [
    ['01','RFID Read','EPC, lector, antena, RSSI, fecha/hora y ubicación.'],
    ['02','Event Engine','Interpreta secuencias de lectura, contexto y reglas del proceso.'],
    ['03','Evento físico','Concluye que un volumen entró, salió, cruzó un muelle o fue verificado.'],
    ['04','Acción de negocio','Genera alerta, bloqueo, confirmación, dashboard o retorno al WMS/TMS.']
  ]
  return <>
    <SEO locale={locale} title={`${p.title} | TagSense`} description={p.subtitle} path={location.pathname}/>
    <PageHero eyebrow={c.nav.how.toUpperCase()} title={p.title} subtitle={p.subtitle} image="/media/arch_detail_bg.png"/>
    <section className="section"><div className="container"><div className="grid grid-4">{steps.map(s=><div className="card" key={s[0]}><div className="icon-box">{s[0]}</div><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div></div></section>
    <section className="section alt"><div className="container"><div className="section-head"><div><div className="eyebrow">EDGE + CLOUD</div><h2>{locale==='pt'?'Operação local contínua. Gestão centralizada.':locale==='en'?'Continuous local operation. Centralized management.':'Operación local continua. Gestión centralizada.'}</h2></div><p>{locale==='pt'?'O Edge mantém o processo crítico próximo ao leitor. A Cloud concentra gestão, auditoria e inteligência.':locale==='en'?'Edge keeps critical processing close to the reader. Cloud centralizes management, audit and intelligence.':'Edge mantiene el procesamiento crítico cerca del lector. Cloud centraliza gestión, auditoría e inteligencia.'}</p></div><Architecture locale={locale}/></div></section>
    <section className="section"><div className="container"><div className="grid grid-2">
      <div className="card"><div className="icon-box"><Cpu/></div><h3>TagSense Edge</h3><ul className="check-list"><li><Activity/>Cache local e estado da operação</li><li><RadioTower/>Motor RFID e regras locais</li><li><Activity/>Alertas mesmo com internet instável</li></ul></div>
      <div className="card"><div className="icon-box"><Cloud/></div><h3>TagSense Cloud</h3><ul className="check-list"><li><Activity/>Gestão centralizada</li><li><Activity/>Dashboards e analytics</li><li><Activity/>Auditoria, histórico e sincronização</li></ul></div>
    </div></div></section>
    <section className="section alt"><div className="container"><div className="surface cta-panel"><div className="eyebrow" style={{justifyContent:'center'}}>EPCIS 2.0</div><h2>{locale==='pt'?'Eventos preparados para rastreabilidade.':locale==='en'?'Events designed for traceability.':'Eventos preparados para trazabilidad.'}</h2><p>{locale==='pt'?'A TagSense usa EPCIS 2.0 como referência conceitual para estruturar eventos de rastreabilidade — sem alegar certificação.':locale==='en'?'TagSense uses EPCIS 2.0 as a conceptual reference for traceability events — without claiming certification.':'TagSense usa EPCIS 2.0 como referencia conceptual para estructurar eventos de trazabilidad — sin afirmar certificación.'}</p></div></div></section>
  </>
}
