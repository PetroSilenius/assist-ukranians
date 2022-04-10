/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["fi", "en", "ru", "uk"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
