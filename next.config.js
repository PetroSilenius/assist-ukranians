/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["fi", "en", "ru"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
