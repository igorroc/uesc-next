"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"

const BLOCKED_ROUTES = ["/emails/admin-add"]

export default function GoogleAdsense() {
	const pathname = usePathname()

	if (BLOCKED_ROUTES.some((route) => pathname.startsWith(route))) {
		return null
	}

	return (
		<Script
			id="google-adsense"
			async
			src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8138197040090509"
			crossOrigin="anonymous"
			strategy="afterInteractive"
		/>
	)
}
