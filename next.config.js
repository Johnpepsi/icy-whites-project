/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This site never shows an image wider than the lightbox (max ~1400px
    // CSS width). The Next.js defaults go up to 3840 (4K desktop), which
    // for a small gallery like this just means the optimizer occasionally
    // gets asked to generate a huge, slow transform for no visual benefit.
    // Capping the buckets removes that worst case entirely.
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 200, 256, 320, 384],
  },
};

module.exports = nextConfig;
