import { Activity, ArrowRight, Bot, Boxes, DatabaseZap, RadioTower, ScanLine, ShieldCheck, Truck } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { type Locale } from '../content/site'
import { getCopy, modulePath, pathFor } from '../lib/i18n'
import { SEO } from '../components/SEO'
import { FeatureBanner } from '../components/FeatureBanner'
import { Flow } from '../components/Flow'
import { Architecture } from '../components/Architecture'

export function HomePage({locale}:{locale:Locale}) {
  const c = getCopy(locale)
  const location = useLocation()

  const t = {
    proofKicker: locale==='pt'?'A CAMADA DE VERDADE FÍSICA':locale==='en'?'THE PHYSICAL TRUTH LAYER':'LA CAPA DE VERDAD FÍSICA',
    proofTitle: locale==='pt'?'O software sabe o que deveria acontecer. A TagSense sabe o que aconteceu.':locale==='en'?'Software knows what should happen. TagSense knows what happened.':'El software sabe lo que debería ocurrir. TagSense sabe lo que ocurrió.',
    proofBody: locale==='pt'?'Entre o WMS e o chão da operação existe um mundo físico cheio de exceções. A TagSense conecta esse mundo aos sistemas, em tempo real.':locale==='en'?'Between the WMS and the warehouse floor there is a physical world full of exceptions. TagSense connects that world to your systems in real time.':'Entre el WMS y el piso de operación existe un mundo físico lleno de excepciones. TagSense conecta ese mundo con sus sistemas en tiempo real.',
    story: locale==='pt'?'UMA PLATAFORMA. TRÊS MOMENTOS CRÍTICOS.':locale==='en'?'ONE PLATFORM. THREE CRITICAL MOMENTS.':'UNA PLATAFORMA. TRES MOMENTOS CRÍTICOS.',
    storyTitle: locale==='pt'?'Enxergue o que acontece onde os erros custam mais caro.':locale==='en'?'See what happens where errors cost the most.':'Vea lo que ocurre donde los errores cuestan más.',
    platform: locale==='pt'?'PLATAFORMA TAGSENSE':locale==='en'?'TAGSENSE PLATFORM':'PLATAFORMA TAGSENSE',
    platformTitle: locale==='pt'?'Não vendemos leitura RFID. Entregamos decisão operacional.':locale==='en'?'We do not sell RFID reads. We deliver operational decisions.':'No vendemos lecturas RFID. Entregamos decisiones operativas.',
    platformBody: locale==='pt'?'Receive, Inventory, Drone, Tunnel, Dock, Load, Connect e Analytics compartilham o mesmo núcleo de eventos, regras e rastreabilidade.':locale==='en'?'Receive, Inventory, Drone, Tunnel, Dock, Load, Connect and Analytics share the same event, rules and traceability core.':'Receive, Inventory, Drone, Tunnel, Dock, Load, Connect y Analytics comparten el mismo núcleo de eventos, reglas y trazabilidad.',
    flowBody: locale==='pt'?'A identidade física nasce no recebimento e acompanha a mercadoria até a expedição.':locale==='en'?'Physical identity starts at receiving and follows goods all the way to shipping.':'La identidad física nace en recepción y acompaña la mercancía hasta expedición.',
    archBody: locale==='pt'?'Cloud para gestão. Edge para continuidade. RFID para capturar o mundo físico.':locale==='en'?'Cloud for management. Edge for continuity. RFID to capture the physical world.':'Cloud para gestión. Edge para continuidad. RFID para capturar el mundo físico.',
    final: locale==='pt'?'Transforme sua doca no primeiro ponto de verdade da operação.':locale==='en'?'Turn your dock into the first point of truth in the operation.':'Convierta su muelle en el primer punto de verdad de la operación.',
    finalBody: locale==='pt'?'Comece com uma POC controlada, prove valor com indicadores reais e expanda módulo por módulo.':locale==='en'?'Start with a controlled POC, prove value with real indicators and expand module by module.':'Empiece con una POC controlada, demuestre valor con indicadores reales y expanda módulo por módulo.'
  }

  return <>
    <SEO locale={locale} title={c.meta.title} description={c.meta.description} path={location.pathname}/>

    <section className="masthead">
      <div className="masthead-media"><img src="/media/cover_detail_bg.png" alt="Operação logística com RFID"/></div>
      <div className="masthead-overlay"/>
      <div className="container masthead-grid">
        <div className="masthead-copy">
          <div className="eyebrow">{c.hero.kicker}</div>
          <h1>{c.hero.title}</h1>
          <p>{c.hero.subtitle}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to={pathFor(locale,'contact')}>{c.hero.primary}<ArrowRight size={18}/></Link>
            <Link className="btn btn-glass" to={pathFor(locale,'platform')}>{c.hero.secondary}</Link>
          </div>
        </div>
        <div className="masthead-rail">
          <div className="rail-kicker">TAGSENSE / 01</div>
          <div className="rail-line"/>
          <div className="rail-metric"><span>RFID</span><strong>{locale==='pt'?'Visibilidade física':locale==='en'?'Physical visibility':'Visibilidad física'}</strong></div>
          <div className="rail-metric"><span>EDGE</span><strong>{locale==='pt'?'Resposta local':locale==='en'?'Local response':'Respuesta local'}</strong></div>
          <div className="rail-metric"><span>CLOUD</span><strong>{locale==='pt'?'Gestão central':locale==='en'?'Central management':'Gestión central'}</strong></div>
        </div>
      </div>
      <div className="masthead-bottom">
        <div className="container masthead-bottom-grid">
          <div><Activity/><span>Event Engine</span></div>
          <div><DatabaseZap/><span>WMS / ERP / TMS</span></div>
          <div><ShieldCheck/><span>{locale==='pt'?'Trilha auditável':locale==='en'?'Auditable trail':'Trazabilidad auditable'}</span></div>
          <div><Truck/><span>{locale==='pt'?'Operação real':locale==='en'?'Real operation':'Operación real'}</span></div>
        </div>
      </div>
    </section>

    <section className="editorial-proof">
      <div className="container editorial-proof-grid">
        <div className="editorial-index">02</div>
        <div className="editorial-copy">
          <div className="eyebrow">{t.proofKicker}</div>
          <h2>{t.proofTitle}</h2>
          <p>{t.proofBody}</p>
        </div>
        <div className="truth-console">
          <div className="truth-console-row muted-row">
            <span>WMS</span>
            <strong>{locale==='pt'?'Carga esperada':locale==='en'?'Expected load':'Carga esperada'}</strong>
            <b>1.286</b>
          </div>
          <div className="truth-console-divider"><span>VS</span></div>
          <div className="truth-console-row active-row">
            <span>TagSense</span>
            <strong>{locale==='pt'?'Carga fisicamente confirmada':locale==='en'?'Physically confirmed load':'Carga confirmada físicamente'}</strong>
            <b>1.284</b>
          </div>
          <div className="truth-alert"><RadioTower size={17}/>{locale==='pt'?'2 volumes ainda não confirmados':locale==='en'?'2 packages still unconfirmed':'2 volúmenes aún no confirmados'}</div>
        </div>
      </div>
    </section>

    <section className="story-intro">
      <div className="container">
        <div className="eyebrow">{t.story}</div>
        <h2>{t.storyTitle}</h2>
      </div>
    </section>

    <FeatureBanner
      eyebrow="TAGSENSE DOCK"
      title={locale==='pt'?'A doca deixa de ser ponto cego.':locale==='en'?'The dock stops being a blind spot.':'El muelle deja de ser un punto ciego.'}
      body={locale==='pt'?'A carga, a doca e o veículo passam a ser uma única decisão operacional. Volumes incorretos são identificados antes de o caminhão sair.':locale==='en'?'Load, dock and vehicle become one operational decision. Wrong packages are detected before the truck leaves.':'La carga, el muelle y el vehículo se convierten en una sola decisión operativa. Los volúmenes incorrectos se detectan antes de la salida.'}
      image="/media/cover_detail_bg.png"
      href={modulePath(locale,'dock')}
      cta={locale==='pt'?'Explorar Dock':locale==='en'?'Explore Dock':'Explorar Dock'}
      icon={RadioTower}
      meta={[locale==='pt'?'Tempo real':locale==='en'?'Real time':'Tiempo real', locale==='pt'?'Alertas':locale==='en'?'Alerts':'Alertas', locale==='pt'?'Auditoria':locale==='en'?'Audit':'Auditoría']}
    />

    <FeatureBanner
      eyebrow="TAGSENSE TUNNEL"
      title={locale==='pt'?'Centenas de leituras. Uma única resposta: está certo ou não.':locale==='en'?'Hundreds of reads. One answer: correct or not.':'Cientos de lecturas. Una sola respuesta: correcto o no.'}
      body={locale==='pt'?'O túnel confere SKU e quantidade de produtos fracionados em segundos, reduzindo dependência de conferência manual.':locale==='en'?'The tunnel verifies SKU and quantity for split orders in seconds, reducing manual verification.':'El túnel verifica SKU y cantidad de pedidos fraccionados en segundos, reduciendo la verificación manual.'}
      image="/media/platform_detail_bg.png"
      href={modulePath(locale,'tunnel')}
      cta={locale==='pt'?'Explorar Tunnel':locale==='en'?'Explore Tunnel':'Explorar Tunnel'}
      icon={ScanLine}
      reverse
      meta={['SKU', locale==='pt'?'Quantidade':locale==='en'?'Quantity':'Cantidad', locale==='pt'?'Bloqueio por exceção':locale==='en'?'Exception blocking':'Bloqueo por excepción']}
    />

    <FeatureBanner
      eyebrow="TAGSENSE INVENTORY + DRONE"
      title={locale==='pt'?'O estoque físico ganha frequência, contexto e autonomia.':locale==='en'?'Physical inventory gains frequency, context and autonomy.':'El inventario físico gana frecuencia, contexto y autonomía.'}
      body={locale==='pt'?'Coletores, leitores fixos e, no roadmap, drones RFID permitem confrontar o estoque real com o WMS com muito mais frequência.':locale==='en'?'Handhelds, fixed readers and, on the roadmap, RFID drones enable much more frequent reconciliation of physical stock with WMS.':'Colectores, lectores fijos y, en el roadmap, drones RFID permiten conciliar el inventario físico con el WMS con mucha más frecuencia.'}
      image="/media/benefits_detail_bg.png"
      href={modulePath(locale,'inventory')}
      cta={locale==='pt'?'Explorar Inventory':locale==='en'?'Explore Inventory':'Explorar Inventory'}
      icon={Bot}
      meta={[locale==='pt'?'Inventário cíclico':locale==='en'?'Cycle counting':'Inventario cíclico', 'RFID', locale==='pt'?'Roadmap Drone':locale==='en'?'Drone roadmap':'Roadmap Drone']}
    />

    <section className="platform-manifesto">
      <div className="container platform-manifesto-grid">
        <div className="editorial-index">03</div>
        <div>
          <div className="eyebrow">{t.platform}</div>
          <h2>{t.platformTitle}</h2>
          <p className="lead">{t.platformBody}</p>
          <Link className="text-link" to={pathFor(locale,'platform')}>{locale==='pt'?'Conhecer a plataforma completa':locale==='en'?'Explore the full platform':'Conocer la plataforma completa'}<ArrowRight size={18}/></Link>
        </div>
        <div className="module-wordmark">
          {['Receive','Inventory','Drone','Tunnel','Dock','Load','Connect','Analytics'].map((m,i)=><span key={m} className={i===4?'hot':''}>0{i+1} · {m}</span>)}
        </div>
      </div>
    </section>

    <section className="section flow-stage">
      <div className="container">
        <div className="section-head"><div><div className="eyebrow">{c.flow.eyebrow}</div><h2>{c.flow.title}</h2></div><p>{t.flowBody}</p></div>
        <Flow locale={locale}/>
      </div>
    </section>

    <section className="architecture-banner">
      <div className="architecture-banner-media"><img src="/media/arch_detail_bg.png" alt="" aria-hidden="true"/></div>
      <div className="architecture-banner-overlay"/>
      <div className="container architecture-banner-content">
        <div className="section-head"><div><div className="eyebrow">{c.architecture.eyebrow}</div><h2>{c.architecture.title}</h2></div><p>{t.archBody}</p></div>
        <div className="architecture-glass"><Architecture locale={locale}/></div>
      </div>
    </section>

    <section className="final-banner">
      <div className="container final-banner-grid">
        <div className="final-banner-mark"><Boxes size={56}/></div>
        <div>
          <div className="eyebrow">{locale==='pt'?'COMECE PELA DOR MAIS MENSURÁVEL':locale==='en'?'START WITH THE MOST MEASURABLE PAIN':'EMPIECE POR EL DOLOR MÁS MEDIBLE'}</div>
          <h2>{t.final}</h2>
          <p>{t.finalBody}</p>
        </div>
        <div className="final-banner-action"><Link className="btn btn-primary" to={pathFor(locale,'contact')}>{c.nav.demo}<ArrowRight size={18}/></Link></div>
      </div>
    </section>
  </>
}
