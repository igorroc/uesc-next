"use client"

import React from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import styles from "./share.module.css"

type CompactGrade = [number | null, number]

function fromBase64Url(value: string) {
	const base64 = value.replace(/-/g, "+").replace(/_/g, "/")
	const pad = base64.length % 4
	const normalized = pad ? `${base64}${"=".repeat(4 - pad)}` : base64

	return decodeURIComponent(escape(atob(normalized)))
}

function calculateMessage(grades: CompactGrade[]) {
	const totalWeight = grades.reduce((acc, [, weight]) => acc + weight, 0)
	const weightedSum = grades.reduce((acc, [value, weight]) => acc + (value ?? 0) * weight, 0)

	if (!totalWeight) {
		return { media: 0, message: "Sem pesos válidos para calcular a média." }
	}

	const media = weightedSum / totalWeight

	if (media >= 9) {
		return { media, message: "Gênio detectado! Alguém entrega um troféu agora." }
	}

	if (media >= 7) {
		return { media, message: "Aprovação em modo turbo. Dá até para respirar." }
	}

	return {
		media,
		message: "Situação dramática, mas ainda dá para virar com estratégia.",
	}
}

export default function CompartilharNotasPage() {
	const searchParams = useSearchParams()
	const [grades, setGrades] = React.useState<CompactGrade[]>([])
	const [hasError, setHasError] = React.useState(false)

	React.useEffect(() => {
		const encoded = searchParams.get("g")

		if (!encoded) {
			setHasError(true)
			setGrades([])
			return
		}

		try {
			const parsed = JSON.parse(fromBase64Url(encoded)) as CompactGrade[]
			const sanitized = parsed.filter(
				(item) =>
					Array.isArray(item) &&
					item.length === 2 &&
					(item[0] === null || typeof item[0] === "number") &&
					typeof item[1] === "number" &&
					Number.isFinite(item[1]) &&
					item[1] > 0
			)

			setGrades(sanitized)
			setHasError(sanitized.length === 0)
		} catch {
			setHasError(true)
			setGrades([])
		}
	}, [searchParams])

	const { media, message } = React.useMemo(() => calculateMessage(grades), [grades])

	return (
		<main className={styles.page}>
			<div className={styles.backgroundGlow} aria-hidden="true" />
			<section className={styles.card}>
				<p className={styles.badge}>Modo compartilhado</p>
				<h1>Boletim de guerra acadêmica</h1>
				<p className={styles.subtitle}>
					Um colega compartilhou este panorama de notas e pesos com você.
				</p>

				{hasError ? (
					<p className={styles.warning}>
						Não foi possível ler o link. Peça para gerar novamente na calculadora.
					</p>
				) : (
					<>
						<div className={styles.mediaBox}>
							<span>Média parcial</span>
							<strong>{media.toFixed(2)}</strong>
							<p>{message}</p>
						</div>

						<ul className={styles.gradeList}>
							{grades.map(([value, weight], index) => (
								<li key={`${weight}-${index}`}>
									<span>Avaliação {index + 1}</span>
									<span>Nota: {value ?? "?"}</span>
									<span>Peso: {weight}</span>
								</li>
							))}
						</ul>
					</>
				)}

				<Link href="/calculadora" className={styles.backButton}>
					Abrir minha calculadora
				</Link>
			</section>
		</main>
	)
}
