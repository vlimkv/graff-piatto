// app/product/[id]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const API_URL = 'http://localhost:4000';

type Product = {
  id: number;
  title: string;
  brand: string;
  category: string;
  priceKzt: number;
  priceRub: number;
  description?: string;
  imageUrl?: string;
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        
        // Получаем данные о товаре
        const res = await fetch(`${API_URL}/products/${productId}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
          
          // Загружаем похожие товары (той же категории)
          const allRes = await fetch(`${API_URL}/products`);
          if (allRes.ok) {
            const allProducts = await allRes.json();
            const related = allProducts
              .filter((p: Product) => 
                p.category === data.category && 
                p.id !== data.id
              )
              .slice(0, 3);
            setRelatedProducts(related);
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#C9A25B] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#303F56]">Загрузка товара...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#303F56] mb-4">Товар не найден</h2>
          <Link href="/catalog" className="text-[#C9A25B] hover:underline">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  // Для примера используем одно изображение 3 раза
  const productImages = [
    product.imageUrl,
    product.imageUrl,
    product.imageUrl
  ].filter(Boolean);

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
              <span className="underline">{product.category}</span>
            </p>
          </nav>

          {/* Main Product Section */}
          <div className="grid grid-cols-[441px_1fr] gap-12">
            
            {/* Left: Images */}
            <div className="flex flex-col gap-4">
              {/* Main Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#F5F1E5]">
                {product.imageUrl ? (
                  <Image
                    src={`${API_URL}${product.imageUrl}`}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Thumbnails - если есть изображение */}
              {productImages.length > 0 && (
                <div className="flex gap-4">
                  {productImages.slice(0, 3).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative h-[127px] w-[127px] overflow-hidden bg-[#F5F1E5] ${
                        selectedImage === idx ? 'ring-2 ring-[#C9A25B]' : ''
                      }`}
                    >
                      <Image
                        src={`${API_URL}${img}`}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col">
              
              {/* Title & Brand */}
              <h1 className="font-display text-[32px] font-bold leading-[43px] text-[#303F56]">
                {product.title}
              </h1>
              
              <p className="mt-4 font-display text-[20px] leading-[27px] text-[#303F56]">
                {product.brand}
              </p>

              {/* Description */}
              {product.description && (
                <p className="mt-6 text-[14px] leading-[17px] text-[#303F56]">
                  {product.description}
                </p>
              )}

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
                <p className="text-[16px] text-[#303F56]">{Number(product.priceKzt).toLocaleString()} KZT</p>
                <p className="text-[16px] text-[#303F56]">{Number(product.priceRub).toLocaleString()} RUB</p>
              </div>

              {/* Additional Info Sections */}
              <div className="mt-10 space-y-8">
                
                {/* Description Section */}
                <div>
                  <h3 className="mb-3 text-[16px] font-medium text-[#303F56]">
                    Описание:
                  </h3>
                  <p className="text-[14px] leading-[17px] text-[#303F56]">
                    {product.description || 'Подробное описание товара скоро будет добавлено.'}
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
                    Все элементы соответствуют международным стандартам безопасности для посуды, контактирующей с пищей.
                  </p>
                </div>

                {/* Care Instructions */}
                <div>
                  <h3 className="mb-3 text-[16px] font-medium text-[#303F56]">
                    Уход:
                  </h3>
                  <p className="text-[14px] leading-[17px] text-[#303F56]">
                    Чтобы изделие сохранило цвет и блеск долгие годы, рекомендуется:
                    <br />
                    • Мыть в тёплой воде с мягким средством.
                    <br />
                    • Избегать абразивных губок и порошков.
                    <br />
                    • Допускается мыться в посудомоечной машине на деликатном режиме.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <section className="mt-20">
              <h2 className="font-display text-center text-[36px] font-medium leading-[48px] text-[#303F56]">
                Вам также подойдет
              </h2>

              <div className="mt-12 grid grid-cols-3 gap-8">
                {relatedProducts.map((relProduct) => (
                  <article key={relProduct.id} className="flex flex-col bg-white shadow-sm transition-transform duration-300 hover:-translate-y-2">
                    <Link href={`/product/${relProduct.id}`} className="relative aspect-square w-full overflow-hidden bg-[#F5F1E5]">
                      {relProduct.imageUrl ? (
                        <Image
                          src={`${API_URL}${relProduct.imageUrl}`}
                          alt={relProduct.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </Link>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-[16px] font-bold leading-[19px] text-[#303F56]">
                        {relProduct.title}
                      </h3>
                      
                      <p className="mt-2 text-[14px] font-light leading-[17px] text-[#303F56]">
                        {relProduct.brand}
                      </p>

                      <div className="mt-4 h-px w-full bg-[#303F56]/30" />

                      <div className="mt-4 flex items-center justify-between">
                        <button className="flex h-[36px] w-[90px] items-center justify-center bg-[#C9A25B] text-[12px] text-white transition-colors hover:bg-[#b08b48]">
                          В корзину
                        </button>

                        <div className="flex flex-col items-end gap-1">
                          <p className="text-[12px] text-[#303F56]">{Number(relProduct.priceKzt).toLocaleString()} KZT</p>
                          <p className="text-[12px] text-[#303F56]">{Number(relProduct.priceRub).toLocaleString()} RUB</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
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
          {product.imageUrl ? (
            <Image
              src={`${API_URL}${product.imageUrl}`}
              alt={product.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">
              <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        {/* Product Info Mobile */}
        <div>
          <h1 className="font-display text-[28px] font-bold leading-tight text-[#303F56]">
            {product.title}
          </h1>
          
          <p className="mt-3 font-display text-[18px] text-[#303F56]">
            {product.brand}
          </p>

          {product.description && (
            <p className="mt-4 text-[14px] leading-relaxed text-[#303F56]">
              {product.description}
            </p>
          )}

          {/* Prices Mobile */}
          <div className="mt-6 flex flex-col gap-2 border-t border-b border-gray-200 py-4">
            <div className="flex justify-between">
              <span className="text-[16px] font-medium text-gray-600">KZT</span>
              <span className="text-[18px] font-bold text-[#303F56]">{Number(product.priceKzt).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[14px] text-gray-500">RUB</span>
              <span className="text-[14px] text-[#303F56]">{Number(product.priceRub).toLocaleString()}</span>
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
                {product.description || 'Подробное описание товара скоро будет добавлено.'}
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-[16px] font-semibold text-[#303F56]">Сертификация:</h3>
              <p className="text-[14px] leading-relaxed text-[#303F56]">
                Тарелка изготовлена из высококачественного фарфора, прошедшего контроль на содержание свинца и кадмия.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-[16px] font-semibold text-[#303F56]">Уход:</h3>
              <p className="text-[14px] leading-relaxed text-[#303F56]">
                Мыть в тёплой воде с мягким средством. Допускается мыться в посудомоечной машине на деликатном режиме.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Mobile */}
        {relatedProducts.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-center text-[28px] font-medium text-[#303F56] mb-6">
              Вам также подойдет
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {relatedProducts.map((relProduct) => (
                <article key={relProduct.id} className="flex flex-col bg-white shadow-sm">
                  <Link href={`/product/${relProduct.id}`} className="relative aspect-square w-full overflow-hidden bg-[#F5F1E5]">
                    {relProduct.imageUrl ? (
                      <Image
                        src={`${API_URL}${relProduct.imageUrl}`}
                        alt={relProduct.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-200">
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </Link>

                  <div className="flex flex-col p-3">
                    <h3 className="text-[13px] font-bold leading-tight text-[#303F56] line-clamp-2 min-h-[34px]">
                      {relProduct.title}
                    </h3>
                    
                    <p className="mt-1 text-[11px] text-gray-500">{relProduct.brand}</p>

                    <div className="mt-2 h-px w-full bg-gray-200" />

                    <div className="mt-2 flex flex-col gap-1">
                      <p className="text-[12px] font-semibold text-[#303F56]">{Number(relProduct.priceKzt).toLocaleString()} ₸</p>
                      <p className="text-[10px] text-gray-400">{Number(relProduct.priceRub).toLocaleString()} ₽</p>
                    </div>

                    <button className="mt-3 h-[32px] w-full bg-[#C9A25B] text-[11px] font-bold text-white transition-colors active:bg-[#b08b48]">
                      В КОРЗИНУ
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}