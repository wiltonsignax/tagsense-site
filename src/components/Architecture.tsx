import { ArrowDownUp, Cloud, DatabaseZap, RadioTower, ServerCog } from 'lucide-react'
import { type Locale } from '../content/site'
import { getCopy } from '../lib/i18n'

export function Architecture({locale}:{locale:Locale}) {
  const a=getCopy(locale).architecture
  return <div className="architecture">
    <div className="arch-box"><DatabaseZap size={32} style={{color:'var(--blue-2)',marginBottom:12}}/><strong>{a.systems}</strong><p>{locale==='pt'?'Pedidos · Notas · Cargas · Status':locale==='en'?'Orders · Invoices · Loads · Status':'Pedidos · Notas · Cargas · Estados'}</p></div>
    <div className="arch-stack">
      <div className="arch-box"><ArrowDownUp size={26} style={{color:'var(--blue-2)',marginBottom:8}}/><strong>TagSense <span className="accent">Connect</span></strong><p>{a.connect}</p></div>
      <div className="arch-box"><Cloud size={26} style={{color:'var(--blue-2)',marginBottom:8}}/><strong>TagSense <span className="accent">Cloud</span></strong><p>{a.cloud}</p></div>
      <div className="arch-box"><ServerCog size={26} style={{color:'var(--blue-2)',marginBottom:8}}/><strong>TagSense <span className="accent">Edge</span></strong><p>{a.edge}</p></div>
    </div>
    <div className="arch-box"><RadioTower size={32} style={{color:'var(--blue-2)',marginBottom:12}}/><strong>{locale==='pt'?'Dispositivos RFID':locale==='en'?'RFID devices':'Dispositivos RFID'}</strong><p>{a.devices}</p></div>
  </div>
}
