"use client";

import React, { useState, useEffect } from 'react';

// === ICONS ===
const IconDashboard = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const IconProducts = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
const IconNews = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>;
const IconEvents = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const IconSettings = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const IconLogout = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>;
const IconEdit = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
const IconTrash = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;
const IconPlus = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>;
const IconEye = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const IconClose = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const IconMenu = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
const IconUpload = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>;
const IconImage = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const IconSave = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>;
const IconChevronLeft = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const IconChevronRight = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
const IconOrders = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const API_URL = 'https://infinitely-traversable-carin.ngrok-free.dev';

interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  priceKzt: number;
  priceRub: number;
  description: string;
  imageUrl: string;
  images: string[];
  isActive: boolean;
}

interface OrderItem {
  productId: number;
  title: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  orderNumber: string;
  customerFirstName: string;
  customerLastName: string;
  customerPhone: string;
  customerEmail: string;
  deliveryMethod: string;
  deliveryCity: string;
  deliveryAddress?: string;
  deliveryApartment?: string;
  deliveryPostalCode?: string;
  paymentMethod: string;
  items: OrderItem[];
  total: number;
  comment?: string;
  status: string;
  createdAt: string;
  updatedAt?: string;
}

function AdminCMS() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  // Состояния для просмотра изображений
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [viewerImages, setViewerImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [products, setProducts] = useState<Product[]>([]);
  const [news, setNews] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);

  // Настройки
  const [settings, setSettings] = useState({
    siteName: 'Graff Piatto',
    adminEmail: 'admin@graffpiatto.kz',
    phone: '+7 (777) 123-45-67',
    address: 'Астана, Казахстан',
    workingHours: 'Пн-Вс: 10:00 - 22:00',
  });

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
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (endpoint: string, id: number, currentList: any[], setter: Function) => {
    if (!confirm('Вы уверены, что хотите удалить?')) return;
    try {
      const res = await fetch(`${API_URL}/${endpoint}/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setter(currentList.filter((item) => item.id !== id));
        alert('Успешно удалено');
      }
    } catch (error) {
      alert('Ошибка при удалении');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (!files || files.length === 0) return;

  const filesArray = Array.from(files);
  const maxFiles = modalType === 'product' ? 5 : 1;

  if (modalType === 'product') {
    const currentCount = selectedFiles.length;
    const availableSlots = maxFiles - currentCount;

    if (availableSlots <= 0) {
      alert(`Максимум ${maxFiles} изображений. Удалите существующие, чтобы добавить новые.`);
      // Сбрасываем input
      if (e.target) e.target.value = '';
      return;
    }

    const filesToAdd = filesArray.slice(0, availableSlots);
    const newFiles = [...selectedFiles, ...filesToAdd];

    if (filesArray.length > availableSlots) {
      alert(`Добавлено ${filesToAdd.length} из ${filesArray.length} выбранных файлов (доступно мест: ${availableSlots})`);
    }

    setSelectedFiles(newFiles);

    // Создаём превью для новых файлов
    const newPreviews: string[] = [];
    let loadedCount = 0;

    filesToAdd.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          newPreviews[index] = event.target.result as string;
          loadedCount++;
          if (loadedCount === filesToAdd.length) {
            setImagePreviews(prev => [...prev, ...newPreviews]);
          }
        }
      };
      reader.readAsDataURL(file);
    });

    // очистим input (опционально) чтобы можно было выбрать те же файлы снова
    if (e.target) e.target.value = '';
  } else {
    // Для новостей/событий - только 1 фото (заменяем)
    if (filesArray.length > maxFiles) {
      alert(`Максимум ${maxFiles} изображение`);
      if (e.target) e.target.value = '';
      return;
    }

    setSelectedFiles(filesArray);

    const newPreviews: string[] = [];
    let loadedCount = 0;

    filesArray.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          newPreviews[index] = event.target.result as string;
          loadedCount++;
          if (loadedCount === filesArray.length) {
            setImagePreviews(newPreviews);
          }
        }
      };
      reader.readAsDataURL(file);
    });

    if (e.target) e.target.value = '';
  }
};


  const removeImage = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email === 'admin@graffpiatto.kz' && loginData.password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Неверный логин или пароль');
    }
  };

  const openModal = (type: string, item: any = null) => {
    setModalType(type);
    setEditingItem(item);
    setShowModal(true);
    setSelectedFiles([]);
    setImagePreviews([]);
    setIsMobileMenuOpen(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedFiles([]);
    setImagePreviews([]);
    setEditingItem(null);
  };

  const openImageViewer = (images: string[], startIndex: number = 0) => {
    setViewerImages(images);
    setCurrentImageIndex(startIndex);
    setShowImageViewer(true);
  };

  const closeImageViewer = () => {
    setShowImageViewer(false);
    setViewerImages([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % viewerImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + viewerImages.length) % viewerImages.length);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#303F56] to-[#1a2332] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-xl overflow-hidden">
          <div className="bg-[#C9A25B] p-8 text-center">
            <h1 className="text-3xl font-bold text-white font-[family-name:var(--font-playfair)]">
              Graff Piatto
            </h1>
            <p className="mt-2 text-white/90 text-sm">Панель управления</p>
          </div>

          <form onSubmit={handleLogin} className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#303F56] mb-2">Email</label>
              <input 
                type="email" 
                value={loginData.email} 
                onChange={(e) => setLoginData({...loginData, email: e.target.value})} 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                placeholder="••••••••" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#303F56] text-white py-4 rounded-lg font-semibold hover:bg-[#243147] transition-colors shadow-lg"
            >
              Войти в систему
            </button>
            <div className="text-center">
              <p className="text-xs text-gray-500">Демо: admin@graffpiatto.kz / admin123</p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  const menuItems = [
    { id: 'dashboard', label: 'Главная', icon: <IconDashboard /> },
    { id: 'products', label: 'Товары', icon: <IconProducts /> },
    { id: 'orders', label: 'Заказы', icon: <IconOrders /> },
    { id: 'news', label: 'Новости', icon: <IconNews /> },
    { id: 'events', label: 'События', icon: <IconEvents /> },
    { id: 'settings', label: 'Настройки', icon: <IconSettings /> },
  ];

  const DashboardView = () => {
    const activeProducts = products.filter(p => p.isActive).length;
    const recentNews = news.slice(0, 3);
    const upcomingEvents = events.filter(e => e.status === 'upcoming').slice(0, 3);
    
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-bold text-[#303F56] mb-2 font-[family-name:var(--font-playfair)]">
            Панель управления
          </h2>
          <p className="text-gray-600">Добро пожаловать в CMS Graff Piatto</p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Товары', count: products.length, active: activeProducts, icon: <IconProducts />, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Новости', count: news.length, active: news.length, icon: <IconNews />, color: 'text-green-600', bg: 'bg-green-50' },
            { label: 'События', count: events.length, active: upcomingEvents.length, icon: <IconEvents />, color: 'text-purple-600', bg: 'bg-purple-50' },
            { label: 'Всего', count: products.length + news.length + events.length, active: '-', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, color: 'text-[#C9A25B]', bg: 'bg-[#C9A25B]/10' },
          ].map((stat, idx) => (
            <div key={idx} className={`${stat.bg} border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">{stat.label}</span>
                <div className={stat.color}>{stat.icon}</div>
              </div>
              <div className="text-4xl font-bold text-[#303F56]">{stat.count}</div>
              <div className="mt-2 text-xs text-gray-600">
                {stat.active !== '-' ? `Активных: ${stat.active}` : 'Записей в системе'}
              </div>
            </div>
          ))}
        </div>

        {/* Последние новости */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-[#303F56] mb-4 font-[family-name:var(--font-playfair)]">
            Последние новости
          </h3>
          {recentNews.length > 0 ? (
            <div className="space-y-3">
              {recentNews.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  {item.imageUrl && (
                    <img src={`${API_URL}${item.imageUrl}`} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#303F56]">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Новостей пока нет</p>
          )}
        </div>

        {/* Предстоящие события */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-[#303F56] mb-4 font-[family-name:var(--font-playfair)]">
            Предстоящие события
          </h3>
          {upcomingEvents.length > 0 ? (
            <div className="space-y-3">
              {upcomingEvents.map(event => (
                <div key={event.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  {event.imageUrl && (
                    <img src={`${API_URL}${event.imageUrl}`} alt={event.title} className="w-16 h-16 object-cover rounded-lg" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#303F56]">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.date} {event.time && `• ${event.time}`}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">События пока не запланированы</p>
          )}
        </div>
      </div>
    );
  };

  const ProductsView = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#303F56] font-[family-name:var(--font-playfair)]">
            Управление товарами
          </h2>
          <p className="text-gray-600 mt-1">Всего товаров: {products.length}</p>
        </div>
        <button 
          onClick={() => openModal('product')} 
          className="flex items-center justify-center gap-2 bg-[#C9A25B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b58f4d] transition-colors shadow-md whitespace-nowrap"
        >
          <IconPlus /> Добавить товар
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
            {product.images && product.images.length > 0 ? (
              <div 
                className="relative h-64 bg-gray-100 cursor-pointer group overflow-hidden"
                onClick={() => openImageViewer(product.images, 0)}
              >
                <img 
                  src={`${API_URL}${product.images[0]}`} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105" 
                />
                {product.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.images.length} фото
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform scale-75 md:group-hover:scale-100 bg-white rounded-full p-4 shadow-2xl">
                    <svg className="w-12 h-12 text-[#C9A25B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : product.imageUrl ? (
              <div 
                className="relative h-64 bg-gray-100 cursor-pointer group overflow-hidden"
                onClick={() => openImageViewer([product.imageUrl], 0)}
              >
                <img 
                  src={`${API_URL}${product.imageUrl}`} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform scale-75 md:group-hover:scale-100 bg-white rounded-full p-4 shadow-2xl">
                    <svg className="w-12 h-12 text-[#C9A25B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <IconImage />
              </div>
            )}

            <div className="p-5">
              <h3 className="text-lg font-bold text-[#303F56] mb-2 font-[family-name:var(--font-playfair)]">
                {product.title}
              </h3>
              <div className="space-y-1 text-sm text-gray-600 mb-4">
                <p><span className="font-semibold">Бренд:</span> {product.brand}</p>
                <p><span className="font-semibold">Категория:</span> {product.category}</p>
                <p className="text-lg font-bold text-[#303F56]">{Number(product.priceKzt).toLocaleString()} ₸</p>
              </div>

              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <div key={idx} className="relative group/thumb">
                      <img 
                        src={`${API_URL}${img}`} 
                        alt={`${product.title} ${idx + 1}`} 
                        onClick={(e) => {
                          e.stopPropagation();
                          openImageViewer(product.images, idx);
                        }}
                        className="w-16 h-16 object-cover rounded-lg border-2 border-gray-200 hover:border-[#C9A25B] hover:shadow-lg flex-shrink-0 cursor-pointer transition-all duration-200" 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/20 rounded-lg transition-all pointer-events-none" />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => openModal('product', product)} 
                  className="flex-1 bg-[#C9A25B] text-white py-2 rounded-lg font-semibold hover:bg-[#b58f4d] transition-colors text-sm flex items-center justify-center gap-1"
                >
                  <IconEdit /> Редактировать
                </button>
                <button 
                  onClick={() => handleDelete('products', product.id, products, setProducts)} 
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm flex items-center justify-center gap-1"
                >
                  <IconTrash /> Удалить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const NewsView = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#303F56] font-[family-name:var(--font-playfair)]">
            Управление новостями
          </h2>
          <p className="text-gray-600 mt-1">Всего новостей: {news.length}</p>
        </div>
        <button 
          onClick={() => openModal('news')} 
          className="flex items-center justify-center gap-2 bg-[#C9A25B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b58f4d] transition-colors shadow-md whitespace-nowrap"
        >
          <IconPlus /> Добавить новость
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
            {item.imageUrl && (
              <div className="h-48">
                <img 
                  src={`${API_URL}${item.imageUrl}`} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
            <div className="p-5">
              <span className="inline-block bg-[#C9A25B]/10 text-[#C9A25B] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-[#303F56] mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.date}</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => openModal('news', item)} 
                  className="flex-1 bg-[#C9A25B] text-white py-2 rounded-lg font-semibold hover:bg-[#b58f4d] transition-colors text-sm"
                >
                  Редактировать
                </button>
                <button 
                  onClick={() => handleDelete('news', item.id, news, setNews)} 
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  function OrdersView() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_URL}/orders`);
      if (res.ok) {
        const data = await res.json();
        setOrders(data);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: number, newStatus: string) => {
    try {
      const res = await fetch(`${API_URL}/orders/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        fetchOrders();
        if (selectedOrder?.id === orderId) {
          setSelectedOrder({ ...selectedOrder, status: newStatus });
        }
        alert('Статус заказа обновлен');
      }
    } catch (error) {
      console.error('Error updating order:', error);
      alert('Ошибка при обновлении статуса');
    }
  };

  const deleteOrder = async (orderId: number) => {
    if (!confirm('Вы уверены, что хотите удалить этот заказ?')) return;

    try {
      const res = await fetch(`${API_URL}/orders/${orderId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        fetchOrders();
        setShowModal(false);
        alert('Заказ удален');
      }
    } catch (error) {
      console.error('Error deleting order:', error);
      alert('Ошибка при удалении заказа');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-purple-100 text-purple-800';
      case 'shipped': return 'bg-indigo-100 text-indigo-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Ожидает';
      case 'confirmed': return 'Подтвержден';
      case 'processing': return 'Обрабатывается';
      case 'shipped': return 'Отправлен';
      case 'delivered': return 'Доставлен';
      case 'cancelled': return 'Отменен';
      default: return status;
    }
  };

  const getDeliveryMethodText = (method: string) => {
    return method === 'delivery' ? 'Доставка' : 'Самовывоз';
  };

  const getPaymentMethodText = (method: string) => {
    switch (method) {
      case 'card': return 'Карта онлайн';
      case 'kaspi': return 'Kaspi QR';
      case 'cash': return 'Наличные';
      default: return method;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const filteredOrders = filterStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  // Модальное окно с деталями заказа
  const OrderModal = () => {
    if (!showModal || !selectedOrder) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl rounded-xl">
          <div className="sticky top-0 bg-[#303F56] p-6 text-white flex items-center justify-between z-10 rounded-t-xl">
            <div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)]">
                Заказ #{selectedOrder.orderNumber}
              </h3>
              <p className="text-sm text-white/70 mt-1">
                {formatDate(selectedOrder.createdAt)}
              </p>
            </div>
            <button 
              onClick={() => setShowModal(false)} 
              className="text-white hover:text-gray-300 transition-colors p-1"
            >
              <IconClose />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Статус */}
            <div className="bg-gray-50 rounded-xl p-4">
              <label className="block text-sm font-semibold text-[#303F56] mb-3">
                Статус заказа
              </label>
              <select
                value={selectedOrder.status}
                onChange={(e) => updateOrderStatus(selectedOrder.id, e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A25B] bg-white transition-colors text-gray-900 placeholder:text-gray-400"
              >
                <option value="pending">Ожидает</option>
                <option value="confirmed">Подтвержден</option>
                <option value="processing">Обрабатывается</option>
                <option value="shipped">Отправлен</option>
                <option value="delivered">Доставлен</option>
                <option value="cancelled">Отменен</option>
              </select>
            </div>

            {/* Клиент */}
            <div>
              <h4 className="text-lg font-bold text-[#303F56] mb-3">Клиент</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-600">Имя:</span>
                  <p className="font-semibold text-gray-600">{selectedOrder.customerFirstName} {selectedOrder.customerLastName}</p>
                </div>
                <div>
                  <span className="text-gray-600">Телефон:</span>
                  <p className="font-semibold text-gray-600">{selectedOrder.customerPhone}</p>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-600">Email:</span>
                  <p className="font-semibold text-gray-600">{selectedOrder.customerEmail}</p>
                </div>
              </div>
            </div>

            {/* Доставка */}
            <div>
              <h4 className="text-lg font-bold text-[#303F56] mb-3">Доставка</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-600">Способ:</span>
                  <p className="font-semibold text-gray-600">{getDeliveryMethodText(selectedOrder.deliveryMethod)}</p>
                </div>
                <div>
                  <span className="text-gray-600">Город:</span>
                  <p className="font-semibold text-gray-600">{selectedOrder.deliveryCity}</p>
                </div>
                {selectedOrder.deliveryMethod === 'delivery' && (
                  <>
                    <div className="col-span-2">
                      <span className="text-gray-600">Адрес:</span>
                      <p className="font-semibold text-gray-600">
                        {selectedOrder.deliveryAddress}
                        {selectedOrder.deliveryApartment && `, ${selectedOrder.deliveryApartment}`}
                      </p>
                    </div>
                    {selectedOrder.deliveryPostalCode && (
                      <div>
                        <span className="text-gray-600">Индекс:</span>
                        <p className="font-semibold text-gray-600">{selectedOrder.deliveryPostalCode}</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Оплата */}
            <div>
              <h4 className="text-lg font-bold text-[#303F56] mb-3">Оплата</h4>
              <p className="font-semibold text-gray-600">{getPaymentMethodText(selectedOrder.paymentMethod)}</p>
            </div>

            {/* Товары */}
            <div>
              <h4 className="text-lg font-bold text-[#303F56] mb-3">Товары</h4>
              <div className="space-y-3">
                {selectedOrder.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-[#303F56]">{item.title}</p>
                      <p className="text-sm text-gray-600">
                        {item.quantity} шт. × {item.price.toLocaleString()} ₸
                      </p>
                    </div>
                    <p className="font-bold text-[#C9A25B]">
                      {(item.price * item.quantity).toLocaleString()} ₸
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Итого */}
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between text-xl">
                <span className="font-bold text-[#303F56]">Итого:</span>
                <span className="font-bold text-[#C9A25B]">
                  {selectedOrder.total.toLocaleString()} ₸
                </span>
              </div>
            </div>

            {/* Комментарий */}
            {selectedOrder.comment && (
              <div>
                <h4 className="text-lg font-bold text-[#303F56] mb-3">Комментарий</h4>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{selectedOrder.comment}</p>
              </div>
            )}

            {/* Действия */}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border-2 border-gray-300 text-[#303F56] py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Закрыть
              </button>
              <button
                onClick={() => deleteOrder(selectedOrder.id)}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Удалить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Заголовок и фильтры */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#303F56] font-[family-name:var(--font-playfair)]">
            Управление заказами
          </h2>
          <p className="text-gray-600 mt-1">Всего заказов: {orders.length}</p>
        </div>
      </div>

      {/* Фильтр по статусу */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-wrap gap-2">
          {[
            { value: 'all', label: 'Все', count: orders.length },
            { value: 'pending', label: 'Ожидают', count: orders.filter(o => o.status === 'pending').length },
            { value: 'confirmed', label: 'Подтверждены', count: orders.filter(o => o.status === 'confirmed').length },
            { value: 'processing', label: 'Обрабатываются', count: orders.filter(o => o.status === 'processing').length },
            { value: 'shipped', label: 'Отправлены', count: orders.filter(o => o.status === 'shipped').length },
            { value: 'delivered', label: 'Доставлены', count: orders.filter(o => o.status === 'delivered').length },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setFilterStatus(filter.value)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filterStatus === filter.value
                  ? 'bg-[#C9A25B] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      {/* Список заказов */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-gray-500">Загрузка...</div>
        ) : filteredOrders.length === 0 ? (
          <div className="p-8 text-center text-gray-500">Заказов нет</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Номер</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Дата</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Клиент</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Сумма</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Статус</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-semibold text-[#C9A25B]">#{order.orderNumber}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {formatDate(order.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-[#303F56]">
                          {order.customerFirstName} {order.customerLastName}
                        </p>
                        <p className="text-sm text-gray-600">{order.customerPhone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-[#303F56]">
                        {order.total.toLocaleString()} ₸
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          setSelectedOrder(order);
                          setShowModal(true);
                        }}
                        className="flex items-center gap-1 text-[#C9A25B] hover:text-[#b58f4d] font-semibold transition-colors"
                      >
                        <IconEye />
                        Просмотр
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <OrderModal />
    </div>
  );
}

  const EventsView = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#303F56] font-[family-name:var(--font-playfair)]">
            Управление событиями
          </h2>
          <p className="text-gray-600 mt-1">Всего событий: {events.length}</p>
        </div>
        <button 
          onClick={() => openModal('event')} 
          className="flex items-center justify-center gap-2 bg-[#C9A25B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b58f4d] transition-colors shadow-md whitespace-nowrap"
        >
          <IconPlus /> Добавить событие
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
            {event.imageUrl && (
              <div className="relative h-48">
                <img 
                  src={`${API_URL}${event.imageUrl}`} 
                  alt={event.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-[#303F56] flex-1 font-[family-name:var(--font-playfair)]">
                  {event.title}
                </h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold ml-2">
                  {event.status}
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <IconEvents />
                  <span>{event.date}{event.time && ` / ${event.time}`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Цена:</span>
                  <span>{Number(event.priceKzt).toLocaleString()} ₸</span>
                </div>
              </div>
              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => openModal('event', event)} 
                  className="flex-1 bg-[#C9A25B] text-white py-2 rounded-lg font-semibold hover:bg-[#b58f4d] transition-colors text-sm"
                >
                  Редактировать
                </button>
                <button 
                  onClick={() => handleDelete('events', event.id, events, setEvents)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const SettingsView = () => {
    const [localSettings, setLocalSettings] = useState(settings);
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
      setSettings(localSettings);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
      alert('Настройки сохранены!');
    };

    return (
      <div className="space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#303F56] font-[family-name:var(--font-playfair)]">
          Настройки системы
        </h2>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#303F56] mb-2">Название сайта</label>
            <input 
              type="text"
              value={localSettings.siteName}
              onChange={(e) => setLocalSettings({...localSettings, siteName: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#303F56] mb-2">Email администратора</label>
            <input 
              type="email"
              value={localSettings.adminEmail}
              onChange={(e) => setLocalSettings({...localSettings, adminEmail: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#303F56] mb-2">Телефон</label>
            <input 
              type="text"
              value={localSettings.phone}
              onChange={(e) => setLocalSettings({...localSettings, phone: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#303F56] mb-2">Адрес</label>
            <input 
              type="text"
              value={localSettings.address}
              onChange={(e) => setLocalSettings({...localSettings, address: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#303F56] mb-2">Часы работы</label>
            <input 
              type="text"
              value={localSettings.workingHours}
              onChange={(e) => setLocalSettings({...localSettings, workingHours: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20"
            />
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 bg-[#C9A25B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b58f4d] transition-colors shadow-md"
            >
              <IconSave /> Сохранить настройки
            </button>
            {saved && (
              <p className="text-green-600 text-sm mt-2">Настройки успешно сохранены!</p>
            )}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-3">Информация о системе</h3>
          <div className="space-y-2 text-sm text-blue-800">
            <p><span className="font-semibold">Версия CMS:</span> 1.0.0</p>
            <p><span className="font-semibold">Последнее обновление:</span> 23 ноября 2025</p>
            <p><span className="font-semibold">Статус:</span> Работает нормально</p>
          </div>
        </div>
      </div>
    );
  };

  const ImageViewer = () => {
    if (!showImageViewer || viewerImages.length === 0) return null;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeImageViewer();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
      <div className="fixed inset-0 z-[60] bg-black/96 flex items-center justify-center backdrop-blur-sm">
        {/* Кнопка закрытия */}
        <button
          onClick={closeImageViewer}
          className="absolute top-6 right-6 text-white hover:text-[#C9A25B] transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-4 group"
          title="Закрыть (Esc)"
        >
          <IconClose className="w-8 h-8" />
        </button>

        {/* Счётчик изображений */}
        {viewerImages.length > 1 && (
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-base font-bold border border-white/20">
            {currentImageIndex + 1} / {viewerImages.length}
          </div>
        )}

        {/* Кнопка "Назад" */}
        {viewerImages.length > 1 && (
          <button
            onClick={prevImage}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-[#C9A25B] transition-all bg-white/10 hover:bg-white/20 rounded-full p-5 hover:scale-110 group"
            title="Предыдущее (←)"
          >
            <IconChevronLeft className="w-10 h-10" />
          </button>
        )}

        {/* Изображение */}
        <div className="max-w-[85vw] max-h-[85vh] flex items-center justify-center px-24">
          <img
            src={`${API_URL}${viewerImages[currentImageIndex]}`}
            alt={`Изображение ${currentImageIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Кнопка "Вперёд" */}
        {viewerImages.length > 1 && (
          <button
            onClick={nextImage}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-[#C9A25B] transition-all bg-white/10 hover:bg-white/20 rounded-full p-5 hover:scale-110 group"
            title="Следующее (→)"
          >
            <IconChevronRight className="w-10 h-10" />
          </button>
        )}

        {/* Миниатюры внизу */}
        {viewerImages.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 max-w-[90vw] overflow-x-auto px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 scrollbar-hide">
            {viewerImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`relative cursor-pointer transition-all duration-300 ${
                  idx === currentImageIndex
                    ? 'scale-110'
                    : 'hover:scale-105 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={`${API_URL}${img}`}
                  alt={`Миниатюра ${idx + 1}`}
                  className={`w-20 h-20 object-cover rounded-lg transition-all ${
                    idx === currentImageIndex
                      ? 'border-4 border-[#C9A25B] shadow-lg shadow-[#C9A25B]/50'
                      : 'border-2 border-white/30 hover:border-[#C9A25B]/70'
                  }`}
                />
                {idx === currentImageIndex && (
                  <div className="absolute -top-2 -right-2 bg-[#C9A25B] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                    ✓
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Подсказка по клавиатуре */}
        <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md text-white/70 px-4 py-2 rounded-lg text-xs border border-white/20">
          Используйте ← → или ESC
        </div>
      </div>
    );
  };

  const Modal = () => {
    if (!showModal) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const formData = new FormData();
      
      let endpoint = '';
      let method = editingItem ? 'PUT' : 'POST';
      let url = '';

      if (modalType === 'product') {
        endpoint = 'products';
        url = editingItem ? `${API_URL}/${endpoint}/${editingItem.id}` : `${API_URL}/${endpoint}`;
        
        formData.append('title', (form.elements.namedItem('title') as HTMLInputElement).value);
        formData.append('brand', (form.elements.namedItem('brand') as HTMLSelectElement).value);
        formData.append('category', (form.elements.namedItem('category') as HTMLSelectElement).value);
        formData.append('priceKzt', (form.elements.namedItem('priceKzt') as HTMLInputElement).value);
        formData.append('priceRub', (form.elements.namedItem('priceRub') as HTMLInputElement).value || '0');
        formData.append('description', (form.elements.namedItem('description') as HTMLTextAreaElement).value);
        formData.append('isActive', 'true');
      } else if (modalType === 'news') {
        endpoint = 'news';
        method = editingItem ? 'PATCH' : 'POST';
        url = editingItem ? `${API_URL}/${endpoint}/${editingItem.id}` : `${API_URL}/${endpoint}`;
        
        formData.append('title', (form.elements.namedItem('title') as HTMLInputElement).value);
        formData.append('category', (form.elements.namedItem('category') as HTMLSelectElement).value);
        formData.append('date', (form.elements.namedItem('date') as HTMLInputElement).value);
        formData.append('description', (form.elements.namedItem('description') as HTMLTextAreaElement).value);
        formData.append('content', (form.elements.namedItem('content') as HTMLTextAreaElement).value);
        formData.append('status', 'published');
      } else if (modalType === 'event') {
        endpoint = 'events';
        method = editingItem ? 'PATCH' : 'POST';
        url = editingItem ? `${API_URL}/${endpoint}/${editingItem.id}` : `${API_URL}/${endpoint}`;
        
        formData.append('title', (form.elements.namedItem('title') as HTMLInputElement).value);
        formData.append('date', (form.elements.namedItem('date') as HTMLInputElement).value);
        formData.append('time', (form.elements.namedItem('time') as HTMLInputElement).value);
        formData.append('priceKzt', (form.elements.namedItem('priceKzt') as HTMLInputElement).value);
        formData.append('priceRub', (form.elements.namedItem('priceRub') as HTMLInputElement).value || '0');
        formData.append('description', (form.elements.namedItem('description') as HTMLTextAreaElement).value);
        formData.append('status', 'upcoming');
      }

      // Добавляем файлы
      selectedFiles.forEach((file) => {
        formData.append('image', file);
      });

      try {
        setIsLoading(true);
        const res = await fetch(url, {
          method: method,
          body: formData,
        });

        if (res.ok) {
          alert('Успешно сохранено!');
          closeModal();
          
          if (endpoint === 'products') fetchData('products', setProducts);
          if (endpoint === 'news') fetchData('news', setNews);
          if (endpoint === 'events') fetchData('events', setEvents);
        } else {
          const errorData = await res.json();
          alert(`Ошибка: ${errorData.message || 'Неизвестная ошибка'}`);
        }
      } catch (error) {
        console.error(error);
        alert('Ошибка сети');
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl rounded-xl">
          <div className="sticky top-0 bg-[#303F56] p-6 text-white flex items-center justify-between z-10 rounded-t-xl">
            <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)]">
              {editingItem ? 'Редактировать' : 'Добавить'} {modalType === 'product' ? 'товар' : modalType === 'news' ? 'новость' : 'событие'}
            </h3>
            <button 
              onClick={closeModal} 
              className="text-white hover:text-gray-300 transition-colors p-1"
            >
              <IconClose />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* ТОВАР */}
            {modalType === 'product' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Название товара *</label>
                    <input 
                      name="title" 
                      type="text" 
                      defaultValue={editingItem?.title || ''} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                      placeholder="Тарелка «Blue Garden»" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Бренд *</label>
                    <select 
                      name="brand" 
                      defaultValue={editingItem?.brand || ''} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                      required
                    >
                      <option value="">Выберите бренд</option>
                      <option>Villeroy & Boch</option>
                      <option>Lenox</option>
                      <option>Gien</option>
                      <option>Wedgwood</option>
                      <option>Portmeirion</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Категория *</label>
                  <select 
                    name="category" 
                    defaultValue={editingItem?.category || ''} 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                    required
                  >
                    <option value="">Выберите категорию</option>
                    <option>Обеденные тарелки</option>
                    <option>Десертные тарелки</option>
                    <option>Чайные пары</option>
                    <option>Кофейные сервизы</option>
                    <option>Супницы</option>
                    <option>Салатники</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Цена KZT *</label>
                    <input 
                      name="priceKzt" 
                      type="number" 
                      step="0.01"
                      defaultValue={editingItem?.priceKzt || ''} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                      placeholder="450000" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Цена RUB</label>
                    <input 
                      name="priceRub" 
                      type="number" 
                      step="0.01"
                      defaultValue={editingItem?.priceRub || ''} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                      placeholder="69140" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Описание</label>
                  <textarea 
                    name="description" 
                    rows={4} 
                    defaultValue={editingItem?.description || ''} 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                    placeholder="Подробное описание товара..." 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">
                    Изображения <span className="text-[#C9A25B] font-bold">(до 5 фото)</span>
                  </label>
                  
                  {editingItem && editingItem.images && editingItem.images.length > 0 && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-3">Текущие фото ({editingItem.images.length}):</p>
                      <div className="flex flex-wrap gap-2">
                        {editingItem.images.map((img: string, idx: number) => (
                          <img 
                            key={idx}
                            src={`${API_URL}${img}`} 
                            alt={`Current ${idx + 1}`} 
                            className="w-20 h-20 object-cover rounded-lg border-2 border-gray-300" 
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Загрузите новые фото для замены</p>
                    </div>
                  )}

                  <input 
                    type="file" 
                    accept="image/*" 
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    id="product-image-upload"
                  />
                  
                  {imagePreviews.length > 0 ? (
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-3">
                        {imagePreviews.map((preview, idx) => (
                          <div key={idx} className="relative group">
                            <img 
                              src={preview} 
                              alt={`Preview ${idx + 1}`} 
                              className="w-24 h-24 object-cover rounded-lg border-2 border-[#C9A25B] shadow-lg" 
                            />
                            <button
                              type="button"
                              onClick={(e) => { 
                                e.preventDefault(); 
                                e.stopPropagation();
                                removeImage(idx); 
                              }}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-red-600 shadow-lg"
                            >
                              <IconClose />
                            </button>
                            <div className="absolute bottom-1 left-1 bg-[#C9A25B] text-white text-xs font-bold px-2 py-1 rounded">
                              #{idx + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-green-50 border-2 border-green-500 rounded-lg p-3 flex items-center justify-between">
                        <p className="text-green-700 font-bold">
                          Выбрано: {imagePreviews.length} из 5 фото
                        </p>
                        {imagePreviews.length < 5 && (
                          <label 
                            htmlFor="product-image-upload"
                            className="bg-[#C9A25B] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#b58f4d] transition-colors cursor-pointer flex items-center gap-2"
                          >
                            <IconPlus className="w-4 h-4" />
                            Добавить ещё
                          </label>
                        )}
                      </div>
                    </div>
                  ) : (
                    <label 
                      htmlFor="product-image-upload"
                      className="border-2 border-dashed border-[#C9A25B] rounded-xl p-8 text-center hover:bg-[#C9A25B]/5 transition-all cursor-pointer block"
                    >
                      <div className="space-y-3">
                        <IconUpload className="mx-auto text-[#C9A25B]" />
                        <p className="text-lg font-bold text-[#303F56]">Выберите изображения</p>
                        <p className="text-sm text-gray-600">Можно загрузить сразу несколько или по одной</p>
                        <p className="text-xs text-gray-400">PNG, JPG, WEBP до 5MB каждое</p>
                      </div>
                    </label>
                  )}
                </div>
              </>
            )}

            {/* НОВОСТЬ */}
            {modalType === 'news' && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Заголовок *</label>
                  <input 
                    name="title" 
                    type="text" 
                    defaultValue={editingItem?.title || ''} 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                    placeholder="Новая коллекция..." 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Категория *</label>
                    <select 
                      name="category" 
                      defaultValue={editingItem?.category || ''} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                      required
                    >
                      <option value="">Выберите категорию</option>
                      <option>Коллекции</option>
                      <option>Гастрономия</option>
                      <option>Акции</option>
                      <option>События</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Дата публикации *</label>
                    <input 
                      name="date" 
                      type="text" 
                      defaultValue={editingItem?.date || ''} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                      placeholder="23 ноября 2025"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Краткое описание</label>
                  <textarea 
                    name="description" 
                    rows={3} 
                    defaultValue={editingItem?.description || ''} 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                    placeholder="Краткое описание..." 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Полный текст *</label>
                  <textarea 
                    name="content" 
                    rows={8} 
                    defaultValue={editingItem?.content || ''} 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                    placeholder="Полный текст новости..." 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Изображение</label>
                  
                  {editingItem?.imageUrl && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Текущее фото:</p>
                      <img 
                        src={`${API_URL}${editingItem.imageUrl}`} 
                        alt="Current" 
                        className="w-32 h-32 object-cover rounded-lg border-2 border-gray-300" 
                      />
                    </div>
                  )}

                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange}
                    className="hidden"
                    id="news-image-upload"
                  />
                  <label 
                    htmlFor="news-image-upload"
                    className="border-2 border-dashed border-[#C9A25B] rounded-xl p-8 text-center hover:bg-[#C9A25B]/5 transition-all cursor-pointer block"
                  >
                    {imagePreviews.length > 0 ? (
                      <div className="space-y-3">
                        <img 
                          src={imagePreviews[0]} 
                          alt="Preview" 
                          className="mx-auto h-32 w-auto object-cover rounded-lg border-2 border-[#C9A25B]" 
                        />
                        <p className="text-green-600 font-semibold">Изображение выбрано</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <IconUpload className="mx-auto text-[#C9A25B]" />
                        <p className="text-lg font-bold text-[#303F56]">Выберите изображение</p>
                        <p className="text-sm text-gray-600">PNG, JPG, WEBP до 5MB</p>
                      </div>
                    )}
                  </label>
                </div>
              </>
            )}

            {/* СОБЫТИЕ */}
            {modalType === 'event' && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Название события *</label>
                  <input 
                    name="title" 
                    type="text" 
                    defaultValue={editingItem?.title || ''} 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                    placeholder="Ужин-дегустация" 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Дата *</label>
                    <input 
                      name="date" 
                      type="text" 
                      defaultValue={editingItem?.date || ''} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                      placeholder="25 ноября 2025"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Время</label>
                    <input 
                      name="time" 
                      type="text" 
                      defaultValue={editingItem?.time || ''} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                      placeholder="19:00"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Цена KZT *</label>
                    <input 
                      name="priceKzt" 
                      type="number" 
                      step="0.01"
                      defaultValue={editingItem?.priceKzt || ''} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                      placeholder="39000" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">Цена RUB</label>
                    <input 
                      name="priceRub" 
                      type="number" 
                      step="0.01"
                      defaultValue={editingItem?.priceRub || ''} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                      placeholder="5990" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Описание</label>
                  <textarea 
                    name="description" 
                    rows={4} 
                    defaultValue={editingItem?.description || ''} 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#303F56] bg-white focus:border-[#C9A25B] focus:outline-none focus:ring-2 focus:ring-[#C9A25B]/20" 
                    placeholder="Описание события..." 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#303F56] mb-2">Изображение</label>
                  
                  {editingItem?.imageUrl && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Текущее фото:</p>
                      <img 
                        src={`${API_URL}${editingItem.imageUrl}`} 
                        alt="Current" 
                        className="w-32 h-32 object-cover rounded-lg border-2 border-gray-300" 
                      />
                    </div>
                  )}

                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange}
                    className="hidden"
                    id="event-image-upload"
                  />
                  <label 
                    htmlFor="event-image-upload"
                    className="border-2 border-dashed border-[#C9A25B] rounded-xl p-8 text-center hover:bg-[#C9A25B]/5 transition-all cursor-pointer block"
                  >
                    {imagePreviews.length > 0 ? (
                      <div className="space-y-3">
                        <img 
                          src={imagePreviews[0]} 
                          alt="Preview" 
                          className="mx-auto h-32 w-auto object-cover rounded-lg border-2 border-[#C9A25B]" 
                        />
                        <p className="text-green-600 font-semibold">Изображение выбрано</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <IconUpload className="mx-auto text-[#C9A25B]" />
                        <p className="text-lg font-bold text-[#303F56]">Выберите изображение</p>
                        <p className="text-sm text-gray-600">PNG, JPG, WEBP до 5MB</p>
                      </div>
                    )}
                  </label>
                </div>
              </>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
              <button 
                type="button" 
                onClick={closeModal} 
                className="flex-1 border-2 border-gray-300 text-[#303F56] py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Отмена
              </button>
              <button 
                type="submit" 
                disabled={isLoading}
                className="flex-1 bg-[#C9A25B] text-white py-3 rounded-lg font-semibold hover:bg-[#b58f4d] transition-colors shadow-md disabled:opacity-50"
              >
                {isLoading ? 'Сохранение...' : (editingItem ? 'Обновить' : 'Сохранить')}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
      <div className="lg:hidden bg-[#303F56] text-white p-4 flex items-center justify-between shadow-lg">
        <div>
          <h1 className="text-xl font-bold font-[family-name:var(--font-playfair)]">Graff Piatto</h1>
          <p className="text-xs text-white/70">Admin CMS</p>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <IconMenu />
        </button>
      </div>

      <aside className={`
        lg:w-64 lg:flex-shrink-0
        ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}
        bg-[#303F56] text-white flex flex-col shadow-2xl
        fixed lg:static inset-0 z-40 lg:z-auto
      `}>
        <div className="hidden lg:block p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold font-[family-name:var(--font-playfair)]">Graff Piatto</h1>
          <p className="text-sm text-white/70 mt-1">Admin CMS</p>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          {menuItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => { 
                setActiveSection(item.id);
                setIsMobileMenuOpen(false);
              }} 
              className={`w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-lg font-medium transition-all ${
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
            onClick={() => {
              setIsLoggedIn(false);
              setIsMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-red-600 hover:text-white transition-all font-medium"
          >
            <IconLogout />
            <span>Выход</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          {isLoading && (
            <div className="fixed top-4 right-4 bg-[#303F56] text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Загрузка...</span>
            </div>
          )}
          {activeSection === 'dashboard' && <DashboardView />}
          {activeSection === 'products' && <ProductsView />}
          {activeSection === 'orders' && <OrdersView />}
          {activeSection === 'news' && <NewsView />}
          {activeSection === 'events' && <EventsView />}
          {activeSection === 'settings' && <SettingsView />}
        </div>
      </main>
      <Modal />
      <ImageViewer />

      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default AdminCMS;