import { Activity, ArrowRight, BarChart3, Boxes, CheckCircle2, CircleX, PackageCheck, RadioTower, RefreshCw, Route, ScanLine, ShieldCheck, TimerReset, Truck, Wifi } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { type Locale } from '../content/site'
import { getCopy, pathFor } from '../lib/i18n'
import { SEO } from '../components/SEO'
import { ModuleGrid } from '../components/ModuleGrid'
import { Flow } from '../components/Flow'
import { Architecture } from '../components/Architecture'

export function HomePage({locale}:{locale:Locale}) {
  const c=getCopy(locale)
  const location=useLocation()
  const benefitIcons=[PackageCheck,TimerReset,Route,ShieldCheck,RefreshCw,ScanLine]
  const operationalLabels = locale==='pt'
    ? ['Esperado','Lido','Divergências','Status']
    : locale==='en'
      ? ['Expected','Read','Discrepancies','Status']
      : ['Esperado','Leído','Divergencias','Estado']

  const proof = locale==='pt'
    ? [['RFID + Edge + Cloud','Leituras físicas transformadas em eventos operacionais.'],['Hardware agnóstico','Arquitetura preparada para múltiplos leitores e fabricantes.'],['WMS / ERP / TMS','Integração sem substituir os sistemas que já comandam a operação.']]
    : locale==='en'
      ? [['RFID + Edge + Cloud','Physical reads transformed into operational events.'],['Hardware agnostic','Architecture prepared for multiple readers and vendors.'],['WMS / ERP / TMS','Integration without replacing the systems already running the operation.']]
      : [['RFID + Edge + Cloud','Lecturas físicas transformadas en eventos operativos.'],['Hardware agnóstico','Arquitectura preparada para múltiples lectores y fabricantes.'],['WMS / ERP / TMS','Integración sin reemplazar los sistemas que ya controlan la operación.']]

  return <>
    <SEO locale={locale} title={c.meta.title} description={c.meta.description} path={location.pathname}/>

    <section className="hero hero-v2">
      <div className="hero-bg"><img src="/media/cover_detail_bg.png" alt="Centro de distribuição com portal RFID"/></div>
      <div className="container hero-v2-grid">
        <div className="hero-copy">
          <div className="eyebrow">{c.hero.kicker}</div>
          <h1>{c.hero.title}</h1>
          <p>{c.hero.subtitle}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to={pathFor(locale,'contact')}>{c.hero.primary}<ArrowRight size={18}/></Link>
            <Link className="btn btn-secondary" to={pathFor(locale,'platform')}>{c.hero.secondary}</Link>
          </div>
          <div className="hero-chips">{c.hero.chips.map((x:string)=><span className="chip" key={x}><i/>{x}</span>)}</div>
        </div>

        <div className="hero-cockpit" aria-label="TagSense operational intelligence preview">
          <div className="cockpit-glow"/>
          <div className="cockpit-top">
            <div>
              <span className="micro-label">TAGSENSE DOCK</span>
              <strong>{locale==='pt'?'Carga em conferência':locale==='en'?'Load in verification':'Carga en verificación'}</strong>
            </div>
            <span className="live-badge"><i/>{locale==='pt'?'AO VIVO':locale==='en'?'LIVE':'EN VIVO'}</span>
          </div>

          <div className="scan-visual">
            <div className="scan-door">
              <span className="scan-beam"/>
              <div className="pallet pallet-a"><Boxes size={32}/><small>EPC 7A21</small></div>
              <div className="pallet pallet-b"><Boxes size={30}/><small>EPC 9D44</small></div>
              <div className="reader reader-l"><RadioTower size={18}/></div>
              <div className="reader reader-r"><RadioTower size={18}/></div>
            </div>
            <div className="scan-route"><span/><span/><span/></div>
          </div>

          <div className="cockpit-stats">
            {operationalLabels.map((label,i)=><div className="mini-stat" key={label}>
              <span>{label}</span>
              <b>{['1.286','1.284','2',locale==='pt'?'Validando':locale==='en'?'Checking':'Validando'][i]}</b>
            </div>)}
          </div>

          <div className="cockpit-alert">
            <Activity size={18}/>
            <div>
              <span>{locale==='pt'?'EVENT ENGINE':locale==='en'?'EVENT ENGINE':'EVENT ENGINE'}</span>
              <strong>{locale==='pt'?'2 volumes ainda não confirmados na carga.':locale==='en'?'2 packages are not yet confirmed in the load.':'2 volúmenes aún no confirmados en la carga.'}</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-data-line" aria-hidden="true"/>
    </section>

    <section className="trust-strip"><div className="container trust-grid">
      {proof.map(([title,body],i)=>{
        const I=[Wifi,ShieldCheck,Truck][i]
        return <div className="trust-item" key={title}><I size={22}/><div><strong>{title}</strong><span>{body}</span></div></div>
      })}
    </div></section>

    <section className="thesis thesis-v2"><div className="container">
      <div className="eyebrow" style={{justifyContent:'center'}}>{locale==='pt'?'A CAMADA DE VERDADE FÍSICA':locale==='en'?'THE PHYSICAL TRUTH LAYER':'LA CAPA DE VERDAD FÍSICA'}</div>
      <h2>{c.thesis.title}<br/><span className="accent">{c.thesis.highlight}</span></h2>
      <p>{c.thesis.body}</p>
      <div className="truth-grid">
        <div className="truth-card">
          <span>WMS / ERP / TMS</span>
          <strong>{locale==='pt'?'O planejado':locale==='en'?'The planned state':'Lo planificado'}</strong>
          <p>{locale==='pt'?'Pedido, carga, estoque e rota informados pelos sistemas de gestão.':locale==='en'?'Orders, loads, inventory and routes informed by management systems.':'Pedidos, cargas, inventario y rutas informados por los sistemas de gestión.'}</p>
        </div>
        <div className="truth-bridge"><ArrowRight size={24}/><span>TagSense</span><ArrowRight size={24}/></div>
        <div className="truth-card active">
          <span>RFID / EDGE / EVENT ENGINE</span>
          <strong>{locale==='pt'?'O que realmente aconteceu':locale==='en'?'What actually happened':'Lo que realmente ocurrió'}</strong>
          <p>{locale==='pt'?'Quem passou, onde passou, quando passou e se estava correto.':locale==='en'?'What passed, where, when and whether it was correct.':'Qué pasó, dónde, cuándo y si estaba correcto.'}</p>
        </div>
      </div>
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
      <div className="control-center">
        <div className="control-media"><img src="/media/platform_detail_bg.png" alt="TagSense logistics intelligence"/></div>
        <div className="control-overlay">
          <div className="control-copy">
            <div className="eyebrow">{locale==='pt'?'CENTRO DE CONTROLE':locale==='en'?'CONTROL CENTER':'CENTRO DE CONTROL'}</div>
            <h2>{locale==='pt'?'Uma visão operacional única do mundo físico.':locale==='en'?'One operational view of the physical world.':'Una única visión operativa del mundo físico.'}</h2>
            <p>{locale==='pt'?'Eventos RFID deixam de ser leituras isoladas e passam a formar uma linha do tempo confiável de recebimento, estoque, separação, doca e expedição.':locale==='en'?'RFID reads stop being isolated signals and become a reliable timeline across receiving, inventory, picking, dock and shipping.':'Las lecturas RFID dejan de ser señales aisladas y forman una línea de tiempo confiable entre recepción, inventario, picking, muelle y expedición.'}</p>
          </div>
          <div className="control-kpis">
            <div><BarChart3/><span>{locale==='pt'?'Eventos físicos':locale==='en'?'Physical events':'Eventos físicos'}</span><strong>RFID</strong></div>
            <div><ScanLine/><span>{locale==='pt'?'Validação':locale==='en'?'Validation':'Validación'}</span><strong>Real-time</strong></div>
            <div><Route/><span>{locale==='pt'?'Rastreabilidade':locale==='en'?'Traceability':'Trazabilidad'}</span><strong>End-to-end</strong></div>
          </div>
        </div>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <div className="section-head"><div><div className="eyebrow">{c.flow.eyebrow}</div><h2>{c.flow.title}</h2></div><p>{locale==='pt'?'Cada etapa produz evidência física que pode ser confrontada com o sistema.':locale==='en'?'Every stage creates physical evidence that can be reconciled with the system.':'Cada etapa produce evidencia física que puede compararse con el sistema.'}</p></div>
      <Flow locale={locale}/>
    </div></section>

    <section className="section alt"><div className="container">
      <div className="section-head"><div><div className="eyebrow">{c.architecture.eyebrow}</div><h2>{c.architecture.title}</h2></div><p>{c.architecture.subtitle}</p></div>
      <div className="architecture-shell"><Architecture locale={locale}/></div>
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

    <section className="section"><div className="container"><div className="surface cta-panel cta-panel-v2">
      <div className="cta-grid">
        <div><div className="eyebrow">{locale==='pt'?'PRÓXIMO PASSO':locale==='en'?'NEXT STEP':'PRÓXIMO PASO'}</div><h2>{locale==='pt'?'Veja o que realmente acontece na sua operação.':locale==='en'?'See what is really happening in your operation.':'Vea lo que realmente ocurre en su operación.'}</h2><p>{locale==='pt'?'Comece com uma POC controlada em uma doca e meça os resultados antes de expandir.':locale==='en'?'Start with a controlled single-dock POC and measure results before expanding.':'Empiece con una POC controlada en un muelle y mida los resultados antes de ampliar.'}</p><Link className="btn btn-primary" to={pathFor(locale,'contact')}>{c.nav.demo}<ArrowRight size={18}/></Link></div>
        <div className="cta-signal"><RadioTower size={58}/><span/><span/><span/></div>
      </div>
    </div></div></section>
  </>
}
