interface Env {
  SUPABASE_URL: string
  SUPABASE_SERVICE_ROLE_KEY: string
  TURNSTILE_SECRET_KEY?: string
}

type LeadPayload = {
  name?: string
  company?: string
  role?: string
  email?: string
  phone?: string
  operationType?: string
  distributionCenters?: number | null
  docks?: number | null
  wms?: string
  mainChallenge?: string
  interest?: string
  locale?: string
  leadType?: 'commercial' | 'poc' | 'investor'
  turnstileToken?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  utmTerm?: string
}

async function validateTurnstile(token: string | undefined, secret: string, ip?: string) {
  if (!token) return false
  const form = new FormData()
  form.append('secret', secret)
  form.append('response', token)
  if (ip) form.append('remoteip', ip)
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form })
  const data = await response.json() as { success?: boolean }
  return Boolean(data.success)
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json() as LeadPayload
    if (!body.name || !body.company || !body.email || !body.mainChallenge) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (!/^\S+@\S+\.\S+$/.test(body.email)) {
      return Response.json({ error: 'Invalid email' }, { status: 400 })
    }

    if (context.env.TURNSTILE_SECRET_KEY) {
      const ip = context.request.headers.get('CF-Connecting-IP') || undefined
      const valid = await validateTurnstile(body.turnstileToken, context.env.TURNSTILE_SECRET_KEY, ip)
      if (!valid) return Response.json({ error: 'Turnstile validation failed' }, { status: 403 })
    }

    if (!context.env.SUPABASE_URL || !context.env.SUPABASE_SERVICE_ROLE_KEY) {
      return Response.json({ error: 'Supabase backend is not configured' }, { status: 503 })
    }

    const payload = {
      name: body.name,
      company: body.company,
      role: body.role || null,
      corporate_email: body.email.toLowerCase(),
      phone: body.phone || null,
      operation_type: body.operationType || null,
      distribution_centers: body.distributionCenters || null,
      docks: body.docks || null,
      wms: body.wms || null,
      main_challenge: body.mainChallenge,
      interest: body.interest || null,
      locale: body.locale || 'pt',
      lead_type: body.leadType || 'commercial',
      utm_source: body.utmSource || null,
      utm_medium: body.utmMedium || null,
      utm_campaign: body.utmCampaign || null,
      utm_content: body.utmContent || null,
      utm_term: body.utmTerm || null,
      source: 'website',
      status: 'new',
      user_agent: context.request.headers.get('user-agent'),
    }

    const response = await fetch(`${context.env.SUPABASE_URL}/rest/v1/website_leads`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'apikey': context.env.SUPABASE_SERVICE_ROLE_KEY,
        'authorization': `Bearer ${context.env.SUPABASE_SERVICE_ROLE_KEY}`,
        'prefer': 'return=minimal',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const details = await response.text()
      console.error('Supabase lead insert failed', response.status, details)
      return Response.json({ error: 'Unable to store lead' }, { status: 502 })
    }

    return Response.json({ ok: true }, { status: 201 })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Unexpected error' }, { status: 500 })
  }
}

export const onRequestGet: PagesFunction<Env> = async () => Response.json({ ok: true, service: 'tagsense-leads' })
