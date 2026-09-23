import { ArrowRight, Boxes, RadioTower } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { type Locale } from '../content/site'
import { getCopy, pathFor } from '../lib/i18n'
import { SEO } from '../components/SEO'
import { HeroCarousel } from '../components/HeroCarousel'
import { Flow } from '../components/Flow'
import { Architecture } from '../components/Architecture'

export function HomePage({locale}:{locale:Locale}) {
  const c = getCopy(locale)
  const location = useLocation()

  const t = {
    proofKicker: locale==='pt'?'A CAMADA DE VERDADE FÍSICA':locale==='en'?'THE PHYSICAL TRUTH LAYER':'LA CAPA DE VERDAD FÍSICA',
    proofTitle: locale==='pt'?'O software sabe o que deveria acontecer. A TagSense sabe o que aconteceu.':locale==='en'?'Software knows what should happen. TagSense knows what happened.':'El software sabe lo que debería ocurrir. TagSense sabe lo que ocurrió.',
    proofBody: locale==='pt'?'Entre o WMS e o chão da operação existe um mundo físico cheio de exceções. A TagSense conecta esse mundo aos sistemas, em tempo real.':locale==='en'?'Between the WMS and the warehouse floor there is a physical world full of exceptions. TagSense connects that world to your systems in real time.':'Entre el WMS y el piso de operación existe un mundo físico lleno de excepciones. TagSense conecta ese mundo con sus sistemas en tiempo real.',
    platform: locale==='pt'?'PLATAFORMA TAGSENSE':locale==='en'?'TAGSENSE PLATFORM':'PLATAFORMA TAGSENSE',
    platformTitle: locale==='pt'?'Não vendemos leitura RFID. Entregamos decisão operacional.':locale==='en'?'We do not sell RFID reads. We deliver operational decisions.':'No vendemos lecturas RFID. Entregamos decisiones operativas.',
    platformBody: locale==='pt'?'Receive, Inventory, Drone, Tunnel, Dock, Load, Connect e Analytics compartilham o mesmo núcleo de eventos, regras e rastreabilidade.':locale==='en'?'Receive, Inventory, Drone, Tunnel, Dock, Load, Connect and Analytics share the same event, rules and traceability core.':'Receive, Inventory, Drone, Tunnel, Dock, Load, Connect y Analytics comparten el mismo núcleo de eventos, reglas y trazabilidad.',
    flowBody: locale==='pt'?'A identidade física nasce no recebimento e acompanha a mercadoria até a expedição.':locale==='en'?'Physical identity starts at receiving and follows goods all the way to shipping.':'La identidad física nace en recepción y acompaña la mercancía hasta expedición.',
    archBody: locale==='pt'?'Cloud para gestão. Edge para continuidade. RFID para capturar o mundo físico.':locale==='en'?'Cloud for management. Edge for continuity. RFID to capture the physical world.':'Cloud para gestión. Edge para continuidad. RFID para capturar el mundo físico.',
    final: locale==='pt'?'Veja a TagSense aplicada à sua operação.':locale==='en'?'See TagSense applied to your operation.':'Vea TagSense aplicada a su operación.',
    finalBody: locale==='pt'?'Agende uma conversa, escolha o primeiro ponto de controle e desenhe uma POC com indicadores claros antes de expandir.':locale==='en'?'Book a conversation, choose the first control point and design a POC with clear indicators before expanding.':'Agende una conversación, elija el primer punto de control y diseñe una POC con indicadores claros antes de expandir.'
  }

  return <>
    <SEO locale={locale} title={c.meta.title} description={c.meta.description} path={location.pathname}/>

    <HeroCarousel locale={locale}/>

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

    <section className="section alt home-architecture">
      <div className="container">
        <div className="section-head"><div><div className="eyebrow">{c.architecture.eyebrow}</div><h2>{c.architecture.title}</h2></div><p>{t.archBody}</p></div>
        <div className="surface home-architecture-surface"><Architecture locale={locale}/></div>
      </div>
    </section>

    <section className="section compact home-final-cta">
      <div className="container">
        <div className="surface home-final-cta-card">
          <div className="home-final-cta-icon"><Boxes size={34}/></div>
          <div>
            <div className="eyebrow">{locale==='pt'?'PRÓXIMO PASSO':locale==='en'?'NEXT STEP':'PRÓXIMO PASO'}</div>
            <h2>{t.final}</h2>
            <p>{t.finalBody}</p>
          </div>
          <div><Link className="btn btn-primary" to={pathFor(locale,'contact')}>{c.nav.demo}<ArrowRight size={18}/></Link></div>
        </div>
      </div>
    </section>
  </>
}
