const withPWA = require("next-pwa")({
	dest: "public",
})

/** @type {import('next').NextConfig} */
let nextConfig = {}

if (process.env.NODE_ENV === "development") {
	nextConfig = {}
} else {
	nextConfig = {
		output: "export",
		distDir: "dist",
	}
}

module.exports = withPWA({
	...nextConfig,
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === "development",
	},
})
