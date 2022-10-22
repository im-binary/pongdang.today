/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  rewrites: () => {
    return [
      {
        source: "/diary",
        destination: "https://diary.pongdang.today/diary",
      },
      {
        source: "/diary/:path*",
        destination: "https://diary.pongdang.today/diary/:path*",
      },
      {
        source: "/blog",
        destination: "https://pongdang-world.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://pongdang-world.vercel.app/blog/:path*",
      },
      {
        source: "/vanilla-blog",
        destination: "https://pongdang-github-io.vercel.app/vanilla-blog",
      },
      {
        source: "/vanilla-blog/:path*",
        destination: "https://pongdang-github-io.vercel.app/vanilla-blog/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
