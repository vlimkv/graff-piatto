"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Mock data for related products
const relatedProducts = [
  {
    id: 1,
    name: 'Мелкая тарелка «Blue Garden»',
    brand: 'Lenox',
    priceKzt: 450000,
    priceRub: 69140,
    image: '/images/card-blue-garden.png'
  },
  {
    id: 2,
    name: 'Мелкая тарелка «Blue Garden»',
    brand: 'Lenox',
    priceKzt: 450000,
    priceRub: 69140,
    image: '/images/card-blue-garden.png'
  },
  {
    id: 3,
    name: 'Мелкая тарелка «Blue Garden»',
    brand: 'Lenox',
    priceKzt: 450000,
    priceRub: 69140,
    image: '/images/card-blue-garden.png'
  }
];

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const productImages = [
    '/images/card-blue-garden.png',
    '/images/card-blue-garden.png',
    '/images/card-blue-garden.png'
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Desktop Layout */}
      <div className="hidden xl:block">
        <div className="mx-auto w-full max-w-[1440px] px-12 py-10 pt-25">
          
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <p className="text-[16px] font-light text-[#303F56]">
              <Link href="/" className="hover:text-[#C9A25B] transition-colors">Главная</Link>
              {" / "}
              <Link href="/catalog" className="hover:text-[#C9A25B] transition-colors">Каталог</Link>
              {" / "}
              <Link href="/catalog?category=plates" className="hover:text-[#C9A25B] transition-colors">Тарелки</Link>
              {" / "}
              <span className="underline">Обеденные тарелки</span>
            </p>
          </nav>

          {/* Main Product Section */}
          <div className="grid grid-cols-[441px_1fr] gap-12">
            
            {/* Left: Images */}
            <div className="flex flex-col gap-4">
              {/* Main Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#F5F1E5]">
                <Image
                  src={productImages[selectedImage]}
                  alt="Мелкая тарелка Blue Garden"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative h-[127px] w-[127px] overflow-hidden bg-[#F5F1E5] ${
                      selectedImage === idx ? 'ring-2 ring-[#C9A25B]' : ''
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col">
              
              {/* Title & Brand */}
              <h1 className="font-display text-[32px] font-bold leading-[43px] text-[#303F56]">
                Мелкая тарелка «Blue Garden»
              </h1>
              
              <p className="mt-4 font-display text-[20px] leading-[27px] text-[#303F56]">
                Lenox
              </p>

              {/* Description */}
              <p className="mt-6 text-[14px] leading-[17px] text-[#303F56]">
                Мелкая тарелка из фарфора, изящная и прочная, с тонкой голубой росписью.
                <br />
                Подходит для повседневной и праздничной сервировки.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-4">
                <button className="flex h-[41px] w-[196px] items-center justify-center bg-[#C9A25B] text-[16px] text-white transition-colors hover:bg-[#b08b48]">
                  Добавить в корзину
                </button>
                <button className="flex h-[41px] w-[196px] items-center justify-center border border-[#C9A25B] text-[16px] text-[#303F56] transition-colors hover:bg-gray-50">
                  Купить в один клик
                </button>
              </div>

              {/* Prices */}
              <div className="mt-6 flex flex-col items-end gap-1">
                <p className="text-[16px] text-[#303F56]">450 000 KZT</p>
                <p className="text-[16px] text-[#303F56]">69 140 RUB</p>
                <p className="text-[16px] text-[#303F56]">779 EUR</p>
              </div>

              {/* Additional Info Sections */}
              <div className="mt-10 space-y-8">
                
                {/* Description Section */}
                <div>
                  <h3 className="mb-3 text-[16px] font-medium text-[#303F56]">
                    Описание:
                  </h3>
                  <p className="text-[14px] leading-[17px] text-[#303F56]">
                    Тёплое сочетание голубого и изысканного белого позволяет этой коллекции подчеркнуть эстетику вашего стола.
                  </p>
                </div>

                {/* Certification Section */}
                <div>
                  <h3 className="mb-3 text-[16px] font-medium text-[#303F56]">
                    Сертификация:
                  </h3>
                  <p className="text-[14px] leading-[17px] text-[#303F56]">
                    Тарелка изготовлена из высококачественного фарфора, прошедшего контроль на содержание свинца и кадмия.
                    <br />
                    Все элементы соответствуют международным стандартам безопасности для посуды, контактирующей с пищей:
                    <br />
                    — FDA (Food and Drug Administration, США)
                    <br />
                    — LFGB (Lebensmittel- und Futtermittelgesetzbuch, Германия)
                    <br />
                    — CE (Conformité Européenne)
                    <br />
                    Термостойкость и долговечность подтверждены заводскими испытаниями.
                  </p>
                </div>

                {/* Care Instructions */}
                <div>
                  <h3 className="mb-3 text-[16px] font-medium text-[#303F56]">
                    Уход:
                  </h3>
                  <p className="text-[14px] leading-[17px] text-[#303F56]">
                    Чтобы изделие сохраняло цвет и блеск долгие годы, рекомендуется:
                    <br />
                    • Мыть в тёплой воде с мягким средством.
                    <br />
                    • Избегать абразивных губок и порошков.
                    <br />
                    • Допускается мытьё в посудомоечной машине на деликатном режиме.
                    <br />
                    • Не подвергать резким перепадам температуры.
                    <br />
                    Ручная роспись и глазурь сохраняют оттенок даже при ежедневном использовании.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <section className="mt-20">
            <h2 className="font-display text-center text-[36px] font-medium leading-[48px] text-[#303F56]">
              Вам также подойдет
            </h2>

            <div className="mt-12 grid grid-cols-3 gap-8">
              {relatedProducts.map((product) => (
                <article key={product.id} className="flex flex-col bg-white shadow-sm transition-transform duration-300 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative aspect-square w-full overflow-hidden bg-[#F5F1E5]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[16px] font-bold leading-[19px] text-[#303F56]">
                      {product.name}
                    </h3>
                    
                    <p className="mt-2 text-[14px] font-light leading-[17px] text-[#303F56]">
                      {product.brand}
                    </p>

                    <div className="mt-4 h-px w-full bg-[#303F56]/30" />

                    <div className="mt-4 flex items-center justify-between">
                      <button className="flex h-[36px] w-[90px] items-center justify-center bg-[#C9A25B] text-[12px] text-white transition-colors hover:bg-[#b08b48]">
                        В корзину
                      </button>

                      <div className="flex flex-col items-end gap-1">
                        <p className="text-[12px] text-[#303F56]">{product.priceKzt.toLocaleString()} KZT</p>
                        <p className="text-[12px] text-[#303F56]">{product.priceRub.toLocaleString()} RUB</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="xl:hidden px-5 py-8">
        
        {/* Breadcrumbs Mobile */}
        <nav className="mb-6">
          <p className="text-[14px] font-light text-[#303F56]">
            <Link href="/" className="hover:text-[#C9A25B]">Главная</Link>
            {" / "}
            <Link href="/catalog" className="hover:text-[#C9A25B]">Каталог</Link>
            {" / "}
            <span className="underline">Товар</span>
          </p>
        </nav>

        {/* Main Image Mobile */}
        <div className="relative aspect-square w-full overflow-hidden bg-[#F5F1E5] mb-6">
          <Image
            src={productImages[selectedImage]}
            alt="Мелкая тарелка Blue Garden"
            fill
            className="object-cover"
          />
        </div>

        {/* Thumbnails Mobile */}
        <div className="flex gap-3 mb-6 overflow-x-auto">
          {productImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`relative h-[80px] w-[80px] shrink-0 overflow-hidden bg-[#F5F1E5] ${
                selectedImage === idx ? 'ring-2 ring-[#C9A25B]' : ''
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Product Info Mobile */}
        <div>
          <h1 className="font-display text-[28px] font-bold leading-tight text-[#303F56]">
            Мелкая тарелка «Blue Garden»
          </h1>
          
          <p className="mt-3 font-display text-[18px] text-[#303F56]">
            Lenox
          </p>

          <p className="mt-4 text-[14px] leading-relaxed text-[#303F56]">
            Мелкая тарелка из фарфора, изящная и прочная, с тонкой голубой росписью.
            Подходит для повседневной и праздничной сервировки.
          </p>

          {/* Prices Mobile */}
          <div className="mt-6 flex flex-col gap-2 border-t border-b border-gray-200 py-4">
            <div className="flex justify-between">
              <span className="text-[16px] font-medium text-gray-600">KZT</span>
              <span className="text-[18px] font-bold text-[#303F56]">450 000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[14px] text-gray-500">RUB</span>
              <span className="text-[14px] text-[#303F56]">69 140</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[14px] text-gray-500">EUR</span>
              <span className="text-[14px] text-[#303F56]">779</span>
            </div>
          </div>

          {/* Buttons Mobile */}
          <div className="mt-6 flex flex-col gap-3">
            <button className="h-[50px] w-full bg-[#C9A25B] text-[16px] font-medium text-white transition-colors active:bg-[#b08b48]">
              Добавить в корзину
            </button>
            <button className="h-[50px] w-full border border-[#C9A25B] text-[16px] font-medium text-[#303F56] transition-colors active:bg-gray-50">
              Купить в один клик
            </button>
          </div>

          {/* Additional Info Mobile */}
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="mb-2 text-[16px] font-semibold text-[#303F56]">Описание:</h3>
              <p className="text-[14px] leading-relaxed text-[#303F56]">
                Тёплое сочетание голубого и изысканного белого позволяет этой коллекции подчеркнуть эстетику вашего стола.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-[16px] font-semibold text-[#303F56]">Сертификация:</h3>
              <p className="text-[14px] leading-relaxed text-[#303F56]">
                Тарелка изготовлена из высококачественного фарфора, прошедшего контроль на содержание свинца и кадмия. 
                Все элементы соответствуют международным стандартам безопасности: FDA, LFGB, CE.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-[16px] font-semibold text-[#303F56]">Уход:</h3>
              <p className="text-[14px] leading-relaxed text-[#303F56]">
                Мыть в тёплой воде с мягким средством. Допускается мытьё в посудомоечной машине на деликатном режиме.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Mobile */}
        <section className="mt-12">
          <h2 className="font-display text-center text-[28px] font-medium text-[#303F56] mb-6">
            Вам также подойдет
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {relatedProducts.map((product) => (
              <article key={product.id} className="flex flex-col bg-white shadow-sm">
                <div className="relative aspect-square w-full overflow-hidden bg-[#F5F1E5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col p-3">
                  <h3 className="text-[13px] font-bold leading-tight text-[#303F56] line-clamp-2 min-h-[34px]">
                    {product.name}
                  </h3>
                  
                  <p className="mt-1 text-[11px] text-gray-500">{product.brand}</p>

                  <div className="mt-2 h-px w-full bg-gray-200" />

                  <div className="mt-2 flex flex-col gap-1">
                    <p className="text-[12px] font-semibold text-[#303F56]">{product.priceKzt.toLocaleString()} ₸</p>
                    <p className="text-[10px] text-gray-400">{product.priceRub.toLocaleString()} ₽</p>
                  </div>

                  <button className="mt-3 h-[32px] w-full bg-[#C9A25B] text-[11px] font-bold text-white transition-colors active:bg-[#b08b48]">
                    В КОРЗИНУ
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}