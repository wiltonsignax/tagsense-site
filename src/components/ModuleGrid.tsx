import type { ComponentType } from 'react'
import { ArrowRight, Boxes, Bot, ChartNoAxesCombined, Container, PackageCheck, RadioTower, ScanLine, Unplug } from 'lucide-react'
import { Link } from 'react-router-dom'
import { modules, type Locale, type ModuleKey } from '../content/site'
import { getCopy, modulePath } from '../lib/i18n'

const icons: Record<ModuleKey, ComponentType<{size?:number}>> = {
  receive: PackageCheck,
  inventory: Boxes,
  drone: Bot,
  tunnel: ScanLine,
  dock: RadioTower,
  load: Container,
  connect: Unplug,
  analytics: ChartNoAxesCombined,
}

export function ModuleGrid({locale}:{locale:Locale}) {
  const c = getCopy(locale)
  return <div className="grid grid-4">
    {modules.map((m:ModuleKey)=>{
      const Icon=icons[m]
      return <Link className="card module-card" key={m} to={modulePath(locale,m)}>
        <div className="icon-box"><Icon size={25}/></div>
        <h3>TagSense <span className="accent">{c.modules[m].name}</span></h3>
        <p>{c.modules[m].short}</p>
        <div className="module-link">{locale==='pt'?'Conheça o módulo':locale==='en'?'Explore module':'Conoce el módulo'} <ArrowRight size={16}/></div>
      </Link>
    })}
  </div>
}
