import Image from "next/image";
import Link from "next/link";

export default function GraffPiattoPage() {
  // 1. ДАННЫЕ НОВИНОК
  const newArrivals = [
    {
      name: "Тарелка «Blue Garden»",
      brand: "Lenox",
      kzt: "450 000",
      rub: "69 140",
      eur: "739",
      btn: "В КОРЗИНУ",
      img: "/images/card-blue-garden.png",
      alt: "Мелкая тарелка «Blue Garden»",
    },
    {
      name: "Набор «Ivory Line»",
      brand: "Villeroy & Boch",
      kzt: "280 000",
      rub: "43 000",
      eur: "460",
      btn: "В КОРЗИНУ",
      img: "/images/card-ivory-line.png",
      alt: "Набор тарелок «Ivory Line»",
    },
    {
      name: "Кофейная пара «Royal»",
      brand: "Wedgwood",
      kzt: "120 000",
      rub: "18 500",
      eur: "199",
      btn: "В КОРЗИНУ",
      img: "/images/card-blue-garden.png", // Замените на реальное фото
      alt: "Кофейная пара Wedgwood",
    },
  ];

  // 2. СПИСОК БРЕНДОВ
  const brands = [
    { name: "Villeroy & Boch", img: "/images/brands/villeroy-boch.png" },
    { name: "Lenox", img: "/images/brands/lenox.png" },
    { name: "Gien", img: "/images/brands/gien.png" },
    { name: "Portmeirion", img: "/images/brands/portmeirion.png" },
    { name: "Select Istanbul", img: "/images/brands/select_istanbul.png" },
    { name: "Vintage Collection", img: "/images/brands/vintage_collection.png" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* =========================================
          DESKTOP VERSION
          ========================================= */}
      <div className="hidden xl:block">
        
        {/* HERO SECTION (ЦЕНТРИРОВАНО) */}
        <section className="relative z-0 h-[600px] w-full bg-white overflow-hidden">
          <Image
            src="/images/hero-1.png"
            alt="Столовая сервировка Graff Piatto"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          
          {/* Изменено: items-center, text-center, убран pl-[340px] */}
          <div className="relative mx-auto h-full w-full max-w-[1440px] flex flex-col items-center justify-center text-center">
            <h1 className="font-display max-w-[900px] text-[56px] font-bold leading-[1.2] text-white">
              Дом столовых нарядов <br /> премиального качества
            </h1>
            <p className="mt-6 max-w-[760px] text-[20px] font-medium leading-[1.4] text-white/90">
              Премиальная посуда, сервировка и подарки для вашего дома.
            </p>
            
            <div className="mt-10 flex gap-5">
              <Link
                href="/catalog"
                className="flex h-[56px] w-[200px] items-center justify-center bg-[#C9A25B] text-[16px] font-medium tracking-wide text-white hover:bg-[#b58f4d] transition-colors"
              >
                Каталог
              </Link>
              <Link 
                href="/russia-clients" 
                className="flex h-[56px] w-[280px] items-center justify-center bg-[#303F56] text-[16px] font-medium tracking-wide text-white hover:bg-[#243147] transition-colors"
              >
                Для иностранных клиентов
              </Link>
            </div>
          </div>
        </section>

        {/* HISTORY SECTION */}
        <section className="relative py-20 bg-white">
          <div className="mx-auto w-full max-w-[1440px] px-[100px]">
            <h2 className="font-display text-center text-[36px] font-medium text-[#303F56] mb-12">
              История бренда
            </h2>

            <div className="flex items-start justify-between gap-10">
              <div className="flex gap-10">
                <div className="relative h-[450px] w-[300px] shrink-0 overflow-hidden shadow-lg">
                  <Image src="/images/history-photo.jpg" alt="Основательница" fill className="object-cover" />
                </div>
                
                <div className="max-w-[300px] pt-4">
                  <p className="text-[16px] leading-[1.6] text-[#303F56]">
                    Graff Piatto — это дом столовых нарядов, где каждый предмет выбран с заботой о деталях.
                    <br /><br />
                    Айзере собирала коллекцию брендов по миру и мечтала, чтобы в Астане появилось место, 
                    где посуда помогает создавать атмосферу дома.
                  </p>
                  <div className="mt-10">
                    <p className="text-[18px] font-semibold text-[#303F56]">Айзере Ахмет</p>
                    <p className="text-[14px] text-gray-500">основательница Graff Piatto</p>
                  </div>
                </div>
              </div>

              {/* Бренды Desktop (Сетка) */}
              <div className="flex flex-col items-center pt-4 max-w-[400px]">
                 <div className="flex flex-wrap justify-center gap-4">
                    {brands.map((brand, i) => (
                      <div key={i} className="flex h-[80px] w-[80px] items-center justify-center rounded-full border border-gray-200 p-2 hover:border-[#C9A25B] transition-colors">
                        <div className="relative h-full w-full">
                           <Image src={brand.img} alt={brand.name} fill className="object-contain"/>
                        </div>
                      </div>
                    ))}
                 </div>
                 <p className="mt-6 text-center text-[15px] font-medium leading-relaxed text-[#303F56]">
                    Официальная поставка<br />премиальной посуды в Казахстан и Россию
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW ARRIVALS DESKTOP */}
        <section className="bg-white pb-24">
          <div className="mx-auto w-full max-w-[1440px] px-[100px]">
            <h2 className="font-display mb-8 text-[36px] font-medium text-[#303F56]">
              Новинки
            </h2>

            <div className="flex w-full gap-6 h-[480px]">
              {/* Левый блок */}
              <div className="relative flex flex-[2] flex-col justify-between bg-[#303F56] p-10 text-white shadow-xl">
                <div>
                  <h3 className="font-display text-[40px] leading-tight">
                    Новая <br />коллекция
                  </h3>
                  <p className="mt-6 max-w-[350px] text-[15px] leading-relaxed text-white/80">
                    Откройте для себя последние поступления изысканного фарфора.
                  </p>
                </div>
                <div className="relative h-[200px] w-full overflow-hidden mt-6">
                   <Image src="/images/catalog-hero.png" alt="Interior" fill className="object-cover opacity-80" />
                </div>
              </div>

              {/* Правый блок с товарами */}
              <div className="flex flex-[3] gap-5">
                {newArrivals.map((product, i) => (
                  <article key={i} className="group relative flex flex-1 flex-col bg-[#F5F1E5] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <div className="relative h-[220px] w-full bg-white">
                      <Image src={product.img} alt={product.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-2">
                        <p className="text-[13px] font-bold uppercase tracking-wider text-[#303F56] line-clamp-2 min-h-[40px]">
                          {product.name}
                        </p>
                        <p className="text-[11px] font-medium text-gray-500 uppercase mt-1">
                          {product.brand}
                        </p>
                      </div>
                      <div className="my-3 h-px w-full bg-[#303F56]/20" />
                      <div className="space-y-1 mb-4">
                        <div className="flex justify-between items-baseline">
                          <span className="text-[11px] font-bold text-gray-400">KZT</span>
                          <span className="text-[15px] font-bold text-[#303F56]">{product.kzt}</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-gray-500">
                          <span>RUB {product.rub}</span>
                          <span>EUR {product.eur}</span>
                        </div>
                      </div>
                      <button className="mt-auto h-[40px] w-full bg-[#C9A25B] text-[11px] font-bold uppercase tracking-widest text-white transition-colors group-hover:bg-[#b58f4d]">
                        {product.btn}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================
          MOBILE VERSION
          ========================================= */}
      <div className="xl:hidden pb-10">
        
        {/* HERO MOBILE */}
        <section className="relative h-[550px] w-full overflow-hidden">
          <Image
            src="/images/hero-1.png"
            alt="Hero Mobile"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
            <h1 className="font-display text-[32px] font-bold leading-[1.2] text-white">
              Дом столовых нарядов <br /> премиального качества
            </h1>
            <p className="mt-4 max-w-[280px] text-[16px] leading-[1.4] text-white/90">
              Премиальная посуда, сервировка и подарки для вашего дома.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3">
              <Link 
                href="/catalog" 
                className="flex h-[50px] w-full items-center justify-center bg-[#C9A25B] text-[14px] font-medium uppercase tracking-wider text-white"
              >
                Каталог
              </Link>
              <Link 
                href="/russia-clients" 
                className="flex h-[50px] w-full items-center justify-center bg-[#303F56] text-[14px] font-medium uppercase tracking-wider text-white"
              >
                Для иностранных клиентов
              </Link>
            </div>
          </div>
        </section>

        {/* HISTORY MOBILE */}
        <section className="px-5 py-12">
          <h2 className="font-display text-center text-[28px] font-medium text-[#303F56]">
            История бренда
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            <div className="relative mx-auto h-[380px] w-full max-w-[300px] overflow-hidden shadow-lg">
              <Image src="/images/history-photo.jpg" alt="Айзере Ахмет" fill className="object-cover"/>
            </div>
            
            <div className="text-center">
              <p className="text-[15px] leading-[1.6] text-[#303F56]">
                Graff Piatto — это дом столовых нарядов.<br />
                Айзере собирала коллекцию брендов по миру, чтобы в Астане появилось место,
                где посуда создаёт атмосферу любви к гостям.
              </p>
              <div className="mt-6 mb-8">
                <p className="text-[16px] font-bold text-[#303F56]">Айзере Ахмет</p>
                <p className="text-[12px] text-gray-500">основательница Graff Piatto</p>
              </div>

              {/* ЛОГОТИПЫ В МОБИЛКЕ */}
              <div className="grid grid-cols-3 gap-3">
                {brands.map((brand, i) => (
                   <div key={i} className="flex aspect-square items-center justify-center rounded-full border border-gray-200 bg-white p-2 shadow-sm">
                      <div className="relative h-full w-full">
                        <Image src={brand.img} alt={brand.name} fill className="object-contain" />
                      </div>
                   </div>
                ))}
              </div>

              <p className="mt-6 text-center text-[13px] font-medium text-[#303F56]">
                Официальная поставка<br />премиальной посуды в Казахстан и Россию
              </p>
            </div>
          </div>
        </section>

        {/* NEW ARRIVALS MOBILE */}
        <section className="bg-[#303F56] py-10">
          <div className="px-5">
            <h2 className="font-display text-[28px] font-medium text-white">Новинки</h2>
            <h3 className="mt-1 font-display text-[32px] text-white/90">Новая коллекция</h3>
            <p className="mt-4 text-[14px] text-white/80">
              Откройте для себя последние поступления изысканного фарфора.
            </p>
          </div>

          <div className="mt-8 flex gap-4 overflow-x-auto pl-5 pr-5 pb-4 scrollbar-hide snap-x snap-mandatory">
            {newArrivals.map((product, i) => (
              <article key={i} className="flex h-[380px] w-[240px] shrink-0 snap-center flex-col bg-[#F5F1E5] shadow-xl overflow-hidden">
                <div className="relative h-[180px] w-full bg-white">
                  <Image src={product.img} alt={product.name} fill className="object-cover"/>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[14px] font-bold text-[#303F56] line-clamp-2">{product.name}</p>
                  <p className="text-[12px] text-gray-500 mt-1">{product.brand}</p>
                  <div className="my-3 h-px w-full bg-[#303F56]/20" />
                  <div className="mb-3 space-y-1">
                     <div className="flex justify-between"><span className="text-[11px] text-gray-600">KZT</span><span className="text-[16px] font-bold">{product.kzt}</span></div>
                     <div className="flex justify-between text-[10px] text-gray-400"><span>RUB {product.rub}</span><span>EUR {product.eur}</span></div>
                  </div>
                  <button className="mt-auto h-[36px] w-full bg-[#C9A25B] text-[11px] font-bold uppercase text-white">
                    {product.btn}
                  </button>
                </div>
              </article>
            ))}
            <div className="w-2 shrink-0" />
          </div>
        </section>
      </div>
    </div>
  );
}