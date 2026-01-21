# Assets Directory

Folder ini untuk menyimpan assets seperti gambar hero, icons, dan gambar lainnya yang perlu di-import.

## Penjelasan Struktur:

### 📁 `src/assets/` (Folder ini)
- Untuk assets yang perlu **di-import** di component
- Diakses via `import image from '~/filename.png'`
- Contoh: `hero.png`, `web-icon.png`

### 📁 `public/`
- Untuk assets yang diakses **langsung tanpa import**
- Diakses via path `/folder/filename.png`
- Contoh: Logo perusahaan di `/public/logos/`

## Current Assets:
- ✅ `hero.png` - Hero section image
- ✅ `web-icon.png` - Web icon

## Catatan:
Gunakan folder `public/` untuk gambar yang perlu diakses langsung (seperti logo, favicon, dll).
Gunakan folder `assets/` untuk gambar yang di-import dalam component.
