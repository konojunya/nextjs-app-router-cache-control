/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: async () => {
    return [
      // s-maxage=60 * 60 * 24 * 7 * 2
      {
        source: "/(.*)",
        headers: [
          {
            key: "Surrogate-Control",
            value: "public, s-maxage=1, stale-if-error=5",
          },
          {
            key: "X-Surrogate-Control-From-Next",
            value: "public, s-maxage=1, stale-if-error=5",
          },

          // not support
          // https://nextjs.org/docs/app/api-reference/next-config-js/headers#cache-control
          { key: "Cache-Control", value: "public, s-maxage=2" },
          {
            key: "X-Cache-Control-From-Vercel-JSON",
            value: "public, s-maxage=2",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
