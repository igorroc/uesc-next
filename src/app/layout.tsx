import Footer from "@/components/Footer"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Ferramentas - UESC",
	description:
		"Tenha tudo o que você precisa para se destacar na UESC! Nosso site oferece diversas ferramentas para alunos, incluindo calculadora de notas, banco de e-mails e muito mais. Simplifique sua rotina universitária e alcance o sucesso com facilidade!",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<main>
					<div className="scrollableContent">{children}</div>
				</main>
				<Footer />
			</body>
		</html>
	)
}
