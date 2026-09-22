import { Link } from 'react-router-dom'
import { type Locale } from '../content/site'
import { pathFor } from '../lib/i18n'

export function NotFoundPage({locale}:{locale:Locale}) {
  return <section className="page-hero"><div className="visual"><img src="/media/problem_detail_bg.png" alt=""/></div><div className="container page-hero-copy"><div className="eyebrow">404</div><h1>{locale==='pt'?'Página não encontrada':locale==='en'?'Page not found':'Página no encontrada'}</h1><p>{locale==='pt'?'O endereço pode ter mudado. Volte para a página inicial.':locale==='en'?'The address may have changed. Return to the home page.':'La dirección puede haber cambiado. Vuelva a la página inicial.'}</p><Link className="btn btn-primary" to={pathFor(locale,'home')}>Home</Link></div></section>
}
