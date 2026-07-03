/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local logos are already small JPEGs; allow default optimization.
    formats: ["image/webp"],
  },
};

export default nextConfig;
