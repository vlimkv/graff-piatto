"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../app/contexts/cart-context";

const API_URL = 'https://infinitely-traversable-carin.ngrok-free.dev/';

// --- ТИПЫ ---
interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  priceKzt: number;
  priceRub: number;
  imageUrl?: string;
  images?: string[];
  description?: string;
}

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

const IconArrowRight = (props: IconProps) => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

export function GraffHeader() {
  const cart = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  // Поиск через API с debounce
  useEffect(() => {
    const searchProducts = async () => {
      if (!searchQuery.trim()) {
        setSearchResults([]);
        return;
      }

      setSearchLoading(true);
      try {
        const res = await fetch(`${API_URL}/products`);
        if (res.ok) {
          const allProducts: Product[] = await res.json();
          const query = searchQuery.toLowerCase();
          const filtered = allProducts.filter(product =>
            product.title.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
          );
          setSearchResults(filtered);
        }
      } catch (error) {
        console.error('Error searching products:', error);
      } finally {
        setSearchLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchProducts, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  // Блокировка скролла
  useEffect(() => {
    if (mobileMenuOpen || searchOpen || cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen, searchOpen, cartOpen]);

  return (
    <>
      {/* --- DESKTOP HEADER --- */}
      <div className="hidden xl:block">
        <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-gray-100 bg-white/95 backdrop-blur-md">
          <div className="relative mx-auto h-full w-full max-w-[1440px]">
            {/* Logo Wrapper - Styled specifically for Graff Piatto look */}
            <Link
              href="/"
              aria-label="На главную Graff Piatto"
              className="absolute left-[283px] top-[-140px] h-[300px] w-[165px] z-0 group"
            >
              <div className="relative h-full w-full rounded-full bg-white shadow-sm cursor-pointer transition-transform duration-500 group-hover:translate-y-1">
                <div className="absolute left-[20px] top-[155px] h-[125px] w-[125px]">
                  <Image 
                    src="/images/logo-main.png" 
                    alt="Логотип Graff Piatto" 
                    width={125} 
                    height={125} 
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>

            <nav className="absolute left-[462px] top-[31px] z-10 flex h-[17px] w-[600px] items-center justify-between text-[13px] tracking-wide font-medium uppercase text-[#303F56]">
              <Link href="/catalog" className="hover:text-[#C9A25B] transition-colors duration-300">Каталог</Link>
              <Link href="/graff-gastronomy" className="hover:text-[#C9A25B] transition-colors duration-300">Gastronomy</Link>
              <Link href="/russia-clients" className="hover:text-[#C9A25B] transition-colors duration-300">РФ Клиентам</Link>
              <Link href="/contacts" className="hover:text-[#C9A25B] transition-colors duration-300">Контакты</Link>
              <Link href="/news" className="hover:text-[#C9A25B] transition-colors duration-300">Новости</Link>
              <Link href="/about" className="hover:text-[#C9A25B] transition-colors duration-300">О бренде</Link>
            </nav>

            <div className="absolute left-[1089px] top-[28px] z-10 flex items-center gap-6 text-[#303F56]">
              <button onClick={() => setSearchOpen(true)} aria-label="Поиск" className="hover:text-[#C9A25B] transition-colors duration-300">
                <IconSearch className="w-[22px] h-[22px]" />
              </button>
              <button onClick={() => setCartOpen(true)} aria-label="Корзина" className="relative hover:text-[#C9A25B] transition-colors duration-300 group">
                <IconCart className="w-[22px] h-[22px]" />
                {cart.getCartCount() > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9A25B] text-[9px] font-bold text-white shadow-sm ring-2 ring-white">
                    {cart.getCartCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>
        <div className="h-20" />
      </div>

      {/* --- MOBILE HEADER --- */}
      <div className="xl:hidden">
        <header className="fixed inset-x-0 top-0 z-50 h-[60px] border-b border-gray-100 bg-white/95 backdrop-blur-sm">
          <div className="flex h-full items-center justify-between px-4">
            <button 
                onClick={() => setMobileMenuOpen(true)} 
                aria-label="Меню"
                className="p-1 -ml-1 text-[#303F56]"
            >
              <IconMenu className="w-7 h-7" />
            </button>
            
            <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image 
                src="/images/logo-main.png" 
                alt="Graff Piatto" 
                width={48} 
                height={48} 
                className="h-12 w-12 object-contain"
                priority
              />
            </Link>

            <div className="flex items-center gap-4 text-[#303F56]">
              <button onClick={() => setSearchOpen(true)} aria-label="Поиск" className="p-1">
                <IconSearch className="w-6 h-6" />
              </button>
              <button onClick={() => setCartOpen(true)} aria-label="Корзина" className="relative p-1">
                <IconCart className="w-6 h-6" />
                {cart.getCartCount() > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9A25B] text-[9px] font-bold text-white ring-2 ring-white">
                    {cart.getCartCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>
        <div className="h-[60px]" />
      </div>

      {/* --- MOBILE MENU DRAWER (NEW DESIGN) --- */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex">
            {/* Backdrop */}
            <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity opacity-100" 
                onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Drawer Panel */}
            <div className="relative w-[85%] max-w-[360px] h-full bg-white shadow-2xl flex flex-col animate-[slideInLeft_0.3s_ease-out]">
                
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <Image src="/images/logo-main.png" alt="Logo" width={40} height={40} className="w-10 h-10" />
                    <button onClick={() => setMobileMenuOpen(false)} className="p-2 -mr-2 text-gray-400 hover:text-gray-900">
                        <IconClose className="w-6 h-6" />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto px-6 py-4">
                    <div className="flex flex-col space-y-1">
                        {[
                            { href: "/catalog", label: "Каталог" },
                            { href: "/graff-gastronomy", label: "Graff Gastronomy" },
                            { href: "/russia-clients", label: "Клиентам из России" },
                            { href: "/news", label: "Новости" },
                            { href: "/about", label: "О бренде" },
                            { href: "/contacts", label: "Контакты" },
                        ].map((link, idx) => (
                            <Link 
                                key={idx}
                                href={link.href} 
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-between py-4 text-[16px] font-medium text-[#303F56] border-b border-gray-50 hover:text-[#C9A25B] transition-colors"
                            >
                                {link.label}
                                <IconArrowRight className="w-4 h-4 text-gray-300" />
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* Drawer Footer */}
                <div className="bg-[#F9F9F9] p-6 border-t border-gray-100">
                    <Link 
                        href="/catalog" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex w-full items-center justify-center h-12 bg-[#303F56] text-white font-medium uppercase tracking-wide text-sm hover:bg-[#253042] transition-colors mb-4"
                    >
                        Перейти в магазин
                    </Link>
                    <div className="text-center">
                        <p className="text-xs text-gray-400 mb-1">Есть вопросы?</p>
                        <a href="tel:+77012161772" className="text-sm font-bold text-[#303F56] hover:text-[#C9A25B]">
                            +7 (701) 216-17-72
                        </a>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* --- SEARCH MODAL (PREMIUM DESIGN) --- */}
      {searchOpen && (
        <div className="fixed inset-0 z-[70] bg-white/98 xl:bg-black/60 xl:backdrop-blur-sm flex justify-center">
            {/* Desktop Container Wrapper */}
            <div className="w-full h-full xl:h-auto xl:mt-20 xl:max-w-4xl xl:rounded-2xl xl:bg-white xl:shadow-2xl xl:overflow-hidden flex flex-col">
                
                {/* Search Header / Input Area */}
                <div className="px-5 py-4 xl:px-8 xl:py-6 border-b border-gray-100 flex items-center gap-4 bg-white shrink-0">
                    <IconSearch className="w-6 h-6 text-[#C9A25B] shrink-0" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Поиск товаров..."
                        className="flex-1 h-12 text-lg xl:text-xl text-[#303F56] placeholder:text-gray-300 focus:outline-none bg-transparent"
                        autoFocus
                    />
                    <button 
                        onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                        className="p-2 -mr-2 text-gray-400 hover:text-[#303F56] transition-colors rounded-full hover:bg-gray-50"
                    >
                        <IconClose className="w-6 h-6" />
                    </button>
                </div>

                {/* Results Area */}
                <div className="flex-1 overflow-y-auto bg-white xl:max-h-[60vh]">
                    {searchQuery.trim() ? (
                        searchLoading ? (
                            <div className="flex flex-col items-center justify-center py-20 opacity-50">
                                <div className="w-8 h-8 border-2 border-[#C9A25B] border-t-transparent rounded-full animate-spin mb-4"></div>
                                <span className="text-sm text-gray-400">Ищем...</span>
                            </div>
                        ) : searchResults.length > 0 ? (
                            <div className="p-2 xl:p-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                                {searchResults.map(product => (
                                    <Link
                                        key={product.id}
                                        href={`/product/${product.id}`}
                                        onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                                        className="flex items-start gap-4 p-3 hover:bg-[#F9F9F9] transition-colors rounded-lg group"
                                    >
                                        <div className="relative h-20 w-20 shrink-0 bg-[#F5F1E5] rounded-md overflow-hidden">
                                            {product.imageUrl ? (
                                                <Image src={`${API_URL}${product.imageUrl}`} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500"/>
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                    <IconSearch className="w-6 h-6 opacity-50" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0 py-1">
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{product.brand}</p>
                                            <h3 className="text-sm font-medium text-[#303F56] leading-tight mb-2 group-hover:text-[#C9A25B] transition-colors line-clamp-2">
                                                {product.title}
                                            </h3>
                                            <p className="text-sm font-bold text-[#C9A25B]">
                                                {product.priceKzt.toLocaleString()} ₸
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center px-4">
                                <p className="text-lg text-[#303F56] mb-2">Ничего не найдено</p>
                                <p className="text-sm text-gray-400">Попробуйте изменить запрос или проверить написание</p>
                            </div>
                        )
                    ) : (
                        <div className="py-20 text-center px-4">
                            <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Популярные категории</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['Тарелки', 'Бокалы', 'Приборы', 'Graff'].map((tag) => (
                                    <button 
                                        key={tag}
                                        onClick={() => setSearchQuery(tag)}
                                        className="px-4 py-2 bg-gray-50 text-[#303F56] text-sm rounded-full hover:bg-[#C9A25B] hover:text-white transition-all"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
      )}

      {/* --- CART MODAL --- */}
      {/* Оставляем логику и верстку корзины без изменений, она уже хороша, добавим лишь мелкие штрихи */}
      {cartOpen && (
        <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-[480px] bg-white h-full shadow-2xl flex flex-col animate-[slideInRight_0.3s_ease-out]">
            <div className="border-b border-gray-100 p-6 flex items-center justify-between shrink-0 bg-white">
              <div>
                  <h2 className="text-2xl font-bold text-[#303F56]">Корзина</h2>
                  <p className="text-sm text-gray-400 mt-1">{cart.getCartCount()} товаров</p>
              </div>
              <button onClick={() => setCartOpen(false)} className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 transition-colors rounded-full -mr-2">
                <IconClose className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.items.length > 0 ? (
                <div className="space-y-6">
                  {cart.items.map(item => (
                    <div key={item.product.id} className="flex gap-4 pb-6 border-b border-gray-50 last:border-0">
                      <div className="relative h-24 w-24 shrink-0 bg-[#F5F1E5] rounded-sm overflow-hidden">
                        {item.product.images && item.product.images[0] ? (
                          <Image src={`${API_URL}${item.product.images[0]}`} alt={item.product.name} fill className="object-cover"/>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <IconSearch className="w-6 h-6 text-gray-300" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col min-w-0 justify-between">
                        <div>
                            <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">{item.product.brand}</p>
                            <h3 className="text-sm font-medium text-[#303F56] line-clamp-2 leading-snug hover:text-[#C9A25B] cursor-pointer">
                                <Link href={`/product/${item.product.id}`} onClick={() => setCartOpen(false)}>{item.product.name}</Link>
                            </h3>
                        </div>
                        <div className="flex items-end justify-between mt-2">
                            <p className="text-lg font-bold text-[#303F56]">{item.product.priceKzt.toLocaleString()} ₸</p>
                            
                            <div className="flex items-center gap-3 bg-gray-50 px-2 py-1 rounded">
                                <button onClick={() => cart.updateQuantity(item.product.id, item.quantity - 1)} className="text-[#303F56] hover:text-[#C9A25B] transition-colors">
                                    <IconMinus />
                                </button>
                                <span className="text-[#303F56] font-medium text-sm w-4 text-center">{item.quantity}</span>
                                <button onClick={() => cart.updateQuantity(item.product.id, item.quantity + 1)} className="text-[#303F56] hover:text-[#C9A25B] transition-colors">
                                    <IconPlus />
                                </button>
                            </div>
                        </div>
                      </div>
                      <button onClick={() => cart.removeFromCart(item.product.id)} className="self-start text-gray-300 hover:text-red-500 transition-colors p-1">
                          <IconTrash className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 pb-10">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                      <IconCart className="h-8 w-8 text-gray-300" />
                  </div>
                  <p className="text-lg font-medium text-[#303F56] mb-2">Ваша корзина пуста</p>
                  <p className="text-sm text-center max-w-[200px] mb-8">Добавьте изысканные товары для вашего дома</p>
                  <Link href="/catalog" onClick={() => setCartOpen(false)} className="px-8 py-3 bg-[#303F56] text-white text-sm font-medium uppercase tracking-wide hover:bg-[#C9A25B] transition-colors">
                    Перейти в каталог
                  </Link>
                </div>
              )}
            </div>

            {cart.items.length > 0 && (
              <div className="border-t border-gray-100 p-6 shrink-0 bg-[#F9F9F9]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-base font-medium text-gray-500">Итого к оплате:</span>
                  <span className="text-2xl font-bold text-[#303F56]">{cart.getCartTotal().toLocaleString()} ₸</span>
                </div>
                <div className="grid gap-3">
                    <Link href="/checkout" onClick={() => setCartOpen(false)} className="w-full h-12 bg-[#C9A25B] text-white flex items-center justify-center text-sm font-bold uppercase tracking-wider hover:bg-[#b58f4d] transition-colors">
                    Оформить заказ
                    </Link>
                    <button onClick={() => setCartOpen(false)} className="w-full h-12 border border-[#303F56] text-[#303F56] flex items-center justify-center text-sm font-bold uppercase tracking-wider hover:bg-white hover:border-[#C9A25B] hover:text-[#C9A25B] transition-colors">
                    Продолжить покупки
                    </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Global CSS for Animations (можно перенести в globals.css) */}
      <style jsx global>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}