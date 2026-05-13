# OG Capture Mode

Bu paket sosyal medya preview görsellerini gerçek sayfa görüntüsünden üretmek için hazırlandı.

## Kullanım

Her demo sayfası `?og=1` parametresiyle kontrollü screenshot moduna girer:

- `/gold/?og=1`
- `/dark/?og=1`
- `/pilates/?og=1`
- `/light/?og=1`
- `/classic/?og=1`
- `/feminine/?og=1`
- `/neon/?og=1`
- `/?og=1`

Bu modda:

- animasyonlar ve geçişler kapatılır,
- scroll-scrub hero sayfalarında final hero kompozisyonu görünür hale getirilir,
- seçili OG alanı `data-og-selected="true"` ile işaretlenir,
- hazır olduğunda `<html data-og-ready="1">` oluşur.

## Kritik kural

Screenshot aracı, görüntüyü almadan önce `html[data-og-ready="1"]` oluşmasını beklemeli.

## Capture hedefleri

- index: `#demos`
- gold: `.hero`
- dark: `#root/main/hero` + offset 180
- pilates: `#hero`
- light: `#root/main/hero` + offset 180
- classic: `#hero`
- feminine: `#hero`
- neon: `#hero`

## Sosyal preview meta sistemi

Her sayfada canonical, OpenGraph ve Twitter Card meta tagleri eklidir. OG görsel pathleri `/og/*.jpg` altındadır.
