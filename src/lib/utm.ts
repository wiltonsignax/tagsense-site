export function getUtm() {
  const q = new URLSearchParams(window.location.search)
  return {
    utmSource: q.get('utm_source') || undefined,
    utmMedium: q.get('utm_medium') || undefined,
    utmCampaign: q.get('utm_campaign') || undefined,
    utmContent: q.get('utm_content') || undefined,
    utmTerm: q.get('utm_term') || undefined,
  }
}
