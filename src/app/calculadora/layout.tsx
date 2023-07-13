import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Calculadora de Notas",
	description:
		"Não se preocupe mais com suas notas! Com nosso site, você pode calcular facilmente suas médias e saber exatamente quanto precisa na prova final. Com nossa ferramenta de cálculo de notas, você pode se preparar melhor e alcançar o sucesso acadêmico que merece!",
	authors: [
		{
			name: "Igor Rocha",
			url: "https://ilrocha.com",
		},
	],
	keywords: [
		"uesc",
		"universidade estadual de santa cruz",
		"calculadora de notas",
		"calculadora de médias",
		"calculadora de média",
		"calculadora de nota",
		"prova final",
		"média final",
		"calculadora uesc",
	],
	twitter: {
		card: "summary_large_image",
		images: [
			{
				url: "/banner_calculadora.png",
			},
		],
	},
}

export default function CalculadoraLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
