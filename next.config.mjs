/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bunnypants.co.za',
        port: '',
        pathname: '/**', // Permite cualquier ruta de imagen en este dominio
      },
      {
        protocol: 'https',
        hostname: 'withjoy.com',
        port: '',
        pathname: '/**', // Permite cualquier ruta de imagen en este dominio
      },
      {
        protocol: "https",
        hostname: "worldofwedding.com",
      },
    ],
  },
};

export default nextConfig;
