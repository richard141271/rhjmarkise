# rhjmarkise
# RHJ / RHJ Norge AS — Nettside (GitHub Pages)

Dette repo inneholder statiske nettsider flyttet fra DinStudio over til GitHub Pages.

## Struktur
- `index.html` — Forsiden
- `omoss.html` — Om oss
- `kontakt.html` — Kontaktside
- `bilder.html` — Bildegalleri
- `assets/` — Bilder, logoer og annen media

## GitHub Pages
Repoet publiseres via GitHub Pages:

- Branch: `main`
- Folder: `/` (root)
- Domene: styres via DNS i Domeneshop

## DNS (for GitHub Pages)
For å bruke eget domene må følgende IP-adresser være satt som A-record:

185.199.108.153  
185.199.109.153  
185.199.110.153  
185.199.111.153  

`www` bør settes som CNAME til:  
`richard141271.github.io`

## HTTPS
GitHub utsteder sertifikat automatisk når DNS er riktig.  
I repo → Settings → Pages → aktiver "Enforce HTTPS" når den blir tilgjengelig.

## Epost (MX)
Epost for domenet styres av MX-record.  
Repoet påvirker ikke epost, men DNS må være korrekt satt:

- Nåværende MX: `mail.dinstudio.no`
- Endre til ny leverandør hvis du flytter epostløsning.

## Kontakt
Epost brukt på nettsiden: `post@rhjmarkise.no`

# RHJMarkise.no

Minimal, modulær nettside for RHJ AS. Legg til bilder i `assets/img/`. Deploy til GitHub Pages ved å pushe til `main` (eller bruk Netlify / Vercel).

Setup:
1. Legg logo i assets/img/rhj-logo.png
2. Bestem kontakthåndtering: Formspree eller Netlify Forms
3. Pusha til GitHub, gå til Settings → Pages, velg branch `main`, / (root).

Komme i gang: rediger innhold i index.html, about.html, services.html, prices.html, gallery.html, contact.html.
