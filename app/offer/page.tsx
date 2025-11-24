import React from "react";
import Link from "next/link";

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-white text-[#303F56]">
      <div className="mx-auto max-w-[1440px] px-5 py-12 xl:px-[303px] xl:py-20">
        
        {/* Заголовок страницы */}
        <div className="mb-10 text-center xl:mb-16">
          <h1 className="font-display text-[32px] font-medium leading-tight xl:text-[42px]">
            Публичная оферта
          </h1>
          <div className="mx-auto mt-4 h-[2px] w-[60px] bg-[#C9A25B] xl:w-[100px]" />
          <p className="mt-4 text-[13px] text-gray-400 xl:text-[14px]">
            Редакция от 24 ноября 2025 г.
          </p>
        </div>

        {/* Основной контент */}
        <div className="mx-auto max-w-[800px] space-y-8 text-[15px] leading-[26px] xl:text-[16px] xl:leading-[28px]">
          
          <p className="opacity-90 italic">
            Настоящий документ является официальным предложением (публичной офертой) интернет-магазина Graff Piatto о продаже товаров.
          </p>

          <section>
            <h2 className="font-display mb-4 text-[20px] font-medium xl:text-[24px]">
              1. Термины и определения
            </h2>
            <ul className="space-y-3 opacity-90">
              <li>
                <strong className="text-[#C9A25B]">Продавец</strong> — [Название ИП/ТОО], осуществляющее продажу товаров через Интернет-магазин. БИН/ИИН: [ВАШ БИН].
              </li>
              <li>
                <strong className="text-[#C9A25B]">Покупатель</strong> — физическое лицо, имеющее намерение заказать или приобрести товары.
              </li>
              <li>
                <strong className="text-[#C9A25B]">Интернет-магазин</strong> — сайт, расположенный по адресу graffpiatto.com.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display mb-4 text-[20px] font-medium xl:text-[24px]">
              2. Предмет договора
            </h2>
            <p className="opacity-90">
              Продавец обязуется передать в собственность Покупателя, а Покупатель обязуется оплатить и принять Товар, заказанный в Интернет-магазине. Право собственности на Товар переходит к Покупателю в момент передачи Товара.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-4 text-[20px] font-medium xl:text-[24px]">
              3. Порядок оформления заказа
            </h2>
            <p className="opacity-90">
              Заказ Товара осуществляется Покупателем через сервис сайта Интернет-магазина или через менеджеров по телефону/WhatsApp. При оформлении заказа Покупатель обязуется предоставить достоверную информацию о себе.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-4 text-[20px] font-medium xl:text-[24px]">
              4. Доставка и приемка
            </h2>
            <p className="opacity-90 mb-3">
              Доставка Товара осуществляется по территории Республики Казахстан и Российской Федерации. Сроки и стоимость доставки зависят от региона и тарифов курьерской службы.
            </p>
            <div className="border-l-2 border-[#C9A25B] bg-[#F5F1E5]/30 p-4 opacity-90">
              <p className="font-medium">Важно:</p>
              <p className="mt-1 text-[14px]">
                При получении Товара Покупатель обязан проверить целостность упаковки и самого товара (посуды). В случае обнаружения сколов или боя, необходимо составить акт с курьером на месте. Претензии по внешнему виду принимаются только в момент передачи товара.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display mb-4 text-[20px] font-medium xl:text-[24px]">
              5. Возврат товара
            </h2>
            <p className="opacity-90">
              Покупатель вправе отказаться от товара надлежащего качества в течение 14 дней, если сохранены его товарный вид (упаковка, пломбы, ярлыки) и потребительские свойства. Расходы на обратную доставку несет Покупатель.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-4 text-[20px] font-medium xl:text-[24px]">
              6. Реквизиты продавца
            </h2>
            <div className="opacity-90">
              <p className="font-bold">[Название ИП/ТОО]</p>
              <p>ИИН/БИН: [000000000000]</p>
              <p>Адрес: г. Астана, [Ваш Адрес]</p>
              <p>Тел: +7 701 216 17 72</p>
              <p>Email: info@graffpiatto.com</p>
            </div>
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