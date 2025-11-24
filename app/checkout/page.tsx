"use client";

import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/cart-context';
import { useRouter } from 'next/navigation';

const API_URL = 'https://infinitely-traversable-carin.ngrok-free.dev';

// === ИКОНКИ ===
const IconArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const IconCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const IconTruck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20H3.5A1.5 1.5 0 0 1 2 18.5v-8A1.5 1.5 0 0 1 3.5 9H9m8-3h2c1.7 0 3 1.3 3 3v6c0 1.7-1.3 3-3 3m-11 4h8m-4-4v4m4-4c0 1.7-1.3 3-3 3s-3-1.3-3-3m10 0c0 1.7-1.3 3-3 3s-3-1.3-3-3" />
  </svg>
);

const IconStore = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
  </svg>
);

const IconCreditCard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const IconCash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IconUser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconPhone = (props: React.SVGProps<SVGSVGElement>) => {
  const cls = `${props.className ? props.className + ' ' : ''}w-5 h-5`;
  return (
    <svg {...props} className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
};

const IconMail = (props: React.SVGProps<SVGSVGElement>) => {
  const cls = `${props.className ? props.className + ' ' : ''}w-5 h-5`;
  return (
    <svg {...props} className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
};

const IconMapPin = (props: React.SVGProps<SVGSVGElement>) => {
  const cls = `${props.className ? props.className + ' ' : ''}w-5 h-5`;
  return (
    <svg {...props} className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
};

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  apartment: string;
  postalCode: string;
  comment: string;
  deliveryMethod: 'delivery' | 'pickup';
  paymentMethod: 'card' | 'cash' | 'kaspi';
}

interface FormErrors {
  [key: string]: string;
}

export default function CheckoutPage() {
  const cart = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: 'Астана',
    address: '',
    apartment: '',
    postalCode: '',
    comment: '',
    deliveryMethod: 'delivery',
    paymentMethod: 'card',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Если корзина пуста - редирект
  useEffect(() => {
    if (cart.items.length === 0 && !orderSuccess) {
      router.push('/catalog');
    }
  }, [cart.items, router, orderSuccess]);

  // Валидация
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) return 'Обязательное поле';
        if (value.trim().length < 2) return 'Минимум 2 символа';
        return '';
      
      case 'phone':
        if (!value.trim()) return 'Обязательное поле';
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(value)) return 'Некорректный номер телефона';
        if (value.replace(/\D/g, '').length < 10) return 'Слишком короткий номер';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Обязательное поле';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Некорректный email';
        return '';
      
      case 'city':
        if (!value.trim()) return 'Обязательное поле';
        return '';
      
      case 'address':
        if (formData.deliveryMethod === 'delivery' && !value.trim()) {
          return 'Обязательное поле для доставки';
        }
        return '';
      
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleDeliveryChange = (method: 'delivery' | 'pickup') => {
    setFormData(prev => ({ ...prev, deliveryMethod: method }));
    if (method === 'pickup') {
      setErrors(prev => ({ ...prev, address: '' }));
    }
  };

  const handlePaymentChange = (method: 'card' | 'cash' | 'kaspi') => {
    setFormData(prev => ({ ...prev, paymentMethod: method }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    newErrors.firstName = validateField('firstName', formData.firstName);
    newErrors.lastName = validateField('lastName', formData.lastName);
    newErrors.phone = validateField('phone', formData.phone);
    newErrors.email = validateField('email', formData.email);
    newErrors.city = validateField('city', formData.city);
    
    if (formData.deliveryMethod === 'delivery') {
      newErrors.address = validateField('address', formData.address);
    }
    
    setErrors(newErrors);
    
    const allTouched: { [key: string]: boolean } = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      const firstError = document.querySelector('.border-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Формируем данные заказа в формате для NestJS API
      const orderData = {
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
        },
        delivery: {
          method: formData.deliveryMethod,
          city: formData.city,
          address: formData.address,
          apartment: formData.apartment,
          postalCode: formData.postalCode,
        },
        payment: {
          method: formData.paymentMethod,
        },
        items: cart.items.map(item => ({
          productId: item.product.id,
          title: item.product.name,
          quantity: item.quantity,
          price: item.product.priceKzt,
        })),
        total: cart.getCartTotal() + (formData.deliveryMethod === 'delivery' ? 2000 : 0),
        comment: formData.comment,
        status: 'pending',
      };
      
      // Отправляем заказ на NestJS backend
      const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      
      if (response.ok) {
        const result = await response.json();
        setOrderNumber(result.orderNumber || `GP-${Date.now().toString().slice(-6)}`);
        setOrderSuccess(true);
        cart.clearCart();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка при оформлении заказа');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте снова или свяжитесь с нами.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const deliveryCost = formData.deliveryMethod === 'delivery' ? 2000 : 0;
  const totalWithDelivery = cart.getCartTotal() + deliveryCost;

  // Страница успешного заказа
  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <IconCheck className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-[#303F56] mb-4 font-[family-name:var(--font-playfair)]">
              Заказ успешно оформлен!
            </h1>
            
            <p className="text-gray-600 mb-2">
              Ваш номер заказа:
            </p>
            <p className="text-2xl font-bold text-[#C9A25B] mb-8">
              #{orderNumber}
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-[#303F56] mb-4">Что дальше?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#C9A25B] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                  <span>Мы отправили подтверждение на вашу почту <strong>{formData.email}</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#C9A25B] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                  <span>Наш менеджер свяжется с вами в течение 1 часа для подтверждения</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#C9A25B] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                  <span>
                    {formData.deliveryMethod === 'delivery' 
                      ? 'Доставка будет осуществлена по указанному адресу в течение 2-3 дней'
                      : 'Товар можно будет забрать в нашем магазине после звонка менеджера'
                    }
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/')}
                className="px-8 py-3 bg-[#303F56] text-white rounded-lg font-semibold hover:bg-[#243147] transition-colors"
              >
                На главную
              </button>
              <button
                onClick={() => router.push('/catalog')}
                className="px-8 py-3 border-2 border-[#C9A25B] text-[#C9A25B] rounded-lg font-semibold hover:bg-[#C9A25B] hover:text-white transition-colors"
              >
                Продолжить покупки
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Основная форма оформления (идентична предыдущей версии)
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-[#C9A25B] mb-8 transition-colors"
        >
          <IconArrowLeft />
          <span>Вернуться назад</span>
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-[#303F56] mb-8 font-[family-name:var(--font-playfair)]">
          Оформление заказа
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Левая колонка - форма */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Контактная информация */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#303F56] mb-6 flex items-center gap-2">
                  <IconUser className="text-[#C9A25B]" />
                  Контактная информация
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A25B] transition-colors text-gray-900 placeholder:text-gray-400${
                        errors.firstName && touched.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Иван"
                    />
                    {errors.firstName && touched.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">
                      Фамилия *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A25B] transition-colors text-gray-900 placeholder:text-gray-400${
                        errors.lastName && touched.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Иванов"
                    />
                    {errors.lastName && touched.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">
                      Телефон *
                    </label>
                    <div className="relative">
                      <IconPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A25B] transition-colors text-gray-900 placeholder:text-gray-400 ${
                          errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+7 (777) 123-45-67"
                      />
                    </div>
                    {errors.phone && touched.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#303F56] mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <IconMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A25B] transition-colors text-gray-900 placeholder:text-gray-400${
                          errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="example@mail.com"
                      />
                    </div>
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Способ получения */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#303F56] mb-6">
                  Способ получения
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => handleDeliveryChange('delivery')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.deliveryMethod === 'delivery'
                        ? 'border-[#C9A25B] bg-[#C9A25B]/5'
                        : 'border-gray-200 hover:border-[#C9A25B]/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <IconTruck className={formData.deliveryMethod === 'delivery' ? 'text-[#C9A25B]' : 'text-gray-400'} />
                      <div className="text-left flex-1">
                        <p className="font-semibold text-[#303F56]">Доставка курьером</p>
                        <p className="text-sm text-gray-600 mt-1">2-3 дня • 2 000 ₸</p>
                      </div>
                      {formData.deliveryMethod === 'delivery' && (
                        <div className="w-6 h-6 bg-[#C9A25B] rounded-full flex items-center justify-center">
                          <IconCheck className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeliveryChange('pickup')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.deliveryMethod === 'pickup'
                        ? 'border-[#C9A25B] bg-[#C9A25B]/5'
                        : 'border-gray-200 hover:border-[#C9A25B]/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <IconStore className={formData.deliveryMethod === 'pickup' ? 'text-[#C9A25B]' : 'text-gray-400'} />
                      <div className="text-left flex-1">
                        <p className="font-semibold text-[#303F56]">Самовывоз</p>
                        <p className="text-sm text-gray-600 mt-1">Сегодня • Бесплатно</p>
                      </div>
                      {formData.deliveryMethod === 'pickup' && (
                        <div className="w-6 h-6 bg-[#C9A25B] rounded-full flex items-center justify-center">
                          <IconCheck className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                </div>

                {/* Адрес доставки */}
                {formData.deliveryMethod === 'delivery' && (
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#303F56] mb-2">
                          Город *
                        </label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A25B] transition-colors text-gray-900 placeholder:text-gray-400"
                        >
                          <option value="Астана">Астана</option>
                          <option value="Алматы">Алматы</option>
                          <option value="Шымкент">Шымкент</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#303F56] mb-2">
                          Индекс
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A25B] transition-colors text-gray-900 placeholder:text-gray-400"
                          placeholder="010000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#303F56] mb-2">
                        Улица, дом *
                      </label>
                      <div className="relative">
                        <IconMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A25B] transition-colors text-gray-900 placeholder:text-gray-400${
                            errors.address && touched.address ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="ул. Пушкина, д. 10"
                        />
                      </div>
                      {errors.address && touched.address && (
                        <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#303F56] mb-2">
                        Квартира/офис
                      </label>
                      <input
                        type="text"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A25B] transition-colors text-gray-900 placeholder:text-gray-400"
                        placeholder="кв. 42"
                      />
                    </div>
                  </div>
                )}

                {/* Адрес самовывоза */}
                {formData.deliveryMethod === 'pickup' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="font-semibold text-[#303F56] mb-2">Адрес магазина:</p>
                    <p className="text-gray-700">г. Астана, ул. Достык, 10</p>
                    <p className="text-sm text-gray-600 mt-2">Режим работы: Пн-Вс 10:00 - 22:00</p>
                  </div>
                )}
              </div>

              {/* Способ оплаты */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#303F56] mb-6">
                  Способ оплаты
                </h2>
                
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => handlePaymentChange('card')}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'border-[#C9A25B] bg-[#C9A25B]/5'
                        : 'border-gray-200 hover:border-[#C9A25B]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconCreditCard className={formData.paymentMethod === 'card' ? 'text-[#C9A25B]' : 'text-gray-400'} />
                        <span className="font-semibold text-[#303F56]">Картой онлайн</span>
                      </div>
                      {formData.paymentMethod === 'card' && (
                        <div className="w-6 h-6 bg-[#C9A25B] rounded-full flex items-center justify-center">
                          <IconCheck className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePaymentChange('kaspi')}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      formData.paymentMethod === 'kaspi'
                        ? 'border-[#C9A25B] bg-[#C9A25B]/5'
                        : 'border-gray-200 hover:border-[#C9A25B]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded ${formData.paymentMethod === 'kaspi' ? 'bg-[#C9A25B]' : 'bg-gray-400'}`} />
                        <span className="font-semibold text-[#303F56]">Kaspi QR</span>
                      </div>
                      {formData.paymentMethod === 'kaspi' && (
                        <div className="w-6 h-6 bg-[#C9A25B] rounded-full flex items-center justify-center">
                          <IconCheck className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePaymentChange('cash')}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      formData.paymentMethod === 'cash'
                        ? 'border-[#C9A25B] bg-[#C9A25B]/5'
                        : 'border-gray-200 hover:border-[#C9A25B]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconCash className={formData.paymentMethod === 'cash' ? 'text-[#C9A25B]' : 'text-gray-400'} />
                        <span className="font-semibold text-[#303F56]">
                          Наличными {formData.deliveryMethod === 'delivery' ? 'курьеру' : 'в магазине'}
                        </span>
                      </div>
                      {formData.paymentMethod === 'cash' && (
                        <div className="w-6 h-6 bg-[#C9A25B] rounded-full flex items-center justify-center">
                          <IconCheck className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* Комментарий */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-[#303F56] mb-4">
                  Комментарий к заказу
                </h2>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A25B] transition-colors text-gray-900 placeholder:text-gray-400 resize-none"
                  placeholder="Укажите дополнительные пожелания к заказу..."
                />
              </div>
            </div>

            {/* Правая колонка - итоги */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
                <h2 className="text-xl font-bold text-[#303F56] mb-6">
                  Ваш заказ
                </h2>

                {/* Товары */}
                <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                  {cart.items.map((item) => (
                    <div key={item.product.id} className="flex gap-3 pb-4 border-b border-gray-200">
                      {item.product.images && item.product.images.length > 0 ? (
                        <img
                          src={`${API_URL}${item.product.images[0]}`}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded-lg" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-[#303F56] truncate">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          {item.quantity} шт. × {item.product.priceKzt.toLocaleString()} ₸
                        </p>
                        <p className="text-sm font-bold text-[#C9A25B] mt-1">
                          {(item.product.priceKzt * item.quantity).toLocaleString()} ₸
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Итоги */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Товары ({cart.getCartCount()} шт.)</span>
                    <span className="font-semibold">{cart.getCartTotal().toLocaleString()} ₸</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Доставка</span>
                    <span className="font-semibold">
                      {deliveryCost === 0 ? 'Бесплатно' : `${deliveryCost.toLocaleString()} ₸`}
                    </span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 flex justify-between text-lg">
                    <span className="font-bold text-[#303F56]">Итого:</span>
                    <span className="font-bold text-[#C9A25B]">{totalWithDelivery.toLocaleString()} ₸</span>
                  </div>
                </div>

                {/* Кнопка оформления */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C9A25B] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#b58f4d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Оформление...' : 'Оформить заказ'}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с условиями политики конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}