import { site, type Locale, routeSlugs, type ModuleKey } from '../content/site'

export function getCopy(locale: Locale) {
  return site[locale] as any
}

export function localeFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0]
  return first === 'en' || first === 'es' || first === 'pt' ? first : 'pt'
}

export function pathFor(locale: Locale, key: keyof typeof routeSlugs.pt) {
  const slug = routeSlugs[locale][key]
  return slug ? `/${locale}/${slug}` : `/${locale}/`
}

export function modulePath(locale: Locale, module: ModuleKey) {
  return `/${locale}/${routeSlugs[locale].modules}/${module}`
}

export function switchLocalePath(pathname: string, next: Locale): string {
  const current = localeFromPath(pathname)
  const parts = pathname.split('/').filter(Boolean)
  const rest = parts.slice(1)
  if (!rest.length) return `/${next}/`

  const currentRoutes = routeSlugs[current]
  const nextRoutes = routeSlugs[next]
  const first = rest[0]
  const routeKey = Object.keys(currentRoutes).find(k => currentRoutes[k] === first)
  if (routeKey) {
    rest[0] = nextRoutes[routeKey]
  }
  return `/${next}/${rest.join('/')}`
}

export function langTag(locale: Locale) {
  return locale === 'pt' ? 'pt-BR' : locale
}
