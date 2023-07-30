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
            value: "public, s-maxage=1209600, stale-if-error=5",
          },
          { key: "Accept-CH", value: "UA, Platform" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
