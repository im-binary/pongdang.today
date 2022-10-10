/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: () => {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "pongdang.world",
          },
        ],
        destination: "https://pongdang.world/:path*",
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "blog.pongdang.today",
          },
        ],
        destination: "https://blog.pongdang.today/:path*",
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "diary.pongdang.today",
          },
        ],
        destination: "https://diary.pongdang.today/:path*",
      },
      {
        source: "/blog",
        destination: "https://pongdang.world/",
      },
      {
        source: "/blog/:path*",
        destination: "https://pongdang.world/:path*",
      },
      {
        source: "/vanilla-blog",
        destination: "https://blog.pongdang.today/",
      },
      {
        source: "/vanilla-blog/:path*",
        destination: "https://blog.pongdang.today/:path*",
      },
      {
        source: "/diary",
        destination: "https://diary.pongdang.today/diary",
      },
      {
        source: "/diary/:path*",
        destination: "https://diary.pongdang.today/diary/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
