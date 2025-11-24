import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#303F56]">
      <div className="mx-auto max-w-[1440px] px-5 py-12 xl:px-[303px] xl:py-20">
        
        {/* Заголовок страницы */}
        <div className="mb-10 text-center xl:mb-16">
          <h1 className="font-display text-[32px] font-medium leading-tight xl:text-[42px]">
            Политика конфиденциальности
          </h1>
          <div className="mx-auto mt-4 h-[2px] w-[60px] bg-[#C9A25B] xl:w-[100px]" />
          <p className="mt-4 text-[13px] text-gray-400 xl:text-[14px]">
            Последнее обновление: 24 ноября 2025 г.
          </p>
        </div>

        {/* Основной контент */}
        <div className="mx-auto max-w-[800px] space-y-8 text-[15px] leading-[26px] xl:text-[16px] xl:leading-[28px]">
          
          <section>
            <h2 className="font-display mb-4 text-[20px] font-medium xl:text-[24px]">
              1. Общие положения
            </h2>
            <p className="opacity-90">
              Настоящая Политика конфиденциальности описывает порядок сбора, хранения, использования и раскрытия информации, которую мы получаем от пользователей сайта Graff Piatto. Посещая наш сайт и оформляя заказы, вы соглашаетесь с условиями настоящей Политики.
            </p>
            <p className="mt-4 opacity-90">
              Мы уважаем вашу конфиденциальность и обязуемся защищать ваши персональные данные в соответствии с законодательством Республики Казахстан.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-4 text-[20px] font-medium xl:text-[24px]">
              2. Сбор информации
            </h2>
            <p className="opacity-90">
              Мы можем собирать следующую информацию:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 opacity-90 marker:text-[#C9A25B]">
              <li>Имя и фамилия для идентификации клиента;</li>
              <li>Контактный номер телефона для подтверждения заказа;</li>
              <li>Адрес электронной почты для отправки чеков и уведомлений;</li>
              <li>Адрес доставки для логистических целей;</li>
              <li>Информацию о просмотренных товарах и предпочтениях (cookies).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display mb-4 text-[20px] font-medium xl:text-[24px]">
              3. Использование данных
            </h2>
            <p className="opacity-90">
              Собранная информация используется исключительно для:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 opacity-90 marker:text-[#C9A25B]">
              <li>Обработки и доставки ваших заказов;</li>
              <li>Связи с вами касательно статуса заказа;</li>
              <li>Улучшения качества обслуживания и работы сайта;</li>
              <li>Информирования о специальных предложениях (только с вашего согласия).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display mb-4 text-[20px] font-medium xl:text-[24px]">
              4. Защита и передача данных
            </h2>
            <p className="opacity-90">
              Мы принимаем все необходимые технические меры для защиты ваших данных от несанкционированного доступа. Мы не продаем и не передаем ваши личные данные третьим лицам, за исключением курьерских служб, необходимых для доставки вашего заказа.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-4 text-[20px] font-medium xl:text-[24px]">
              5. Контакты
            </h2>
            <p className="opacity-90">
              Если у вас возникли вопросы касательно политики конфиденциальности, вы можете связаться с нами по адресу:{" "}
              <a href="mailto:info@graffpiatto.com" className="text-[#C9A25B] hover:underline">
                info@graffpiatto.com
              </a>{" "}
              или по телефону{" "}
              <a href="tel:+77012161772" className="text-[#C9A25B] hover:underline">
                +7 701 216 17 72
              </a>.
            </p>
          </section>

        </div>

        {/* Кнопка назад */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex h-[50px] items-center justify-center border-2 border-[#303F56] px-8 text-[14px] font-medium uppercase tracking-wider text-[#303F56] hover:bg-[#303F56] hover:text-white transition-colors"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}