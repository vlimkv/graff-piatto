// app/product/[id]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCart } from "../../contexts/cart-context";

const API_URL = 'https://infinitely-traversable-carin.ngrok-free.dev/';

type Product = {
  id: number;
  title: string;
  brand: string;
  category: string;
  priceKzt: number;
  priceRub: number;
  description?: string;
  imageUrl?: string;
  images?: string[];
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id;
  const cart = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        
        const res = await fetch(`${API_URL}/products/${productId}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
          
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

  const handleAddToCart = () => {
    if (!product) return;
    
    cart.addToCart({
      id: product.id,
      name: product.title,
      brand: product.brand,
      category: product.category,
      priceKzt: product.priceKzt,
      priceRub: product.priceRub,
      images: product.images || (product.imageUrl ? [product.imageUrl] : []),
      inStock: true
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleAddRelatedToCart = (relProduct: Product) => {
    cart.addToCart({
      id: relProduct.id,
      name: relProduct.title,
      brand: relProduct.brand,
      category: relProduct.category,
      priceKzt: relProduct.priceKzt,
      priceRub: relProduct.priceRub,
      images: relProduct.images || (relProduct.imageUrl ? [relProduct.imageUrl] : []),
      inStock: true
    });
  };

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

  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : product.imageUrl 
      ? [product.imageUrl] 
      : [];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Desktop Layout */}
      <div className="hidden xl:block pt-14">
        <div className="mx-auto w-full max-w-[1440px] px-12 py-10">
          
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
          <div className="grid grid-cols-[500px_1fr] gap-12">
            
            {/* Left: Gallery */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square w-full overflow-hidden bg-[#F5F1E5] rounded-lg shadow-lg">
                {productImages.length > 0 ? (
                  <img
                    src={`${API_URL}${productImages[selectedImage]}`}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                
                {productImages.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                    {selectedImage + 1} / {productImages.length}
                  </div>
                )}
              </div>

              {productImages.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-square overflow-hidden bg-[#F5F1E5] rounded-lg transition-all ${
                        selectedImage === idx 
                          ? 'ring-4 ring-[#C9A25B] scale-105 shadow-xl' 
                          : 'hover:ring-2 hover:ring-[#C9A25B]/50 hover:scale-105'
                      }`}
                    >
                      <img
                        src={`${API_URL}${img}`}
                        alt={`${product.title} - фото ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col">
              
              <h1 className="font-display text-[36px] font-bold leading-tight text-[#303F56] mb-2">
                {product.title}
              </h1>
              
              <p className="font-display text-[22px] text-[#303F56]/80 mb-6">
                {product.brand}
              </p>

              {product.description && (
                <p className="text-[16px] leading-relaxed text-[#303F56] mb-8 bg-gray-50 p-6 rounded-lg">
                  {product.description}
                </p>
              )}

              <div className="flex items-center justify-between mb-8 p-6 bg-[#F5F1E5] rounded-lg">
                <div>
                  <p className="text-[14px] text-gray-600 mb-1">Цена</p>
                  <p className="text-[32px] font-bold text-[#303F56]">{Number(product.priceKzt).toLocaleString()} ₸</p>
                  <p className="text-[16px] text-gray-500">{Number(product.priceRub).toLocaleString()} ₽</p>
                </div>
              </div>

              <div className="flex gap-4 mb-10">
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 h-[52px] text-[18px] font-semibold text-white transition-all rounded-lg relative overflow-hidden ${
                    addedToCart ? 'bg-green-500' : 'bg-[#C9A25B] hover:bg-[#b08b48] hover:shadow-lg active:scale-98'
                  }`}
                >
                  {addedToCart ? '✓ Добавлено' : 'Добавить в корзину'}
                </button>
                <Link 
                  href="/cart"
                  className="flex-1 h-[52px] border-2 border-[#C9A25B] text-[18px] font-semibold text-[#303F56] transition-all hover:bg-[#C9A25B]/5 rounded-lg flex items-center justify-center"
                >
                  Купить в один клик
                </Link>
              </div>

              <div className="space-y-8 border-t border-gray-200 pt-8">
                
                <div>
                  <h3 className="text-[18px] font-bold text-[#303F56] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                    </svg>
                    Описание товара
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#303F56]">
                    {product.description || 'Подробное описание товара скоро будет добавлено.'}
                  </p>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#303F56] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Сертификация
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#303F56]">
                    Изделие изготовлено из высококачественного фарфора, прошедшего контроль на содержание свинца и кадмия.
                    Все элементы соответствуют международным стандартам безопасности для посуды, контактирующей с пищей.
                  </p>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#303F56] mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                    Уход за изделием
                  </h3>
                  <ul className="text-[15px] leading-relaxed text-[#303F56] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A25B] mt-1">•</span>
                      <span>Мыть в тёплой воде с мягким средством</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A25B] mt-1">•</span>
                      <span>Избегать абразивных губок и порошков</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A25B] mt-1">•</span>
                      <span>Допускается мытьё в посудомоечной машине на деликатном режиме</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A25B] mt-1">•</span>
                      <span>Подходит для использования в микроволновой печи</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-20 border-t border-gray-200 pt-16">
              <h2 className="font-display text-center text-[36px] font-bold text-[#303F56] mb-12">
                Вам также подойдет
              </h2>

              <div className="grid grid-cols-3 gap-8">
                {relatedProducts.map((relProduct) => (
                  <article key={relProduct.id} className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <Link href={`/product/${relProduct.id}`} className="relative aspect-square w-full overflow-hidden bg-[#F5F1E5]">
                      {relProduct.imageUrl ? (
                        <img
                          src={`${API_URL}${relProduct.imageUrl}`}
                          alt={relProduct.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </Link>

                    <div className="flex flex-col p-5">
                      <Link href={`/product/${relProduct.id}`}>
                        <h3 className="text-[16px] font-bold text-[#303F56] mb-2 line-clamp-2 min-h-[40px] hover:text-[#C9A25B] transition-colors">
                          {relProduct.title}
                        </h3>
                      </Link>
                      
                      <p className="text-[14px] text-gray-600 mb-4">{relProduct.brand}</p>

                      <div className="h-px w-full bg-gray-200 mb-4" />

                      <div className="flex items-center justify-between">
                        <button 
                          onClick={() => handleAddRelatedToCart(relProduct)}
                          className="h-[40px] px-5 bg-[#C9A25B] text-[14px] font-semibold text-white transition-colors hover:bg-[#b08b48] rounded"
                        >
                          В корзину
                        </button>

                        <div className="flex flex-col items-end">
                          <p className="text-[14px] font-bold text-[#303F56]">{Number(relProduct.priceKzt).toLocaleString()} ₸</p>
                          <p className="text-[12px] text-gray-500">{Number(relProduct.priceRub).toLocaleString()} ₽</p>
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
        
        <nav className="mb-6">
          <p className="text-[14px] font-light text-[#303F56]">
            <Link href="/" className="hover:text-[#C9A25B]">Главная</Link>
            {" / "}
            <Link href="/catalog" className="hover:text-[#C9A25B]">Каталог</Link>
            {" / "}
            <span className="underline">Товар</span>
          </p>
        </nav>

        <div className="relative aspect-square w-full overflow-hidden bg-[#F5F1E5] rounded-lg mb-4">
          {productImages.length > 0 ? (
            <img
              src={`${API_URL}${productImages[selectedImage]}`}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">
              <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          
          {productImages.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
              {selectedImage + 1} / {productImages.length}
            </div>
          )}
        </div>

        {productImages.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
            {productImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative flex-shrink-0 w-16 h-16 overflow-hidden bg-[#F5F1E5] rounded-lg transition-all ${
                  selectedImage === idx 
                    ? 'ring-2 ring-[#C9A25B] scale-110' 
                    : 'opacity-60'
                }`}
              >
                <img
                  src={`${API_URL}${img}`}
                  alt={`Фото ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div>
          <h1 className="font-display text-[26px] font-bold leading-tight text-[#303F56] mb-2">
            {product.title}
          </h1>
          
          <p className="font-display text-[18px] text-[#303F56]/80 mb-4">
            {product.brand}
          </p>

          {product.description && (
            <p className="text-[14px] leading-relaxed text-[#303F56] mb-6 bg-gray-50 p-4 rounded-lg">
              {product.description}
            </p>
          )}

          <div className="flex justify-between items-center border-y border-gray-200 py-4 mb-6">
            <div>
              <p className="text-[14px] text-gray-600 mb-1">Цена</p>
              <p className="text-[24px] font-bold text-[#303F56]">{Number(product.priceKzt).toLocaleString()} ₸</p>
              <p className="text-[14px] text-gray-500">{Number(product.priceRub).toLocaleString()} ₽</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            <button 
              onClick={handleAddToCart}
              className={`h-[50px] w-full text-[16px] font-semibold text-white rounded-lg transition-all ${
                addedToCart ? 'bg-green-500' : 'bg-[#C9A25B] active:bg-[#b08b48]'
              }`}
            >
              {addedToCart ? '✓ Добавлено в корзину' : 'Добавить в корзину'}
            </button>
            <Link 
              href="/cart"
              className="h-[50px] w-full border-2 border-[#C9A25B] text-[16px] font-semibold text-[#303F56] rounded-lg active:bg-gray-50 flex items-center justify-center"
            >
              Купить в один клик
            </Link>
          </div>

          <div className="space-y-6 border-t border-gray-200 pt-6">
            <div>
              <h3 className="text-[16px] font-bold text-[#303F56] mb-2">Описание</h3>
              <p className="text-[14px] leading-relaxed text-[#303F56]">
                {product.description || 'Подробное описание товара скоро будет добавлено.'}
              </p>
            </div>

            <div>
              <h3 className="text-[16px] font-bold text-[#303F56] mb-2">Сертификация</h3>
              <p className="text-[14px] leading-relaxed text-[#303F56]">
                Изделие из высококачественного фарфора, соответствует международным стандартам безопасности.
              </p>
            </div>

            <div>
              <h3 className="text-[16px] font-bold text-[#303F56] mb-2">Уход</h3>
              <ul className="text-[14px] leading-relaxed text-[#303F56] space-y-1">
                <li>• Мыть в тёплой воде с мягким средством</li>
                <li>• Избегать абразивных средств</li>
                <li>• Допускается мытьё в посудомойке</li>
              </ul>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="font-display text-[24px] font-bold text-[#303F56] mb-6 text-center">
              Вам также подойдет
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {relatedProducts.map((relProduct) => (
                <article key={relProduct.id} className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
                  <Link href={`/product/${relProduct.id}`} className="relative aspect-square w-full overflow-hidden bg-[#F5F1E5]">
                    {relProduct.imageUrl ? (
                      <img
                        src={`${API_URL}${relProduct.imageUrl}`}
                        alt={relProduct.title}
                        className="w-full h-full object-cover"
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
                    <Link href={`/product/${relProduct.id}`}>
                      <h3 className="text-[13px] font-bold text-[#303F56] line-clamp-2 min-h-[34px] mb-1 hover:text-[#C9A25B] transition-colors">
                        {relProduct.title}
                      </h3>
                    </Link>
                    
                    <p className="text-[11px] text-gray-500 mb-2">{relProduct.brand}</p>

                    <div className="h-px w-full bg-gray-200 mb-2" />

                    <div className="flex flex-col gap-1 mb-3">
                      <p className="text-[13px] font-bold text-[#303F56]">{Number(relProduct.priceKzt).toLocaleString()} ₸</p>
                      <p className="text-[11px] text-gray-400">{Number(relProduct.priceRub).toLocaleString()} ₽</p>
                    </div>

                    <button 
                      onClick={() => handleAddRelatedToCart(relProduct)}
                      className="h-[36px] w-full bg-[#C9A25B] text-[12px] font-bold text-white rounded active:bg-[#b08b48]"
                    >
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