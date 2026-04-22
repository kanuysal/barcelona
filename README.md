# Tomoya Portfolio - Astro Conversion Project

Bu proje, mevcut modern web tasarımlarından (4wide, dayloog vb.) alınan bölümlerin (sections) temiz, modüler ve yüksek performanslı Astro bileşenlerine dönüştürülmesi projesidir.

## Proje Hedefleri
- **Temiz Kod:** Kaynak kodlardaki gereksiz yapıları ayıklayıp sadece ihtiyacımız olan HTML/CSS/JS yapılarını Astro bileşenine çevirmek.
- **Modülerlik:** Her section'ı bağımsız bir bileşen olarak tasarlamak.
- **Kontrol Kapasitesi:** Her parçayı kolayca yönetmek ve ileride başka projelerde de kullanabilmek.
- **Görsel Kalite:** Yüksek kaliteli video ve görsellerle, akıcı animasyonlarla premium bir deneyim sunmak.

## Planlanan Klasör Yapısı (Astro Standardı)

- `/src/components/sections/` : Dönüştürülen tüm bölümler burada yer alacak.
- `/src/components/ui/` : Butonlar, küçük UI elemanları vb.
- `/src/components/common/` : Header ve Footer bileşenleri.
- `/src/layouts/` : Ana sayfa şablonu (MainLayout.astro).
- `/src/pages/` : 
    - `index.astro` : Final birleştirilmiş ana sayfa.
    - `preview.astro` : Tüm section'ların alt alta listelendiği ön izleme sayfası.
- `/src/styles/` : Global CSS ve font tanımlamaları.
- `/public/assets/` :
    - `/images/` : Kullanıcıdan gelecek görsel içerikler.
    - `/videos/` : Kullanıcıdan gelecek video içerikler.
    - `/fonts/` : Cinzel, Garamond ve Italiana (Türkçe destekli) fontları.

## Font Stratejisi
- **Başlıklar:** Cinzel / Italiana
- **Metinler:** Garamond
- **Dil Desteği:** Türkçe karakter uyumu zorunludur.

## Çalışma Akışı
1. Her klasör (kaynak site) tek tek incelenir.
2. Gereken bölüm (section) tespit edilir.
3. Astro bileşenine (`.astro`) dönüştürülür.
4. `preview.astro` sayfasına eklenerek test edilir.
5. Tüm section'lar bittiğinde Header/Footer ve Final sayfa birleştirmesi yapılır.

---
*Not: Bu dosya projenin yol haritasıdır ve her aşamada güncellenecektir.*
