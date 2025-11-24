"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const API_URL = 'https://infinitely-traversable-carin.ngrok-free.dev/';

interface News {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  content: string;
  imageUrl: string;
  status: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/news`);
      if (res.ok) {
        const data = await res.json();
        setNews(data);
      } else {
        setError('Ошибка загрузки новостей');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Не удалось загрузить новости');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#C9A25B] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#303F56] font-medium">Загрузка новостей...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <button 
            onClick={fetchNews}
            className="bg-[#C9A25B] text-white px-6 py-3 rounded-lg hover:bg-[#b58f4d] transition-colors"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        {/* DESKTOP VERSION */}
        <div className="hidden xl:block">
          <div className="mx-auto max-w-[1440px] px-[303px] py-25">
            <nav className="mb-8 flex items-center gap-2 text-[14px] text-gray-500">
              <Link href="/" className="hover:text-[#C9A25B] transition-colors">
                Главная
              </Link>
              <span>/</span>
              <span className="text-[#303F56] font-medium">Новости</span>
            </nav>

            <h1 className="font-display text-[48px] font-medium leading-[64px] text-[#303F56] mb-16">
              Новости Graff Piatto
            </h1>

            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Новостей пока нет</p>
              <p className="text-gray-400 text-sm mt-2">Следите за обновлениями</p>
            </div>
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div className="xl:hidden px-5 py-12">
          <nav className="mb-6 flex items-center gap-2 text-[12px] text-gray-500">
            <Link href="/" className="hover:text-[#C9A25B]">
              Главная
            </Link>
            <span>/</span>
            <span className="text-[#303F56] font-medium">Новости</span>
          </nav>

          <h1 className="font-display text-[32px] font-medium leading-[42px] text-[#303F56] mb-8">
            Новости Graff Piatto
          </h1>

          <div className="text-center py-12">
            <p className="text-gray-500">Новостей пока нет</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* DESKTOP VERSION */}
      <div className="hidden xl:block">
        <div className="mx-auto max-w-[1440px] px-[303px] py-25">
          <nav className="mb-8 flex items-center gap-2 text-[14px] text-gray-500">
            <Link href="/" className="hover:text-[#C9A25B] transition-colors">
              Главная
            </Link>
            <span>/</span>
            <span className="text-[#303F56] font-medium">Новости</span>
          </nav>

          {/* Заголовок страницы */}
          <h1 className="font-display text-[48px] font-medium leading-[64px] text-[#303F56] mb-16">
            Новости Graff Piatto
          </h1>

          {/* Сетка новостей - 3 колонки */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-12">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group block overflow-hidden bg-white transition-all duration-300 hover:shadow-xl"
              >
                {/* Изображение */}
                <div className="relative h-[280px] w-full overflow-hidden bg-gray-100">
                  {item.imageUrl ? (
                    <Image
                      src={`${API_URL}${item.imageUrl}`}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  {/* Оверлей при ховере */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  
                  {/* Категория */}
                  <div className="absolute left-4 top-4 bg-[#C9A25B] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                    {item.category}
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-5">
                  <time className="text-[12px] font-medium text-gray-400 uppercase tracking-wider">
                    {item.date}
                  </time>
                  <h2 className="mt-3 font-display text-[20px] font-medium leading-[28px] text-[#303F56] group-hover:text-[#C9A25B] transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-[22px] text-gray-600 line-clamp-3">
                    {item.description || item.content}
                  </p>
                  <div className="mt-5 flex items-center text-[13px] font-semibold text-[#C9A25B] group-hover:gap-2 transition-all">
                    <span>Читать далее</span>
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="xl:hidden px-5 py-12">
        {/* Хлебные крошки */}
        <nav className="mb-6 flex items-center gap-2 text-[12px] text-gray-500">
          <Link href="/" className="hover:text-[#C9A25B]">
            Главная
          </Link>
          <span>/</span>
          <span className="text-[#303F56] font-medium">Новости</span>
        </nav>

        {/* Заголовок */}
        <h1 className="font-display text-[32px] font-medium leading-[42px] text-[#303F56] mb-8">
          Новости Graff Piatto
        </h1>

        {/* Список новостей */}
        <div className="space-y-6">
          {news.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="block overflow-hidden bg-white shadow-md active:shadow-xl transition-shadow"
            >
              {/* Изображение */}
              <div className="relative h-[220px] w-full overflow-hidden bg-gray-100">
                {item.imageUrl ? (
                  <Image
                    src={`${API_URL}${item.imageUrl}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                {/* Категория */}
                <div className="absolute left-4 top-4 bg-[#C9A25B] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {item.category}
                </div>
              </div>

              {/* Контент */}
              <div className="p-4">
                <time className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                  {item.date}
                </time>
                <h2 className="mt-2 text-[18px] font-bold leading-[26px] text-[#303F56] line-clamp-2">
                  {item.title}
                </h2>
                <p className="mt-2 text-[14px] leading-[21px] text-gray-600 line-clamp-2">
                  {item.description || item.content}
                </p>
                <div className="mt-3 flex items-center text-[12px] font-semibold text-[#C9A25B]">
                  <span>Читать далее</span>
                  <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}