/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    swcMinify: true
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, webpack: wp }
  ) => {
    // Importe o webpack aqui
    const webpack = require('webpack');

    // Adicione a configuração do ProvidePlugin
    config.plugins.push(
      new wp.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    );

    // Retorna a configuração modificada
    return config;
  },
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error']
    }
  }
};
