export type LeadPayload = {
  name: string
  company: string
  role?: string
  email: string
  phone?: string
  operationType?: string
  distributionCenters?: number | null
  docks?: number | null
  wms?: string
  mainChallenge?: string
  interest?: string
  locale: string
  leadType: 'commercial' | 'poc' | 'investor'
  turnstileToken?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  utmTerm?: string
}

export async function submitLead(payload: LeadPayload) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(data?.error || 'Unable to submit lead')
  }
  return data
}
