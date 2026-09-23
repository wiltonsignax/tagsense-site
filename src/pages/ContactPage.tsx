import { FormEvent, useCallback, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { RadioTower } from 'lucide-react'
import { type Locale } from '../content/site'
import { getCopy } from '../lib/i18n'
import { getUtm } from '../lib/utm'
import { submitLead } from '../lib/leadService'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Turnstile } from '../components/Turnstile'

export function ContactPage({locale}:{locale:Locale}) {
  const c=getCopy(locale); const location=useLocation(); const p=c.pages.contact
  const [token,setToken]=useState(''); const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle'); const [message,setMessage]=useState('')
  const investorDefault=useMemo(()=>new URLSearchParams(location.search).get('type')==='investor',[location.search])
  const onToken=useCallback((v:string)=>setToken(v),[])

  async function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); setStatus('sending'); setMessage('')
    const fd=new FormData(e.currentTarget)
    try {
      await submitLead({
        name:String(fd.get('name')||''), company:String(fd.get('company')||''), role:String(fd.get('role')||''), email:String(fd.get('email')||''), phone:String(fd.get('phone')||''), operationType:String(fd.get('operationType')||''), distributionCenters:Number(fd.get('distributionCenters')||0)||null, docks:Number(fd.get('docks')||0)||null, wms:String(fd.get('wms')||''), mainChallenge:String(fd.get('mainChallenge')||''), interest:String(fd.get('interest')||''), locale, leadType:String(fd.get('interest'))==='investor'?'investor':'commercial', turnstileToken:token, ...getUtm()
      })
      setStatus('success'); setMessage(c.contact.success); e.currentTarget.reset()
    } catch(err) { setStatus('error'); setMessage(locale==='pt'?'Não foi possível enviar agora. Verifique a configuração do backend/Cloudflare e tente novamente.':locale==='en'?'Unable to submit right now. Check the backend/Cloudflare configuration and try again.':'No fue posible enviar ahora. Verifique la configuración del backend/Cloudflare e intente nuevamente.') }
  }

  const f=c.contact.fields
  return <>
    <SEO locale={locale} title={`${p.title} | TagSense`} description={p.subtitle} path={location.pathname}/>
    <PageHero eyebrow={c.nav.contact.toUpperCase()} title={p.title} subtitle={p.subtitle} image="/media/cover_detail_bg.png"/>
    <section className="section"><div className="container contact-layout">
      <aside className="surface contact-aside"><div className="icon-box"><RadioTower/></div><h3>{locale==='pt'?'Uma POC deve provar valor.':locale==='en'?'A POC should prove value.':'Una POC debe demostrar valor.'}</h3><p>{locale==='pt'?'Queremos entender sua operação, escolher o melhor ponto de entrada e definir indicadores antes da implantação.':locale==='en'?'We want to understand your operation, choose the best entry point and define KPIs before deployment.':'Queremos entender su operación, elegir el mejor punto de entrada y definir indicadores antes de la implementación.'}</p><div className="data-chips"><span className="data-chip">Dock</span><span className="data-chip">Tunnel</span><span className="data-chip">Receive</span><span className="data-chip">Inventory</span><span className="data-chip">Drone</span></div></aside>
      <form className="surface" style={{padding:30}} onSubmit={handleSubmit}>
        <div className="form-grid">
          <Field label={f[0]} name="name" required/><Field label={f[1]} name="company" required/><Field label={f[2]} name="role"/><Field label={f[3]} name="email" type="email" required/><Field label={f[4]} name="phone"/><Field label={f[5]} name="operationType"/><Field label={f[6]} name="distributionCenters" type="number"/><Field label={f[7]} name="docks" type="number"/><Field label={f[8]} name="wms"/>
          <div className="field full"><label>{f[9]}</label><textarea name="mainChallenge" required/></div>
          <div className="field full"><label>{f[10]}</label><select name="interest" defaultValue={investorDefault?'investor':'dock'}><option value="dock">TagSense Dock</option><option value="tunnel">TagSense Tunnel</option><option value="receive">TagSense Receive</option><option value="inventory">TagSense Inventory</option><option value="drone">TagSense Drone</option><option value="platform">{locale==='pt'?'Plataforma completa':locale==='en'?'Full platform':'Plataforma completa'}</option><option value="investor">{locale==='pt'?'Investidor':locale==='en'?'Investor':'Inversor'}</option></select></div>
          <div className="field full"><label style={{display:'flex',gap:9,alignItems:'flex-start'}}><input style={{width:'auto',marginTop:3}} type="checkbox" required/> <span>{c.contact.consent}</span></label></div>
          <div className="field full"><Turnstile onToken={onToken}/></div>
          <div className="field full"><button className="btn btn-primary" disabled={status==='sending'}>{status==='sending'?(locale==='pt'?'Enviando...':locale==='en'?'Sending...':'Enviando...'):c.contact.submit}</button>{message&&<div className={`form-status ${status==='error'?'form-error':''}`}>{message}</div>}</div>
        </div>
      </form>
    </div></section>
    <section className="contact-next">
      <div className="container contact-next-grid">
        <div><span>01</span><strong>{locale==='pt'?'Entendemos a operação':locale==='en'?'We understand the operation':'Entendemos la operación'}</strong></div>
        <div><span>02</span><strong>{locale==='pt'?'Definimos a dor e os KPIs':locale==='en'?'We define pain and KPIs':'Definimos dolor y KPIs'}</strong></div>
        <div><span>03</span><strong>{locale==='pt'?'Desenhamos a POC':locale==='en'?'We design the POC':'Diseñamos la POC'}</strong></div>
        <div><span>04</span><strong>{locale==='pt'?'Medimos antes de escalar':locale==='en'?'We measure before scaling':'Medimos antes de escalar'}</strong></div>
      </div>
    </section>
  </>
}

function Field({label,name,type='text',required=false}:{label:string;name:string;type?:string;required?:boolean}) { return <div className="field"><label>{label}</label><input name={name} type={type} required={required}/></div> }
