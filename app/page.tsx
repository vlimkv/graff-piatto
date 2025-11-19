import Image from "next/image";
import Link from "next/link";

export default function GraffPiattoPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* DESKTOP CONTENT */}
      <div className="hidden xl:block">
        {/* HERO - desktop, 400px высота, фон тянется на весь экран */}
        <section className="relative z-0 h-[400px] w-full bg-white overflow-hidden">
          {/* Фото на фон на всю ширину экрана */}
          <Image
            src="/images/hero-1.png" // "Дизайн без названия (71).png"
            alt="Столовая сервировка Graff Piatto"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* затемнение как в макете */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Внутренний контейнер 1440px по центру */}
          <div className="relative mx-auto h-full w-full max-w-[1440px]">
            {/* Заголовок — 761×134, left: 339, top: 80 */}
            <h1 className="font-display absolute left-[339px] top-[80px] flex h-[134px] w-[761px] items-center justify-center text-center text-[50px] font-bold leading-[67px] text-white">
              Дом столовых нарядов
              <br />
              премиального качества
            </h1>

            {/* Подзаголовок — 761×24, left: 339, top: 232 */}
            <p className="absolute left-[339px] top-[232px] flex h-[24px] w-[761px] items-center justify-center text-center text-[20px] font-medium leading-[24px] text-white">
              Премиальная посуда, сервировка и подарки для вашего дома.
            </p>

            {/* Блок кнопок — 445×56, left: 505, top: 300 */}
            <div className="absolute left-[505px] top-[300px] flex h-[56px] w-[445px] items-center justify-between">
              {/* Кнопка 1 — 200×56, золото */}
              <Link
                href="/catalog"
                className="flex h-[56px] w-[200px] items-center justify-center bg-[#C9A25B] text-[16px] font-medium leading-[24px] tracking-[0.15px] text-white hover:bg-[#b58f4d]"
              >
                Каталог
              </Link>

              {/* Кнопка 2 — 230×56, синий */}
              <button className="flex h-[56px] w-[230px] items-center justify-center bg-[#303F56] text-[16px] font-medium leading-[24px] tracking-[0.15px] text-white hover:bg-[#243147]">
                Для клиентов из России
              </button>
            </div>
          </div>
        </section>

        {/* BRAND HISTORY - 572px */}
        <section className="relative h-[572px] bg-white">
          <div className="relative mx-auto h-full w-full max-w-[1440px]">
            {/* Заголовок */}
            <h2 className="font-display absolute left-[303px] top-[45px] text-center text-[28px] font-medium leading-[36px] text-[#303F56]">
              История бренда
            </h2>

            {/* Фото слева */}
            <div className="absolute left-[303px] top-[112px] h-[371px] w-[247px] overflow-hidden">
              <Image
                src="/images/history-photo.jpg"
                alt="Основательница Graff Piatto"
                width={247}
                height={371}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="absolute left-[570px] top-[112px] w-[230px] text-[15px] leading-[23px] text-[#303F56]">
              Graff Piatto — это дом<br />
              столовых нарядов, где<br />
              каждый предмет выбран<br />
              с заботой о&nbsp;деталях.<br />
              Айзере собирала<br />
              коллекцию брендов по миру<br />
              и&nbsp;мечтала, чтобы в&nbsp;Астане<br />
              появилось место, где посуда<br />
              помогает создавать атмосферу<br />
              дома, в&nbsp;котором живут вкус,<br />
              эстетика и&nbsp;любовь к&nbsp;гостям.
            </p>

            <p className="absolute left-[284px] top-[493px] w-[285px] flex flex-col items-center text-center leading-[18px] text-[#303F56]">
              <span className="text-base font-semibold">
                Айзере Ахмет
              </span>
              <span className="mt-1 text-[13px] font-normal">
                основательница Graff Piatto
              </span>
            </p>

            {/* Логотипы брендов в кругах */}
            <div className="absolute left-[791px] top-[112px] flex h-[80px] w-[365px] items-center justify-between">
              {[
                { src: "/images/brand-villeroy.png", alt: "Villeroy & Boch" },
                { src: "/images/brand-lenox.png", alt: "Lenox" },
                { src: "/images/brand-gien.png", alt: "Gien" },
                { src: "/images/brand-pentik.png", alt: "Pormeirion" },
              ].map((brand, i) => (
                <div
                  key={i}
                  className="flex h-[80px] w-[80px] items-center justify-center rounded-full border border-black"
                >
                  <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full border border-black">
                    <div className="relative h-[34px] w-[64px]">
                      <Image
                        src={brand.src}
                        alt={brand.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Текст под логотипами */}
            <p className="absolute left-[791px] top-[212px] w-[365px] text-center text-[15px] font-medium leading-[22px] text-[#303F56]">
              Официальная поставка<br />
              премиальной посуды в Казахстан и Россию
            </p>
          </div>
        </section>

        {/* CATALOGUE */}
        <section className="relative h-[617px] bg-white">
          <div className="relative mx-auto h-full w-full max-w-[1440px]">
            <h2 className="font-display absolute left-[303px] top-0 text-[36px] font-medium leading-[48px] text-[#303F56]">
              Каталог
            </h2>

            <div className="absolute left-[303px] top-[93px] h-[479px] w-[833px] bg-[#303F56]">
              <h3 className="font-display absolute left-[45px] top-[55px] text-[38px] font-medium leading-[48px] text-white">
                Graff Gastronomy
              </h3>

              <p className="absolute left-[45px] top-[123px] w-[500px] text-[15px] leading-[20px] text-white/90">
                Место, где простые блюда становятся вашим фирменным ужином
                в окружении продуманной сервировки и камерного интерьера.
              </p>

              <div className="absolute left-0 top-[181px] h-[187px] w-[314px] overflow-hidden">
                <Image
                  src="/images/catalog-hero.png"
                  alt="Интерьер Graff Gastronomy"
                  width={314}
                  height={187}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Product cards */}
              {[
                {
                  name: "Тарелка «Blue Garden»",
                  brand: "Lenox",
                  kzt: "450 000",
                  rub: "69 140",
                  eur: "739",
                  btn: "В корзину",
                  img: "/images/card-blue-garden.png",
                  alt: "Мелкая тарелка «Blue Garden»",
                },
                {
                  name: "Набор «Ivory Line»",
                  brand: "Villeroy & Boch",
                  kzt: "280 000",
                  rub: "43 000",
                  eur: "460",
                  btn: "В корзину",
                  img: "/images/card-ivory-line.png",
                  alt: "Набор тарелок «Ivory Line»",
                },
                {
                  name: "Ужин-дегустация",
                  brand: "Graff Gastronomy",
                  kzt: "120 000",
                  rub: "18 500",
                  eur: "199",
                  btn: "Перейти",
                  img: "/images/card-tasting-dinner.png",
                  alt: "Ужин-дегустация Graff Gastronomy",
                },
              ].map((product, i) => (
                <article
                  key={i}
                  className="absolute top-[181px] h-[263px] w-[153px] bg-[#F5F1E5] text-[#303F56] shadow-sm overflow-hidden transition-transform duration-200 hover:-translate-y-1"
                  style={{ left: `${334 + i * 173}px` }}
                >
                  <div className="relative flex h-full flex-col">
                    <div className="h-[140px] w-full overflow-hidden">
                      <Image
                        src={product.img}
                        alt={product.alt}
                        width={153}
                        height={140}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Контент с чуть бОльшими отступами */}
                    <div className="flex flex-1 flex-col px-[12px] pt-[10px] pb-[12px]">
                      {/* Название */}
                      <p className="text-[11px] font-semibold leading-[14px] tracking-[0.01em] line-clamp-2">
                        {product.name}
                      </p>

                      {/* Бренд */}
                      <p className="mt-[4px] text-[10px] font-medium leading-[13px] text-gray-500 truncate">
                        {product.brand}
                      </p>

                      {/* Линия */}
                      <div className="mt-[8px] h-px w-full bg-[#303F56]/30" />

                      {/* Цены */}
                      <div className="mt-[6px] space-y-[3px] text-[10px] leading-[13px]">
                        <div className="flex justify-between">
                          <span className="font-semibold text-[9px] text-gray-500">
                            KZT
                          </span>
                          <span className="font-medium">{product.kzt}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-[9px] text-gray-500">
                            RUB
                          </span>
                          <span className="font-medium">{product.rub}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold text-[9px] text-gray-500">
                            EUR
                          </span>
                          <span className="font-medium">{product.eur}</span>
                        </div>
                      </div>

                      {/* Кнопка: воздух сверху и тот же низ */}
                      <button className="mt-[10px] h-[30px] w-full bg-[#C9A25B] text-[11px] font-semibold tracking-[0.06em] text-white hover:bg-[#b58f4d] transition-colors">
                        {product.btn}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* MOBILE CONTENT */}
      {/* MOBILE CONTENT (Адаптив) */}
      <div className="xl:hidden pb-10">
        
        {/* 1. MOBILE HERO */}
        <section className="relative h-[550px] w-full overflow-hidden">
          <Image
            src="/images/hero-1.png"
            alt="Hero Mobile"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Чуть темнее для читаемости */}
          
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
            <h1 className="font-display text-[30px] font-bold leading-[42px] text-white">
              Дом столовых нарядов <br /> премиального качества
            </h1>
            <p className="mt-4 max-w-[280px] text-[16px] leading-[20px] text-white/90">
              Премиальная посуда, сервировка и подарки для вашего дома.
            </p>
            
            <div className="mt-8 flex w-full flex-col gap-3">
              <Link
                href="/catalog"
                className="flex h-[50px] w-full items-center justify-center bg-[#C9A25B] text-[14px] font-medium uppercase tracking-wider text-white hover:bg-[#b58f4d]"
              >
                Каталог
              </Link>
              <button className="h-[50px] w-full bg-[#303F56] text-[14px] font-medium uppercase tracking-wider text-white hover:bg-[#243147]">
                Для клиентов из России
              </button>
            </div>
          </div>
        </section>

        {/* 2. MOBILE HISTORY */}
        <section className="px-5 py-12">
          <h2 className="font-display text-center text-[28px] font-medium text-[#303F56]">
            История бренда
          </h2>
          
          <div className="mt-8 flex flex-col gap-6">
            {/* Фото */}
            <div className="relative mx-auto h-[380px] w-full max-w-[300px] overflow-hidden shadow-lg">
               <Image
                  src="/images/history-photo.jpg"
                  alt="Айзере Ахмет"
                  fill
                  className="object-cover"
               />
            </div>
            
            {/* Текст */}
            <div className="text-center">
              <p className="text-[15px] leading-[24px] text-[#303F56]">
                Graff Piatto — это дом столовых нарядов.<br />
                Айзере собирала коллекцию брендов по миру,<br />
                чтобы в&nbsp;Астане появилось место,<br />
                где посуда создаёт атмосферу любви к&nbsp;гостям.
              </p>
              <div className="mt-6">
                <p className="text-[16px] font-bold text-[#303F56]">Айзере Ахмет</p>
                <p className="text-[12px] text-gray-500">основательница Graff Piatto</p>
              </div>
            </div>

            {/* Бренды (Скролл, если не влезут, или Grid) */}
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {[
                { src: "/images/brand-villeroy.png" },
                { src: "/images/brand-lenox.png" },
                { src: "/images/brand-gien.png" },
                { src: "/images/brand-pentik.png" },
              ].map((brand, i) => (
                <div key={i} className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-black bg-white">
                    <div className="relative h-[30px] w-[50px]">
                      <Image src={brand.src} alt="Brand" fill className="object-contain"/>
                    </div>
                </div>
              ))}
            </div>
            <p className="text-center text-[13px] font-medium text-[#303F56]">
              Официальная поставка<br />
              премиальной посуды в Казахстан и Россию
            </p>
          </div>
        </section>

        {/* 3. MOBILE CATALOGUE (АДАПТИРОВАННАЯ ВЕРСИЯ) */}
        <section className="bg-[#303F56] py-10">
          <div className="px-5">
            <h2 className="font-display text-[28px] font-medium text-white">
              Каталог
            </h2>
            <h3 className="mt-2 font-display text-[32px] leading-tight text-white/90">
              Graff Gastronomy
            </h3>
            <p className="mt-4 text-[14px] leading-[20px] text-white/80">
              Место, где простые блюда становятся вашим фирменным ужином в окружении продуманной сервировки.
            </p>
            
            {/* Интерьерное фото */}
            <div className="relative mt-6 h-[200px] w-full overflow-hidden shadow-md">
              <Image
                 src="/images/catalog-hero.png"
                 alt="Interior"
                 fill
                 className="object-cover"
              />
            </div>
          </div>

          {/* Слайдер карточек (Горизонтальный скролл) */}
          {/* pl-5 создает отступ слева, чтобы карточки начинались красиво */}
          <div className="mt-8 flex gap-4 overflow-x-auto pl-5 pr-5 pb-4 scrollbar-hide snap-x snap-mandatory">
            {[
                {
                  name: "Тарелка «Blue Garden»",
                  brand: "Lenox",
                  kzt: "450 000",
                  rub: "69 140",
                  eur: "739",
                  btn: "В КОРЗИНУ",
                  img: "/images/card-blue-garden.png",
                },
                {
                  name: "Набор «Ivory Line»",
                  brand: "Villeroy & Boch",
                  kzt: "280 000",
                  rub: "43 000",
                  eur: "460",
                  btn: "В КОРЗИНУ",
                  img: "/images/card-ivory-line.png",
                },
                {
                  name: "Ужин-дегустация",
                  brand: "Graff Gastronomy",
                  kzt: "120 000",
                  rub: "18 500",
                  eur: "199",
                  btn: "ПЕРЕЙТИ",
                  img: "/images/card-tasting-dinner.png",
                },
            ].map((product, i) => (
              <article 
                key={i} 
                className="flex h-[380px] w-[240px] shrink-0 snap-center flex-col bg-[#F5F1E5] shadow-xl overflow-hidden"
              >
                {/* ФОТО - Убрал p-2 и поставил object-cover */}
                <div className="relative h-[180px] w-full bg-white">
                   <Image 
                      src={product.img} 
                      alt={product.name} 
                      fill 
                      className="object-cover" 
                   />
                </div>

                {/* Контент мобильной карточки */}
                <div className="flex flex-1 flex-col p-4">
                  <div className="min-h-[40px] w-full">
                     <p className="text-[14px] font-bold leading-[18px] text-[#303F56] line-clamp-2">
                       {product.name}
                     </p>
                  </div>
                  <p className="mt-1 text-[12px] font-medium text-gray-500 truncate">
                    {product.brand}
                  </p>
                  
                  <div className="my-3 h-px w-full bg-[#303F56]/20" />

                  <div className="mb-3 space-y-1">
                     <div className="flex justify-between items-baseline">
                        <span className="text-[11px] font-bold text-gray-600">KZT</span>
                        <span className="text-[16px] font-bold text-[#303F56]">{product.kzt}</span>
                     </div>
                     <div className="flex justify-between pt-1">
                        <span className="text-[10px] text-gray-400">RUB {product.rub}</span>
                        <span className="text-[10px] text-gray-400">EUR {product.eur}</span>
                     </div>
                  </div>

                  <button className="mt-auto h-[36px] w-full bg-[#C9A25B] text-[11px] font-bold uppercase text-white transition-colors active:bg-[#b58f4d]">
                    {product.btn}
                  </button>
                </div>
              </article>
            ))}
            {/* Пустой блок справа, чтобы последняя карточка не прилипала к краю при скролле */}
            <div className="w-2 shrink-0" />
          </div>
        </section>
      </div>
    </div>
  );
}