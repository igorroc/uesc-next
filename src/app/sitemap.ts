import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://uesc.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date()

	return [
		{
			url: `${baseUrl}/`,
			lastModified: now,
		},
		{
			url: `${baseUrl}/calculadora`,
			lastModified: now,
		},
		{
			url: `${baseUrl}/calculadora/info`,
			lastModified: now,
		},
		{
			url: `${baseUrl}/emails`,
			lastModified: now,
		},
		{
			url: `${baseUrl}/emails/add`,
			lastModified: now,
		},
		{
			url: `${baseUrl}/privacidade`,
			lastModified: now,
		},
	]
}
