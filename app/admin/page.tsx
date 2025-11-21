"use client";

import React, { useState } from 'react';

// Icons
const IconDashboard = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const IconProducts = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const IconNews = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
);

const IconEvents = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconSettings = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconLogout = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const IconEdit = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const IconTrash = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const IconPlus = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const IconSearch = ({ className }: { className?: string }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const IconImage = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// Mock Data
const mockProducts = [
  { id: 1, title: 'Тарелка «Blue Garden»', brand: 'Lenox', category: 'Обеденные тарелки', priceKzt: 450000, status: 'active' },
  { id: 2, title: 'Набор «Ivory Line»', brand: 'Villeroy & Boch', category: 'Обеденные тарелки', priceKzt: 280000, status: 'active' },
  { id: 3, title: 'Чайная пара «Morning Light»', brand: 'Villeroy & Boch', category: 'Чайные пары', priceKzt: 510000, status: 'draft' },
];

const mockNews = [
  { id: 1, title: 'Новая коллекция весна-лето 2025', category: 'Коллекции', date: '2025-11-15', status: 'published' },
  { id: 2, title: 'Обновленное меню в Graff Gastronomy', category: 'Гастрономия', date: '2025-11-10', status: 'published' },
  { id: 3, title: 'Black Friday: скидки до 40%', category: 'Акции', date: '2025-11-01', status: 'draft' },
];

const mockEvents = [
  { id: 1, title: 'Ужин-дегустация', date: '2025-11-25', priceKzt: 39000, status: 'upcoming' },
  { id: 2, title: 'Мастер-класс: средиземноморская кухня', date: '2025-11-28', priceKzt: 39000, status: 'upcoming' },
];

function AdminCMS() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  // Login Handler
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple auth check (в реальности - проверка через API)
    if (loginData.email === 'admin@graffpiatto.kz' && loginData.password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Неверный логин или пароль');
    }
  };

  // Login Page
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#303F56] to-[#1a2332] flex items-center justify-center p-5">
        <div className="w-full max-w-md bg-white shadow-2xl">
          <div className="bg-[#C9A25B] p-8 text-center">
            <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Graff Piatto
            </h1>
            <p className="mt-2 text-white/90 text-sm">Панель управления CMS</p>
          </div>

          <form onSubmit={handleLogin} className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#303F56] mb-2">Email</label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                className="w-full border border-gray-300 px-4 py-3 text-[#303F56] focus:border-[#C9A25B] focus:outline-none transition-colors"
                placeholder="admin@graffpiatto.kz"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#303F56] mb-2">Пароль</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full border border-gray-300 px-4 py-3 text-[#303F56] focus:border-[#C9A25B] focus:outline-none transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#303F56] text-white py-4 font-semibold hover:bg-[#243147] transition-colors shadow-lg"
            >
              Войти в систему
            </button>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                Демо: admin@graffpiatto.kz / admin123
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Sidebar Navigation
  const menuItems = [
    { id: 'dashboard', label: 'Главная', icon: <IconDashboard /> },
    { id: 'products', label: 'Товары', icon: <IconProducts /> },
    { id: 'news', label: 'Новости', icon: <IconNews /> },
    { id: 'events', label: 'События', icon: <IconEvents /> },
    { id: 'settings', label: 'Настройки', icon: <IconSettings /> },
  ];

  // Dashboard Stats
  const DashboardView = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-[#303F56] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          Панель управления
        </h2>
        <p className="text-gray-600">Добро пожаловать в CMS Graff Piatto</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Товары</span>
            <IconProducts />
          </div>
          <div className="text-3xl font-bold text-[#303F56]">{mockProducts.length}</div>
          <div className="mt-2 text-xs text-green-600">+3 за месяц</div>
        </div>

        <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Новости</span>
            <IconNews />
          </div>
          <div className="text-3xl font-bold text-[#303F56]">{mockNews.length}</div>
          <div className="mt-2 text-xs text-green-600">+1 за неделю</div>
        </div>

        <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">События</span>
            <IconEvents />
          </div>
          <div className="text-3xl font-bold text-[#303F56]">{mockEvents.length}</div>
          <div className="mt-2 text-xs text-blue-600">Предстоящие</div>
        </div>

        <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Просмотры</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div className="text-3xl font-bold text-[#303F56]">12.4K</div>
          <div className="mt-2 text-xs text-green-600">+18% за месяц</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-gray-200 shadow-sm">
        <div className="border-b border-gray-200 p-6">
          <h3 className="text-lg font-bold text-[#303F56]">Последняя активность</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#303F56]">Добавлен новый товар</p>
              <p className="text-xs text-gray-500 mt-1">Тарелка «Blue Garden» • 2 часа назад</p>
            </div>
          </div>
          <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#303F56]">Опубликована новость</p>
              <p className="text-xs text-gray-500 mt-1">Black Friday: скидки до 40% • 5 часов назад</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#303F56]">Обновлено событие</p>
              <p className="text-xs text-gray-500 mt-1">Ужин-дегустация • Вчера</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Products View
  const ProductsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#303F56]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Управление товарами
          </h2>
          <p className="text-gray-600 mt-1">Всего товаров: {mockProducts.length}</p>
        </div>
        <button
          onClick={() => { setModalType('product'); setShowModal(true); }}
          className="flex items-center gap-2 bg-[#C9A25B] text-white px-6 py-3 font-semibold hover:bg-[#b58f4d] transition-colors shadow-md"
        >
          <IconPlus />
          Добавить товар
        </button>
      </div>

      {/* Search */}
      <div className="bg-white border border-gray-200 p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Поиск товаров..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 text-[#303F56] focus:border-[#C9A25B] focus:outline-none"
          />
          <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Товар</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Бренд</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Категория</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Цена (₸)</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Статус</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 flex items-center justify-center">
                      <IconImage className="text-gray-400" />
                    </div>
                    <span className="font-medium text-[#303F56]">{product.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{product.brand}</td>
                <td className="px-6 py-4 text-gray-600">{product.category}</td>
                <td className="px-6 py-4 font-semibold text-[#303F56]">{product.priceKzt.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold ${
                    product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {product.status === 'active' ? 'Активен' : 'Черновик'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-[#C9A25B] hover:bg-[#C9A25B]/10 transition-colors">
                      <IconEdit />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 transition-colors">
                      <IconTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // News View
  const NewsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#303F56]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Управление новостями
          </h2>
          <p className="text-gray-600 mt-1">Всего новостей: {mockNews.length}</p>
        </div>
        <button
          onClick={() => { setModalType('news'); setShowModal(true); }}
          className="flex items-center gap-2 bg-[#C9A25B] text-white px-6 py-3 font-semibold hover:bg-[#b58f4d] transition-colors shadow-md"
        >
          <IconPlus />
          Добавить новость
        </button>
      </div>

      <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Заголовок</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Категория</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Дата</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Статус</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockNews.map((news) => (
              <tr key={news.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-[#303F56]">{news.title}</td>
                <td className="px-6 py-4">
                  <span className="inline-block bg-[#C9A25B]/10 text-[#C9A25B] px-3 py-1 text-xs font-semibold">
                    {news.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{news.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold ${
                    news.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {news.status === 'published' ? 'Опубликовано' : 'Черновик'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-[#C9A25B] hover:bg-[#C9A25B]/10 transition-colors">
                      <IconEdit />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 transition-colors">
                      <IconTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Events View
  const EventsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#303F56]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Управление событиями
          </h2>
          <p className="text-gray-600 mt-1">Всего событий: {mockEvents.length}</p>
        </div>
        <button
          onClick={() => { setModalType('event'); setShowModal(true); }}
          className="flex items-center gap-2 bg-[#C9A25B] text-white px-6 py-3 font-semibold hover:bg-[#b58f4d] transition-colors shadow-md"
        >
          <IconPlus />
          Добавить событие
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockEvents.map((event) => (
          <div key={event.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-[#303F56]">{event.title}</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-semibold">
                  {event.status === 'upcoming' ? 'Предстоящее' : 'Завершено'}
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <IconEvents />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Цена:</span>
                  <span>{event.priceKzt.toLocaleString()} ₸</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                <button className="flex-1 border border-[#C9A25B] text-[#C9A25B] py-2 font-semibold hover:bg-[#C9A25B]/10 transition-colors">
                  Редактировать
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 font-semibold hover:bg-red-700 transition-colors">
                  Удалить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Settings View
  const SettingsView = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-[#303F56]" style={{ fontFamily: 'Playfair Display, serif' }}>
        Настройки системы
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Site Settings */}
        <div className="bg-white border border-gray-200 shadow-sm">
          <div className="border-b border-gray-200 p-6">
            <h3 className="text-lg font-bold text-[#303F56]">Настройки сайта</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#303F56] mb-2">Название сайта</label>
              <input
                type="text"
                defaultValue="Graff Piatto"
                className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#303F56] mb-2">Email для уведомлений</label>
              <input
                type="email"
                defaultValue="info@graffpiatto.kz"
                className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#303F56] mb-2">Телефон</label>
              <input
                type="tel"
                defaultValue="+7 (777) 123-45-67"
                className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
              />
            </div>
            <button className="w-full bg-[#303F56] text-white py-3 font-semibold hover:bg-[#243147] transition-colors">
              Сохранить изменения
            </button>
          </div>
        </div>

        {/* User Settings */}
        <div className="bg-white border border-gray-200 shadow-sm">
          <div className="border-b border-gray-200 p-6">
            <h3 className="text-lg font-bold text-[#303F56]">Профиль администратора</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#303F56] mb-2">Имя</label>
              <input
                type="text"
                defaultValue="Администратор"
                className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#303F56] mb-2">Email</label>
              <input
                type="email"
                defaultValue="admin@graffpiatto.kz"
                className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#303F56] mb-2">Новый пароль</label>
              <input
                type="password"
                placeholder="Оставьте пустым, чтобы не менять"
                className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
              />
            </div>
            <button className="w-full bg-[#303F56] text-white py-3 font-semibold hover:bg-[#243147] transition-colors">
              Обновить профиль
            </button>
          </div>
        </div>
      </div>

      {/* Additional Settings */}
      <div className="bg-white border border-gray-200 shadow-sm">
        <div className="border-b border-gray-200 p-6">
          <h3 className="text-lg font-bold text-[#303F56]">Дополнительные настройки</h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-[#303F56]">Режим обслуживания</p>
              <p className="text-sm text-gray-500 mt-1">Отключить сайт для технических работ</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#C9A25B] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C9A25B]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div>
              <p className="font-semibold text-[#303F56]">Email уведомления</p>
              <p className="text-sm text-gray-500 mt-1">Получать уведомления о новых заказах</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#C9A25B] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C9A25B]"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  // Modal for Add/Edit
  const Modal = () => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="sticky top-0 bg-[#303F56] p-6 text-white flex items-center justify-between">
            <h3 className="text-xl font-bold">
              {modalType === 'product' && 'Добавить товар'}
              {modalType === 'news' && 'Добавить новость'}
              {modalType === 'event' && 'Добавить событие'}
            </h3>
            <button onClick={() => setShowModal(false)} className="text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form className="p-6 space-y-6">
            {modalType === 'product' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Название товара *</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                      placeholder="Тарелка «Blue Garden»"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Бренд *</label>
                    <select className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none">
                      <option>Выберите бренд</option>
                      <option>Villeroy & Boch</option>
                      <option>Lenox</option>
                      <option>Gien</option>
                      <option>Wedgwood</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Коллекция</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                      placeholder="Blue Garden"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Категория *</label>
                    <select className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none">
                      <option>Выберите категорию</option>
                      <option>Обеденные тарелки</option>
                      <option>Десертные тарелки</option>
                      <option>Супные тарелки</option>
                      <option>Чайные пары</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Цена KZT *</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                      placeholder="450000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Цена RUB</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                      placeholder="69140"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Цена EUR</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                      placeholder="739"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Описание</label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                    placeholder="Подробное описание товара..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Изображение</label>
                  <div className="border-2 border-dashed border-gray-300 p-8 text-center hover:border-[#C9A25B] transition-colors cursor-pointer">
                    <IconImage className="mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600">Нажмите для загрузки или перетащите файл</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG до 5MB</p>
                  </div>
                </div>
              </>
            )}

            {modalType === 'news' && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Заголовок *</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                    placeholder="Новая коллекция весна-лето 2025"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Категория *</label>
                    <select className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none">
                      <option>Выберите категорию</option>
                      <option>Коллекции</option>
                      <option>Гастрономия</option>
                      <option>Акции</option>
                      <option>События</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Дата публикации *</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Краткое описание</label>
                  <textarea
                    rows={3}
                    className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                    placeholder="Краткое описание для списка новостей..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Полный текст *</label>
                  <textarea
                    rows={8}
                    className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                    placeholder="Полный текст новости..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Изображение обложки</label>
                  <div className="border-2 border-dashed border-gray-300 p-8 text-center hover:border-[#C9A25B] transition-colors cursor-pointer">
                    <IconImage className="mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600">Нажмите для загрузки или перетащите файл</p>
                  </div>
                </div>
              </>
            )}

            {modalType === 'event' && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Название события *</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                    placeholder="Ужин-дегустация"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Дата события *</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Время</label>
                    <input
                      type="time"
                      className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Цена KZT *</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                      placeholder="39000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Цена RUB</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                      placeholder="69140"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Описание</label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"
                    placeholder="Описание события..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Изображение</label>
                  <div className="border-2 border-dashed border-gray-300 p-8 text-center hover:border-[#C9A25B] transition-colors cursor-pointer">
                    <IconImage className="mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600">Нажмите для загрузки или перетащите файл</p>
                  </div>
                </div>
              </>
            )}

            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="flex-1 border border-gray-300 text-[#303F56] py-3 font-semibold hover:bg-gray-50 transition-colors"
              >
                Отмена
              </button>
              <button
                type="submit"
                className="flex-1 bg-[#C9A25B] text-white py-3 font-semibold hover:bg-[#b58f4d] transition-colors"
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Main Admin Layout
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#303F56] text-white flex flex-col shadow-2xl">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Graff Piatto
          </h1>
          <p className="text-sm text-white/70 mt-1">Admin CMS</p>
        </div>

        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 mb-2 font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-[#C9A25B] text-white shadow-lg'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-red-600 hover:text-white transition-all font-medium"
          >
            <IconLogout />
            <span>Выход</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-8">
          {activeSection === 'dashboard' && <DashboardView />}
          {activeSection === 'products' && <ProductsView />}
          {activeSection === 'news' && <NewsView />}
          {activeSection === 'events' && <EventsView />}
          {activeSection === 'settings' && <SettingsView />}
        </div>
      </main>

      <Modal />
    </div>
  );
}

export default AdminCMS;