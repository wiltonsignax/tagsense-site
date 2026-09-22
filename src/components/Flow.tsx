import { type Locale } from '../content/site'
import { getCopy } from '../lib/i18n'

export function Flow({locale}:{locale:Locale}) {
  const steps=getCopy(locale).flow.steps
  return <div className="flow-scroller"><div className="flow">
    {steps.map((s:[string,string],i:number)=><div className="flow-step" key={s[0]}>
      <div className="flow-index">{String(i+1).padStart(2,'0')}</div>
      <h4>{s[0]}</h4><p>{s[1]}</p>
    </div>)}
  </div></div>
}
