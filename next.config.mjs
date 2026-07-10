/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.magnific.com' },
      { protocol: 'https', hostname: 'media.istockphoto.com' },
      { protocol: 'https', hostname: 'png.pngtree.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },
};

export default nextConfig;
