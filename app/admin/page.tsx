"use client";

import React, { useState, useEffect } from 'react';

// --- ICONS ---
const IconDashboard = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);
const IconProducts = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
);
const IconNews = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
);
const IconEvents = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);
const IconSettings = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const IconLogout = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
);
const IconEdit = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
);
const IconTrash = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
);
const IconPlus = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
);
const IconImage = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);

const API_URL = 'http://localhost:4000';

function AdminCMS() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const [products, setProducts] = useState([]);
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);

  const fetchData = async (endpoint: string, setter: Function) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_URL}/${endpoint}`);
      if (res.ok) {
        const data = await res.json();
        setter(data);
      }
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      alert(`Ошибка загрузки данных: ${endpoint}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (endpoint: string, id: number, currentList: any[], setter: Function) => {
    if (!confirm('Вы уверены?')) return;
    try {
      await fetch(`${API_URL}/${endpoint}/${id}`, { method: 'DELETE' });
      setter(currentList.filter((item: any) => item.id !== id));
    } catch (error) {
      alert('Ошибка при удалении');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (activeSection === 'products') fetchData('products', setProducts);
    if (activeSection === 'news') fetchData('news', setNews);
    if (activeSection === 'events') fetchData('events', setEvents);
    if (activeSection === 'dashboard') {
      fetchData('products', setProducts);
      fetchData('news', setNews);
      fetchData('events', setEvents);
    }
  }, [activeSection]);

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (loginData.email === 'admin@graffpiatto.kz' && loginData.password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Неверный логин или пароль');
    }
  };

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
              <input type="email" value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})} className="w-full border border-gray-300 px-4 py-3 text-[#303F56] focus:border-[#C9A25B] focus:outline-none transition-colors" placeholder="admin@graffpiatto.kz" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#303F56] mb-2">Пароль</label>
              <input type="password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} className="w-full border border-gray-300 px-4 py-3 text-[#303F56] focus:border-[#C9A25B] focus:outline-none transition-colors" placeholder="••••••••" required />
            </div>
            <button type="submit" className="w-full bg-[#303F56] text-white py-4 font-semibold hover:bg-[#243147] transition-colors shadow-lg">Войти в систему</button>
            <div className="text-center"><p className="text-xs text-gray-500">Демо: admin@graffpiatto.kz / admin123</p></div>
          </form>
        </div>
      </div>
    );
  }

  const menuItems = [
    { id: 'dashboard', label: 'Главная', icon: <IconDashboard /> },
    { id: 'products', label: 'Товары', icon: <IconProducts /> },
    { id: 'news', label: 'Новости', icon: <IconNews /> },
    { id: 'events', label: 'События', icon: <IconEvents /> },
    { id: 'settings', label: 'Настройки', icon: <IconSettings /> },
  ];

  const DashboardView = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-[#303F56] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Панель управления</h2>
        <p className="text-gray-600">Добро пожаловать в CMS Graff Piatto</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Товары</span>
            <IconProducts />
          </div>
          <div className="text-3xl font-bold text-[#303F56]">{products.length}</div>
          <div className="mt-2 text-xs text-green-600">Активны в базе</div>
        </div>

        <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Новости</span>
            <IconNews />
          </div>
          <div className="text-3xl font-bold text-[#303F56]">{news.length}</div>
          <div className="mt-2 text-xs text-green-600">Активны в базе</div>
        </div>

        <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">События</span>
            <IconEvents />
          </div>
          <div className="text-3xl font-bold text-[#303F56]">{events.length}</div>
          <div className="mt-2 text-xs text-blue-600">Предстоящие</div>
        </div>

        <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Просмотры</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </div>
          <div className="text-3xl font-bold text-[#303F56]">12.4K</div>
          <div className="mt-2 text-xs text-green-600">+18% за месяц</div>
        </div>
      </div>
    </div>
  );

  const ProductsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#303F56]" style={{ fontFamily: 'Playfair Display, serif' }}>Управление товарами</h2>
          <p className="text-gray-600 mt-1">Всего товаров: {products.length}</p>
        </div>
        <button onClick={() => { setModalType('product'); setShowModal(true); setSelectedFile(null); setImagePreview(''); }} className="flex items-center gap-2 bg-[#C9A25B] text-white px-6 py-3 font-semibold hover:bg-[#b58f4d] transition-colors shadow-md"><IconPlus /> Добавить товар</button>
      </div>

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
            {products.map((product: any) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {product.imageUrl ? (
                      <img src={`${API_URL}${product.imageUrl}`} alt={product.title} className="w-12 h-12 object-cover" />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 flex items-center justify-center"><IconImage /></div>
                    )}
                    <span className="font-medium text-[#303F56]">{product.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{product.brand}</td>
                <td className="px-6 py-4 text-gray-600">{product.category}</td>
                <td className="px-6 py-4 font-semibold text-[#303F56]">{Number(product.priceKzt).toLocaleString()}</td>
                <td className="px-6 py-4"><span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-800">Активен</span></td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-[#C9A25B] hover:bg-[#C9A25B]/10 transition-colors"><IconEdit /></button>
                    <button onClick={() => handleDelete('products', product.id, products, setProducts)} className="p-2 text-red-600 hover:bg-red-50 transition-colors"><IconTrash /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const NewsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#303F56]" style={{ fontFamily: 'Playfair Display, serif' }}>Управление новостями</h2>
          <p className="text-gray-600 mt-1">Всего новостей: {news.length}</p>
        </div>
        <button onClick={() => { setModalType('news'); setShowModal(true); setSelectedFile(null); setImagePreview(''); }} className="flex items-center gap-2 bg-[#C9A25B] text-white px-6 py-3 font-semibold hover:bg-[#b58f4d] transition-colors shadow-md"><IconPlus /> Добавить новость</button>
      </div>

      <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Заголовок</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Категория</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Дата</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {news.map((item: any) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-[#303F56]">{item.title}</td>
                <td className="px-6 py-4"><span className="inline-block bg-[#C9A25B]/10 text-[#C9A25B] px-3 py-1 text-xs font-semibold">{item.category}</span></td>
                <td className="px-6 py-4 text-gray-600">{item.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-[#C9A25B] hover:bg-[#C9A25B]/10 transition-colors"><IconEdit /></button>
                    <button onClick={() => handleDelete('news', item.id, news, setNews)} className="p-2 text-red-600 hover:bg-red-50 transition-colors"><IconTrash /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const EventsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#303F56]" style={{ fontFamily: 'Playfair Display, serif' }}>Управление событиями</h2>
          <p className="text-gray-600 mt-1">Всего событий: {events.length}</p>
        </div>
        <button onClick={() => { setModalType('event'); setShowModal(true); setSelectedFile(null); setImagePreview(''); }} className="flex items-center gap-2 bg-[#C9A25B] text-white px-6 py-3 font-semibold hover:bg-[#b58f4d] transition-colors shadow-md"><IconPlus /> Добавить событие</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event: any) => (
          <div key={event.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-[#303F56]">{event.title}</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 text-xs font-semibold">{event.status}</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2"><IconEvents /><span>{event.date} {event.time && ` / ${event.time}`}</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">Цена:</span><span>{Number(event.priceKzt).toLocaleString()} ₸</span></div>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                <button className="flex-1 bg-red-600 text-white py-2 font-semibold hover:bg-red-700 transition-colors" onClick={() => handleDelete('events', event.id, events, setEvents)}>Удалить</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const SettingsView = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-[#303F56]" style={{ fontFamily: 'Playfair Display, serif' }}>Настройки системы</h2>
      <div className="bg-white border border-gray-200 p-6"><p>Раздел настроек в разработке...</p></div>
    </div>
  );

  const Modal = () => {
    if (!showModal) return null;

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData();
      
      let endpoint = '';

      if (modalType === 'product') {
        endpoint = 'products';
        formData.append('title', (form.elements.namedItem('title') as HTMLInputElement).value);
        formData.append('brand', (form.elements.namedItem('brand') as HTMLSelectElement).value);
        formData.append('category', (form.elements.namedItem('category') as HTMLSelectElement).value);
        formData.append('priceKzt', (form.elements.namedItem('priceKzt') as HTMLInputElement).value);
        formData.append('priceRub', (form.elements.namedItem('priceRub') as HTMLInputElement).value || '0');
        formData.append('description', (form.elements.namedItem('description') as HTMLTextAreaElement).value);
      } else if (modalType === 'news') {
        endpoint = 'news';
        formData.append('title', (form.elements.namedItem('title') as HTMLInputElement).value);
        formData.append('category', (form.elements.namedItem('category') as HTMLSelectElement).value);
        formData.append('date', (form.elements.namedItem('date') as HTMLInputElement).value);
        formData.append('description', (form.elements.namedItem('description') as HTMLTextAreaElement).value);
        formData.append('content', (form.elements.namedItem('content') as HTMLTextAreaElement).value);
      } else if (modalType === 'event') {
        endpoint = 'events';
        formData.append('title', (form.elements.namedItem('title') as HTMLInputElement).value);
        formData.append('date', (form.elements.namedItem('date') as HTMLInputElement).value);
        formData.append('time', (form.elements.namedItem('time') as HTMLInputElement).value);
        formData.append('priceKzt', (form.elements.namedItem('priceKzt') as HTMLInputElement).value);
        formData.append('priceRub', (form.elements.namedItem('priceRub') as HTMLInputElement).value || '0');
        formData.append('description', (form.elements.namedItem('description') as HTMLTextAreaElement).value);
      }

      if (selectedFile) {
        formData.append('image', selectedFile);
      }

      try {
        const res = await fetch(`${API_URL}/${endpoint}`, {
          method: 'POST',
          body: formData,
        });

        if (res.ok) {
          alert('Успешно сохранено!');
          setShowModal(false);
          setSelectedFile(null);
          setImagePreview('');
          if (endpoint === 'products') fetchData('products', setProducts);
          if (endpoint === 'news') fetchData('news', setNews);
          if (endpoint === 'events') fetchData('events', setEvents);
        } else {
          alert('Ошибка сервера');
        }
      } catch (error) {
        console.error(error);
        alert('Ошибка сети');
      }
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="sticky top-0 bg-[#303F56] p-6 text-white flex items-center justify-between">
            <h3 className="text-xl font-bold">
              {modalType === 'product' && 'Добавить товар'}
              {modalType === 'news' && 'Добавить новость'}
              {modalType === 'event' && 'Добавить событие'}
            </h3>
            <button onClick={() => { setShowModal(false); setSelectedFile(null); setImagePreview(''); }} className="text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* ТОВАР */}
            {modalType === 'product' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Название товара *</label><input name="title" type="text" className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" placeholder="Тарелка «Blue Garden»" required /></div>
                  <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Бренд *</label><select name="brand" className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"><option>Villeroy & Boch</option><option>Lenox</option><option>Gien</option><option>Wedgwood</option></select></div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Категория *</label>
                  <select name="category" className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none">
                    <option>Обеденные тарелки</option>
                    <option>Десертные тарелки</option>
                    <option>Чайные пары</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Цена KZT *</label><input name="priceKzt" type="number" className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" placeholder="450000" required /></div>
                  <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Цена RUB</label><input name="priceRub" type="number" className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" placeholder="69140" /></div>
                </div>
                <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Описание</label><textarea name="description" rows={4} className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" placeholder="Подробное описание товара..." /></div>
                
                {/* Блок загрузки фото */}
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Изображение</label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange}
                    className="hidden"
                    id="product-image-upload"
                  />
                  <label 
                    htmlFor="product-image-upload"
                    className="border-2 border-dashed border-gray-300 p-8 text-center hover:border-[#C9A25B] transition-colors cursor-pointer block"
                  >
                    {imagePreview ? (
                      <div className="space-y-3">
                        <img src={imagePreview} alt="Preview" className="mx-auto h-32 w-32 object-cover" />
                        <p className="text-sm text-green-600">Изображение выбрано</p>
                      </div>
                    ) : (
                      <>
                        <IconImage className="mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-gray-600">Нажмите для загрузки или перетащите файл</p>
                        <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP до 5MB</p>
                      </>
                    )}
                  </label>
                </div>
              </>
            )}

            {/* НОВОСТЬ */}
            {modalType === 'news' && (
              <>
                <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Заголовок *</label><input name="title" type="text" className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" placeholder="Новая коллекция..." required /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Категория *</label><select name="category" className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none"><option>Коллекции</option><option>Гастрономия</option><option>Акции</option></select></div>
                  <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Дата публикации *</label><input name="date" type="date" className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" required /></div>
                </div>
                <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Краткое описание</label><textarea name="description" rows={3} className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" /></div>
                <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Полный текст *</label><textarea name="content" rows={8} className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" required /></div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Изображение обложки</label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange}
                    className="hidden"
                    id="news-image-upload"
                  />
                  <label 
                    htmlFor="news-image-upload"
                    className="border-2 border-dashed border-gray-300 p-8 text-center hover:border-[#C9A25B] transition-colors cursor-pointer block"
                  >
                    {imagePreview ? (
                      <div className="space-y-3">
                        <img src={imagePreview} alt="Preview" className="mx-auto h-32 w-32 object-cover" />
                        <p className="text-sm text-green-600">Изображение выбрано</p>
                      </div>
                    ) : (
                      <>
                        <IconImage className="mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-gray-600">Нажмите для загрузки</p>
                      </>
                    )}
                  </label>
                </div>
              </>
            )}

            {/* СОБЫТИЕ */}
            {modalType === 'event' && (
              <>
                <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Название события *</label><input name="title" type="text" className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" placeholder="Ужин-дегустация" required /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Дата события *</label><input name="date" type="date" className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" required /></div>
                  <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Время</label><input name="time" type="time" className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Цена KZT *</label><input name="priceKzt" type="number" className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" placeholder="39000" required /></div>
                  <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Цена RUB</label><input name="priceRub" type="number" className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" placeholder="69140" /></div>
                </div>
                <div><label className="block text-sm font-semibold text-[#303F56] mb-2">Описание</label><textarea name="description" rows={4} className="w-full border border-gray-300 px-4 py-2 focus:border-[#C9A25B] focus:outline-none" /></div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Изображение</label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange}
                    className="hidden"
                    id="event-image-upload"
                  />
                  <label 
                    htmlFor="event-image-upload"
                    className="border-2 border-dashed border-gray-300 p-8 text-center hover:border-[#C9A25B] transition-colors cursor-pointer block"
                  >
                    {imagePreview ? (
                      <div className="space-y-3">
                        <img src={imagePreview} alt="Preview" className="mx-auto h-32 w-32 object-cover" />
                        <p className="text-sm text-green-600">Изображение выбрано</p>
                      </div>
                    ) : (
                      <>
                        <IconImage className="mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-gray-600">Нажмите для загрузки</p>
                      </>
                    )}
                  </label>
                </div>
              </>
            )}

            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <button type="button" onClick={() => { setShowModal(false); setSelectedFile(null); setImagePreview(''); }} className="flex-1 border border-gray-300 text-[#303F56] py-3 font-semibold hover:bg-gray-50 transition-colors">Отмена</button>
              <button type="submit" className="flex-1 bg-[#C9A25B] text-white py-3 font-semibold hover:bg-[#b58f4d] transition-colors">Сохранить</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#303F56] text-white flex flex-col shadow-2xl">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Graff Piatto</h1>
          <p className="text-sm text-white/70 mt-1">Admin CMS</p>
        </div>
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <button key={item.id} onClick={() => setActiveSection(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 mb-2 font-medium transition-all ${activeSection === item.id ? 'bg-[#C9A25B] text-white shadow-lg' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}>
              {item.icon}<span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-red-600 hover:text-white transition-all font-medium"><IconLogout /><span>Выход</span></button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-8">
          {isLoading && (
            <div className="fixed top-4 right-4 bg-[#303F56] text-white px-4 py-2 rounded shadow-lg">
              Загрузка...
            </div>
          )}
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