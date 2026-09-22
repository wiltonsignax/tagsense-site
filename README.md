# TagSense Website

Website institucional/comercial da TagSense, construído em React + TypeScript + Vite para Cloudflare Pages, com backend de leads em Cloudflare Pages Functions e Supabase.

## Arquitetura

- Frontend: React + TypeScript + Vite
- Hospedagem: Cloudflare Pages
- API de leads: Cloudflare Pages Functions (`/api/leads`)
- Anti-spam: Cloudflare Turnstile
- Banco: Supabase Postgres
- Idiomas: Português, Inglês e Espanhol com URLs indexáveis
- CRM: preparado para integração futura a partir da tabela `website_leads`

## URLs principais

- `/pt/`, `/en/`, `/es/`
- Plataforma: `/pt/plataforma`, `/en/platform`, `/es/plataforma`
- Módulos: `/pt/modulos/dock`, `/en/modules/dock`, `/es/modulos/dock`, etc.
- Investidores: `/pt/investidores`, `/en/investors`, `/es/inversores`

## Desenvolvimento local

```bash
npm install
npm run dev
```

Para testar somente o frontend, o formulário pode abrir normalmente, mas o submit exige a Function `/api/leads` e variáveis do Supabase.

## Build

```bash
npm run build
```

Saída: `dist/`

## Supabase

1. Crie um projeto no Supabase.
2. Execute `supabase/migrations/001_website_leads.sql` no SQL Editor.
3. Copie a Project URL e a Service Role Key.
4. A Service Role Key deve ficar apenas nas secrets da Cloudflare. Nunca use `VITE_` nessa chave.

## Cloudflare Pages

Crie um projeto Pages conectado ao repositório Git:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22+

Variáveis de build:

- `VITE_TURNSTILE_SITE_KEY`

Secrets/variáveis server-side para Pages Functions:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `TURNSTILE_SECRET_KEY`

O arquivo `public/_redirects` já garante fallback SPA para rotas diretas.

## Turnstile

1. No painel Cloudflare, crie um widget Turnstile para `tagsense.com.br`.
2. Configure a Site Key em `VITE_TURNSTILE_SITE_KEY`.
3. Configure a Secret Key em `TURNSTILE_SECRET_KEY` nas variáveis server-side.

Se a secret não estiver configurada, a Function não exige Turnstile (útil em desenvolvimento). Em produção, configure ambas.

## Domínio

Depois do deploy, em Cloudflare Pages > Custom domains, adicione:

- `tagsense.com.br`
- opcionalmente `www.tagsense.com.br` com redirecionamento para o domínio principal.

## CRM futuro

A tabela já guarda:

- lead comercial / investidor
- UTM source, medium, campaign, content e term
- status
- campos `crm_external_id`, `crm_synced_at` e `crm_sync_error`

A futura integração pode ser feita na própria Function após inserir no Supabase, ou por um Worker/cron/webhook separado para manter o site desacoplado do CRM.
