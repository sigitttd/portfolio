# Portfolio Website — Content Documentation

Panduan lengkap untuk mengelola dan memperbarui konten website portfolio ini.

---

## Satu File, Semua Konten

> **Hampir semua konten website dikendalikan dari satu file:**
> ```
> data/portfolioData.ts
> ```

File ini berisi 4 export utama:
- `personalInfo` — nama, bio, email, sosmed, dll
- `projects` — daftar semua proyek
- `workExperience` — pengalaman kerja
- `education` — riwayat pendidikan
- `skills` — kategori dan daftar skill

---

## 1. Mengubah Informasi Pribadi (Personal Info)

Buka `data/portfolioData.ts`, cari bagian `export const personalInfo`.

```ts
export const personalInfo: PersonalInfo = {
  name: 'Rahmat Sigit Hidayat',       // Nama lengkap
  title: 'Data Analyst',               // Jabatan/title
  tagline: 'Turning raw data...',      // Tagline di Hero section
  about: 'As a Data Analyst...',       // Bio panjang di About section
  email: 'sigitz.dayat@gmail.com',     // Email (untuk tombol & contact)
  phone: '6281246144028',              // Nomor HP tanpa '+' di depan
  location: 'Surabaya, East Java...',  // Lokasi
  linkedin: 'https://linkedin.com/in/rahmat-sigit',
  github: 'https://github.com/sigitttd',
  tableau: 'https://public.tableau.com/app/profile/rahmat.sigit',
}
```

Perubahan di sini akan otomatis muncul di: Hero section, About section, dan Contact section.

---

## 2. Menambah atau Mengubah Project

### Struktur dasar project

```ts
{
  id: 'nama-unik-kebab-case',        // ID unik, tidak boleh sama dengan project lain
  slug: 'nama-unik-kebab-case',      // Sama dengan id, digunakan untuk URL: /projects/[slug]
  type: 'data',                      // 'data' atau 'creative'
  title: 'Judul Project',
  description: 'Deskripsi singkat...', // Muncul di card
  content: 'Penjelasan panjang...',    // Muncul di halaman detail project
  techTags: ['Python', 'SQL'],         // Tech stack / tag
  imageUrl: '/pictinporto/nama-file.png', // Path gambar dari folder public/
}
```

### Field opsional (link-link eksternal)

```ts
githubUrl: 'https://github.com/...',
liveUrl: 'https://...',
publicationUrl: 'https://ieeexplore.ieee.org/...',
documentationUrl: 'https://drive.google.com/...',
youtubeUrl: 'https://youtu.be/...',
```

### Embed dashboard (opsional)

```ts
// Untuk Looker Studio / iframe biasa:
embedUrl: 'https://datastudio.google.com/embed/...',

// Untuk Tableau (pakai HTML embed dari Tableau Public):
embedHtml: `<div class='tableauPlaceholder'...>...</div>`,
embedHeightDesktop: 1044,   // Tinggi dashboard dalam pixel (desktop)
embedHeightMobile: 2477,    // Tinggi dashboard dalam pixel (mobile)

// Untuk embed dokumen Google Drive (PDF, presentasi):
embedDocs: 'https://drive.google.com/file/d/.../preview',
```

### Content berupa array teks (untuk project dengan narasi panjang)

```ts
content: [
  { type: 'text', value: 'Paragraf pertama...' },
  { type: 'text', value: 'Paragraf kedua...' },
  // Bisa juga sisipkan gambar:
  { type: 'image', src: '/pictinporto/nama-file.png', alt: 'Deskripsi gambar' },
],
```

### Langkah lengkap menambah project baru

1. **Siapkan gambar** — Letakkan file gambar di folder `public/pictinporto/`
2. **Buka** `data/portfolioData.ts`
3. **Tambahkan object baru** di dalam array `projects`, contoh:

```ts
{
  id: 'analisis-penjualan-2025',
  slug: 'analisis-penjualan-2025',
  type: 'data' as const,
  title: 'Analisis Tren Penjualan 2025',
  description: 'Menganalisis tren penjualan Q1-Q4 2025 menggunakan Python dan Power BI.',
  content: 'Proyek ini bertujuan untuk...',
  techTags: ['Python', 'Power BI', 'EDA'],
  imageUrl: '/pictinporto/sales2025.png',
  documentationUrl: 'https://drive.google.com/...',
},
```

4. **Urutan project di array** menentukan urutan tampil di website:
   - 3 project pertama type `data` → muncul sebagai **Featured** di home
   - Project setelahnya → muncul di carousel bawah (tab Data/Creative)
   - Semua project tampil di halaman `/projects`

### Menghapus project

Cukup hapus seluruh object `{ ... }` yang sesuai dari array `projects`.

---

## 3. Menambah atau Mengubah Pengalaman Kerja

Buka `data/portfolioData.ts`, cari `export const workExperience`.

```ts
{
  type: 'work',                          // Jangan diubah
  role: 'Data Analyst',                  // Jabatan/posisi
  organization: 'Nama Perusahaan',       // Nama perusahaan/institusi
  location: 'Kota, Indonesia',
  startDate: 'Jan 2025',                 // Format: Mon YYYY
  endDate: 'Present',                    // Atau 'Des 2025'
  description: [
    'Poin deskripsi pertama.',
    'Poin deskripsi kedua.',
  ],
},
```

Urutan dalam array = urutan tampil di website (paling atas = terbaru).

---

## 4. Menambah atau Mengubah Pendidikan

Buka `data/portfolioData.ts`, cari `export const education`.

```ts
{
  type: 'education',                     // Jangan diubah
  degree: 'Bachelor of Data Science',   // Gelar / jurusan
  institution: 'Telkom University',      // Nama institusi
  location: 'Surabaya, Indonesia',
  startDate: 'Sep 2021',
  endDate: 'Aug 2025',
  gpa: '3.96',                           // Opsional
  honors: 'Summa Cum Laude',             // Opsional
  description: [
    'Deskripsi poin 1.',
    'Deskripsi poin 2.',
  ],
},
```

---

## 5. Mengubah Skills

Buka `data/portfolioData.ts`, cari `export const skills`.

```ts
{
  category: 'Nama Kategori',      // Judul kartu skill
  skills: [
    'Skill A',
    'Skill B',
    'Skill C',
  ],
},
```

Untuk menambah kategori baru, tambahkan object baru ke array `skills`. Untuk mengubah icon di SkillsSection, edit peta `CATEGORY_ICONS` di `components/sections/SkillsSection.tsx`.

---

## 6. Mengganti atau Memperbarui CV

File CV tersimpan di:
```
public/cvporto/Curriculum_Vitae_Rahmat_Sigit_Hidayat.pdf
```

**Cara update CV:**
- Ganti file PDF di folder tersebut (gunakan nama file yang sama agar tidak perlu mengubah kode), **atau**
- Letakkan file baru dengan nama berbeda, lalu update path-nya di `components/sections/AboutSection.tsx`:

```ts
// Cari baris ini di contactLinks array:
getHref: (_info) => '/cvporto/Curriculum_Vitae_Rahmat_Sigit_Hidayat.pdf',
// Ubah filename sesuai nama file baru
```

---

## 7. Menambah Gambar Project

1. Letakkan file gambar (`.png`, `.jpg`, `.webp`) di folder:
   ```
   public/pictinporto/
   ```
2. Di `portfolioData.ts`, referensikan dengan path relatif dari `public/`:
   ```ts
   imageUrl: '/pictinporto/nama-file.png',
   ```

Format yang direkomendasikan: PNG atau WebP, rasio 16:9 atau 4:3, lebar minimal 800px.

---

## 8. Mengubah Metadata SEO

Buka `app/layout.tsx` untuk mengubah title dan description global:

```ts
export const metadata: Metadata = {
  title: 'Rahmat Sigit Hidayat — Data Analyst',
  description: 'Portfolio of Rahmat Sigit Hidayat...',
  // ...
}
```

Metadata per halaman project di-generate otomatis dari data `project.title` dan `project.description` di `portfolioData.ts`.

---

## 9. Mengubah Warna / Design Token

Semua warna custom dan shadow ada di `tailwind.config.ts`:

```ts
colors: {
  'orbit-navy':    '#0A1024',   // Background utama
  'electric-blue': '#0066FF',   // Warna aksen utama
  'cyan-accent':   '#00D4FF',   // Aksen sekunder
  'surface':       '#0F1A35',   // Background kartu
  'text-primary':  '#F0F4FF',   // Teks utama
  'text-muted':    '#8899BB',   // Teks sekunder
  // ...
}
```

---

## 10. Mengubah Navigasi

Link navigasi ada di `components/layout/Navbar.tsx`:

```ts
const NAV_LINKS = [
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  // ...
]
```

`id` harus cocok dengan `id` prop yang diberikan ke `SectionWrapper` di masing-masing section.

---

## Ringkasan: File Mana yang Harus Diubah?

| Tujuan | File |
|--------|------|
| Ubah nama, bio, email, sosmed | `data/portfolioData.ts` → `personalInfo` |
| Tambah/hapus/edit project | `data/portfolioData.ts` → `projects` array |
| Tambah/edit pengalaman kerja | `data/portfolioData.ts` → `workExperience` array |
| Tambah/edit pendidikan | `data/portfolioData.ts` → `education` array |
| Tambah/edit skill | `data/portfolioData.ts` → `skills` array |
| Ganti file CV/PDF | `public/cvporto/` (ganti file) |
| Tambah gambar project | `public/pictinporto/` (letakkan file baru) |
| Ubah warna / design token | `tailwind.config.ts` |
| Ubah metadata SEO global | `app/layout.tsx` |
| Ubah link navigasi navbar | `components/layout/Navbar.tsx` |
| Ubah tampilan section tertentu | `components/sections/[NamaSection].tsx` |
| Ubah layout halaman project detail | `app/projects/[slug]/ProjectDetailClient.tsx` |
