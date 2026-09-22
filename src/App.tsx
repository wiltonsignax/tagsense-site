import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { routeSlugs, modules, type Locale, type ModuleKey } from './content/site'
import { HomePage } from './pages/HomePage'
import { PlatformPage } from './pages/PlatformPage'
import { ModulePage } from './pages/ModulePage'
import { HowPage } from './pages/HowPage'
import { TechnologyPage } from './pages/TechnologyPage'
import { BenefitsPage } from './pages/BenefitsPage'
import { ImplementationPage } from './pages/ImplementationPage'
import { InvestorsPage } from './pages/InvestorsPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'

function LocaleApp({locale}:{locale:Locale}) {
  const s=routeSlugs[locale]
  return <Layout locale={locale}>
    <Routes>
      <Route index element={<HomePage locale={locale}/>}/>
      <Route path={s.platform} element={<PlatformPage locale={locale}/>}/>
      <Route path={s.how} element={<HowPage locale={locale}/>}/>
      <Route path={s.technology} element={<TechnologyPage locale={locale}/>}/>
      <Route path={s.benefits} element={<BenefitsPage locale={locale}/>}/>
      <Route path={s.implementation} element={<ImplementationPage locale={locale}/>}/>
      <Route path={s.investors} element={<InvestorsPage locale={locale}/>}/>
      <Route path={s.about} element={<AboutPage locale={locale}/>}/>
      <Route path={s.contact} element={<ContactPage locale={locale}/>}/>
      {modules.map((m:ModuleKey)=><Route key={m} path={`${s.modules}/${m}`} element={<ModulePage locale={locale} module={m}/>}/>)}
      <Route path="*" element={<NotFoundPage locale={locale}/>}/>
    </Routes>
  </Layout>
}

export default function App() {
  return <Routes>
    <Route path="/" element={<Navigate to="/pt/" replace/>}/>
    <Route path="/pt/*" element={<LocaleApp locale="pt"/>}/>
    <Route path="/en/*" element={<LocaleApp locale="en"/>}/>
    <Route path="/es/*" element={<LocaleApp locale="es"/>}/>
    <Route path="*" element={<Navigate to="/pt/" replace/>}/>
  </Routes>
}
