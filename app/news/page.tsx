import Image from "next/image";
import Link from "next/link";

// Временные данные новостей (потом замените на API/CMS)
const newsData = [
  {
    slug: "new-collection-2025",
    title: "Новая коллекция весна-лето 2025",
    excerpt: "Представляем эксклюзивную коллекцию от Villeroy & Boch с цветочными мотивами и изысканной ручной росписью",
    date: "15 ноября 2025",
    image: "/images/news-1.jpg",
    category: "Коллекции"
  },
  {
    slug: "graff-gastronomy-menu",
    title: "Обновленное меню в Graff Gastronomy",
    excerpt: "Шеф-повар представил сезонное меню с авторскими блюдами европейской кухни",
    date: "10 ноября 2025",
    image: "/images/news-2.jpg",
    category: "Гастрономия"
  },
  {
    slug: "black-friday-2025",
    title: "Black Friday: скидки до 40%",
    excerpt: "Специальные предложения на премиальную посуду от ведущих европейских брендов",
    date: "1 ноября 2025",
    image: "/images/news-3.webp",
    category: "Акции"
  },
  {
    slug: "master-class-november",
    title: "Мастер-класс по сервировке стола",
    excerpt: "Профессиональный декоратор расскажет о тенденциях в сервировке праздничного стола",
    date: "28 октября 2025",
    image: "/images/news-1.jpg",
    category: "События"
  },
  {
    slug: "lenox-anniversary",
    title: "Юбилейная коллекция Lenox",
    excerpt: "К 135-летию бренда выпущена лимитированная серия с позолотой ручной работы",
    date: "20 октября 2025",
    image: "/images/news-2.jpg",
    category: "Коллекции"
  },
  {
    slug: "gift-certificates",
    title: "Подарочные сертификаты Graff Piatto",
    excerpt: "Идеальный подарок для ценителей прекрасного — сертификаты от 50 000 тенге",
    date: "15 октября 2025",
    image: "/images/news-2.jpg",
    category: "Акции"
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* DESKTOP VERSION */}
      <div className="hidden xl:block">
        <div className="mx-auto max-w-[1440px] px-[303px] py-25">
          <nav className="mb-8 flex items-center gap-2 text-[14px] text-gray-500">
            <Link href="/" className="hover:text-[#C9A25B] transition-colors">
              Главная
            </Link>
            <span>/</span>
            <span className="text-[#303F56] font-medium">Новости</span>
          </nav>

          {/* Заголовок страницы */}
          <h1 className="font-display text-[48px] font-medium leading-[64px] text-[#303F56] mb-16">
            Новости Graff Piatto
          </h1>

          {/* Сетка новостей - 3 колонки */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-12">
            {newsData.map((news) => (
              <Link
                key={news.slug}
                href={`/news/${news.slug}`}
                className="group block overflow-hidden bg-white transition-all duration-300 hover:shadow-xl"
              >
                {/* Изображение */}
                <div className="relative h-[280px] w-full overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Оверлей при ховере */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  
                  {/* Категория */}
                  <div className="absolute left-4 top-4 bg-[#C9A25B] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                    {news.category}
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-5">
                  <time className="text-[12px] font-medium text-gray-400 uppercase tracking-wider">
                    {news.date}
                  </time>
                  <h2 className="mt-3 font-display text-[20px] font-medium leading-[28px] text-[#303F56] group-hover:text-[#C9A25B] transition-colors line-clamp-2">
                    {news.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-[22px] text-gray-600 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <div className="mt-5 flex items-center text-[13px] font-semibold text-[#C9A25B] group-hover:gap-2 transition-all">
                    <span>Читать далее</span>
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="xl:hidden px-5 py-12">
        {/* Хлебные крошки */}
        <nav className="mb-6 flex items-center gap-2 text-[12px] text-gray-500">
          <Link href="/" className="hover:text-[#C9A25B]">
            Главная
          </Link>
          <span>/</span>
          <span className="text-[#303F56] font-medium">Новости</span>
        </nav>

        {/* Заголовок */}
        <h1 className="font-display text-[32px] font-medium leading-[42px] text-[#303F56] mb-8">
          Новости Graff Piatto
        </h1>

        {/* Список новостей */}
        <div className="space-y-6">
          {newsData.map((news) => (
            <Link
              key={news.slug}
              href={`/news/${news.slug}`}
              className="block overflow-hidden bg-white shadow-md active:shadow-xl transition-shadow"
            >
              {/* Изображение */}
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
                {/* Категория */}
                <div className="absolute left-4 top-4 bg-[#C9A25B] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {news.category}
                </div>
              </div>

              {/* Контент */}
              <div className="p-4">
                <time className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                  {news.date}
                </time>
                <h2 className="mt-2 text-[18px] font-bold leading-[26px] text-[#303F56] line-clamp-2">
                  {news.title}
                </h2>
                <p className="mt-2 text-[14px] leading-[21px] text-gray-600 line-clamp-2">
                  {news.excerpt}
                </p>
                <div className="mt-3 flex items-center text-[12px] font-semibold text-[#C9A25B]">
                  <span>Читать далее</span>
                  <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}