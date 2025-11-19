import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      {/* DESKTOP VERSION */}
      <div className="hidden xl:block">
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
          {/* Фоновое изображение с overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/404-bg.png"
              alt="404 Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#303F56]/90" />
          </div>

          {/* Контент */}
          <div className="relative z-10 mx-auto max-w-[1440px] px-[303px] text-center">
            {/* Большая цифра 404 */}
            <div className="mb-12">
              <h1 className="font-display text-[180px] font-bold leading-none text-[#C9A25B]">
                404
              </h1>
              <div className="mx-auto mt-4 h-[2px] w-[200px] bg-[#C9A25B]" />
            </div>

            {/* Заголовок */}
            <h2 className="font-display text-[42px] font-medium leading-[56px] text-white">
              Страница не найдена
            </h2>

            {/* Описание */}
            <p className="mx-auto mt-6 max-w-[600px] text-[17px] leading-[28px] text-white/80">
              К сожалению, запрашиваемая страница не существует или была перемещена.
              <br />
              Возможно, вы перешли по устаревшей ссылке или ошиблись в адресе.
            </p>

            {/* Кнопки */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <Link
                href="/"
                className="flex h-[56px] items-center justify-center bg-[#C9A25B] px-10 text-[16px] font-medium text-white hover:bg-[#b58f4d] transition-colors"
              >
                На главную
              </Link>
              <Link
                href="/catalog"
                className="flex h-[56px] items-center justify-center border-2 border-white px-10 text-[16px] font-medium text-white hover:bg-white hover:text-[#303F56] transition-colors"
              >
                Каталог
              </Link>
            </div>

            {/* Дополнительные ссылки */}
            <div className="mt-16">
              <p className="mb-4 text-[14px] font-medium uppercase tracking-wider text-white/60">
                Полезные ссылки
              </p>
              <div className="flex items-center justify-center gap-8 text-[15px]">
                <Link
                  href="/about"
                  className="text-white/80 hover:text-[#C9A25B] transition-colors"
                >
                  О нас
                </Link>
                <span className="text-white/40">•</span>
                <Link
                  href="/news"
                  className="text-white/80 hover:text-[#C9A25B] transition-colors"
                >
                  Новости
                </Link>
                <span className="text-white/40">•</span>
                <Link
                  href="/graff-gastronomy"
                  className="text-white/80 hover:text-[#C9A25B] transition-colors"
                >
                  Graff Gastronomy
                </Link>
                <span className="text-white/40">•</span>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-[#C9A25B] transition-colors"
                >
                  Контакты
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="xl:hidden">
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20">
          {/* Фоновое изображение с overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/404-bg.jpg"
              alt="404 Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#303F56]/90" />
          </div>

          {/* Контент */}
          <div className="relative z-10 text-center">
            {/* Большая цифра 404 */}
            <div className="mb-10">
              <h1 className="font-display text-[120px] font-bold leading-none text-[#C9A25B]">
                404
              </h1>
              <div className="mx-auto mt-3 h-[2px] w-[120px] bg-[#C9A25B]" />
            </div>

            {/* Заголовок */}
            <h2 className="font-display text-[32px] font-medium leading-[42px] text-white">
              Страница не найдена
            </h2>

            {/* Описание */}
            <p className="mx-auto mt-5 max-w-[340px] text-[15px] leading-[26px] text-white/80">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>

            {/* Кнопки */}
            <div className="mt-10 flex flex-col gap-3">
              <Link
                href="/"
                className="flex h-[50px] w-full items-center justify-center bg-[#C9A25B] text-[14px] font-medium uppercase tracking-wider text-white active:bg-[#b58f4d] transition-colors"
              >
                На главную
              </Link>
              <Link
                href="/catalog"
                className="flex h-[50px] w-full items-center justify-center border-2 border-white text-[14px] font-medium uppercase tracking-wider text-white active:bg-white active:text-[#303F56] transition-colors"
              >
                Каталог
              </Link>
            </div>

            {/* Дополнительные ссылки */}
            <div className="mt-12">
              <p className="mb-4 text-[12px] font-medium uppercase tracking-wider text-white/60">
                Полезные ссылки
              </p>
              <div className="flex flex-col gap-3 text-[14px]">
                <Link
                  href="/about"
                  className="text-white/80 active:text-[#C9A25B] transition-colors"
                >
                  О нас
                </Link>
                <Link
                  href="/news"
                  className="text-white/80 active:text-[#C9A25B] transition-colors"
                >
                  Новости
                </Link>
                <Link
                  href="/graff-gastronomy"
                  className="text-white/80 active:text-[#C9A25B] transition-colors"
                >
                  Graff Gastronomy
                </Link>
                <Link
                  href="/contact"
                  className="text-white/80 active:text-[#C9A25B] transition-colors"
                >
                  Контакты
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}