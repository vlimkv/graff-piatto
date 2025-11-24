"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const API_URL = 'https://infinitely-traversable-carin.ngrok-free.dev';

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

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const newsId = params.slug as string;
  
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (newsId) {
      fetchNews(Number(newsId));
    }
  }, [newsId]);

  const fetchNews = async (id: number) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/news/${id}`);
      
      if (res.ok) {
        const data = await res.json();
        setNews(data);
        setError('');
      } else {
        setError('Новость не найдена');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Не удалось загрузить новость');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#C9A25B] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#303F56] font-medium">Загрузка...</p>
        </div>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">{error || 'Новость не найдена'}</p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => router.back()}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Назад
            </button>
            <Link 
              href="/news"
              className="bg-[#C9A25B] text-white px-6 py-3 rounded-lg hover:bg-[#b58f4d] transition-colors"
            >
              Все новости
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* DESKTOP VERSION */}
      <div className="hidden xl:block">
        <article>
          {/* Hero изображение - на всю ширину экрана */}
          <div className="relative h-[550px] w-full overflow-hidden bg-gray-100">
            {news.imageUrl ? (
              <Image
                src={`${API_URL}${news.imageUrl}`}
                alt={news.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <svg className="w-32 h-32 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Категория и информация - контейнер 1440px */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="mx-auto max-w-[1440px] px-[303px] pb-16">
                <div className="inline-block bg-[#C9A25B] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-white mb-6">
                  {news.category}
                </div>
                <h1 className="font-display text-[56px] font-medium leading-[72px] text-white max-w-[800px]">
                  {news.title}
                </h1>
                <time className="mt-4 block text-[14px] font-medium text-white/80 uppercase tracking-wider">
                  {news.date}
                </time>
              </div>
            </div>
          </div>

          {/* Контент статьи */}
          <div className="mx-auto max-w-[1440px] px-[303px] py-20 text-[#303F56]">
            {/* Хлебные крошки */}
            <nav className="mb-12 flex items-center gap-2 text-[14px] text-gray-500">
              <Link href="/" className="hover:text-[#C9A25B] transition-colors">
                Главная
              </Link>
              <span>/</span>
              <Link href="/news" className="hover:text-[#C9A25B] transition-colors">
                Новости
              </Link>
              <span>/</span>
              <span className="text-[#303F56]">{news.title}</span>
            </nav>

            {/* Краткое описание */}
            {news.description && (
              <div className="text-[19px] leading-[34px] font-medium text-[#303F56] mb-8">
                {news.description}
              </div>
            )}

            {/* Полный контент статьи */}
            <div className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:!text-[#303F56]
              prose-h2:!text-[36px] prose-h2:font-medium prose-h2:mt-16 prose-h2:mb-8 prose-h2:leading-[48px]
              prose-p:!text-[17px] prose-p:leading-[32px] prose-p:!text-[#303F56] prose-p:mb-6
              prose-strong:!text-[#303F56] prose-strong:font-semibold
              prose-a:!text-[#C9A25B] prose-a:no-underline prose-a:font-medium hover:prose-a:underline
              prose-ul:!text-[17px] prose-ul:leading-[32px]
              prose-ol:!text-[17px] prose-ol:leading-[32px]"
            >
              <div className="whitespace-pre-line">
                {news.content}
              </div>
            </div>

            {/* Разделитель */}
            <div className="mt-20 pt-12 border-t-2 border-gray-200">
              {/* Социальные кнопки */}
              <div className="flex items-center justify-between">
                <Link
                  href="/news"
                  className="inline-flex h-[56px] items-center justify-center gap-3 bg-[#303F56] px-10 text-[15px] font-medium text-white hover:bg-[#243147] transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Все новости
                </Link>

                <div className="flex items-center gap-3">
                  <span className="text-[14px] text-gray-500 mr-2">Поделиться:</span>
                  <button className="flex h-[44px] w-[44px] items-center justify-center border border-gray-300 hover:border-[#C9A25B] hover:bg-[#C9A25B] hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="flex h-[44px] w-[44px] items-center justify-center border border-gray-300 hover:border-[#C9A25B] hover:bg-[#C9A25B] hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
                    </svg>
                  </button>
                  <button className="flex h-[44px] w-[44px] items-center justify-center border border-gray-300 hover:border-[#C9A25B] hover:bg-[#C9A25B] hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* MOBILE VERSION */}
      <div className="xl:hidden">
        <article>
          {/* Hero изображение */}
          <div className="relative h-[400px] w-full overflow-hidden bg-gray-100">
            {news.imageUrl ? (
              <Image
                src={`${API_URL}${news.imageUrl}`}
                alt={news.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <svg className="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Информация */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-8">
              <div className="inline-block bg-[#C9A25B] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white mb-4">
                {news.category}
              </div>
              <h1 className="font-display text-[28px] font-medium leading-[38px] text-white">
                {news.title}
              </h1>
              <time className="mt-3 block text-[12px] font-medium text-white/80 uppercase tracking-wider">
                {news.date}
              </time>
            </div>
          </div>

          {/* Контент */}
          <div className="relative z-10 px-5 py-10 text-[#303F56]">
            {/* Хлебные крошки */}
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-gray-500">
              <Link href="/" className="hover:text-[#C9A25B]">
                Главная
              </Link>
              <span>/</span>
              <Link href="/news" className="hover:text-[#C9A25B]">
                Новости
              </Link>
            </nav>

            {/* Краткое описание */}
            {news.description && (
              <div className="text-[16px] leading-[30px] font-medium text-[#303F56] mb-6">
                {news.description}
              </div>
            )}

            {/* Контент статьи */}
            <div className="prose prose-sm max-w-none
              prose-headings:font-display prose-headings:text-[#303F56]
              prose-h2:text-[24px] prose-h2:font-medium prose-h2:mt-10 prose-h2:mb-5 prose-h2:leading-[34px]
              prose-p:text-[15px] prose-p:leading-[28px] prose-p:text-[#303F56] prose-p:mb-5
              prose-strong:text-[#303F56] prose-strong:font-semibold
              prose-a:text-[#C9A25B] prose-a:no-underline
              prose-ul:text-[15px] prose-ul:leading-[28px]
              prose-ol:text-[15px] prose-ol:leading-[28px]"
            >
              <div className="whitespace-pre-line">
                {news.content}
              </div>
            </div>

            {/* Социальные кнопки и возврат */}
            <div className="mt-12 pt-8 border-t-2 border-gray-200 space-y-5">
              {/* Социальные кнопки */}
              <div>
                <span className="block text-[13px] text-gray-500 mb-3">Поделиться:</span>
                <div className="flex gap-2">
                  <button className="flex h-[40px] w-[40px] items-center justify-center border border-gray-300 active:bg-[#C9A25B] active:border-[#C9A25B] active:text-white transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="flex h-[40px] w-[40px] items-center justify-center border border-gray-300 active:bg-[#C9A25B] active:border-[#C9A25B] active:text-white transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
                    </svg>
                  </button>
                  <button className="flex h-[40px] w-[40px] items-center justify-center border border-gray-300 active:bg-[#C9A25B] active:border-[#C9A25B] active:text-white transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Кнопка возврата */}
              <Link
                href="/news"
                className="flex h-[50px] w-full items-center justify-center gap-2 bg-[#303F56] text-[14px] font-medium uppercase tracking-wider text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Все новости
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}