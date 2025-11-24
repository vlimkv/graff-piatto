// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Разрешаем localhost для development
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/uploads/**',
      },
    ],
    // ВАЖНО: Отключаем блокировку приватных IP для localhost
    dangerouslyAllowSVG: true,
    unoptimized: process.env.NODE_ENV === 'development', // Только для dev
  },
};

export default nextConfig;