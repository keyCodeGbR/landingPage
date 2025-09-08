/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      
  distDir: 'out',       
  images: { unoptimized: true }, 
  basePath: '/page',
};
module.exports = nextConfig;