import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Bot, RadioTower, ScanLine, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { type Locale } from '../content/site'
import { modulePath, pathFor } from '../lib/i18n'

type Slide = {
  eyebrow:string
  title:string
  body:string
  image:string
  primary:string
  primaryHref:string
  secondary?:string
  secondaryHref?:string
  meta:string[]
  index:string
  icon:'spark'|'dock'|'tunnel'|'drone'
}

export function HeroCarousel({locale}:{locale:Locale}) {
  const slides:Slide[] = locale==='pt' ? [
    {
      eyebrow:'INTELIGÊNCIA RFID PARA LOGÍSTICA',
      title:'Inteligência RFID para uma logística que enxerga o mundo real.',
      body:'Do recebimento à expedição, a TagSense transforma cada movimentação física em dados confiáveis, auditáveis e acionáveis.',
      image:'/media/cover_detail_bg.png',
      primary:'Agende uma demonstração',
      primaryHref:pathFor(locale,'contact'),
      secondary:'Conheça a plataforma',
      secondaryHref:pathFor(locale,'platform'),
      meta:['RFID','Edge','Cloud'],
      index:'01',
      icon:'spark',
    },
    {
      eyebrow:'TAGSENSE DOCK',
      title:'A doca deixa de ser ponto cego.',
      body:'A carga, a doca e o veículo passam a ser uma única decisão operacional. Volumes incorretos são identificados antes de o caminhão sair.',
      image:'/media/strategy_detail_bg.png',
      primary:'Explorar Dock',
      primaryHref:modulePath(locale,'dock'),
      secondary:'Agende uma demonstração',
      secondaryHref:pathFor(locale,'contact'),
      meta:['Tempo real','Alertas','Auditoria'],
      index:'02',
      icon:'dock',
    },
    {
      eyebrow:'TAGSENSE TUNNEL',
      title:'Centenas de leituras. Uma resposta: está certo ou não.',
      body:'O túnel confere SKU e quantidade de produtos fracionados em segundos, reduzindo a dependência de conferência manual.',
      image:'/media/platform_detail_bg.png',
      primary:'Explorar Tunnel',
      primaryHref:modulePath(locale,'tunnel'),
      secondary:'Ver plataforma',
      secondaryHref:pathFor(locale,'platform'),
      meta:['SKU','Quantidade','Exceções'],
      index:'03',
      icon:'tunnel',
    },
    {
      eyebrow:'TAGSENSE INVENTORY + DRONE',
      title:'O estoque físico ganha frequência, contexto e autonomia.',
      body:'Coletores, leitores fixos e, no roadmap, drones RFID confrontam o estoque real com o WMS com muito mais frequência.',
      image:'/media/benefits_detail_bg.png',
      primary:'Explorar Inventory',
      primaryHref:modulePath(locale,'inventory'),
      secondary:'Conheça o roadmap',
      secondaryHref:modulePath(locale,'drone'),
      meta:['Inventário cíclico','RFID','Drone roadmap'],
      index:'04',
      icon:'drone',
    }
  ] : locale==='en' ? [
    {
      eyebrow:'RFID INTELLIGENCE FOR LOGISTICS',
      title:'RFID intelligence for logistics that sees the real world.',
      body:'From receiving to shipping, TagSense turns every physical movement into trusted, auditable and actionable data.',
      image:'/media/cover_detail_bg.png',
      primary:'Book a demo',
      primaryHref:pathFor(locale,'contact'),
      secondary:'Explore the platform',
      secondaryHref:pathFor(locale,'platform'),
      meta:['RFID','Edge','Cloud'],
      index:'01',
      icon:'spark',
    },
    {
      eyebrow:'TAGSENSE DOCK',
      title:'The dock stops being a blind spot.',
      body:'Load, dock and vehicle become one operational decision. Wrong packages are detected before the truck leaves.',
      image:'/media/strategy_detail_bg.png',
      primary:'Explore Dock',
      primaryHref:modulePath(locale,'dock'),
      secondary:'Book a demo',
      secondaryHref:pathFor(locale,'contact'),
      meta:['Real time','Alerts','Audit'],
      index:'02',
      icon:'dock',
    },
    {
      eyebrow:'TAGSENSE TUNNEL',
      title:'Hundreds of reads. One answer: correct or not.',
      body:'The tunnel verifies SKU and quantity for split orders in seconds, reducing dependency on manual verification.',
      image:'/media/platform_detail_bg.png',
      primary:'Explore Tunnel',
      primaryHref:modulePath(locale,'tunnel'),
      secondary:'View platform',
      secondaryHref:pathFor(locale,'platform'),
      meta:['SKU','Quantity','Exceptions'],
      index:'03',
      icon:'tunnel',
    },
    {
      eyebrow:'TAGSENSE INVENTORY + DRONE',
      title:'Physical inventory gains frequency, context and autonomy.',
      body:'Handhelds, fixed readers and, on the roadmap, RFID drones reconcile real inventory with WMS much more frequently.',
      image:'/media/benefits_detail_bg.png',
      primary:'Explore Inventory',
      primaryHref:modulePath(locale,'inventory'),
      secondary:'View roadmap',
      secondaryHref:modulePath(locale,'drone'),
      meta:['Cycle counting','RFID','Drone roadmap'],
      index:'04',
      icon:'drone',
    }
  ] : [
    {
      eyebrow:'INTELIGENCIA RFID PARA LOGÍSTICA',
      title:'Inteligencia RFID para una logística que ve el mundo real.',
      body:'Desde recepción hasta expedición, TagSense transforma cada movimiento físico en datos confiables, auditables y accionables.',
      image:'/media/cover_detail_bg.png',
      primary:'Agendar una demo',
      primaryHref:pathFor(locale,'contact'),
      secondary:'Conocer la plataforma',
      secondaryHref:pathFor(locale,'platform'),
      meta:['RFID','Edge','Cloud'],
      index:'01',
      icon:'spark',
    },
    {
      eyebrow:'TAGSENSE DOCK',
      title:'El muelle deja de ser un punto ciego.',
      body:'La carga, el muelle y el vehículo se convierten en una única decisión operativa. Los volúmenes incorrectos se detectan antes de la salida.',
      image:'/media/strategy_detail_bg.png',
      primary:'Explorar Dock',
      primaryHref:modulePath(locale,'dock'),
      secondary:'Agendar una demo',
      secondaryHref:pathFor(locale,'contact'),
      meta:['Tiempo real','Alertas','Auditoría'],
      index:'02',
      icon:'dock',
    },
    {
      eyebrow:'TAGSENSE TUNNEL',
      title:'Cientos de lecturas. Una respuesta: correcto o no.',
      body:'El túnel verifica SKU y cantidad de pedidos fraccionados en segundos, reduciendo la dependencia de verificación manual.',
      image:'/media/platform_detail_bg.png',
      primary:'Explorar Tunnel',
      primaryHref:modulePath(locale,'tunnel'),
      secondary:'Ver plataforma',
      secondaryHref:pathFor(locale,'platform'),
      meta:['SKU','Cantidad','Excepciones'],
      index:'03',
      icon:'tunnel',
    },
    {
      eyebrow:'TAGSENSE INVENTORY + DRONE',
      title:'El inventario físico gana frecuencia, contexto y autonomía.',
      body:'Colectores, lectores fijos y, en el roadmap, drones RFID comparan el inventario real con el WMS con mucha más frecuencia.',
      image:'/media/benefits_detail_bg.png',
      primary:'Explorar Inventory',
      primaryHref:modulePath(locale,'inventory'),
      secondary:'Ver roadmap',
      secondaryHref:modulePath(locale,'drone'),
      meta:['Inventario cíclico','RFID','Drone roadmap'],
      index:'04',
      icon:'drone',
    }
  ]

  const [active,setActive] = useState(0)
  const [paused,setPaused] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    if (paused) return
    timer.current = window.setInterval(() => {
      setActive(v => (v + 1) % slides.length)
    }, 6500)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [paused, slides.length])

  const previous = () => setActive(v => (v - 1 + slides.length) % slides.length)
  const next = () => setActive(v => (v + 1) % slides.length)

  return (
    <section className="hero-slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero-slider-track">
        {slides.map((slide,i) => {
          const Icon = slide.icon==='dock' ? RadioTower : slide.icon==='tunnel' ? ScanLine : slide.icon==='drone' ? Bot : Sparkles
          return <article key={slide.index} className={`hero-slide ${i===active?'active':''}`} aria-hidden={i!==active}>
            <div className="hero-slide-media"><img src={slide.image} alt="" aria-hidden="true"/></div>
            <div className="hero-slide-overlay"/>
            <div className="container hero-slide-grid">
              <div className="hero-slide-copy">
                <div className="eyebrow">{slide.eyebrow}</div>
                <h1>{slide.title}</h1>
                <p>{slide.body}</p>
                <div className="hero-actions">
                  <Link className="btn btn-primary" to={slide.primaryHref}>{slide.primary}<ArrowRight size={18}/></Link>
                  {slide.secondary && slide.secondaryHref && <Link className="btn btn-glass" to={slide.secondaryHref}>{slide.secondary}</Link>}
                </div>
              </div>
              <aside className="hero-slide-rail">
                <div className="slide-icon"><Icon size={22}/></div>
                <span>TAGSENSE / {slide.index}</span>
                <i/>
                {slide.meta.map(m => <strong key={m}>{m}</strong>)}
              </aside>
            </div>
          </article>
        })}
      </div>

      <div className="hero-slider-ui">
        <div className="container hero-slider-ui-inner">
          <div className="hero-slider-dots" role="tablist" aria-label="Banner navigation">
            {slides.map((s,i) => <button key={s.index} className={i===active?'active':''} onClick={() => setActive(i)} aria-label={`Banner ${i+1}`}><span>{s.index}</span><i/></button>)}
          </div>
          <div className="hero-slider-arrows">
            <button onClick={previous} aria-label="Previous banner"><ArrowLeft size={19}/></button>
            <button onClick={next} aria-label="Next banner"><ArrowRight size={19}/></button>
          </div>
        </div>
      </div>
    </section>
  )
}
