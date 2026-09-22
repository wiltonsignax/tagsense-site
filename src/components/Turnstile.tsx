import { useEffect, useId, useRef } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (el: string | HTMLElement, options: Record<string, unknown>) => string
      remove?: (id: string) => void
    }
  }
}

export function Turnstile({ onToken }:{onToken:(token:string)=>void}) {
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined
  const id = useId().replace(/:/g,'')
  const widgetId = useRef<string | null>(null)

  useEffect(() => {
    if (!siteKey) return
    const render = () => {
      if (!window.turnstile || widgetId.current) return
      widgetId.current = window.turnstile.render(`#${id}`, {
        sitekey: siteKey,
        theme: 'dark',
        callback: (token: string) => onToken(token),
        'expired-callback': () => onToken(''),
        'error-callback': () => onToken(''),
      })
    }
    const existing = document.querySelector('script[data-tagsense-turnstile]') as HTMLScriptElement | null
    if (existing) { render(); existing.addEventListener('load', render); return () => existing.removeEventListener('load', render) }
    const s=document.createElement('script')
    s.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    s.async=true; s.defer=true; s.dataset.tagsenseTurnstile='true'; s.addEventListener('load',render); document.head.appendChild(s)
    return () => s.removeEventListener('load',render)
  }, [id, siteKey, onToken])

  if (!siteKey) return <div className="form-help">Turnstile: configure VITE_TURNSTILE_SITE_KEY no Cloudflare para ativar a proteção anti-spam.</div>
  return <div id={id}/>
}
