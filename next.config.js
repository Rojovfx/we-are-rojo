/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/advertising',
                destination: '/shortform',
                permanent: true,
            },
            {
                source: '/advertising/:path*',
                destination: '/shortform/:path*',
                permanent: true,
            },
        ]
    },
};

module.exports = nextConfig;
