import { useLocation } from 'react-router-dom'
import { CheckCircle2, RadioTower, Database, MapPin, Clock, PackageSearch } from 'lucide-react'
import { type Locale, type ModuleKey } from '../content/site'
import { getCopy } from '../lib/i18n'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'

const visualByModule: Record<ModuleKey,string> = {
  receive:'/media/flow_detail_bg.png', inventory:'/media/benefits_detail_bg.png', drone:'/media/platform_detail_bg.png', tunnel:'/media/platform_detail_bg.png', dock:'/media/cover_detail_bg.png', load:'/media/strategy_detail_bg.png', connect:'/media/arch_detail_bg.png', analytics:'/media/benefits_detail_bg.png'
}

export function ModulePage({locale,module}:{locale:Locale;module:ModuleKey}) {
  const c=getCopy(locale); const m=c.modules[module]; const location=useLocation()
  const data=['EPC','SKU','Reader','Antenna','RSSI','Timestamp','Location','Order / Load','Status']
  return <>
    <SEO locale={locale} title={`TagSense ${m.name} | TagSense`} description={m.short} path={location.pathname}/>
    <PageHero eyebrow={`${locale==='pt'?'MÓDULO':locale==='en'?'MODULE':'MÓDULO'} · TAGSENSE ${m.name.toUpperCase()}`} title={m.headline} subtitle={m.short} image={visualByModule[module]}/>
    <section className="section"><div className="container module-layout">
      <div className="surface highlight-card"><div className="eyebrow">{locale==='pt'?'LACUNA QUE FECHA':locale==='en'?'GAP ADDRESSED':'BRECHA QUE RESUELVE'}</div><h2>{m.gap}</h2><p>{module==='dock'?(locale==='pt'?'O Dock é o primeiro produto comercial da TagSense e foi desenhado para provar valor rapidamente na expedição.':locale==='en'?'Dock is TagSense’s first commercial product, designed to prove value quickly at shipping.':'Dock es el primer producto comercial de TagSense y fue diseñado para demostrar valor rápidamente en expedición.'):(locale==='pt'?'O módulo se conecta ao fluxo físico e aos sistemas de gestão para transformar RFID em uma ação operacional.':locale==='en'?'The module connects physical flow with management systems to turn RFID into operational action.':'El módulo conecta el flujo físico con los sistemas de gestión para transformar RFID en una acción operativa.')}</p>{m.roadmap&&<div className="notice">{m.roadmap}</div>}</div>
      <div className="surface highlight-card"><div className="eyebrow">{locale==='pt'?'CAPACIDADES':locale==='en'?'CAPABILITIES':'CAPACIDADES'}</div><ul className="check-list">{m.capabilities.map((x:string)=><li key={x}><CheckCircle2/>{x}</li>)}</ul></div>
    </div></section>
    <section className="section alt"><div className="container"><div className="section-head"><div><div className="eyebrow">{locale==='pt'?'EVENTOS E DADOS':locale==='en'?'EVENTS & DATA':'EVENTOS Y DATOS'}</div><h2>{locale==='pt'?'Cada leitura vira contexto operacional.':locale==='en'?'Every read becomes operational context.':'Cada lectura se convierte en contexto operativo.'}</h2></div><p>{locale==='pt'?'O objetivo não é apenas ler tags. É saber quando, onde, em qual processo e com qual carga o evento aconteceu.':locale==='en'?'The goal is not just to read tags. It is to know when, where, in which process and with which load the event happened.':'El objetivo no es solo leer tags. Es saber cuándo, dónde, en qué proceso y con qué carga ocurrió el evento.'}</p></div><div className="data-chips">{data.map(x=><span className="data-chip" key={x}>{x}</span>)}</div></div></section>
    {module==='dock' && <DockExample locale={locale}/>} 
    {module==='tunnel' && <TunnelExample locale={locale}/>} 
    <section className="section"><div className="container"><div className="grid grid-3">
      <div className="card"><div className="icon-box"><RadioTower/></div><h3>{locale==='pt'?'Leitura física':locale==='en'?'Physical read':'Lectura física'}</h3><p>{locale==='pt'?'Leitores, antenas e sensores capturam o evento em campo.':locale==='en'?'Readers, antennas and sensors capture the field event.':'Lectores, antenas y sensores capturan el evento en campo.'}</p></div>
      <div className="card"><div className="icon-box"><Database/></div><h3>Event Engine</h3><p>{locale==='pt'?'Regras interpretam as leituras e eliminam ruído operacional.':locale==='en'?'Rules interpret reads and filter operational noise.':'Las reglas interpretan las lecturas y filtran ruido operativo.'}</p></div>
      <div className="card"><div className="icon-box"><PackageSearch/></div><h3>{locale==='pt'?'Ação de negócio':locale==='en'?'Business action':'Acción de negocio'}</h3><p>{locale==='pt'?'Alerta, bloqueio, confirmação, dashboard ou retorno ao sistema.':locale==='en'?'Alert, block, confirmation, dashboard or system feedback.':'Alerta, bloqueo, confirmación, dashboard o retorno al sistema.'}</p></div>
    </div></div></section>
  </>
}

function DockExample({locale}:{locale:Locale}) {
  const labels=locale==='pt'?['Esperado','Carregado','Faltando','Divergências']:locale==='en'?['Expected','Loaded','Missing','Discrepancies']:['Esperado','Cargado','Faltante','Divergencias']
  return <section className="section"><div className="container"><div className="surface" style={{padding:32}}><div className="section-head"><div><div className="eyebrow">TAGSENSE DOCK</div><h2>{locale==='pt'?'Conferência de carga em tempo real.':locale==='en'?'Real-time load verification.':'Verificación de carga en tiempo real.'}</h2></div><p>{locale==='pt'?'Exemplo visual. Os números abaixo são ilustrativos e não representam métricas comerciais.':locale==='en'?'Visual example. Figures below are illustrative and are not commercial metrics.':'Ejemplo visual. Las cifras son ilustrativas y no representan métricas comerciales.'}</p></div><div className="grid grid-4">{labels.map((l,i)=><div className="card" key={l}><span className="muted">{l}</span><h2 style={{fontSize:'2.6rem',marginTop:8}}>{['1.286','1.284','2','0'][i]}</h2></div>)}</div></div></div></section>
}

function TunnelExample({locale}:{locale:Locale}) {
  return <section className="section"><div className="container"><div className="surface" style={{padding:32}}><div className="section-head"><div><div className="eyebrow">TAGSENSE TUNNEL</div><h2>{locale==='pt'?'O pedido passa. O sistema confere.':locale==='en'?'The order passes through. The system verifies it.':'El pedido pasa. El sistema verifica.'}</h2></div><p>{locale==='pt'?'Cada item possui RFID individual. O túnel lê o conjunto e confronta SKU e quantidade com o pedido.':locale==='en'?'Each item carries an individual RFID tag. The tunnel reads the group and compares SKU and quantity with the order.':'Cada ítem lleva una etiqueta RFID individual. El túnel lee el conjunto y compara SKU y cantidad con el pedido.'}</p></div><div className="grid grid-3"><div className="card"><div className="icon-box"><MapPin/></div><h3>SKU</h3><p>TS-54892</p></div><div className="card"><div className="icon-box"><Clock/></div><h3>{locale==='pt'?'Esperado':locale==='en'?'Expected':'Esperado'}</h3><p>42</p></div><div className="card"><div className="icon-box"><PackageSearch/></div><h3>{locale==='pt'?'Lido':locale==='en'?'Read':'Leído'}</h3><p>41 · <span style={{color:'var(--red)'}}>{locale==='pt'?'falta 1':locale==='en'?'1 missing':'falta 1'}</span></p></div></div></div></div></section>
}
