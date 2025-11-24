// app/catalog/page.tsx
"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../contexts/cart-context";

const API_URL = 'https://infinitely-traversable-carin.ngrok-free.dev/';

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

const CustomCheckbox = ({ checked, onChange, label, color = "blue" }: { checked: boolean; onChange: () => void; label: string; color?: "blue" | "gray" }) => (
  <label className="group flex cursor-pointer items-center gap-3 py-2 select-none">
    <div className="relative flex items-center justify-center shrink-0">
      <input type="checkbox" className="peer sr-only" checked={checked} onChange={onChange} />
      <div className={`h-5 w-5 border transition-all duration-200 ${checked ? (color === "blue" ? "bg-[#0D6FFF] border-[#0D6FFF]" : "bg-[#8E8E93] border-[#8E8E93]") : "border-white/40 bg-transparent group-hover:border-white/80"}`}>
        <IconCheck className={`absolute inset-0 m-auto h-3.5 w-3.5 text-white opacity-0 transition-opacity duration-200 ${checked ? "opacity-100" : ""}`} />
      </div>
    </div>
    <span className={`text-[15px] font-light text-white transition-opacity ${checked ? "opacity-100 font-normal" : "opacity-80 group-hover:opacity-100"}`}>{label}</span>
  </label>
);

export default function CatalogPage() {
  const cart = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 });
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/products`);
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
          
          if (data.length > 0) {
            const max = Math.max(...data.map((p: any) => Number(p.priceKzt)));
            setMaxPrice(max);
            setPriceRange({ min: 0, max });
          }
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const brands = useMemo(() => [...new Set(products.map((p: any) => p.brand))].sort(), [products]);
  const collections = useMemo(() => [...new Set(products.map((p: any) => p.collection || 'Без коллекции').filter(Boolean))].sort(), [products]);
  const categories = useMemo(() => [...new Set(products.map((p: any) => p.category))].sort(), [products]);

  const toggleSelection = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    setList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product: any) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesCollection = selectedCollections.length === 0 || selectedCollections.includes(product.collection || 'Без коллекции');
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.priceKzt >= priceRange.min && product.priceKzt <= priceRange.max;
      return matchesSearch && matchesBrand && matchesCollection && matchesCategory && matchesPrice;
    });
    return filtered.sort((a: any, b: any) => sortOrder === "asc" ? a.priceKzt - b.priceKzt : b.priceKzt - a.priceKzt);
  }, [products, searchQuery, selectedBrands, selectedCollections, selectedCategories, priceRange, sortOrder]);

  const handleAddToCart = (product: any) => {
    cart.addToCart({
      id: product.id,
      name: product.title,
      brand: product.brand,
      category: product.category,
      priceKzt: product.priceKzt,
      priceRub: product.priceRub,
      images: product.images || (product.imageUrl ? [product.imageUrl] : []),
      inStock: true
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#C9A25B] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#303F56]">Загрузка каталога...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-[#303F56]">
      
      {/* DESKTOP */}
      <div className="hidden xl:block">
        <div className="mx-auto w-full max-w-[1440px] px-12 pb-24 pt-25">
          
          <header className="mb-10 flex items-end justify-between border-b border-gray-100 pb-6">
            <h1 className="font-display text-5xl font-medium text-[#303F56]">Каталог</h1>

            <div className="flex items-center gap-10">
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

          <div className="grid grid-cols-[260px_1fr] gap-10">
            
            {/* SIDEBAR */}
            <aside className="h-fit bg-[#303F56] p-6 text-white shadow-2xl">
              <div className="mb-6 flex items-center gap-3 text-base font-bold uppercase tracking-wide">
                <IconFilter className="h-5 w-5" />
                <span>Фильтры</span>
              </div>

              {brands.length > 0 && (
                <div className="mb-8 border-t border-white/10 pt-5">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#C9A25B]">Бренд</h3>
                  <div className="space-y-1">
                    {brands.map((brand: string) => (
                      <CustomCheckbox key={brand} label={brand} checked={selectedBrands.includes(brand)} onChange={() => toggleSelection(brand, selectedBrands, setSelectedBrands)} color="blue" />
                    ))}
                  </div>
                </div>
              )}

              {collections.length > 0 && (
                <div className="mb-8 border-t border-white/10 pt-5">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#C9A25B]">Коллекция</h3>
                  <div className="space-y-1">
                    {collections.map((col: string) => (
                      <CustomCheckbox key={col} label={col} checked={selectedCollections.includes(col)} onChange={() => toggleSelection(col, selectedCollections, setSelectedCollections)} color="gray" />
                    ))}
                  </div>
                </div>
              )}

              {categories.length > 0 && (
                <div className="mb-8 border-t border-white/10 pt-5">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#C9A25B]">Категория</h3>
                  <div className="space-y-1">
                    {categories.map((cat: string) => (
                      <CustomCheckbox key={cat} label={cat} checked={selectedCategories.includes(cat)} onChange={() => toggleSelection(cat, selectedCategories, setSelectedCategories)} />
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-white/10 pt-5">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#C9A25B]">Цена (₸)</h3>
                
                <div className="mb-4">
                  <input 
                    type="range"
                    min="0"
                    max={maxPrice}
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#C9A25B] [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input 
                    type="number" 
                    value={priceRange.min} 
                    onChange={e => setPriceRange({...priceRange, min: Number(e.target.value)})}
                    className="w-full bg-white/10 px-2 py-2 text-sm text-white outline-none focus:bg-white/20"
                    placeholder="Мин"
                  />
                  <span className="text-white/40">—</span>
                  <input 
                    type="number" 
                    value={priceRange.max} 
                    onChange={e => setPriceRange({...priceRange, max: Number(e.target.value)})}
                    className="w-full bg-white/10 px-2 py-2 text-sm text-white outline-none focus:bg-white/20"
                    placeholder="Макс"
                  />
                </div>
              </div>
            </aside>

            {/* PRODUCTS LIST */}
            <main className="grid grid-cols-3 gap-x-6 gap-y-10 content-start">
              {filteredProducts.map((product: any) => (
                <article key={product.id} className="group flex flex-col bg-white transition-transform duration-300 hover:-translate-y-2">
                  <Link href={`/product/${product.id}`} className="block relative aspect-square w-full overflow-hidden bg-[#F5F1E5]">
                    {product.imageUrl ? (
                      <img
                        src={`${API_URL}${product.imageUrl}`}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </Link>

                  <div className="flex flex-1 flex-col pt-4 pb-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{product.brand}</p>
                    
                    <Link href={`/product/${product.id}`}>
                        <h3 className="line-clamp-2 text-sm font-medium leading-snug text-[#303F56] min-h-[40px] transition-colors hover:text-[#C9A25B] mt-1">
                        {product.title}
                        </h3>
                    </Link>

                    <div className="mt-4 flex items-end justify-between border-t border-gray-100 pt-3">
                       <div className="flex flex-col">
                          <span className="text-lg font-bold text-[#303F56]">{Number(product.priceKzt).toLocaleString()} ₸</span>
                          <span className="text-xs text-gray-400">{Number(product.priceRub).toLocaleString()} ₽</span>
                       </div>
                       
                       <button 
                         onClick={() => handleAddToCart(product)}
                         className="bg-[#C9A25B] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#b08b48] active:scale-95"
                       >
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

      {/* MOBILE */}
      <div className="block xl:hidden">
        <div className="px-5 pb-20 pt-10">
          
          <div className="mb-8">
            <h1 className="font-display text-4xl font-medium text-[#303F56]">Каталог</h1>
            
            <div className="mt-5 flex h-[50px] w-full items-center border border-gray-200 bg-white px-4 shadow-sm focus-within:border-[#303F56] transition-all">
              <input type="text" placeholder="Поиск..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="h-full w-full bg-transparent text-base text-[#303F56] placeholder:text-gray-400 focus:outline-none" />
              <IconSearch className="h-6 w-6 text-gray-400" />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <button onClick={() => setIsMobileFilterOpen(true)} className="flex items-center justify-center gap-2 bg-[#303F56] py-3.5 text-sm font-medium text-white shadow-md active:scale-[0.98] transition-transform">
                <IconFilter className="h-5 w-5" />
                Фильтры
              </button>
              <button onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")} className="flex items-center justify-center gap-2 border border-gray-300 bg-white py-3.5 text-sm font-medium text-[#303F56] shadow-sm active:bg-gray-50">
                {sortOrder === "asc" ? "Подороже" : "Подешевле"}
                <IconChevronDown className={`h-4 w-4 transition-transform ${sortOrder === "desc" ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {filteredProducts.map((product: any) => (
              <article key={product.id} className="flex flex-col">
                <Link href={`/product/${product.id}`} className="relative aspect-square w-full overflow-hidden bg-[#F5F1E5] mb-3 block">
                  {product.imageUrl ? (
                    <img src={`${API_URL}${product.imageUrl}`} alt={product.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </Link>

                <div className="flex flex-1 flex-col">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-400">{product.brand}</p>
                  <Link href={`/product/${product.id}`}>
                      <h3 className="line-clamp-2 text-[13px] font-semibold leading-tight text-[#303F56] min-h-[34px]">{product.title}</h3>
                  </Link>

                  <div className="mt-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-bold text-[#303F56]">{Number(product.priceKzt).toLocaleString()} ₸</span>
                    </div>
                    <div className="text-xs text-gray-400">{Number(product.priceRub).toLocaleString()} ₽</div>
                    
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="mt-3 w-full bg-[#C9A25B] py-3 text-xs font-bold uppercase tracking-widest text-white active:bg-[#b08b48]"
                    >
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

        {/* MOBILE FILTER SHEET */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={() => setIsMobileFilterOpen(false)} />
            
            <div className="relative h-[90vh] w-full overflow-hidden bg-[#303F56] text-white shadow-2xl animate-in slide-in-from-bottom duration-300 flex flex-col">
              
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-5">
                <h2 className="text-xl font-bold tracking-wide">Фильтры</h2>
                <button onClick={() => setIsMobileFilterOpen(false)} className="bg-white/10 p-2 hover:bg-white/20">
                  <IconClose className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 pb-24 space-y-8">
                  {brands.length > 0 && (
                    <div>
                      <h3 className="mb-4 text-base font-bold uppercase text-[#C9A25B]">Бренд</h3>
                      <div className="space-y-3 pl-1">
                        {brands.map((brand: string) => (
                          <CustomCheckbox key={brand} label={brand} checked={selectedBrands.includes(brand)} onChange={() => toggleSelection(brand, selectedBrands, setSelectedBrands)} />
                        ))}
                      </div>
                    </div>
                  )}

                  {collections.length > 0 && (
                    <div>
                      <h3 className="mb-4 text-base font-bold uppercase text-[#C9A25B]">Коллекция</h3>
                      <div className="space-y-3 pl-1">
                        {collections.map((col: string) => (
                          <CustomCheckbox key={col} label={col} checked={selectedCollections.includes(col)} onChange={() => toggleSelection(col, selectedCollections, setSelectedCollections)} color="gray" />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {categories.length > 0 && (
                    <div>
                      <h3 className="mb-4 text-base font-bold uppercase text-[#C9A25B]">Категория</h3>
                      <div className="space-y-3 pl-1">
                        {categories.map((cat: string) => (
                          <CustomCheckbox key={cat} label={cat} checked={selectedCategories.includes(cat)} onChange={() => toggleSelection(cat, selectedCategories, setSelectedCategories)} />
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="mb-4 text-base font-bold uppercase text-[#C9A25B]">Цена (₸)</h3>
                    
                    <div className="mb-4">
                      <input 
                        type="range"
                        min="0"
                        max={maxPrice}
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                        className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#C9A25B] [&::-webkit-slider-thumb]:cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <input 
                        type="number" 
                        value={priceRange.min} 
                        onChange={e => setPriceRange({...priceRange, min: Number(e.target.value)})}
                        className="w-full bg-white/10 px-2 py-2 text-sm text-white outline-none focus:bg-white/20"
                        placeholder="Мин"
                      />
                      <span className="text-white/40">—</span>
                      <input 
                        type="number" 
                        value={priceRange.max} 
                        onChange={e => setPriceRange({...priceRange, max: Number(e.target.value)})}
                        className="w-full bg-white/10 px-2 py-2 text-sm text-white outline-none focus:bg-white/20"
                        placeholder="Макс"
                      />
                    </div>
                  </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#303F56] p-6 pb-8">
                <button onClick={() => setIsMobileFilterOpen(false)} className="h-[56px] w-full bg-[#C9A25B] text-lg font-bold text-white shadow-lg active:scale-[0.98] transition-transform">
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