import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Временные данные новостей
const newsDatabase: Record<string, any> = {
  "new-collection-2025": {
    title: "Новая коллекция весна-лето 2025",
    date: "15 ноября 2025",
    category: "Коллекции",
    image: "/images/news-1.jpg",
    content: `
      <p>Мы рады представить вам эксклюзивную весеннюю коллекцию от немецкого бренда Villeroy & Boch. Новая линия посуды сочетает классическую элегантность и современные тенденции в дизайне интерьера.</p>

      <p>Каждый предмет коллекции создан с учетом многовековых традиций немецкого фарфорового искусства. Мастера фабрики в Меттлахе используют уникальные техники росписи, передающиеся из поколения в поколение.</p>

      <h2>Особенности коллекции</h2>
      
      <p>Коллекция включает более 50 предметов: обеденные тарелки различных размеров, супницы, салатники, чайные и кофейные сервизы, а также декоративные элементы для украшения стола.</p>

      <p>Каждый элемент украшен деликатными цветочными мотивами, выполненными вручную. В орнаментах прослеживаются мотивы весенних садов Европы — розы, пионы, незабудки и полевые цветы создают романтичную композицию.</p>

      <p>Цветовая палитра варьируется от нежных пастельных оттенков (лавандового, мятного, персикового) до насыщенных изумрудных и сапфировых тонов. Золотое обрамление подчеркивает премиальность изделий.</p>

      <h2>Качество материалов</h2>

      <p>Все предметы изготовлены из премиального костяного фарфора с содержанием каолина более 45%. Это обеспечивает исключительную белизну, прозрачность на свет и прочность изделий.</p>

      <p>Посуда выдерживает температуры от -20°C до +300°C, что позволяет использовать ее как в морозильной камере, так и в духовом шкафу. Также коллекция подходит для мытья в посудомоечной машине.</p>

      <h2>Сервировка и применение</h2>

      <p>Коллекция идеально подходит как для повседневного использования, так и для торжественных мероприятий. Изысканный дизайн превратит обычный семейный ужин в особенное событие.</p>

      <p>Стилисты Graff Piatto рекомендуют сочетать посуду с льняными салфетками натуральных оттенков и живыми цветами на столе. Это создаст атмосферу европейского загородного дома.</p>

      <h2>Доступность и цены</h2>

      <p>Коллекция уже доступна в нашем флагманском магазине в Астане по адресу ул. Кабанбай батыра, 15, а также на официальном сайте с доставкой по всему Казахстану.</p>

      <p>Стоимость отдельных предметов начинается от 85 000 тенге. Полный обеденный сервиз на 6 персон — 890 000 тенге. Специальное предложение для первых покупателей — скидка 15% при покупке полного набора до 30 ноября.</p>

      <p>Для консультации и оформления заказа звоните по телефону +7 (777) 123-45-67 или посетите наш шоу-рум.</p>
    `
  },
  "graff-gastronomy-menu": {
    title: "Обновленное меню в Graff Gastronomy",
    date: "10 ноября 2025",
    category: "Гастрономия",
    image: "/images/news-2.jpg",
    content: `
      <p>Наш шеф-повар Максим Иванов представил обновленное сезонное меню ресторана Graff Gastronomy. В новой карте появились авторские блюда, вдохновленные традициями европейской кухни с акцентом на локальные продукты.</p>

      <p>Максим — выпускник Le Cordon Bleu в Париже с 15-летним опытом работы в мишленовских ресторанах Европы. В Graff Gastronomy он создает кухню, где классические техники встречаются с современной подачей.</p>

      <h2>Новые блюда в меню</h2>

      <p><strong>Закуски:</strong> Тартар из мраморной говядины с трюфельным майонезом (12 500 ₸), карпаччо из оленины с пармезаном и кедровыми орешками (14 000 ₸), буррата с томатами конфи и базиликовым маслом (9 800 ₸).</p>

      <p><strong>Основные блюда:</strong> Утиная грудка с апельсиновым соусом и картофельным пюре с трюфелем (18 500 ₸), ризотто с белыми грибами и пармезаном Реджано выдержки 36 месяцев (16 000 ₸), стейк рибай на кости с овощами гриль (24 000 ₸).</p>

      <p><strong>Десерты:</strong> Фирменный десерт «Шоколадная симфония» — три вида шоколадного мусса с малиновым соусом (7 500 ₸), тирамису классический на амаретто (6 800 ₸), тарт татен с мороженым из ванили Мадагаскар (7 200 ₸).</p>

      <h2>Философия подачи</h2>

      <p>Особое внимание уделено сервировке: каждое блюдо подается на посуде из наших премиальных коллекций Villeroy & Boch, Lenox и Gien. Это создает неповторимую атмосферу изысканного ужина.</p>

      <p>Цветовая гамма посуды подбирается индивидуально к каждому блюду, чтобы подчеркнуть его визуальную привлекательность и усилить вкусовые впечатления гостей.</p>

      <h2>Винная карта</h2>

      <p>К обновленному меню сомелье Graff Gastronomy Анна Петрова подготовила новую винную карту. В ней представлены более 150 позиций вин из Франции, Италии, Испании и Нового Света.</p>

      <p>Для каждого блюда есть рекомендации по винному сопровождению. Также доступны дегустационные сеты из 3-5 бокалов к ужину из нескольких блюд.</p>

      <h2>Атмосфера ресторана</h2>

      <p>Graff Gastronomy — это место, где высокая кухня встречается с камерной атмосферой. Всего 12 столиков, приглушенный свет, живая музыка по пятницам и субботам.</p>

      <p>Интерьер выполнен в европейском стиле с элементами ар-деко. Мраморные столешницы, бархатные кресла, хрустальные люстры создают атмосферу роскоши и комфорта.</p>

      <h2>Бронирование столиков</h2>

      <p>Рекомендуем бронировать столики заранее, особенно на выходные дни и праздники. Средний чек на двоих с вином — 45 000-60 000 тенге.</p>

      <p>Для бронирования звоните по телефону +7 (777) 123-45-67 или оставляйте заявку на сайте. Ресторан работает ежедневно с 12:00 до 23:00.</p>
    `
  },
  "black-friday-2025": {
    title: "Black Friday: скидки до 40%",
    date: "1 ноября 2025",
    category: "Акции",
    image: "/images/news-3.webp",
    content: `
      <p>С 25 по 29 ноября в Graff Piatto проходит грандиозная распродажа Black Friday! Скидки на премиальную посуду и предметы сервировки достигают 40%. Это отличная возможность приобрести изделия мировых брендов по выгодным ценам.</p>

      <h2>Что участвует в акции</h2>

      <p>В распродаже участвуют коллекции от ведущих европейских производителей:</p>

      <p><strong>Villeroy & Boch (Германия)</strong> — скидки до 35% на коллекции Artesano, New Wave, Manufacture Rock. Обеденные сервизы, кофейные пары, декоративные блюда.</p>

      <p><strong>Lenox (США)</strong> — скидки до 40% на костяной фарфор премиум-класса. Коллекции Butterfly Meadow, Blue Garden, Ivory Line по специальным ценам.</p>

      <p><strong>Gien (Франция)</strong> — скидки до 30% на изделия ручной работы. Уникальные тарелки с росписью, супницы, вазы для фруктов.</p>

      <p><strong>Portmeirion (Великобритания)</strong> — скидки до 35% на керамическую посуду. Коллекции Sophie Conran, Botanic Garden с растительными мотивами.</p>

      <h2>Условия акции</h2>

      <p><strong>Скидка 40%</strong> действует на коллекции прошлых сезонов. В категорию входят классические дизайны, которые остаются актуальными вне трендов.</p>

      <p><strong>Скидка 25%</strong> предоставляется на текущие коллекции 2025 года. Это позволит приобрести самые модные дизайны по привлекательной цене.</p>

      <p><strong>Скидка 15%</strong> распространяется на новинки, поступившие в продажу менее 3 месяцев назад.</p>

      <p>Акция действует как в магазине по адресу ул. Кабанбай батыра, 15, так и на официальном сайте с доставкой по Казахстану.</p>

      <h2>Дополнительные преимущества</h2>

      <p>При покупке на сумму от 500 000 тенге — бесплатная доставка по Казахстану и подарочная упаковка premium-класса.</p>

      <p>При покупке полного обеденного сервиза — скидка дополнительные 5% и консультация стилиста по сервировке стола (стоимость 25 000 тенге) в подарок.</p>

      <p>Накопительная система лояльности: получайте 5% кешбэка на бонусную карту Graff Piatto, которым можно оплатить до 30% следующей покупки.</p>

      <h2>Рекомендации по выбору</h2>

      <p>Наши консультанты помогут подобрать идеальный набор посуды под ваш интерьер и потребности. В магазине доступны образцы всех коллекций — вы можете увидеть и потрогать изделия перед покупкой.</p>

      <p>Также предлагаем услугу «персональный шоппинг» — стилист соберет для вас полную сервировку стола с учетом ваших пожеланий и бюджета.</p>

      <h2>Важная информация</h2>

      <p>Количество товаров по акционным ценам ограничено. Особо популярные позиции могут закончиться в первые дни распродажи.</p>

      <p>Скидки не суммируются с другими акциями. Акция не распространяется на подарочные сертификаты и услуги ресторана Graff Gastronomy.</p>

      <p>Возврат и обмен товаров, приобретенных по акции, осуществляется на общих условиях в течение 14 дней при сохранении товарного вида и упаковки.</p>

      <p>Спешите воспользоваться выгодными предложениями! Для справок: +7 (777) 123-45-67.</p>
    `
  }
};

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = newsDatabase[slug];

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* DESKTOP VERSION */}
      <div className="hidden xl:block">
        <article>
          {/* Hero изображение - на всю ширину экрана */}
          <div className="relative h-[550px] w-full overflow-hidden bg-gray-100">
            <Image
              src={news.image}
              alt={news.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Категория и информация - контейнер 1440px */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="mx-auto max-w-[1440px] px-[303px] pb-16">
                <div className="inline-block bg-[#C9A25B] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-white mb-6">
                  {news.category}
                </div>
                <h1 className="font-display text-[56px] font-medium leading-[72px] text-white max-w-[800px]">
                  {news.title}
                </h1>
                <time className="mt-4 block text-[14px] font-medium text-white/80 uppercase tracking-wider">
                  {news.date}
                </time>
              </div>
            </div>
          </div>

          {/* Контент статьи */}
          <div className="mx-auto max-w-[1440px] px-[303px] py-20 text-[#303F56]">
            {/* Хлебные крошки */}
            <nav className="mb-12 flex items-center gap-2 text-[14px] text-gray-500">
              <Link href="/" className="hover:text-[#C9A25B] transition-colors">
                Главная
              </Link>
              <span>/</span>
              <Link href="/news" className="hover:text-[#C9A25B] transition-colors">
                Новости
              </Link>
              <span>/</span>
              <span className="text-[#303F56]">{news.title}</span>
            </nav>

            {/* Контент статьи */}
            <div
                className="prose prose-lg max-w-none
                prose-headings:font-display prose-headings:!text-[#303F56]
                prose-h2:!text-[36px] prose-h2:font-medium prose-h2:mt-16 prose-h2:mb-8 prose-h2:leading-[48px]
                prose-p:!text-[17px] prose-p:leading-[32px] prose-p:!text-[#303F56] prose-p:mb-6
                prose-strong:!text-[#303F56] prose-strong:font-semibold
                prose-a:!text-[#C9A25B] prose-a:no-underline prose-a:font-medium hover:prose-a:underline
                first:prose-p:!text-[19px] first:prose-p:leading-[34px] first:prose-p:font-medium"
                dangerouslySetInnerHTML={{ __html: news.content }}
            />

            {/* Разделитель */}
            <div className="mt-20 pt-12 border-t-2 border-gray-200">
              {/* Социальные кнопки */}
              <div className="flex items-center justify-between">
                <Link
                  href="/news"
                  className="inline-flex h-[56px] items-center justify-center gap-3 bg-[#303F56] px-10 text-[15px] font-medium text-white hover:bg-[#243147] transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Все новости
                </Link>

                <div className="flex items-center gap-3">
                  <span className="text-[14px] text-gray-500 mr-2">Поделиться:</span>
                  <button className="flex h-[44px] w-[44px] items-center justify-center border border-gray-300 hover:border-[#C9A25B] hover:bg-[#C9A25B] hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="flex h-[44px] w-[44px] items-center justify-center border border-gray-300 hover:border-[#C9A25B] hover:bg-[#C9A25B] hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
                    </svg>
                  </button>
                  <button className="flex h-[44px] w-[44px] items-center justify-center border border-gray-300 hover:border-[#C9A25B] hover:bg-[#C9A25B] hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* MOBILE VERSION */}
      <div className="xl:hidden">
        <article>
          {/* Hero изображение */}
          <div className="relative h-[400px] w-full overflow-hidden bg-gray-100">
            <Image
              src={news.image}
              alt={news.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Информация */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-8">
              <div className="inline-block bg-[#C9A25B] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white mb-4">
                {news.category}
              </div>
              <h1 className="font-display text-[28px] font-medium leading-[38px] text-white">
                {news.title}
              </h1>
              <time className="mt-3 block text-[12px] font-medium text-white/80 uppercase tracking-wider">
                {news.date}
              </time>
            </div>
          </div>

          {/* Контент */}
          <div className="relative z-10 px-5 py-10 text-[#303F56]">
            {/* Хлебные крошки */}
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-gray-500">
              <Link href="/" className="hover:text-[#C9A25B]">
                Главная
              </Link>
              <span>/</span>
              <Link href="/news" className="hover:text-[#C9A25B]">
                Новости
              </Link>
            </nav>

            {/* Контент статьи */}
            <div
                className={
                "prose prose-sm max-w-none " +
                "prose-headings:font-display prose-headings:text-[#303F56] " +
                "prose-h2:text-[24px] prose-h2:font-medium prose-h2:mt-10 prose-h2:mb-5 prose-h2:leading-[34px] " +
                "prose-p:text-[15px] prose-p:leading-[28px] prose-p:text-[#303F56] prose-p:mb-5 " +
                "prose-strong:text-[#303F56] prose-strong:font-semibold " +
                "prose-a:text-[#C9A25B] prose-a:no-underline " +
                "first:prose-p:text-[16px] first:prose-p:leading-[30px] first:prose-p:font-medium"
                }
                dangerouslySetInnerHTML={{ __html: news.content }}
            />

            {/* Социальные кнопки и возврат */}
            <div className="mt-12 pt-8 border-t-2 border-gray-200 space-y-5">
              {/* Социальные кнопки */}
              <div>
                <span className="block text-[13px] text-gray-500 mb-3">Поделиться:</span>
                <div className="flex gap-2">
                  <button className="flex h-[40px] w-[40px] items-center justify-center border border-gray-300 active:bg-[#C9A25B] active:border-[#C9A25B] active:text-white transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="flex h-[40px] w-[40px] items-center justify-center border border-gray-300 active:bg-[#C9A25B] active:border-[#C9A25B] active:text-white transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
                    </svg>
                  </button>
                  <button className="flex h-[40px] w-[40px] items-center justify-center border border-gray-300 active:bg-[#C9A25B] active:border-[#C9A25B] active:text-white transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Кнопка возврата */}
              <Link
                href="/news"
                className="flex h-[50px] w-full items-center justify-center gap-2 bg-[#303F56] text-[14px] font-medium uppercase tracking-wider text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Все новости
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}