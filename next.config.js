/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['lh3.googleusercontent.com'],
        formats: ['image/avif', 'image/webp'],
    },
    env: {
        API_URL: process.env.NEXT_URL,
    },
    publicRuntimeConfig: {
        API_URL: process.env.NEXT_URL,
    },
}
