import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Anasayfa
  await prisma.page.upsert({
    where: { slug: 'anasayfa' },
    update: {},
    create: {
      title: 'Alp Tarık Telefon Tamir Hizmetleri',
      slug: 'anasayfa',
      content: `
        <h2>Profesyonel Telefon Tamir Hizmetleri</h2>
        <p>Alp Tarık Telefon Tamir olarak, tüm marka ve model telefonlarınız için güvenilir ve hızlı tamir hizmetleri sunuyoruz.</p>
        <h3>Neden Bizi Tercih Etmelisiniz?</h3>
        <ul>
          <li>✓ Uzman Teknisyenler</li>
          <li>✓ Hızlı Servis</li>
          <li>✓ Garantili Onarım</li>
          <li>✓ Uygun Fiyatlar</li>
        </ul>
      `,
      status: 'PUBLISHED',
      visibility: 'PUBLIC',
      metaTitle: 'Alp Tarık Telefon Tamir - Profesyonel Cihaz Onarımı',
      metaDescription: 'Tüm marka ve model telefonlar için güvenilir, hızlı ve profesyonel tamir hizmetleri.'
    }
  })

  // İletişim Sayfası
  await prisma.page.upsert({
    where: { slug: 'iletisim' },
    update: {},
    create: {
      title: 'Bize Ulaşın',
      slug: 'iletisim',
      content: `
        <h2>İletişim Bilgilerimiz</h2>
        <p>Herhangi bir sorunuz veya tamir talebi için bizimle iletişime geçebilirsiniz.</p>
        <h3>Adres</h3>
        <p>Örnek Mahallesi, Tamir Sokak No:15, İstanbul</p>
        <h3>Telefon</h3>
        <p>0555 123 45 67</p>
        <h3>E-posta</h3>
        <p>destek@alptariktelefontamir.com</p>
      `,
      status: 'PUBLISHED',
      visibility: 'PUBLIC',
      metaTitle: 'İletişim - Alp Tarık Telefon Tamir',
      metaDescription: 'Telefon tamir hizmetlerimiz için bize ulaşın. Hızlı ve profesyonel destek.'
    }
  })

  // Hizmetler Sayfası
  await prisma.page.upsert({
    where: { slug: 'hizmetlerimiz' },
    update: {},
    create: {
      title: 'Hizmetlerimiz',
      slug: 'hizmetlerimiz',
      content: `
        <h2>Telefon Tamir Hizmetlerimiz</h2>
        <ul>
          <li>📱 Ekran Değişimi</li>
          <li>🔋 Batarya Değişimi</li>
          <li>💻 Anakart Tamiri</li>
          <li>📸 Kamera Onarımı</li>
          <li>🔌 Şarj Soketi Tamiri</li>
          <li>💦 Su Hasarı Onarımı</li>
        </ul>
        <p>Tüm marka ve model telefonlar için profesyonel çözümler!</p>
      `,
      status: 'PUBLISHED',
      visibility: 'PUBLIC',
      metaTitle: 'Telefon Tamir Hizmetleri - Alp Tarık',
      metaDescription: 'Ekran değişimi, batarya, anakart ve diğer tüm telefon tamir hizmetleri.'
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
