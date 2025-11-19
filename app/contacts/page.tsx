import Image from "next/image";
import Link from "next/link";

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* DESKTOP CONTENT */}
      <div className="hidden xl:block">
        {/* HERO SECTION */}
        <section className="relative h-[400px] w-full overflow-hidden bg-white">
          <Image
            src="/images/contacts-hero.png"
            alt="Graff Piatto Контакты"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative mx-auto h-full w-full max-w-[1440px]">
            <h1 className="font-display absolute left-[339px] top-[160px] text-center text-[50px] font-bold leading-[67px] text-white">
              Контакты
            </h1>
          </div>
        </section>

        {/* MAIN CONTACTS SECTION */}
        <section className="relative bg-white py-20">
          <div className="relative mx-auto w-full max-w-[1440px] px-[303px]">
            <div className="grid grid-cols-2 gap-16">
              {/* LEFT COLUMN - Contact Info */}
              <div className="space-y-10">
                {/* Адрес */}
                <div>
                  <h3 className="font-display text-[24px] font-medium text-[#303F56] mb-4">
                    Адрес шоурума
                  </h3>
                  <p className="text-[16px] leading-[26px] text-[#303F56]">
                    г. Астана, ул. Ш. Калдаякова 8
                  </p>
                  <Link 
                    href="https://yandex.kz/maps/ru/-/CLSqzTNJ" 
                    target="_blank"
                    className="mt-3 inline-block text-[15px] font-medium text-[#C9A25B] hover:text-[#b58f4d] underline"
                  >
                    Посмотреть на карте →
                  </Link>
                </div>

                {/* Часы работы */}
                <div>
                  <h3 className="font-display text-[24px] font-medium text-[#303F56] mb-4">
                    Часы работы
                  </h3>
                  <p className="text-[16px] leading-[26px] text-[#303F56]">
                    Пн-Вс: 10:00 — 22:00<br />
                    Без выходных
                  </p>
                </div>

                {/* Телефон */}
                <div>
                  <h3 className="font-display text-[24px] font-medium text-[#303F56] mb-4">
                    Телефон
                  </h3>
                  <a 
                    href="tel:+77012161772" 
                    className="text-[18px] font-medium text-[#303F56] hover:text-[#C9A25B] transition-colors"
                  >
                    +7 (701) 216-17-72
                  </a>
                  <p className="mt-2 text-[14px] text-gray-500">
                    Звонки принимаются ежедневно
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-display text-[24px] font-medium text-[#303F56] mb-4">
                    Email
                  </h3>
                  <a 
                    href="mailto:info@graffpiatto.kz" 
                    className="text-[18px] font-medium text-[#303F56] hover:text-[#C9A25B] transition-colors"
                  >
                    info@graffpiatto.kz
                  </a>
                  <p className="mt-2 text-[14px] text-gray-500">
                    Ответим в течение 24 часов
                  </p>
                </div>

                {/* Социальные сети */}
                <div>
                  <h3 className="font-display text-[24px] font-medium text-[#303F56] mb-4">
                    Социальные сети
                  </h3>
                  <div className="flex gap-4">
                    <Link
                      href="https://instagram.com/graff.piatto"
                      target="_blank"
                      className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-[#303F56] text-[#303F56] hover:bg-[#303F56] hover:text-white transition-all"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </Link>
                    <Link
                      href="https://wa.me/77012161772"
                      target="_blank"
                      className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-[#303F56] text-[#303F56] hover:bg-[#303F56] hover:text-white transition-all"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </Link>
                    <Link
                      href="https://t.me/graffpiatto"
                      target="_blank"
                      className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-[#303F56] text-[#303F56] hover:bg-[#303F56] hover:text-white transition-all"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Contact Form */}
              <div className="bg-[#F5F1E5] p-10">
                <h3 className="font-display text-[28px] font-medium text-[#303F56] mb-2">
                  Написать нам
                </h3>
                <p className="text-[14px] text-gray-600 mb-8">
                  Оставьте сообщение, и мы свяжемся с вами в ближайшее время
                </p>

                <div className="space-y-5">
                  <div>
                    <label className="block text-[13px] font-medium text-[#303F56] mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#303F56] focus:border-[#C9A25B] focus:outline-none transition-colors"
                      placeholder="Введите имя"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#303F56] mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#303F56] focus:border-[#C9A25B] focus:outline-none transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#303F56] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#303F56] focus:border-[#C9A25B] focus:outline-none transition-colors"
                      placeholder="example@mail.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-[#303F56] mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full resize-none border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#303F56] focus:border-[#C9A25B] focus:outline-none transition-colors"
                      placeholder="Введите ваше сообщение..."
                    />
                  </div>

                  <button className="w-full h-[56px] bg-[#C9A25B] text-[16px] font-medium text-white hover:bg-[#b58f4d] transition-colors">
                    Отправить сообщение
                  </button>

                  <p className="text-[12px] text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="relative h-[500px] w-full">
          <iframe
            src="https://yandex.kz/map-widget/v1/?ll=71.462412%2C51.117170&z=16&l=map&pt=71.462412,51.117170,pm2rdm"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Graff Piatto на карте"
          />
        </section>
      </div>

      {/* MOBILE CONTENT */}
      <div className="xl:hidden pb-10">
        {/* MOBILE HERO */}
        <section className="relative h-[300px] w-full overflow-hidden">
          <Image
            src="/images/contacts-hero.png"
            alt="Контакты"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 flex h-full items-center justify-center px-5">
            <h1 className="font-display text-center text-[36px] font-bold leading-[48px] text-white">
              Контакты
            </h1>
          </div>
        </section>

        {/* MOBILE CONTACT INFO */}
        <section className="px-5 py-10 space-y-8">
          {/* Адрес */}
          <div className="text-center">
            <h3 className="font-display text-[22px] font-medium text-[#303F56] mb-3">
              Адрес шоурума
            </h3>
            <p className="text-[15px] leading-[24px] text-[#303F56]">
              г. Астана, ул. Ш. Калдаякова 8
            </p>
            <Link 
              href="https://yandex.kz/maps/ru/-/CLSqzTNJ" 
              target="_blank"
              className="mt-3 inline-block text-[14px] font-medium text-[#C9A25B] underline"
            >
              Посмотреть на карте →
            </Link>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Часы работы */}
          <div className="text-center">
            <h3 className="font-display text-[22px] font-medium text-[#303F56] mb-3">
              Часы работы
            </h3>
            <p className="text-[15px] leading-[24px] text-[#303F56]">
              Пн-Вс: 10:00 — 22:00<br />
              Без выходных
            </p>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Контакты */}
          <div className="text-center space-y-4">
            <div>
              <h3 className="font-display text-[22px] font-medium text-[#303F56] mb-3">
                Телефон
              </h3>
              <a 
                href="tel:+77012161772" 
                className="text-[18px] font-medium text-[#303F56]"
              >
                +7 (701) 216-17-72
              </a>
            </div>

            <div>
              <h3 className="font-display text-[22px] font-medium text-[#303F56] mb-3">
                Email
              </h3>
              <a 
                href="mailto:info@graffpiatto.kz" 
                className="text-[16px] font-medium text-[#303F56]"
              >
                info@graffpiatto.kz
              </a>
            </div>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Социальные сети */}
          <div className="text-center">
            <h3 className="font-display text-[22px] font-medium text-[#303F56] mb-4">
              Мы в соцсетях
            </h3>
            <div className="flex justify-center gap-4">
              <Link
                href="https://instagram.com/graff.piatto"
                target="_blank"
                className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-[#303F56] text-[#303F56] active:bg-[#303F56] active:text-white transition-all"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link
                href="https://wa.me/77012161772"
                target="_blank"
                className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-[#303F56] text-[#303F56] active:bg-[#303F56] active:text-white transition-all"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </Link>
              <Link
                href="https://t.me/graffpiatto"
                target="_blank"
                className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-[#303F56] text-[#303F56] active:bg-[#303F56] active:text-white transition-all"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* MOBILE CONTACT FORM */}
        <section className="bg-[#F5F1E5] px-5 py-10">
          <h3 className="font-display text-center text-[26px] font-medium text-[#303F56] mb-2">
            Написать нам
          </h3>
          <p className="text-center text-[13px] text-gray-600 mb-8">
            Оставьте сообщение, и мы свяжемся с вами
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-[13px] font-medium text-[#303F56] mb-2">
                Ваше имя *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#303F56] focus:border-[#C9A25B] focus:outline-none"
                placeholder="Введите имя"
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-[#303F56] mb-2">
                Телефон *
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#303F56] focus:border-[#C9A25B] focus:outline-none"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-[#303F56] mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#303F56] focus:border-[#C9A25B] focus:outline-none"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-[#303F56] mb-2">
                Сообщение *
              </label>
              <textarea
                rows={5}
                className="w-full resize-none border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#303F56] focus:border-[#C9A25B] focus:outline-none"
                placeholder="Введите ваше сообщение..."
              />
            </div>

            <button className="w-full h-[50px] bg-[#C9A25B] text-[15px] font-medium uppercase text-white active:bg-[#b58f4d] transition-colors">
              Отправить
            </button>

            <p className="text-[11px] text-gray-500 text-center">
              Нажимая кнопку, вы соглашаетесь<br />с политикой конфиденциальности
            </p>
          </div>
        </section>

        {/* MOBILE MAP - Yandex Maps */}
        <section className="relative h-[300px] w-full">
          <iframe
            src="https://yandex.kz/map-widget/v1/?ll=71.462412%2C51.117170&z=16&l=map&pt=71.462412,51.117170,pm2rdm"
            width="100%"
            height="100%"
            style={{ border: 0, position: 'relative' }}
            allowFullScreen
            loading="lazy"
            title="Graff Piatto на Яндекс.Картах"
          />
        </section>
      </div>
    </div>
  );
}