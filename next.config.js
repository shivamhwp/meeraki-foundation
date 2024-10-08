/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    // Used to guard against accidentally leaking SANITY_API_READ_TOKEN to the browser
    taint: true,
  },
  images: {
    domains: ['cdn.sanity.io', 'res.cloudinary.com', 'utfs.io'],
  },
  logging: {
    fetches: { fullUrl: false },
  },
};
