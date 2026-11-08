# KaribuTable

Kenya's catering marketplace. Phase 1 (this repo): marketing site, email/password auth with
customer / vendor / admin roles, profile onboarding, and role dashboards. Marketplace features
(vendor listings, search, quotes, bookings, messaging) are Phase 2 and show "coming soon" pages.

Stack: Vite, React 18, TypeScript, Tailwind 3, React Router 7, Supabase.

## Run it

```bash
cp .env.example .env      # add your Supabase URL + anon key
npm install
npm run dev
npm run typecheck && npm run lint && npm run build
```

## Database

Apply the files in `supabase/migrations/` in order (SQL editor or `supabase db push`).

- `…create_profiles_and_role_management.sql` – `profiles` table, RLS, and the role triggers.
  Public sign-up can only ever produce `customer` or `vendor`; `role` has no client write path.
- `…profile_provisioning_and_admin.sql` – creates each profile server-side when an auth user is
  created (works with email confirmation on), forces `email`/`role` from the auth account, and adds
  `promote_to_admin`.

### Creating an admin

Sign up normally, then in the Supabase SQL editor:

```sql
select public.promote_to_admin('you@example.com');
```

Sign out and back in so the new role is picked up.

## Before public launch

- Turn email confirmation on (the app handles it) and set a minimum password length in Supabase.
- Fill in `BRAND.social` and `BRAND.legal` in `src/config/brand.ts`; the footer hides empty links.
  A privacy policy is needed before collecting phone numbers (Kenya Data Protection Act, 2019).
- Add a branded `og:image` in `index.html`.
- Landing-page copy ("serving all 47 counties", "every vendor is reviewed") describes the
  finished marketplace; adjust until vendors exist.
