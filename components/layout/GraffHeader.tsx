"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

// --- ИКОНКИ ---
type IconProps = React.SVGProps<SVGSVGElement>;


const IconSearch = (props: IconProps) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <circle cx="11" cy="11" r="6" />
    <line x1="16" y1="16" x2="21" y2="21" />
  </svg>
);



const IconCart = (props: IconProps) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <circle cx="9" cy="19" r="1.5" />
    <circle cx="17" cy="19" r="1.5" />
    <path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h9.8L21 8H8" />
  </svg>
);

const IconMenu = (props: IconProps) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconClose = (props: IconProps) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconTrash = (props: IconProps) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconMinus = (props: IconProps) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconPlus = (props: IconProps) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// --- ТИПЫ ---
type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  priceKzt: number;
  priceRub: number;
  image: string;
};

type CartItem = Product & { quantity: number };

// --- MOCK DATA ---
const allProducts: Product[] = [
  { id: 1, name: 'Мелкая тарелка «Blue Garden»', brand: 'Lenox', category: 'Обеденные тарелки', priceKzt: 450000, priceRub: 69140, image: '/images/card-blue-garden.png' },
  { id: 2, name: 'Обеденная тарелка «Morning Light»', brand: 'Villeroy & Boch', category: 'Обеденные тарелки', priceKzt: 390000, priceRub: 59900, image: '/images/card-ivory-line.png' },
  { id: 3, name: 'Десертная тарелка «Terra»', brand: 'Gien', category: 'Десертные тарелки', priceKzt: 320000, priceRub: 49100, image: '/images/card-blue-garden.png' },
  { id: 4, name: 'Суповая тарелка «Blue Garden»', brand: 'Lenox', category: 'Суповые тарелки', priceKzt: 470000, priceRub: 72200, image: '/images/card-ivory-line.png' },
  { id: 5, name: 'Чайная пара «Morning Light»', brand: 'Villeroy & Boch', category: 'Чайные пары', priceKzt: 510000, priceRub: 78300, image: '/images/card-blue-garden.png' },
];

export function GraffHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock корзина
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { ...allProducts[0], quantity: 1 },
    { ...allProducts[1], quantity: 2 }
  ]);

  // Поиск
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Корзина функции
  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const getCartTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.priceKzt * item.quantity, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = (mobileMenuOpen || searchOpen || cartOpen) ? "hidden" : "auto";
  }, [mobileMenuOpen, searchOpen, cartOpen]);

  return (
    <>
      {/* DESKTOP HEADER */}
      <div className="hidden xl:block">
        <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-gray-200 bg-white">
          <div className="relative mx-auto h-full w-full max-w-[1440px]">
            {/* Логотип */}
            <Link
              href="/"
              aria-label="На главную Graff Piatto"
              className="absolute left-[283px] top-[-140px] h-[300px] w-[165px] z-0"
            >
              <div className="relative h-full w-full rounded-[999px] bg-white shadow-sm cursor-pointer">
                <div className="absolute left-[20px] top-[155px] h-[125px] w-[125px]">
                  <Image
                    src="/images/logo-main.png"
                    alt="Логотип Graff Piatto"
                    width={125}
                    height={125}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </Link>

            <nav className="absolute left-[462px] top-[31px] z-10 flex h-[17px] w-[592px] items-center justify-between text-sm font-medium text-black">
              <Link href="/catalog" className="hover:text-[#C9A25B] transition-colors">Каталог</Link>
              <Link href="/graff-gastronomy" className="hover:text-[#C9A25B] transition-colors">Graff Gastronomy</Link>
              <Link href="/russia-clients" className="hover:text-[#C9A25B] text-center transition-colors">Для клиентов из России</Link>
              <Link href="/contacts" className="hover:text-[#C9A25B] text-center transition-colors">Контакты</Link>
              <Link href="/news" className="hover:text-[#C9A25B] text-center transition-colors">Новости</Link>
              <Link href="/about" className="hover:text-[#C9A25B] text-center transition-colors">О бренде</Link>
            </nav>

            <div className="absolute left-[1089px] top-[28px] z-10 flex items-center gap-[20px] text-[#303F56]">
              <button 
                onClick={() => setSearchOpen(true)}
                aria-label="Поиск" 
                className="hover:text-[#C9A25B] transition-colors"
              >
                <IconSearch />
              </button>
              <button 
                onClick={() => setCartOpen(true)}
                aria-label="Корзина" 
                className="relative hover:text-[#C9A25B] transition-colors"
              >
                <IconCart />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A25B] text-xs font-bold text-white">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* MOBILE HEADER */}
      <div className="xl:hidden">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
          <div className="flex h-16 items-center justify-between px-5">
            <Link href="/" aria-label="На главную Graff Piatto" className="flex items-center">
              <span className="font-display text-xl font-bold tracking-wider text-[#303F56]">
                GRAFF PIATTO
              </span>
            </Link>

            <div className="flex items-center gap-5">
              <button 
                onClick={() => setSearchOpen(true)}
                aria-label="Поиск" 
                className="text-[#303F56]"
              >
                <IconSearch />
              </button>
              <button 
                onClick={() => setCartOpen(true)}
                aria-label="Корзина" 
                className="relative text-[#303F56]"
              >
                <IconCart />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9A25B] text-[10px] font-bold text-white">
                    {getCartCount()}
                  </span>
                )}
              </button>
              <button
                aria-label="Меню"
                className="text-[#303F56]"
                onClick={() => setMobileMenuOpen(true)}
              >
                <IconMenu />
              </button>
            </div>
          </div>
        </header>

        {/* MOBILE MENU OVERLAY */}
        <div
          className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
            <span className="font-display text-lg font-bold text-[#C9A25B]">МЕНЮ</span>
            <button
              onClick={closeMobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-[#303F56]"
            >
              <IconClose className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6 pt-10">
            <Link href="/catalog" onClick={closeMobileMenu} className="font-display text-2xl font-medium text-[#C9A25B]">
              Каталог
            </Link>
            <Link href="/graff-gastronomy" onClick={closeMobileMenu} className="text-xl font-medium text-[#303F56]">
              Graff Gastronomy
            </Link>
            <Link href="/about" onClick={closeMobileMenu} className="text-xl font-medium text-[#303F56]">
              О бренде
            </Link>
            <Link href="/news" onClick={closeMobileMenu} className="text-xl font-medium text-[#303F56]">
              Новости
            </Link>
            <Link href="/contacts" onClick={closeMobileMenu} className="text-xl font-medium text-[#303F56]">
              Контакты
            </Link>

            <div className="h-px w-16 bg-[#C9A25B]/50 my-4" />

            <Link href="/russia-clients" onClick={closeMobileMenu} className="text-base font-medium text-gray-500">
              Для клиентов из России
            </Link>
          </div>

          <div className="absolute bottom-10 left-0 w-full px-6">
            <button className="w-full h-[50px] bg-[#303F56] text-white uppercase text-sm font-medium tracking-wider">
              Связаться с нами
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH MODAL */}
      {searchOpen && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-[900px] bg-white shadow-2xl mt-20 xl:mt-32 max-h-[80vh] overflow-hidden flex flex-col">
            {/* Search Header */}
            <div className="border-b border-gray-200 p-4 xl:p-6">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Поиск товаров..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full h-[50px] xl:h-[56px] border-2 border-[#303F56] px-4 xl:px-6 pr-14 text-base xl:text-lg focus:outline-none text-black"
                  />
                  <div className="absolute right-0 top-0 flex h-[50px] xl:h-[56px] w-[50px] xl:w-[56px] items-center justify-center bg-[#303F56] text-white">
                    <IconSearch className="h-6 w-6 text-white" />
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="h-[50px] xl:h-[56px] w-[50px] xl:w-[56px] flex items-center justify-center border-2 border-gray-300 hover:bg-gray-100 transition-colors shrink-0"
                >
                  <IconClose className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="flex-1 overflow-y-auto p-4 xl:p-6">
              {searchQuery.trim() ? (
                searchResults.length > 0 ? (
                  <div className="space-y-3">
                    {searchResults.map(product => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex gap-3 xl:gap-4 p-3 xl:p-4 hover:bg-gray-50 transition-colors border border-gray-100"
                      >
                        <div className="relative h-16 w-16 xl:h-20 xl:w-20 shrink-0 bg-[#F5F1E5]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold uppercase text-gray-400 mb-1">
                            {product.brand}
                          </p>
                          <h3 className="text-sm font-medium text-[#303F56] mb-2 line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-base xl:text-lg font-bold text-[#C9A25B]">
                            {product.priceKzt.toLocaleString()} ₸
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                    <IconSearch className="h-12 xl:h-16 w-12 xl:w-16 mb-4 opacity-20" />
                    <p className="text-base xl:text-lg">Ничего не найдено</p>
                  </div>
                )
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <p className="text-sm xl:text-base">Начните вводить для поиска товаров</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CART MODAL */}
      {cartOpen && (
        <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm">
          <div className="fixed right-0 top-0 bottom-0 xl:right-4 xl:top-4 xl:bottom-4 w-full xl:w-[480px] bg-white shadow-2xl flex flex-col">
            {/* Cart Header */}
            <div className="border-b border-gray-200 p-5 xl:p-6 shrink-0">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl xl:text-2xl font-bold text-[#303F56]">Корзина</h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <IconClose className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              <p className="text-sm text-gray-500">{getCartCount()} товаров</p>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 xl:p-6">
              {cartItems.length > 0 ? (
                <div className="space-y-4 xl:space-y-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-3 xl:gap-4 pb-4 xl:pb-6 border-b border-gray-100">
                      <div className="relative h-20 w-20 xl:h-24 xl:w-24 shrink-0 bg-[#F5F1E5]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 flex flex-col min-w-0">
                        <p className="text-xs font-bold uppercase text-gray-400 mb-1">
                          {item.brand}
                        </p>
                        <h3 className="text-sm font-medium text-[#303F56] mb-2 line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-base xl:text-lg font-bold text-[#303F56] mb-2 xl:mb-3">
                          {item.priceKzt.toLocaleString()} ₸
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="h-8 w-8 flex items-center justify-center border border-[#303F56] hover:bg-[#303F56] hover:text-white text-[#303F56] transition-colors"
                            >
                              <IconMinus />
                            </button>
                            <span className="text-[#303F56] font-medium w-8 text-center text-lg">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="h-8 w-8 flex items-center justify-center border border-[#303F56] hover:bg-[#303F56] hover:text-white text-[#303F56] transition-colors"
                            >
                              <IconPlus />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <IconTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                  <IconCart className="h-16 w-16 mb-4 opacity-20" />
                  <p className="text-lg mb-4">Корзина пуста</p>
                  <Link
                    href="/catalog"
                    onClick={() => setCartOpen(false)}
                    className="h-[50px] px-8 bg-[#C9A25B] text-white flex items-center justify-center hover:bg-[#b58f4d] transition-colors"
                  >
                    В каталог
                  </Link>
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 p-5 xl:p-6 shrink-0 bg-[#F5F1E5]">
                <div className="flex justify-between items-center mb-4 xl:mb-6">
                  <span className="text-lg font-medium text-[#303F56]">Итого:</span>
                  <span className="text-xl xl:text-2xl font-bold text-[#303F56]">
                    {getCartTotal().toLocaleString()} ₸
                  </span>
                </div>
                
                <Link
                  href="/cart"
                  onClick={() => setCartOpen(false)}
                  className="block w-full h-[50px] xl:h-[56px] bg-[#C9A25B] text-white flex items-center justify-center text-base font-medium hover:bg-[#b58f4d] transition-colors mb-3"
                >
                  Оформить заказ
                </Link>
                
                <Link
                  href="/catalog"
                  onClick={() => setCartOpen(false)}
                  className="block w-full h-[50px] xl:h-[56px] border-2 border-[#303F56] text-[#303F56] flex items-center justify-center text-base font-medium hover:bg-[#303F56] hover:text-white transition-colors"
                >
                  Продолжить покупки
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}