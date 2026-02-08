# Ecommerce Landing Page

Sebuah landing page ecommerce modern yang dibangun dengan HTML, CSS, dan JavaScript vanilla. Website ini menampilkan produk elektronik dan fashion dengan fitur-fitur interaktif.

## 📋 Daftar Isi

- [Fitur](#fitur)
- [Struktur Folder](#struktur-folder)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Komponen](#komponen)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)

## ✨ Fitur

### Navbar
- ✅ Fixed navigation bar dengan logo
- ✅ Menu responsif dengan hamburger menu
- ✅ Navbar auto-hide saat scroll down
- ✅ Sign In & Sign Up buttons

### Home Section
- ✅ Full-screen hero section dengan background image
- ✅ Search bar untuk mencari produk
- ✅ Title dan deskripsi welcome

### Features Section
- ✅ 3 feature cards (Free Shipping, Secure Payment, 14 Day Returns)
- ✅ Icon emoji dan deskripsi
- ✅ Layout responsif (3 kolom desktop, 1 kolom mobile)

### Products Section
- ✅ Grid layout untuk menampilkan produk
- ✅ Product card dengan gambar, judul, rating, dan harga
- ✅ "Load More" button untuk navigasi ke halaman produk
- ✅ 2 kategori: Electronics dan Fashion

### Text Section
- ✅ Background image dengan overlay
- ✅ Center text alignment

### Message Section
- ✅ Newsletter subscription form
- ✅ Customer review form
- ✅ Background image dengan styling

### Footer
- ✅ 4 kolom footer (Logo, Navigation, Categories, Subscribe)
- ✅ Logo footer dengan deskripsi
- ✅ Newsletter subscription
- ✅ Copyright text

## 📁 Struktur Folder

```
ecommerce-landing-page/
├── index.html
├── electronic.html (optional)
├── fashion.html (optional)
├── contact.html (optional)
├── src/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── ip17.png
│   │   ├── apple.png
│   │   ├── iphone 16.jpeg
│   │   ├── samsung s24.png
│   │   └── ... (semua gambar produk)
│   ├── images2/
│   │   ├── Apple watch.jpeg
│   │   ├── dress.jpeg
│   │   └── monitor.jpeg
│   └── assets/
│       └── bg/
│           ├── home.jpg
│           └── bg-message.jpg
└── README.md
```

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan responsive design
  - Flexbox dan Grid Layout
  - CSS Transitions dan Animations
  - Media Queries untuk responsive
- **JavaScript (Vanilla)** - Interaktivitas
  - DOM Manipulation
  - Event Listeners
  - Smooth Scrolling
- **Google Fonts** - Typography
  - Pacifico (Logo)
  - Dancing Script (Title)
  - Inter (Body text)
  - Playfair Display (Buttons)
- **Font Awesome** - Icons

## 📦 Instalasi

### 1. Clone atau Download Repository
```bash
git clone https://github.com/username/ecommerce-landing-page.git
cd ecommerce-landing-page
```

### 2. Struktur File
Pastikan struktur folder sesuai dengan yang dijelaskan di atas.

### 3. Buka di Browser
```bash
# Gunakan Live Server atau buka langsung
open index.html

# Atau dengan Python
python -m http.server 5500
```

## 🚀 Penggunaan

### Navbar Navigation
- Klik logo untuk kembali ke home
- Menu hamburger responsive di tablet & mobile
- Navbar auto-hide saat scroll down

### Search Products
- Ketik nama produk atau kategori
- Tekan tombol Search

### Load More
- Klik tombol "Load More" untuk melihat produk lainnya
- Navigasi ke halaman produk spesifik (electronic.html, fashion.html)

### Newsletter Subscription
- Masukkan email di message section
- Klik Subscribe untuk berlangganan

### Customer Review
- Isi form dengan nama, email, dan review
- Klik "Submit Review" untuk mengirim

## 🎨 Komponen

### Navbar Component
```html
<nav class="navbar" id="navbar">
    <!-- Logo -->
    <!-- Hamburger Menu -->
    <!-- Navigation Menu -->
    <!-- Sign In & Sign Up Buttons -->
</nav>
```

### Product Card Component
```html
<div class="products-card">
    <a href="#">
        <div class="products-image">
            <img src="..." alt="Product">
        </div>
        <h3>Product Title</h3>
        <div class="products-rating">★★★★★ (5.0)</div>
        <p>$99.99</p>
    </a>
</div>
```

### Feature Box Component
```html
<div class="feature-box">
    <div class="feature-icon">🚚</div>
    <div class="feature-text">
        <h3>Title</h3>
        <p>Description</p>
    </div>
</div>
```

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1024px dan di atas
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: di bawah 480px

### Responsive Features
- Navbar responsif dengan hamburger menu
- Grid layout berubah sesuai ukuran layar
- Font size otomatis menyesuaikan
- Padding dan margin disesuaikan untuk mobile
- Touch-friendly buttons dan inputs

### Mobile Optimizations
- Fixed navbar dengan height yang lebih kecil
- Hamburger menu untuk navigation
- Full-width buttons
- Vertical layout untuk forms
- Optimized images
- Readable font sizes

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| IE      | ❌ Not Supported |

## 📝 CSS Classes Reference

### Navbar
- `.navbar` - Navbar container
- `.logo-navbar` - Logo section
- `.nav-menu` - Navigation menu
- `.hamburger` - Hamburger button
- `.nav-button` - Sign in/up buttons

### Products
- `.products` - Products section container
- `.products-card` - Individual product card
- `.products-image` - Product image wrapper
- `.product-title` - Section title
- `.our-pruducts` - Grid container

### Features
- `.features-section` - Features container
- `.feature-box` - Individual feature
- `.feature-icon` - Icon element
- `.feature-text` - Text wrapper

### Footer
- `.footer` - Footer container
- `.footer-content` - Main footer content
- `.logo-footer` - Footer logo
- `.footer-nav` - Navigation links
- `.footer-copyright` - Copyright section

## 🔧 Customization

### Mengubah Warna
Edit di `src/css/style.css`:
```css
:root {
    --primary-color: #007bff;
    --secondary-color: #25343F;
    --text-color: #333;
}
```

### Mengubah Font
Ubah Google Fonts import di CSS atau HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont" rel="stylesheet">
```

### Menambah Produk
Edit di HTML:
```html
<div class="products-card">
    <a href="#">
        <img src="src/images/new-product.jpg" alt="New Product">
        <h3>New Product Title</h3>
        <div class="products-rating">★★★★★ (5.0)</div>
        <p>$99.99</p>
    </a>
</div>
```

## 📄 Lisensi

Project ini menggunakan lisensi MIT. Bebas untuk digunakan dan dimodifikasi.

## 👨‍💻 Author

Dibuat dengan ❤️ untuk demo ecommerce landing page

## 📞 Kontak & Support

Jika ada pertanyaan atau saran, silakan hubungi:
- Email: contact@ecommerce.com
- Website: https://ecommerce-example.com

## 🎯 Roadmap Fitur

- [ ] Shopping cart functionality
- [ ] Product filter & sort
- [ ] User authentication
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Product recommendations
- [ ] Live chat support
- [ ] PWA support

## 🚀 Performance Tips

1. **Optimize Images**
   - Gunakan format WebP
   - Compress images sebelum upload
   - Lazy load images

2. **Minimize CSS/JS**
   - Minify files untuk production
   - Remove unused CSS

3. **Caching**
   - Enable browser caching
   - Use CDN untuk assets

## ✅ Checklist Testing

- [ ] Navbar hamburger menu berfungsi
- [ ] Search bar responsif
- [ ] Product cards menampilkan dengan benar
- [ ] Load More button berfungsi
- [ ] Forms dapat disubmit
- [ ] Responsive di mobile (480px)
- [ ] Responsive di tablet (768px)
- [ ] Responsive di desktop (1024px)
- [ ] Navbar hide on scroll
- [ ] Footer links berfungsi

---

**Last Updated**: February 2026  
**Version**: 1.0.0