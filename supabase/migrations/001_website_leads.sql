create extension if not exists pgcrypto;

create table if not exists public.website_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  company text not null,
  role text,
  corporate_email text not null,
  phone text,
  operation_type text,
  distribution_centers integer,
  docks integer,
  wms text,
  main_challenge text not null,
  interest text,
  locale text not null default 'pt',
  lead_type text not null default 'commercial' check (lead_type in ('commercial','poc','investor')),
  status text not null default 'new',
  source text not null default 'website',
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  user_agent text,
  crm_external_id text,
  crm_synced_at timestamptz,
  crm_sync_error text
);

create index if not exists website_leads_created_at_idx on public.website_leads (created_at desc);
create index if not exists website_leads_status_idx on public.website_leads (status);
create index if not exists website_leads_email_idx on public.website_leads (corporate_email);
create index if not exists website_leads_type_idx on public.website_leads (lead_type);

alter table public.website_leads enable row level security;

-- No public INSERT policy is created intentionally.
-- Website submissions pass through Cloudflare Pages Functions using the Supabase service role key.
-- Never expose the service role key to the browser.
