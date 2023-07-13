import Footer from "@/components/Footer"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import PWA from "@/components/PWA"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: {
		default: "Ferramentas - UESC",
		template: "%s - Ferramentas - UESC",
	},
	description:
		"Tenha tudo o que você precisa para se destacar na UESC! Nosso site oferece diversas ferramentas para alunos, incluindo calculadora de notas, banco de e-mails e muito mais. Simplifique sua rotina universitária e alcance o sucesso com facilidade!",
	authors: [
		{
			name: "Igor Rocha",
			url: "https://ilrocha.com",
		},
	],
	keywords: [
		"uesc",
		"universidade estadual de santa cruz",
		"ferramentas",
		"calculadora de notas",
		"calculadora de médias",
		"calculadora de média",
		"calculadora de nota",
		"prova final",
		"média final",
		"calculadora uesc",
		"banco de e-mails",
		"banco de e-mail",
		"banco de emails",
		"banco de email",
		"banco de e-mails uesc",
		"banco de e-mail uesc",
		"banco de emails uesc",
		"banco de email uesc",
		"email uesc",
		"e-mail uesc",
		"emails uesc",
		"email professor uesc",
		"e-mail professor uesc",
		"emails professor uesc",
		"email professor",
		"e-mail professor",
		"emails professor",
	],

	twitter: {
		card: "summary_large_image",
		images: [
			{
				url: "/banner.png",
			},
		],
	},
	manifest: "/manifest.json",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<PWA />
				<main id="main">
					<div className="scrollableContent">{children}</div>
				</main>
				<Footer />
			</body>
		</html>
	)
}
