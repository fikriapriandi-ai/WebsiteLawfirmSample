# Feri Law Firm — Website (Sample)

Front-end sample (HTML/CSS/JS, tanpa backend). Buka `index.html` atau deploy ke GitHub Pages.

## Fitur
WhatsApp floating + Chat Konsultasi, profil tim, testimoni (slider), FAQ, artikel, booking (via WhatsApp), checklist dokumen (PDF), pencarian kasus, dark mode, ID/EN, video background.

## Struktur
- `index.html` — halaman utama
- `css/` — `styles.css` (dasar), `features.css` (fitur baru, dark mode, responsif)
- `js/` — `data.js` (data kasus), `script.js` (interaksi dasar), `features.js` (fitur baru), `checklist.js` (data checklist)
- `assets/` — ikon, PDF checklist, video hero

## Yang perlu diganti sebelum live
- Data tim, testimoni, dan artikel di `js/features.js` masih **placeholder**
- Nomor WhatsApp: konstanta `WA` di `js/features.js`
- Alamat peta: iframe di `index.html`
- Form kontak belum terhubung ke backend

## Deploy GitHub Pages
Settings → Pages → Branch `main` / folder `/ (root)`.
