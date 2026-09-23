import { useLocation } from 'react-router-dom'
import { BarChart3, Boxes, Code2, Factory } from 'lucide-react'
import { useMemo, useState } from 'react'
import { type Locale } from '../content/site'
import { getCopy } from '../lib/i18n'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'\nimport { FeatureBanner } from '../components/FeatureBanner'

export function BenefitsPage({locale}:{locale:Locale}) {
  const c=getCopy(locale); const location=useLocation(); const p=c.pages.benefits
  const personas: Array<[string, string[]]> = locale==='pt'?[
    ['Diretor de Logística',['Redução de risco e perdas','KPIs e rastreabilidade','Visão consolidada da operação']],
    ['Gerente de CD',['Visibilidade em tempo real','Produtividade e gestão por exceções','Menos conferência manual']],
    ['TI',['Integração com sistemas existentes','Arquitetura agnóstica','Edge + Cloud com responsabilidades separadas']],
    ['Operação',['Alertas claros no momento da divergência','Menos retrabalho','Processos mais simples e auditáveis']]
  ]:locale==='en'?[
    ['Logistics Director',['Lower risk and loss exposure','KPIs and traceability','Consolidated operational visibility']],
    ['DC Manager',['Real-time visibility','Productivity and exception management','Less manual verification']],
    ['IT',['Integration with existing systems','Agnostic architecture','Separated Edge + Cloud responsibilities']],
    ['Operations',['Clear alerts at the moment of discrepancy','Less rework','Simpler, auditable processes']]
  ]:[
    ['Director de Logística',['Reducción de riesgo y pérdidas','KPIs y trazabilidad','Visión consolidada de la operación']],
    ['Gerente de CD',['Visibilidad en tiempo real','Productividad y gestión por excepciones','Menos conferencia manual']],
    ['TI',['Integración con sistemas existentes','Arquitectura agnóstica','Responsabilidades separadas entre Edge + Cloud']],
    ['Operación',['Alertas claros al detectar divergencias','Menos retrabajo','Procesos más simples y auditables']]
  ]
  const icons=[BarChart3,Boxes,Code2,Factory]
  return <>
    <SEO locale={locale} title={`${p.title} | TagSense`} description={p.subtitle} path={location.pathname}/>
    <PageHero eyebrow={c.nav.benefits.toUpperCase()} title={p.title} subtitle={p.subtitle} image="/media/benefits_detail_bg.png"/>
    <section className="section"><div className="container"><div className="grid grid-2">{personas.map((x,i)=>{const I=icons[i];return <div className="card persona" key={x[0]}><div className="icon-box"><I/></div><h3>{x[0]}</h3><ul className="check-list">{x[1].map(v=><li key={v}>• {v}</li>)}</ul></div>})}</div></div></section>
    <FeatureBanner eyebrow=\"OPERATIONAL IMPACT\" title={locale==='pt'?'Menos exceção escondida. Mais decisão com evidência.':locale==='en'?'Fewer hidden exceptions. More evidence-based decisions.':'Menos excepciones ocultas. Más decisiones con evidencia.'} body={locale==='pt'?'A TagSense atua onde erro, retrabalho e baixa visibilidade viram custo. O objetivo é transformar esses pontos em indicadores mensuráveis.':locale==='en'?'TagSense acts where errors, rework and low visibility become cost. The goal is to turn those points into measurable indicators.':'TagSense actúa donde errores, retrabajo y baja visibilidad se convierten en costo. El objetivo es transformar esos puntos en indicadores medibles.'} image=\"/media/benefits_detail_bg.png\" href=\"#roi\" cta={locale==='pt'?'Simular exposição operacional':locale==='en'?'Estimate operational exposure':'Simular exposición operativa'} icon={BarChart3} meta={['Errors','Time','Rework','Traceability']}/><div id=\"roi\"><RoiCalculator locale={locale}/></div>
  </>
}

function RoiCalculator({locale}:{locale:Locale}) {
  const [errors,setErrors]=useState(0),[cost,setCost]=useState(0),[hours,setHours]=useState(0),[hourly,setHourly]=useState(0)
  const result=useMemo(()=>errors*cost+hours*hourly,[errors,cost,hours,hourly])
  const labels=locale==='pt'?['Erros/mês','Custo médio por erro','Horas de conferência/mês','Custo/hora']:locale==='en'?['Errors/month','Average cost per error','Verification hours/month','Hourly cost']:['Errores/mes','Costo medio por error','Horas de verificación/mes','Costo/hora']
  const formatter=new Intl.NumberFormat(locale==='pt'?'pt-BR':locale==='en'?'en-US':'es-ES',{style:'currency',currency:locale==='en'?'USD':'BRL',maximumFractionDigits:0})
  return <section className="section alt"><div className="container"><div className="section-head"><div><div className="eyebrow">ROI</div><h2>{locale==='pt'?'Organize as hipóteses do seu processo.':locale==='en'?'Structure your operational assumptions.':'Organice las hipótesis de su proceso.'}</h2></div><p>{locale==='pt'?'Calculadora visual ilustrativa. O resultado não é promessa de economia e depende dos dados informados pelo cliente.':locale==='en'?'Illustrative calculator. The result is not a savings promise and depends on customer inputs.':'Calculadora ilustrativa. El resultado no es una promesa de ahorro y depende de los datos del cliente.'}</p></div><div className="roi-layout"><div className="card"><div className="form-grid"><NumberField label={labels[0]} value={errors} onChange={setErrors}/><NumberField label={labels[1]} value={cost} onChange={setCost}/><NumberField label={labels[2]} value={hours} onChange={setHours}/><NumberField label={labels[3]} value={hourly} onChange={setHourly}/></div></div><div className="surface roi-result"><div><div className="roi-value">{formatter.format(result)}</div><p>{locale==='pt'?'Exposição operacional informada':locale==='en'?'Input operational exposure':'Exposición operativa informada'}</p><span className="chip"><i/>{locale==='pt'?'Estimativa ilustrativa':locale==='en'?'Illustrative estimate':'Estimación ilustrativa'}</span></div></div></div></div></section>
}
function NumberField({label,value,onChange}:{label:string;value:number;onChange:(v:number)=>void}){return <div className="field"><label>{label}</label><input type="number" min="0" value={value} onChange={e=>onChange(Number(e.target.value))}/></div>}
