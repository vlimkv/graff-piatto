"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// --- ИКОНКИ ---
const IconSearch = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="6" />
    <line x1="16" y1="16" x2="21" y2="21" />
  </svg>
);

const IconCart = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="9" cy="19" r="1.5" />
    <circle cx="17" cy="19" r="1.5" />
    <path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h9.8L21 8H8" />
  </svg>
);

const IconMenu = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconClose = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export function GraffHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Блокируем скролл основного сайта, когда открыто меню
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* DESKTOP HEADER */}
      <div className="hidden xl:block">
        <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-gray-200 bg-white">
          <div className="relative mx-auto h-full w-full max-w-[1440px]">
            {/* Логотип в круге */}
            <div className="pointer-events-none absolute left-[283px] top-[-140px] h-[300px] w-[165px] z-0">
              <div className="relative h-full w-full rounded-[999px] bg-white shadow-sm">
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
            </div>

            <nav className="absolute left-[462px] top-[31px] z-10 flex h-[17px] w-[592px] items-center justify-between text-sm font-medium text-black">
              <a href="/catalog" className="hover:text-[#C9A25B] transition-colors">Каталог</a>
              <a href="#" className="hover:text-[#C9A25B] transition-colors">Graff Gastronomy</a>
              <a href="#" className="hover:text-[#C9A25B] text-center transition-colors">Для клиентов из России</a>
              <a href="#" className="hover:text-[#C9A25B] text-center transition-colors">Контакты</a>
              <a href="#" className="hover:text-[#C9A25B] text-center transition-colors">Новости</a>
              <a href="#" className="hover:text-[#C9A25B] text-center transition-colors">О бренде</a>
            </nav>

            <div className="absolute left-[1089px] top-[28px] z-10 flex items-center gap-[20px] text-[#303F56]">
              <button aria-label="Поиск" className="hover:text-[#C9A25B] transition-colors">
                <IconSearch />
              </button>
              <button aria-label="Корзина" className="hover:text-[#C9A25B] transition-colors">
                <IconCart />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* MOBILE HEADER (PREMIUM TEXT LOGO) */}
      <div className="xl:hidden">
        
        {/* HEADER BAR */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
          <div className="flex h-16 items-center justify-between px-5">
            
            {/* ЛОГОТИП (ТЕКСТ) */}
            <div className="flex items-center">
              <span className="font-display text-xl font-bold tracking-wider text-[#303F56]">
                GRAFF PIATTO
              </span>
            </div>

            {/* ИКОНКИ */}
            <div className="flex items-center gap-5">
              <button aria-label="Поиск" className="text-[#303F56]">
                <IconSearch />
              </button>
              <button aria-label="Корзина" className="text-[#303F56]">
                <IconCart />
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

        {/* FULL SCREEN MENU OVERLAY */}
        <div
          className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Верхняя часть меню (Кнопка закрыть) */}
          <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
            <span className="font-display text-lg font-bold text-[#C9A25B]">МЕНЮ</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-[#303F56]"
            >
              <IconClose />
            </button>
          </div>

          {/* Список ссылок */}
          <div className="flex flex-col items-center justify-center space-y-6 pt-10">
            <a href="/catalog" className="font-display text-2xl font-medium text-[#C9A25B]">
              Каталог
            </a>
            <a href="#" className="text-xl font-medium text-[#303F56]">
              Graff Gastronomy
            </a>
            <a href="#" className="text-xl font-medium text-[#303F56]">
              О бренде
            </a>
            <a href="#" className="text-xl font-medium text-[#303F56]">
              Новости
            </a>
            <a href="#" className="text-xl font-medium text-[#303F56]">
              Контакты
            </a>
            
            {/* Разделитель */}
            <div className="h-px w-16 bg-[#C9A25B]/50 my-4" />

            <a href="#" className="text-base font-medium text-gray-500">
              Для клиентов из России
            </a>
          </div>

          {/* Нижняя часть (Контакты/Кнопка) */}
          <div className="absolute bottom-10 left-0 w-full px-6">
             <button className="w-full h-[50px] bg-[#303F56] text-white uppercase text-sm font-medium tracking-wider">
                Связаться с нами
             </button>
          </div>
        </div>
      </div>
    </>
  );
}