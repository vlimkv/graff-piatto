import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RussiaClientsPage() {
  const deliverySteps = [
    {
      number: "01",
      title: "Выбор товара",
      description: "Выберите понравившиеся товары из каталога и добавьте их в корзину"
    },
    {
      number: "02",
      title: "Оформление заказа",
      description: "Укажите адрес доставки в России и контактные данные"
    },
    {
      number: "03",
      title: "Оплата",
      description: "Оплатите заказ удобным способом: картой РФ или через СБП"
    },
    {
      number: "04",
      title: "Доставка",
      description: "Получите заказ в течение 7-14 дней в любой точке России"
    }
  ];

  const paymentMethods = [
    { name: "Карты РФ", icon: "💳" },
    { name: "СБП", icon: "📱" },
    { name: "Наличные", icon: "💵" }
  ];

  const cities = [
    "Москва", "Санкт-Петербург", "Казань", "Екатеринбург",
    "Новосибирск", "Краснодар", "Сочи", "Владивосток"
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* DESKTOP VERSION */}
      <div className="hidden xl:block">
        <div className="mx-auto w-full max-w-[1440px] px-12 pb-24 pt-32">
          
          {/* Hero Section */}
          <section className="mb-20">
            <div className="grid grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="font-display text-5xl font-bold leading-tight text-[#303F56] mb-6">
                  Доставка премиальной<br/>посуды в Россию
                </h1>
                <p className="text-lg leading-relaxed text-[#303F56] mb-8">
                  Мы организуем доставку товаров Graff Piatto в любой город России. 
                  Безопасная упаковка, быстрая доставка и удобные способы оплаты.
                </p>
                <div className="flex gap-4">
                  <Link href="/catalog" className="h-[56px] px-8 bg-[#C9A25B] text-white flex items-center justify-center text-base font-medium hover:bg-[#b58f4d] transition-colors">
                    Перейти в каталог
                  </Link>
                  <button className="h-[56px] px-8 border-2 border-[#303F56] text-[#303F56] flex items-center justify-center text-base font-medium hover:bg-[#303F56] hover:text-white transition-colors">
                    Связаться с нами
                  </button>
                </div>
              </div>
              
              <div className="relative h-[400px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80"
                  alt="Доставка в Россию"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Delivery Steps */}
          <section className="mb-20">
            <h2 className="font-display text-4xl font-medium text-center text-[#303F56] mb-16">
              Как оформить заказ
            </h2>
            
            <div className="grid grid-cols-4 gap-8">
              {deliverySteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 border-4 border-[#C9A25B] flex items-center justify-center mb-6">
                    <span className="font-display text-3xl font-bold text-[#C9A25B]">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#303F56] mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Payment Methods */}
          <section className="mb-20 bg-[#F5F1E5] p-12">
            <h2 className="font-display text-4xl font-medium text-center text-[#303F56] mb-12">
              Способы оплаты
            </h2>
            
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              {paymentMethods.map((method, idx) => (
                <div key={idx} className="bg-white p-8 text-center shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className="text-lg font-bold text-[#303F56]">{method.name}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Delivery Info */}
          <section className="mb-20">
            <div className="bg-[#303F56] p-12 text-white">
              <div className="grid grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-4xl font-medium mb-6">
                    Условия доставки
                  </h2>
                  <div className="space-y-4 text-base leading-relaxed">
                    <p>✓ Бесплатная доставка при заказе от 150 000 ₽</p>
                    <p>✓ Срок доставки: 7-14 рабочих дней</p>
                    <p>✓ Упаковка: многослойная защита для хрупких товаров</p>
                    <p>✓ Страхование груза включено</p>
                    <p>✓ Трекинг посылки на всех этапах</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">Доставляем в города:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {cities.map((city, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#C9A25B]"></div>
                        <span>{city}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-white/80">И другие города России</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display text-4xl font-medium text-center text-[#303F56] mb-12">
              Частые вопросы
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "Какие документы нужны для получения посылки?",
                  a: "Паспорт и номер заказа. Все таможенные документы мы оформляем сами."
                },
                {
                  q: "Можно ли вернуть товар?",
                  a: "Да, в течение 14 дней с момента получения, если товар не использовался."
                },
                {
                  q: "Как отследить посылку?",
                  a: "Трек-номер придет на email сразу после отправки заказа."
                },
                {
                  q: "Есть ли таможенные пошлины?",
                  a: "Все пошлины включены в стоимость доставки."
                }
              ].map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-[#303F56] mb-3">{item.q}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="xl:hidden px-5 py-10">
        
        {/* Hero */}
        <section className="mb-12">
          <h1 className="font-display text-3xl font-bold leading-tight text-[#303F56] mb-4">
            Доставка премиальной посуды в Россию
          </h1>
          
          <div className="relative h-[250px] overflow-hidden shadow-lg mb-6">
            <img
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80"
              alt="Доставка"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-base leading-relaxed text-[#303F56] mb-6">
            Организуем доставку премиальной посуды в любой город России. Безопасная упаковка и быстрая доставка.
          </p>
          
          <div className="space-y-3">
            <Link href="/catalog" className="block h-[50px] bg-[#C9A25B] text-white flex items-center justify-center text-base font-medium">
              Перейти в каталог
            </Link>
            <button className="w-full h-[50px] border-2 border-[#303F56] text-[#303F56] flex items-center justify-center text-base font-medium">
              Связаться с нами
            </button>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-medium text-center text-[#303F56] mb-8">
            Как заказать
          </h2>
          
          <div className="space-y-6">
            {deliverySteps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-16 h-16 shrink-0 border-3 border-[#C9A25B] flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-[#C9A25B]">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#303F56] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Payment */}
        <section className="mb-12 bg-[#F5F1E5] p-6">
          <h2 className="font-display text-2xl font-medium text-center text-[#303F56] mb-6">
            Оплата
          </h2>
          
          <div className="grid grid-cols-3 gap-4">
            {paymentMethods.map((method, idx) => (
              <div key={idx} className="bg-white p-4 text-center shadow-md">
                <div className="text-3xl mb-2">{method.icon}</div>
                <p className="text-sm font-semibold text-[#303F56]">{method.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Info */}
        <section className="mb-12 bg-[#303F56] p-6 text-white">
          <h2 className="font-display text-2xl font-medium mb-6">
            Условия доставки
          </h2>
          <div className="space-y-3 text-sm leading-relaxed">
            <p>✓ Бесплатно от 150 000 ₽</p>
            <p>✓ Срок: 7-14 дней</p>
            <p>✓ Защитная упаковка</p>
            <p>✓ Страхование включено</p>
            <p>✓ Трекинг посылки</p>
          </div>
          
          <h3 className="text-xl font-bold mt-8 mb-4">Города доставки:</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {cities.map((city, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#C9A25B]"></div>
                <span>{city}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/70">И другие города России</p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-display text-2xl font-medium text-center text-[#303F56] mb-8">
            Частые вопросы
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Какие документы нужны?",
                a: "Паспорт и номер заказа"
              },
              {
                q: "Можно ли вернуть товар?",
                a: "Да, в течение 14 дней"
              },
              {
                q: "Как отследить посылку?",
                a: "Трек-номер придет на email"
              },
              {
                q: "Есть ли пошлины?",
                a: "Все включено в доставку"
              }
            ].map((item, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-4">
                <h3 className="text-base font-bold text-[#303F56] mb-2">{item.q}</h3>
                <p className="text-sm text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}