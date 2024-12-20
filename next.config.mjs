import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "api-strapi.greentitan-engineering.com",
      },
    ],
  },

  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          // options: { svgoConfig: { plugins: [{ removeViewBox: false }] } },
        },
      ],
    });
    return config;
  },
};

export default withNextIntl(nextConfig);
