import React from 'react';
import Image from 'next/image';
import { Home, Users, Heart } from 'lucide-react';

export default function AboutPage() {
  // Данные для таймлайна (Мобильная версия)
  const timelineMobile = [
    { year: '2010', text: 'Появился бутик' },
    { year: '2015', text: 'Появление гастрономической студии' },
    { year: '2020', text: 'Запуск доставки по России' },
  ];

  // Картинки для истории (десктоп + мобилка)
  const historyImages = [
    {
      year: '2010',
      src: '/images/about/history-2010.png',
      alt: 'Бутик Graff Piatto в 2010 году',
    },
    {
      year: '2015',
      src: '/images/about/history-2015.png',
      alt: 'Гастрономическая студия Graff Piatto',
    },
    {
      year: '2020',
      src: '/images/about/history-2020.png',
      alt: 'Сервировка и доставка Graff Piatto по России',
    },
  ];

  // Данные брендов + логотипы
  const brands = [
    {
      name: 'Villeroy & Boch',
      desc: 'Немецкие традиции',
      logo: '/images/brands/villeroy-boch.png',
    },
    {
      name: 'Lenox',
      desc: 'Американская посуда',
      logo: '/images/brands/lenox.png',
    },
    {
      name: 'Gien',
      desc: 'Французская роспись',
      logo: '/images/brands/gien.png',
    },
    {
      name: 'Portmeirion',
      desc: 'Английская керамика',
      logo: '/images/brands/portmeirion.png',
    },
    {
      name: 'Select Istanbul',
      desc: 'Восточная эстетика',
      logo: '/images/brands/select_istanbul.png',
    },
    {
      name: 'Vintage Collection',
      desc: 'Редкие коллекции',
      logo: '/images/brands/vintage_collection.png',
    },
  ];

  // Философия
  const philosophy = [
    {
      icon: Home,
      title: 'Дом',
      desc: 'Сервировка как часть семейного тепла',
    },
    {
      icon: Users,
      title: 'Гости',
      desc: 'Эстетика, которая объединяет людей',
    },
    {
      icon: Heart,
      title: 'Эмоции',
      desc: 'Радость выбора и внимание к деталям',
    },
  ];

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Подключение шрифтов локально для этого компонента */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-manrope { font-family: 'Manrope', sans-serif; }
      `,
        }}
      />

      {/* ==========================================
          DESKTOP VERSION (Strict 1440px Layout)
      ========================================== */}
      <div className="hidden xl:block w-full">
        {/* --- HERO SECTION --- */}
        <section className="relative h-[478px] w-full flex justify-center bg-white overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FCF8ED 34.61%, rgba(252, 248, 237, 0.3) 70%, rgba(0, 0, 0, 0) 100%), url('/images/about/hero-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
            }}
          />

          <div className="relative w-[1440px] h-full shrink-0">
            <div className="absolute left-[303px] top-[105px] w-[517px]">
              <h1 className="font-playfair text-[50px] font-medium leading-[67px] text-[#C9A25B]">
                О бренде<br />
                Graff Piatto
                </h1>


              <p className="mt-8 w-[416px] font-manrope text-[15px] font-semibold leading-[24px] text-[#303F56]">
                Основательница Айзере Ахмет запустила Graff Piatto как студию
                эстетичного сервирования, объединив опыт создания уютного дома и
                любовь к гастрономии. Её миссия — показать, что сервировка — это
                язык, который передаёт тепло и заботу, превращая ужин в подарок
                и празднование семьи.
              </p>
            </div>
          </div>
        </section>

        {/* --- BRAND HISTORY (PIXEL PERFECT) --- */}
        <section className="relative h-[403px] w-full flex justify-center bg-white">
          <div className="relative w-[1440px] h-full shrink-0">
            <h2 className="absolute left-[303px] top-[30px] font-playfair font-medium text-[32px] leading-[43px] text-[#C9A25B]">
              История
            </h2>

            <div className="absolute left-[327px] top-[123px] w-[2px] h-[240px] bg-[#C9A25B] opacity-30" />

            <div className="absolute left-[318px] top-[113px] w-[20px] h-[20px] bg-white border-2 border-[#C9A25B] rounded-full box-border z-10" />
            <div className="absolute left-[318px] top-[173px] w-[20px] h-[20px] bg-white border-2 border-[#C9A25B] rounded-full box-border z-10" />
            <div className="absolute left-[318px] top-[233px] w-[20px] h-[20px] bg-white border-2 border-[#C9A25B] rounded-full box-border z-10" />
            <div className="absolute left-[318px] top-[293px] w-[20px] h-[20px] bg-white border-2 border-[#C9A25B] rounded-full box-border z-10" />
            <div className="absolute left-[318px] top-[353px] w-[20px] h-[20px] bg-white border-2 border-[#C9A25B] rounded-full box-border z-10" />

            <div className="absolute left-[363px] top-[174px] w-[174px] h-[18px] flex items-center">
              <p className="font-manrope font-medium text-[15px] leading-[18px] text-[#303F56]">
                <span className="font-bold">2010:</span>&nbsp;Появился бутик
              </p>
            </div>

            <div className="absolute left-[363px] top-[225px] w-[200px] flex items-start">
              <p className="font-manrope font-medium text-[15px] leading-[18px] text-[#303F56]">
                <span className="font-bold">2015:</span>&nbsp;Появление<br />гастрономической студии
              </p>
            </div>

            <div className="absolute left-[363px] top-[288px] w-[200px] flex items-start">
              <p className="font-manrope font-medium text-[15px] leading-[18px] text-[#303F56]">
                <span className="font-bold">2020:</span>&nbsp;Запуск<br />доставки по России
              </p>
            </div>

            <div className="absolute left-[587px] top-[123px] w-[210px] h-[240px]">
              <Image
                src={historyImages[0].src}
                alt={historyImages[0].alt}
                width={210}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-[802px] top-[123px] w-[210px] h-[240px]">
              <Image
                src={historyImages[1].src}
                alt={historyImages[1].alt}
                width={210}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-[1017px] top-[123px] w-[210px] h-[240px]">
              <Image
                src={historyImages[2].src}
                alt={historyImages[2].alt}
                width={210}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="relative h-[380px] w-full flex justify-center bg-white">
            <div className="relative w-[1440px] h-full shrink-0">
                <h2 className="text-center font-playfair text-[36px] font-medium text-[#C9A25B] pt-[40px]">
                Философия сервировки
                </h2>

                <div className="mt-[55px] flex justify-center gap-[103px]">
                {philosophy.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                    <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-2 border-[#C9A25B] group transition-all duration-300 hover:bg-[#C9A25B] hover:text-white">
                        <item.icon
                        className="h-[50px] w-[50px] text-[#C9A25B] group-hover:text-white transition-colors"
                        strokeWidth={1.5}
                        />
                    </div>

                    <p className="mt-5 text-center font-manrope text-[15px] font-medium text-[#303F56]">
                        {item.title}
                    </p>

                    <p className="mt-2 w-[156px] text-center font-manrope text-[15px] font-light leading-[18px] text-[#303F56]">
                        {item.desc}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </section>

        <section className="relative h-[244px] w-full flex justify-center bg-white">
          <div className="relative w-[1440px] h-full shrink-0">
            <h2 className="pt-[25px] text-center font-playfair text-[24px] font-medium text-[#C9A25B]">
              Бренды Graff Piatto
            </h2>

            <div className="mt-[37px] flex justify-center gap-[35px]">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="flex w-[140px] flex-col items-center group cursor-pointer"
                >
                  <div className="flex h-[80px] w-full items-center justify-center bg-white transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={120}
                      height={40}
                      className="h-auto max-h-[40px] w-auto object-contain transition-opacity group-hover:opacity-80"
                    />
                  </div>
                  <p className="mt-3 text-center font-manrope text-[11px] leading-[13px] text-[#303F56] opacity-70 group-hover:opacity-100 transition-opacity">
                    {brand.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- QUOTE SECTION (GOLD GRADIENT) --- */}
        <section
          className="relative h-[246px] w-full flex justify-center items-center"
          style={{
            background: `
                radial-gradient(circle at 100% 0%, rgba(201, 162, 91, 0.5) 0%, rgba(48, 63, 86, 0) 50%), 
                radial-gradient(circle at 0% 100%, rgba(201, 162, 91, 0.5) 0%, rgba(48, 63, 86, 0) 50%),
                #303F56
            `,
          }}
        >
          <div className="relative w-[1440px] px-8 flex justify-center">
            <blockquote className="max-w-[834px] text-center font-playfair text-[32px] font-medium italic leading-[43px] text-[#D1C099]">
              "Graff Piatto — это не просто посуда. Это искусство дома, в
              котором живёт вкус и любовь."
            </blockquote>
          </div>
        </section>
      </div>

      {/* ==========================================
          MOBILE VERSION (Responsive)
      ========================================== */}
      <div className="xl:hidden w-full">
        {/* Mobile Hero - с градиентом и фоткой как в десктопе */}
        <section className="relative min-h-[500px] overflow-hidden bg-white px-5 py-12">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(252, 248, 237, 0.98) 0%, rgba(252, 248, 237, 0.92) 50%, rgba(252, 248, 237, 0.5) 80%, transparent 100%), url('/images/about/hero-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="relative">
            <h1 className="font-playfair text-[36px] font-medium leading-[44px] text-[#C9A25B]">
              О бренде
              <br />
              Graff Piatto
            </h1>

            <p className="mt-6 font-manrope text-[15px] font-semibold leading-[22px] text-[#303F56]">
              Основательница Айзере Ахмет запустила Graff Piatto как студию
              эстетичного сервирования, объединив опыт создания уютного дома и
              любовь к гастрономии. Её миссия — показать, что сервировка — это
              язык, который передаёт тепло и заботу, превращая ужин в подарок
              и празднование семьи.
            </p>
          </div>
        </section>

        {/* Mobile History */}
        <section className="bg-white px-5 py-12">
          <h2 className="font-playfair text-[28px] font-medium text-[#C9A25B]">
            История
          </h2>

          <div className="mt-8 space-y-6">
            {timelineMobile.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="relative pt-1">
                  <div className="h-4 w-4 rounded-full border-2 border-[#C9A25B] bg-white relative z-10" />
                  {index < timelineMobile.length - 1 && (
                    <div className="absolute left-[7px] top-[20px] h-[40px] w-[1px] bg-[#C9A25B]/40" />
                  )}
                </div>
                <p className="flex-1 font-manrope text-[15px] leading-[20px] text-[#303F56]">
                  <span className="font-bold">{item.year}:</span> {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Gallery - Square Cards */}
          <div className="mt-8 flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {historyImages.map((img, index) => (
              <div
                key={index}
                className="relative w-[160px] aspect-square shrink-0 overflow-hidden rounded-sm shadow-sm bg-gray-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Mobile Philosophy */}
        <section className="bg-[#F5F1E5] px-5 py-12">
          <h2 className="text-center font-playfair text-[28px] font-medium text-[#C9A25B]">
            Философия сервировки
          </h2>

          <div className="mt-10 space-y-8">
            {philosophy.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border-2 border-[#C9A25B] bg-white aspect-square">
                  <item.icon
                    className="h-[45px] w-[45px] text-[#C9A25B]"
                    strokeWidth={1.5}
                  />
                </div>

                <p className="mt-4 text-center font-manrope text-[16px] font-semibold text-[#303F56]">
                  {item.title}
                </p>

                <p className="mt-2 max-w-[250px] text-center font-manrope text-[14px] leading-[20px] text-[#303F56]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile Brands - без обводки */}
        <section className="bg-white px-5 py-12">
          <h2 className="text-center font-playfair text-[24px] font-medium text-[#C9A25B]">
            Бренды Graff Piatto
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white"
              >
                <div className="flex h-[50px] w-full items-center justify-center mb-2">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={100}
                    height={30}
                    className="h-auto max-h-[30px] w-auto object-contain"
                  />
                </div>
                <p className="text-center font-manrope text-[11px] leading-[14px] text-[#303F56] opacity-70">
                  {brand.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile Quote */}
        <section
          className="px-5 py-16"
          style={{
            background: 'linear-gradient(135deg, #303F56 0%, #232E42 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-[#C9A25B] rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-20%] w-[200px] h-[200px] bg-[#C9A25B] rounded-full opacity-20 blur-3xl" />

          <blockquote className="relative z-10 text-center font-playfair text-[24px] font-medium italic leading-[32px] text-[#D1C099]">
            "Graff Piatto — это не просто посуда. Это искусство дома, в котором
            живёт вкус и любовь."
          </blockquote>
        </section>
      </div>
    </div>
  );
}