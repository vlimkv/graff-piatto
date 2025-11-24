// app/graff-gastronomy/page.tsx
"use client";

import React, { useState, useEffect } from 'react';

const API_URL = 'https://infinitely-traversable-carin.ngrok-free.dev';

export default function GraffGastronomyPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/events`);
        if (res.ok) {
          const data = await res.json();
          // Берем только первые 3 события
          setEvents(data.slice(0, 3));
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#C9A25B] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#303F56]">Загрузка событий...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden bg-white">
      
      {/* DESKTOP VERSION */}
      <div className="hidden lg:block w-full">
        
        {/* HERO SECTION */}
        <section className="relative h-[478px] w-full flex justify-center bg-white overflow-hidden">
          <div 
            className="absolute left-0 top-0 w-full h-[478px]"
            style={{
              background: `linear-gradient(90deg, #21293C 34.61%, rgba(0, 0, 0, 0) 100%), url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=2000&q=90)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          <div className="relative w-[1440px] h-full shrink-0">
            <h1 
              className="absolute left-[268px] top-[114px] w-[761px] h-[67px] flex items-center text-white"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                fontSize: '50px',
                lineHeight: '67px'
              }}
            >
              Graff Gastronomy
            </h1>

            <p 
              className="absolute left-[268px] top-[205px] w-[416px] h-[72px] flex items-center text-white/90"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '28px'
              }}
            >
              Атмосферные мастер-классы, ужины и частные вечера в гастрономической студии Graff Piatto
            </p>

            <div className="absolute left-[268px] top-[312px] w-[310px] h-[56px]">
              <button className="w-full h-full bg-[#C9A25B] flex justify-center items-center transition-all duration-200 hover:bg-[#b58f4d] hover:shadow-lg active:scale-[0.98]">
                <span 
                  className="text-white"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0.15px'
                  }}
                >
                  Перейти к афише и брони
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS SECTION */}
        <section className="relative h-[572px] w-full flex justify-center bg-[#F2EFE0]">
          <div className="relative w-[1440px] h-full shrink-0">
            <h2 
              className="absolute left-[268px] top-[80px] w-[327px] h-[43px] flex items-center text-[#303F56]"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 500,
                fontSize: '32px',
                lineHeight: '43px'
              }}
            >
              Ближайшие события
            </h2>

            {events.length > 0 ? (
              events.map((event: any, index) => (
                <article 
                  key={event.id}
                  className="absolute top-[158px] w-[280px] h-[350px] bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                  style={{ left: `${268 + index * 305}px` }}
                >
                  <div className="absolute left-0 top-0 w-[280px] h-[234px] overflow-hidden">
                    {event.imageUrl ? (
                      <img 
                        src={`${API_URL}${event.imageUrl}`}
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <h3 
                    className="absolute left-[14px] top-[240px] w-[252px] flex items-center text-[#303F56]"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '19px'
                    }}
                  >
                    {event.title}
                  </h3>

                  <div 
                    className="absolute left-[14px] w-[252px] border-[#303F56]"
                    style={{
                      top: '290.5px',
                      height: '0px',
                      borderTopWidth: '0.3px'
                    }}
                  />

                  <div 
                    className="absolute left-[202px] top-[299px] w-[64px] h-[14px] flex items-center justify-end text-[#303F56]"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '14px',
                      textAlign: 'right'
                    }}
                  >
                    {Number(event.priceKzt).toLocaleString()} KZT
                  </div>

                  <div 
                    className="absolute left-[186px] top-[318px] w-[80px] h-[14px] flex items-center justify-end text-[#303F56]"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '14px',
                      textAlign: 'right'
                    }}
                  >
                    {Number(event.priceRub).toLocaleString()} RUB
                  </div>

                  <button className="absolute left-[14px] top-[300px] w-[119px] h-[36px] bg-[#C9A25B] transition-all duration-200 hover:bg-[#b58f4d] hover:shadow-md active:scale-95">
                    <span 
                      className="text-white flex items-center justify-center"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '14px'
                      }}
                    >
                      Забронировать
                    </span>
                  </button>
                </article>
              ))
            ) : (
              <div className="absolute left-[268px] top-[200px] text-[#303F56] text-lg">
                <p>События скоро появятся...</p>
              </div>
            )}
          </div>
        </section>

        {/* STUDIO RENTAL SECTION */}
        <section className="relative h-[469px] w-full flex justify-center bg-white">
          <div className="relative w-[1440px] h-full shrink-0">
            <h2 
              className="absolute left-[268px] top-[80px] w-[222px] h-[43px] flex items-center text-[#303F56]"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 500,
                fontSize: '32px',
                lineHeight: '43px'
              }}
            >
              Аренда студии
            </h2>

            <div 
              className="absolute left-[268px] top-[143px] w-[416px] h-[216px] flex items-center text-[#303F56]"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              <p>
                Гастрономическая студия Graff Piatto — место, где эстетика встречается с вкусом.
                <br /><br />
                Здесь проходят камерные вечера, съёмки, частные мастер-классы и семейные ужины.
                <br /><br />
                Пространство создано так, чтобы каждый гость чувствовал уют, вдохновение и свободу творчества.
              </p>
            </div>

            <div className="absolute left-[708px] top-[81px] w-[450px] h-[308px] overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900&q=80"
                alt="Студия Graff Piatto"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>
      </div>

      {/* MOBILE VERSION */}
      <div className="lg:hidden w-full">
        
        {/* MOBILE HERO */}
        <section className="relative h-[520px] w-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(180deg, rgba(33, 41, 60, 0.65) 0%, rgba(33, 41, 60, 0.88) 100%), url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80)'
            }}
          />
          
          <div className="relative z-10 flex h-full flex-col justify-center items-center px-6 text-center">
            <h1 
              className="text-white drop-shadow-lg"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '50px'
              }}
            >
              Graff<br/>Gastronomy
            </h1>
            
            <p 
            className="mt-6 max-w-[320px] text-white/90 drop-shadow-md"
            style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '22px'
            }}
            >
            Атмосферные мастер-классы,<br />
            ужины и&nbsp;частные вечера<br />
            в&nbsp;гастрономической студии Graff Piatto<br />
            </p>
            
            <button 
              className="mt-10 w-full max-w-[300px] h-[56px] bg-[#C9A25B] text-white shadow-xl active:scale-95 transition-transform duration-200"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 500,
                fontSize: '15px',
                letterSpacing: '0.5px'
              }}
            >
              Перейти к афише и брони
            </button>
          </div>
        </section>

        {/* MOBILE UPCOMING EVENTS */}
        <section className="bg-[#F2EFE0] px-5 py-14">
          <h2 
            className="mb-10 text-center text-[#303F56]"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 500,
              fontSize: '30px',
              lineHeight: '38px'
            }}
          >
            Ближайшие события
          </h2>
          
          {events.length > 0 ? (
            <div className="space-y-7">
              {events.map((event: any) => (
                <article 
                  key={event.id} 
                  className="overflow-hidden bg-white shadow-xl rounded-sm active:scale-[0.98] transition-transform duration-200"
                >
                  <div className="relative w-full aspect-square overflow-hidden">
                    {event.imageUrl ? (
                      <img 
                        src={`${API_URL}${event.imageUrl}`}
                        alt={event.title} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <svg className="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <h3 
                      className="min-h-[48px] text-[#303F56]"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '24px'
                      }}
                    >
                      {event.title}
                    </h3>
                    
                    <div className="mt-4 h-[1px] w-full bg-[#303F56]/25" />
                    
                    <div className="mt-5 flex items-center justify-between">
                      <button 
                        className="h-[42px] w-[135px] bg-[#C9A25B] text-white shadow-md active:bg-[#b58f4d] transition-colors"
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontWeight: 400,
                          fontSize: '13px'
                        }}
                      >
                        Забронировать
                      </button>
                      
                      <div className="flex flex-col items-end text-right">
                        <span 
                          className="text-[#303F56]"
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 600,
                            fontSize: '15px',
                            lineHeight: '18px'
                          }}
                        >
                          {Number(event.priceKzt).toLocaleString()} KZT
                        </span>
                        <span 
                          className="mt-1 text-[#303F56]/70"
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 400,
                            fontSize: '13px',
                            lineHeight: '16px'
                          }}
                        >
                          {Number(event.priceRub).toLocaleString()} RUB
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center text-[#303F56] py-10">
              <p className="text-lg">События скоро появятся...</p>
            </div>
          )}
        </section>

        {/* MOBILE STUDIO RENTAL */}
        <section className="bg-white px-5 py-14 pb-20">
          <h2 
            className="mb-10 text-center text-[#303F56]"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 500,
              fontSize: '30px',
              lineHeight: '38px'
            }}
          >
            Аренда студии
          </h2>
          
          <div className="mb-8 overflow-hidden shadow-2xl rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
              alt="Студия Graff Piatto"
              className="h-[270px] w-full object-cover"
            />
          </div>
          
          <div 
            className="space-y-5 text-[#303F56]"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '24px'
            }}
          >
            <p>
              Гастрономическая студия Graff Piatto — место, где эстетика встречается с вкусом.
            </p>
            <p>
              Здесь проходят камерные вечера, съёмки, частные мастер-классы и семейные ужины.
            </p>
            <p>
              Пространство создано так, чтобы каждый гость чувствовал уют, вдохновение и свободу творчества.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}