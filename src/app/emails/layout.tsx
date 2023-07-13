import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Email dos Professores",
	description:
		"Encontre seu professor em uma busca! O nosso banco de dados de e-mails de professores da UESC é a solução perfeita. Navegue facilmente pela plataforma e encontre o professor ideal para suas necessidades acadêmicas.",
	authors: [
		{
			name: "Igor Rocha",
			url: "https://ilrocha.com",
		},
	],
	keywords: [
		"uesc",
		"universidade estadual de santa cruz",
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
				url: "/banner_emails.png",
			},
		],
	},
}

export default function EmailLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
