import { useEffect, useState, type ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { modules, type Locale, type ModuleKey, localeLabels } from '../content/site'
import { getCopy, modulePath, pathFor, switchLocalePath } from '../lib/i18n'

export function Layout({ locale, children }: { locale: Locale; children: ReactNode }) {
  const c = getCopy(locale)
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    fn(); window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setMobileOpen(false), [location.pathname])

  const setLocale = (next: Locale) => navigate(switchLocalePath(location.pathname, next))

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav">
          <Link className="brand" to={pathFor(locale, 'home')} aria-label="TagSense home">
            <img src="/media/tagsense-logo-v2.webp" alt="TagSense" />
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            <Link to={pathFor(locale, 'platform')}>{c.nav.platform}</Link>
            <div className="nav-solutions" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)} style={{position:'relative'}}>
              <button onClick={() => setSolutionsOpen(v => !v)} style={{background:'none',border:0,color:'inherit',display:'flex',alignItems:'center',gap:4,padding:0}}>
                {c.nav.solutions} <ChevronDown size={14}/>
              </button>
              {solutionsOpen && (
                <div style={{position:'absolute',top:'28px',left:'-20px',width:340,padding:12,borderRadius:18,background:'rgba(5,9,16,.98)',border:'1px solid rgba(255,255,255,.08)',boxShadow:'var(--shadow)'}}>
                  {modules.map((m: ModuleKey) => (
                    <Link key={m} to={modulePath(locale,m)} style={{display:'grid',gridTemplateColumns:'100px 1fr',gap:10,padding:'10px 11px',borderRadius:12}}>
                      <strong style={{color:'#fff'}}>TagSense {c.modules[m].name}</strong>
                      <span style={{color:'#7f8da3',fontSize:'.8rem'}}>{c.modules[m].short}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to={pathFor(locale, 'how')}>{c.nav.how}</Link>
            <Link to={pathFor(locale, 'technology')}>{c.nav.technology}</Link>
            <Link to={pathFor(locale, 'benefits')}>{c.nav.benefits}</Link>
            <Link to={pathFor(locale, 'investors')}>{c.nav.investors}</Link>
            <Link to={pathFor(locale, 'about')}>{c.nav.about}</Link>
          </nav>

          <div className="nav-actions">
            <div className="lang-switch" aria-label="Language selector">
              {(['pt','en','es'] as Locale[]).map(l => (
                <button key={l} className={l===locale?'active':''} onClick={() => setLocale(l)}>{localeLabels[l]}</button>
              ))}
            </div>
            <Link className="btn btn-primary" to={pathFor(locale, 'contact')}>{c.nav.demo}</Link>
            <button className="mobile-toggle" onClick={() => setMobileOpen(v=>!v)} aria-label="Open menu">{mobileOpen?<X/>:<Menu/>}</button>
          </div>

          <div className={`mobile-menu ${mobileOpen?'open':''}`}>
            <Link to={pathFor(locale, 'platform')}>{c.nav.platform}</Link>
            {modules.map((m: ModuleKey) => <Link key={m} to={modulePath(locale,m)}>TagSense {c.modules[m].name}</Link>)}
            <Link to={pathFor(locale, 'how')}>{c.nav.how}</Link>
            <Link to={pathFor(locale, 'technology')}>{c.nav.technology}</Link>
            <Link to={pathFor(locale, 'benefits')}>{c.nav.benefits}</Link>
            <Link to={pathFor(locale, 'investors')}>{c.nav.investors}</Link>
            <Link to={pathFor(locale, 'about')}>{c.nav.about}</Link>
            <Link to={pathFor(locale, 'contact')}>{c.nav.demo}</Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <Footer locale={locale}/>
    </>
  )
}

function Footer({locale}:{locale:Locale}) {
  const c = getCopy(locale)
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src="/media/tagsense-logo-v2.webp" alt="TagSense" />
          <p>{c.hero.subtitle}</p>
          <small>© {new Date().getFullYear()} TagSense.</small>
        </div>
        <div>
          <h4>{c.nav.solutions}</h4>
          {modules.map((m:ModuleKey)=><Link key={m} to={modulePath(locale,m)}>TagSense {c.modules[m].name}</Link>)}
        </div>
        <div>
          <h4>{c.nav.platform}</h4>
          <Link to={pathFor(locale,'how')}>{c.nav.how}</Link>
          <Link to={pathFor(locale,'technology')}>{c.nav.technology}</Link>
          <Link to={pathFor(locale,'benefits')}>{c.nav.benefits}</Link>
          <Link to={pathFor(locale,'implementation')}>{locale==='pt'?'Implantação':locale==='en'?'Deployment':'Implementación'}</Link>
        </div>
        <div>
          <h4>TagSense</h4>
          <Link to={pathFor(locale,'investors')}>{c.nav.investors}</Link>
          <Link to={pathFor(locale,'about')}>{c.nav.about}</Link>
          <Link to={pathFor(locale,'contact')}>{c.nav.contact}</Link>
        </div>
      </div>
    </footer>
  )
}
