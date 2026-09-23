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
  const [companyOpen, setCompanyOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    fn(); window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSolutionsOpen(false)
    setCompanyOpen(false)
  }, [location.pathname])

  const setLocale = (next: Locale) => navigate(switchLocalePath(location.pathname, next))
  const implementationLabel = locale==='pt'?'Implantação':locale==='en'?'Deployment':'Implementación'
  const aboutLabel = locale==='pt'?'Sobre a TagSense':locale==='en'?'About TagSense':'Sobre TagSense'

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav">
          <Link className="brand" to={pathFor(locale, 'home')} aria-label="TagSense home">
            <span className="footer-brand"><img src="/media/logo-tagsense-dark.png" alt="TagSense" /></span>
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            <Link to={pathFor(locale, 'platform')}>{c.nav.platform}</Link>

            <div className="nav-solutions nav-popover" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
              <button className="nav-popover-trigger" onClick={() => setSolutionsOpen(v => !v)}>
                {c.nav.solutions} <ChevronDown size={14}/>
              </button>
              {solutionsOpen && (
                <div className="solutions-menu">
                  <div className="solutions-menu-head">
                    <span>{locale==='pt'?'MÓDULOS':locale==='en'?'MODULES':'MÓDULOS'}</span>
                    <strong>{locale==='pt'?'Inteligência física de ponta a ponta':locale==='en'?'End-to-end physical intelligence':'Inteligencia física de punta a punta'}</strong>
                  </div>
                  <div className="solutions-menu-grid">
                    {modules.map((m: ModuleKey) => (
                      <Link key={m} to={modulePath(locale,m)} className="solutions-menu-item">
                        <strong>TagSense <span className="accent">{c.modules[m].name}</span></strong>
                        <span>{c.modules[m].short}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to={pathFor(locale, 'how')}>{c.nav.how}</Link>
            <Link to={pathFor(locale, 'technology')}>{c.nav.technology}</Link>
            <Link to={pathFor(locale, 'benefits')}>{c.nav.benefits}</Link>

            <div className="nav-popover" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
              <button className="nav-popover-trigger" onClick={() => setCompanyOpen(v => !v)}>
                {c.nav.about} <ChevronDown size={14}/>
              </button>
              {companyOpen && (
                <div className="company-menu">
                  <Link to={pathFor(locale,'about')}><strong>{aboutLabel}</strong><span>{locale==='pt'?'Visão, propósito e posicionamento':locale==='en'?'Vision, purpose and positioning':'Visión, propósito y posicionamiento'}</span></Link>
                  <Link to={pathFor(locale,'implementation')}><strong>{implementationLabel}</strong><span>{locale==='pt'?'POC, Land & Expand e KPIs':locale==='en'?'POC, Land & Expand and KPIs':'POC, Land & Expand y KPIs'}</span></Link>
                  <Link to={pathFor(locale,'investors')}><strong>{c.nav.investors}</strong><span>{locale==='pt'?'Tese pública da TagSense':locale==='en'?'TagSense public thesis':'Tesis pública de TagSense'}</span></Link>
                </div>
              )}
            </div>
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
            <span className="mobile-menu-title">{c.nav.solutions}</span>
            {modules.map((m: ModuleKey) => <Link key={m} to={modulePath(locale,m)}>TagSense {c.modules[m].name}</Link>)}
            <span className="mobile-menu-title">{c.nav.about}</span>
            <Link to={pathFor(locale, 'how')}>{c.nav.how}</Link>
            <Link to={pathFor(locale, 'technology')}>{c.nav.technology}</Link>
            <Link to={pathFor(locale, 'benefits')}>{c.nav.benefits}</Link>
            <Link to={pathFor(locale, 'implementation')}>{implementationLabel}</Link>
            <Link to={pathFor(locale, 'about')}>{aboutLabel}</Link>
            <Link to={pathFor(locale, 'investors')}>{c.nav.investors}</Link>
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
          <img src="/media/tagsense-logo-dark-tight.svg" alt="TagSense" />
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
