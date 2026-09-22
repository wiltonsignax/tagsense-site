import { useEffect } from 'react'
import { type Locale } from '../content/site'
import { langTag, switchLocalePath } from '../lib/i18n'

function upsertMeta(selector: string, attrs: Record<string,string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) { el = document.createElement('meta'); document.head.appendChild(el) }
  Object.entries(attrs).forEach(([k,v]) => el!.setAttribute(k,v))
}

function upsertLink(key: string, attrs: Record<string,string>) {
  let el = document.head.querySelector(`link[data-seo="${key}"]`) as HTMLLinkElement | null
  if (!el) { el = document.createElement('link'); el.dataset.seo=key; document.head.appendChild(el) }
  Object.entries(attrs).forEach(([k,v]) => el!.setAttribute(k,v))
}

export function SEO({ locale, title, description, path }: { locale: Locale; title: string; description: string; path: string }) {
  useEffect(() => {
    const base='https://tagsense.com.br'
    document.title=title
    document.documentElement.lang=langTag(locale)
    upsertMeta('meta[name="description"]',{name:'description',content:description})
    upsertMeta('meta[property="og:title"]',{property:'og:title',content:title})
    upsertMeta('meta[property="og:description"]',{property:'og:description',content:description})
    upsertMeta('meta[property="og:type"]',{property:'og:type',content:'website'})
    upsertMeta('meta[property="og:url"]',{property:'og:url',content:`${base}${path}`})
    upsertMeta('meta[property="og:image"]',{property:'og:image',content:`${base}/media/cover_detail_bg.png`})
    upsertMeta('meta[name="twitter:card"]',{name:'twitter:card',content:'summary_large_image'})
    upsertLink('canonical',{rel:'canonical',href:`${base}${path}`})
    ;(['pt','en','es'] as Locale[]).forEach(l => upsertLink(`alt-${l}`,{rel:'alternate',hreflang:langTag(l),href:`${base}${switchLocalePath(path,l)}`}))
    upsertLink('alt-default',{rel:'alternate',hreflang:'x-default',href:`${base}/pt/`})
  },[locale,title,description,path])
  return null
}
