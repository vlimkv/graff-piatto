"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

// --- MOCK DATA ---
type Product = {
  id: number;
  title: string;
  brand: string;
  collection: string;
  category: string;
  priceKzt: number;
  priceRub: number;
  image: string;
};

const allProducts: Product[] = [
  { id: 1, title: "Мелкая тарелка «Blue Garden»", brand: "Lenox", collection: "Blue Garden", category: "Обеденные тарелки", priceKzt: 450000, priceRub: 69140, image: "/images/card-blue-garden.png" },
  { id: 2, title: "Обеденная тарелка «Morning Light»", brand: "Villeroy & Boch", collection: "Morning Light", category: "Обеденные тарелки", priceKzt: 390000, priceRub: 59900, image: "/images/card-ivory-line.png" },
  { id: 3, title: "Десертная тарелка «Terra»", brand: "Gien", collection: "Terra", category: "Десертные тарелки", priceKzt: 320000, priceRub: 49100, image: "/images/card-blue-garden.png" },
  { id: 4, title: "Суповая тарелка «Blue Garden»", brand: "Lenox", collection: "Blue Garden", category: "Суповые тарелки", priceKzt: 470000, priceRub: 72200, image: "/images/card-ivory-line.png" },
  { id: 5, title: "Чайная пара «Morning Light»", brand: "Villeroy & Boch", collection: "Morning Light", category: "Чайные пары", priceKzt: 510000, priceRub: 78300, image: "/images/card-blue-garden.png" },
  { id: 6, title: "Мелкая тарелка «Terra»", brand: "Gien", collection: "Terra", category: "Обеденные тарелки", priceKzt: 430000, priceRub: 66000, image: "/images/card-ivory-line.png" },
  { id: 7, title: "Тарелка «Soft Bloom»", brand: "Wedgwood", collection: "Soft Bloom", category: "Обеденные тарелки", priceKzt: 380000, priceRub: 58400, image: "/images/card-blue-garden.png" },
  { id: 8, title: "Блюдце «Pure Line»", brand: "Villeroy & Boch", collection: "Pure Line", category: "Чайные пары", priceKzt: 290000, priceRub: 44500, image: "/images/card-ivory-line.png" },
  { id: 9, title: "Набор тарелок «Date Night»", brand: "Lenox", collection: "Date Night", category: "Обеденные тарелки", priceKzt: 820000, priceRub: 125900, image: "/images/card-blue-garden.png" },
  { id: 10, title: "Десертная тарелка «Morning Light»", brand: "Villeroy & Boch", collection: "Morning Light", category: "Десертные тарелки", priceKzt: 340000, priceRub: 52200, image: "/images/card-blue-garden.png" },
  { id: 11, title: "Суповая тарелка «Terra»", brand: "Gien", collection: "Terra", category: "Суповые тарелки", priceKzt: 460000, priceRub: 70600, image: "/images/card-ivory-line.png" },
  { id: 12, title: "Кофейная чашка «Pure Line»", brand: "Villeroy & Boch", collection: "Pure Line", category: "Кофейные чашки", priceKzt: 280000, priceRub: 43000, image: "/images/card-blue-garden.png" },
];

// --- ICONS ---
const IconSearch = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="11" cy="11" r="6" />
    <path d="M16 16l4 4" strokeLinecap="round" />
  </svg>
);

const IconChevronDown = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFilter = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M3 6h18M6 12h12M10 18h4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconClose = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCheck = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={className}>
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- UI COMPONENTS ---

// Квадратный чекбокс
const CustomCheckbox = ({ checked, onChange, label, color = "blue" }: { checked: boolean; onChange: () => void; label: string; color?: "blue" | "gray" }) => (
  <label className="group flex cursor-pointer items-center gap-3 py-2 select-none">
    <div className="relative flex items-center justify-center shrink-0">
      <input type="checkbox" className="peer sr-only" checked={checked} onChange={onChange} />
      {/* Убран rounded, полностью квадратный */}
      <div
        className={`h-5 w-5 border transition-all duration-200
        ${checked 
          ? (color === "blue" ? "bg-[#0D6FFF] border-[#0D6FFF]" : "bg-[#8E8E93] border-[#8E8E93]") 
          : "border-white/40 bg-transparent group-hover:border-white/80"}`}
      >
        <IconCheck className={`absolute inset-0 m-auto h-3.5 w-3.5 text-white opacity-0 transition-opacity duration-200 ${checked ? "opacity-100" : ""}`} />
      </div>
    </div>
    <span className={`text-[15px] font-light text-white transition-opacity ${checked ? "opacity-100 font-normal" : "opacity-80 group-hover:opacity-100"}`}>
      {label}
    </span>
  </label>
);

export default function CatalogPage() {
  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  
  // Фильтры пустые по умолчанию
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  // Handlers
  const toggleSection = (section: string) => {
    setExpandedSections((prev) => prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]);
  };

  const toggleSelection = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    setList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesCollection = selectedCollections.length === 0 || selectedCollections.includes(product.collection);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.priceKzt >= priceRange.min && product.priceKzt <= priceRange.max;
      return matchesSearch && matchesBrand && matchesCollection && matchesCategory && matchesPrice;
    });
    return filtered.sort((a, b) => sortOrder === "asc" ? a.priceKzt - b.priceKzt : b.priceKzt - a.priceKzt);
  }, [searchQuery, selectedBrands, selectedCollections, selectedCategories, priceRange, sortOrder]);

  // Data
  const brands = ["Villeroy & Boch", "Lenox", "Gien", "Wedgwood", "Portmeirion"];
  const collections = ["Morning Light", "Blue Garden", "Terra", "Soft Bloom", "Pure Line", "Date Night"];

  return (
    <div className="min-h-screen bg-white font-sans text-[#303F56]">
      
      {/* --- DESKTOP WRAPPER --- */}
      <div className="hidden xl:block">
        <div className="mx-auto w-full max-w-[1440px] px-12 pb-24 pt-25">
          
          {/* PAGE HEADER */}
          <header className="mb-10 flex items-end justify-between border-b border-gray-100 pb-6">
            <h1 className="font-display text-5xl font-medium text-[#303F56]">Каталог</h1>

            <div className="flex items-center gap-10">
              {/* Sort */}
              <div className="flex items-center gap-3 text-base">
                <span className="font-bold text-[#303F56]">Сортировка:</span>
                <button 
                  onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")} 
                  className="flex items-center gap-1 font-light text-gray-600 hover:text-[#C9A25B] transition-colors"
                >
                  <span>По цене ({sortOrder === "asc" ? "возрастание" : "убывание"})</span>
                  <IconChevronDown className={`h-4 w-4 transition-transform ${sortOrder === "desc" ? "rotate-180" : ""}`} />
                </button>
              </div>

              {/* Search - Квадратный стиль */}
              <div className="relative group shadow-sm">
                <input
                  type="text"
                  placeholder="Найти товар..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-[40px] w-[300px] border border-[#303F56]/20 bg-white px-4 text-sm font-light text-[#303F56] placeholder:text-gray-400 focus:border-[#303F56] focus:outline-none transition-all"
                />
                <div className="absolute right-0 top-0 flex h-[40px] w-[40px] items-center justify-center bg-[#303F56] text-white transition-colors group-hover:bg-[#C9A25B]">
                  <IconSearch className="h-5 w-5" />
                </div>
              </div>
            </div>
          </header>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-[260px_1fr] gap-10">
            
            {/* SIDEBAR (FILTERS) - Квадратный стиль */}
            <aside className="h-fit bg-[#303F56] p-6 text-white shadow-2xl">
              <div className="mb-6 flex items-center gap-3 text-base font-bold uppercase tracking-wide">
                <IconFilter className="h-5 w-5" />
                <span>Фильтры</span>
              </div>

              {/* Brand Filter */}
              <div className="mb-8 border-t border-white/10 pt-5">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#C9A25B]">Бренд</h3>
                <div className="space-y-1">
                  {brands.map(brand => (
                    <CustomCheckbox 
                      key={brand} 
                      label={brand} 
                      checked={selectedBrands.includes(brand)} 
                      onChange={() => toggleSelection(brand, selectedBrands, setSelectedBrands)} 
                      color="blue"
                    />
                  ))}
                </div>
              </div>

              {/* Collection Filter */}
              <div className="mb-8 border-t border-white/10 pt-5">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#C9A25B]">Коллекция</h3>
                <div className="space-y-1">
                  {collections.map(col => (
                    <CustomCheckbox 
                      key={col} 
                      label={col} 
                      checked={selectedCollections.includes(col)} 
                      onChange={() => toggleSelection(col, selectedCollections, setSelectedCollections)} 
                      color="gray"
                    />
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-8 border-t border-white/10 pt-5">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#C9A25B]">Категория</h3>
                
                <div className="space-y-4">
                  {/* Section 1 */}
                  <div>
                    <button onClick={() => toggleSection("Тарелки")} className="flex w-full items-center justify-between text-[15px] hover:text-[#C9A25B] transition-colors">
                      <span>Тарелки</span>
                      <IconChevronDown className={`h-4 w-4 transition-transform duration-300 ${expandedSections.includes("Тарелки") ? "rotate-180 text-[#C9A25B]" : "text-white/50"}`} />
                    </button>
                    {expandedSections.includes("Тарелки") && (
                      <div className="mt-2 space-y-1 border-l-2 border-white/10 pl-3 ml-1">
                        {["Обеденные тарелки", "Десертные тарелки", "Суповые тарелки"].map(cat => (
                          <CustomCheckbox 
                            key={cat} 
                            label={cat} 
                            checked={selectedCategories.includes(cat)} 
                            onChange={() => toggleSelection(cat, selectedCategories, setSelectedCategories)}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Section 2 */}
                  <div>
                    <button onClick={() => toggleSection("Чашки")} className="flex w-full items-center justify-between text-[15px] hover:text-[#C9A25B] transition-colors">
                      <span>Чашки и кружки</span>
                      <IconChevronDown className={`h-4 w-4 transition-transform duration-300 ${expandedSections.includes("Чашки") ? "rotate-180 text-[#C9A25B]" : "text-white/50"}`} />
                    </button>
                    {expandedSections.includes("Чашки") && (
                      <div className="mt-2 space-y-1 border-l-2 border-white/10 pl-3 ml-1">
                          {["Чайные пары", "Кофейные чашки"].map(cat => (
                          <CustomCheckbox 
                            key={cat} 
                            label={cat} 
                            checked={selectedCategories.includes(cat)} 
                            onChange={() => toggleSelection(cat, selectedCategories, setSelectedCategories)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Price Filter */}
              <div className="border-t border-white/10 pt-5">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#C9A25B]">Цена (₸)</h3>
                
                {/* Visual Slider - Квадратный стиль */}
                <div className="relative mb-6 h-6 w-full flex items-center">
                   <div className="w-full h-[2px] bg-white/20"></div>
                   <div className="absolute left-0 h-[2px] bg-[#C9A25B] w-1/2"></div>
                   {/* Квадратный ползунок */}
                   <div className="absolute left-1/2 top-1/2 h-4 w-4 bg-white border-2 border-[#C9A25B] -ml-2 -mt-2 shadow-md cursor-pointer hover:scale-110 transition-transform"></div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative w-full">
                    <input 
                      type="number" 
                      value={priceRange.min} 
                      onChange={e => setPriceRange({...priceRange, min: Number(e.target.value)})}
                      className="w-full bg-white/10 px-2 py-2 text-sm text-white outline-none focus:bg-white/20" // Без скруглений
                    />
                  </div>
                  <span className="text-white/40">–</span>
                  <div className="relative w-full">
                    <input 
                      type="number" 
                      value={priceRange.max} 
                      onChange={e => setPriceRange({...priceRange, max: Number(e.target.value)})}
                      className="w-full bg-white/10 px-2 py-2 text-sm text-white outline-none focus:bg-white/20" // Без скруглений
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* PRODUCTS LIST */}
            <main className="grid grid-cols-3 gap-x-6 gap-y-10 content-start">
              {filteredProducts.map((product) => (
                <article key={product.id} className="group flex flex-col bg-white transition-transform duration-300 hover:-translate-y-2">
                  {/* Image Area - теперь КЛИКАБЕЛЬНАЯ ССЫЛКА */}
                  <Link href={`/product/${product.id}`} className="block relative aspect-square w-full overflow-hidden bg-[#F5F1E5]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay с Quick View УДАЛЕН полностью */}
                  </Link>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col pt-4 pb-2">
                    <div className="flex justify-between items-start mb-1">
                       <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{product.brand}</p>
                    </div>
                    
                    {/* Название - теперь ССЫЛКА */}
                    <Link href={`/product/${product.id}`}>
                        <h3 className="line-clamp-2 text-sm font-medium leading-snug text-[#303F56] min-h-[40px] transition-colors hover:text-[#C9A25B]">
                        {product.title}
                        </h3>
                    </Link>

                    <div className="mt-4 flex items-end justify-between border-t border-gray-100 pt-3">
                       <div className="flex flex-col">
                          <span className="text-lg font-bold text-[#303F56]">{product.priceKzt.toLocaleString()} ₸</span>
                          <span className="text-xs text-gray-400">{product.priceRub.toLocaleString()} ₽</span>
                       </div>
                       
                       {/* Квадратная кнопка (без ссылки, чтобы можно было добавить в корзину не уходя) */}
                       <button className="bg-[#C9A25B] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#b08b48] active:scale-95">
                         В корзину
                       </button>
                    </div>
                  </div>
                </article>
              ))}
              
              {filteredProducts.length === 0 && (
                <div className="col-span-3 flex flex-col items-center justify-center py-32 text-[#303F56]/50">
                  <IconSearch className="h-12 w-12 mb-4 opacity-20" />
                  <p className="text-xl font-medium">Товары не найдены</p>
                  <p className="text-sm">Попробуйте изменить фильтры</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* --- MOBILE LAYOUT (SQUARE & PREMIUM) --- */}
      <div className="block xl:hidden">
        <div className="px-5 pb-20 pt-10">
          
          {/* Header & Controls */}
          <div className="mb-8">
            <h1 className="font-display text-4xl font-medium text-[#303F56]">Каталог</h1>
            
            {/* Mobile Search - Квадратный */}
            <div className="mt-5 flex h-[50px] w-full items-center border border-gray-200 bg-white px-4 shadow-sm focus-within:border-[#303F56] transition-all">
              <input
                type="text"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-full w-full bg-transparent text-base text-[#303F56] placeholder:text-gray-400 focus:outline-none"
              />
              <IconSearch className="h-6 w-6 text-gray-400" />
            </div>

            {/* Mobile Buttons - Квадратные */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="flex items-center justify-center gap-2 bg-[#303F56] py-3.5 text-sm font-medium text-white shadow-md active:scale-[0.98] transition-transform"
              >
                <IconFilter className="h-5 w-5" />
                Фильтры
              </button>
              <button
                onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
                className="flex items-center justify-center gap-2 border border-gray-300 bg-white py-3.5 text-sm font-medium text-[#303F56] shadow-sm active:bg-gray-50"
              >
                {sortOrder === "asc" ? "Подороже" : "Подешевле"}
                <IconChevronDown className={`h-4 w-4 transition-transform ${sortOrder === "desc" ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>

          {/* Mobile Product Grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {filteredProducts.map((product) => (
              <article key={product.id} className="flex flex-col">
                {/* Image Link Wrapper (Mobile) */}
                <Link href={`/product/${product.id}`} className="relative aspect-square w-full overflow-hidden bg-[#F5F1E5] mb-3 block">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </Link>

                <div className="flex flex-1 flex-col">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-400">{product.brand}</p>
                  {/* Title Link Wrapper (Mobile) */}
                  <Link href={`/product/${product.id}`}>
                      <h3 className="line-clamp-2 text-[13px] font-semibold leading-tight text-[#303F56] min-h-[34px]">
                        {product.title}
                      </h3>
                  </Link>

                  <div className="mt-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-bold text-[#303F56]">{product.priceKzt.toLocaleString()} ₸</span>
                    </div>
                    <div className="text-xs text-gray-400">{product.priceRub.toLocaleString()} ₽</div>
                    
                    {/* Квадратная кнопка */}
                    <button className="mt-3 w-full bg-[#C9A25B] py-3 text-xs font-bold uppercase tracking-widest text-white active:bg-[#b08b48]">
                      В корзину
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-12 text-center">
               <p className="text-gray-500 text-lg">Ничего не найдено</p>
            </div>
          )}
        </div>

        {/* --- MOBILE FILTER SHEET (Square & Dark Blue) --- */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={() => setIsMobileFilterOpen(false)} />
            
            {/* Sheet - Прямоугольный, без скруглений */}
            <div className="relative h-[90vh] w-full overflow-hidden bg-[#303F56] text-white shadow-2xl animate-in slide-in-from-bottom duration-300 flex flex-col">
              
              {/* Sheet Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-5">
                <h2 className="text-xl font-bold tracking-wide">Фильтры</h2>
                <button onClick={() => setIsMobileFilterOpen(false)} className="bg-white/10 p-2 hover:bg-white/20">
                  <IconClose className="h-6 w-6" />
                </button>
              </div>

              {/* Sheet Body (Scrollable) */}
              <div className="flex-1 overflow-y-auto p-6 pb-24 space-y-8">
                  {/* Brands */}
                  <div>
                    <h3 className="mb-4 text-base font-bold uppercase text-[#C9A25B]">Бренд</h3>
                    <div className="space-y-3 pl-1">
                      {brands.map(brand => (
                        <CustomCheckbox key={brand} label={brand} checked={selectedBrands.includes(brand)} onChange={() => toggleSelection(brand, selectedBrands, setSelectedBrands)} />
                      ))}
                    </div>
                  </div>

                  {/* Collections */}
                  <div>
                    <h3 className="mb-4 text-base font-bold uppercase text-[#C9A25B]">Коллекция</h3>
                    <div className="space-y-3 pl-1">
                      {collections.map(col => (
                        <CustomCheckbox key={col} label={col} checked={selectedCollections.includes(col)} onChange={() => toggleSelection(col, selectedCollections, setSelectedCollections)} color="gray" />
                      ))}
                    </div>
                  </div>
              </div>

              {/* Sheet Footer (Fixed) */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#303F56] p-6 pb-8">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="h-[56px] w-full bg-[#C9A25B] text-lg font-bold text-white shadow-lg active:scale-[0.98] transition-transform"
                >
                  Показать {filteredProducts.length} товаров
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}