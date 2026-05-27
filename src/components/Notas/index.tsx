"use client"

import React from "react"
import styles from "./notas.module.css"
import { Grade } from "@/types/grade"
import Link from "next/link"
import { AiFillInfoCircle } from "react-icons/ai"
import { BiPlus, BiReset } from "react-icons/bi"
import { FaTrash } from "react-icons/fa"
import { FiShare2 } from "react-icons/fi"

function toBase64Url(value: string) {
	if (typeof window === "undefined") {
		return ""
	}

	return btoa(unescape(encodeURIComponent(value)))
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=+$/g, "")
}

export default function Notas() {
	const [grades, setGrades] = React.useState<Grade[]>([])
	const pageWrapperRef = React.useRef<HTMLDivElement>(null)
	const hasInteractedRef = React.useRef(false)
	const [newGrade, setNewGrade] = React.useState<Grade>({
		weight: 10,
	} as Grade)
	const [shareHref, setShareHref] = React.useState("/calculadora/compartilhar")
	const [message, setMessage] = React.useState<string>(`Insira suas notas para eu calcular!<br />
	Deixe <span class="${styles.mediaYellow}">vazio</span> o campo de
	<span class="${styles.info}">Nota</span> e clique no <b>+</b>
	para que eu possa te mostrar quanto você precisa.`)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		hasInteractedRef.current = true

		console.log("add")
		setGrades([...grades, newGrade])
		setNewGrade({ value: null, weight: 10 } as Grade)

		// focus on input value
		const input = document.querySelector(`#inputGradeValue`) as HTMLInputElement
		input.focus()
	}

	function handleRemoveGrade(index: number) {
		hasInteractedRef.current = true
		setGrades(grades.filter((_, i) => i !== index))
	}

	function handleReset() {
		hasInteractedRef.current = true
		setGrades([])
	}

	const accumulated = grades.reduce((acc, grade) => {
		const value = grade.value ?? 0

		return acc + value * grade.weight
	}, 0)

	const totalWeight = grades.reduce((acc, grade) => {
		return acc + grade.weight
	}, 0)

	const media = accumulated / totalWeight

	const emptyGradesCount = grades.filter((grade) => grade.value == null).length

	React.useEffect(() => {
		if (grades.length === 0) {
			setShareHref("/calculadora/compartilhar")
			return
		}

		const compactPayload = grades.map((grade) => [grade.value ?? null, grade.weight])
		const encoded = toBase64Url(JSON.stringify(compactPayload))
		setShareHref(`/calculadora/compartilhar?g=${encoded}`)
	}, [grades])

	React.useEffect(() => {
		if (hasInteractedRef.current) {
			pageWrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
		}

		if (grades.length === 0) {
			setMessage(`Insira suas notas para eu calcular!<br />
			Deixe <span class="${styles.mediaYellow}">vazio</span> o campo de
			<span class="${styles.info}">Nota</span> e clique no <b>+</b>
			para que eu possa te mostrar quanto você precisa.`)
		} else {
			if (emptyGradesCount) {
				if (media >= 7) {
					setMessage(
						`Mesmo se você tirar <u>0.0</u> nas notas coringa, você passa com <span class="${styles.mediaGreen}">${media.toFixed(2)}</span>.
						<br/>
						<span class="${styles.motivacional}">Cê é o bichão mesmo ein?</span>😎`
					)
				} else {
					let needed = (totalWeight * 7 - accumulated) / 10 / emptyGradesCount
					if (needed > 10) {
						let cMedia = (accumulated + 100) / totalWeight
						let quantoPrecisa = (5 - cMedia * 0.6) / 0.4
						let formatted = quantoPrecisa.toFixed(2)

						setMessage(
							`Se você tirar <span class="mediaRed">10.0</span> em cada nota coringa, você precisa tirar <span class="${styles.mediaRed}">${formatted}</span> na final para passar. <span class="${styles.motivacional}">Tá complicado, mas vai que dá!</span>🤗`
						)
					} else {
						let texto = "Você precisa tirar "
						let mensagemMotivacional: string
						let emojiMotivacional: string
						let formatted = needed.toFixed(2)
						if (needed < 7) {
							texto += `<span class="${styles.mediaGreen}">${formatted}</span>`
							mensagemMotivacional = "Metendo essa, você passa!"
							emojiMotivacional = "🎉"
						} else if (needed >= 9) {
							texto += `<span class="${styles.mediaRed}">${formatted}</span>`
							mensagemMotivacional = "Veja pelo lado bom: dá pra passar sem final!"
							emojiMotivacional = "🫠"
						} else {
							texto += `<span class="${styles.mediaRed}">${formatted}</span>`
							mensagemMotivacional = "Mas não se preocupe, você consegue!"
							emojiMotivacional = "🤗"
						}
						setMessage(`${texto} em cada nota coringa para passar.
						<span class="${styles.motivacional}">${mensagemMotivacional}</span>${emojiMotivacional}`)
					}
				}
			} else {
				let mediaComCor
				if (media < 7) {
					mediaComCor = `<span class="${styles.mediaRed}">${media.toFixed(2)}</span>`
					let quantoPrecisa = (5 - media * 0.6) / 0.4
					let formatted = quantoPrecisa.toFixed(2)
					let formattedComCor = `<span class="${styles.needsGrade}">${formatted}</span>`

					if (quantoPrecisa > 10) {
						setMessage(
							`Sua média é ${mediaComCor}. Nem tirando 10 na final você consegue passar na disciplina.
							<br/>
							<span class="${styles.motivacional}">Não foi dessa vez, vamos deixar pro próximo semestre</span>😓`
						)
					} else if (quantoPrecisa >= 7) {
						setMessage(
							`Sua média é ${mediaComCor}. Você precisa tirar ${formattedComCor} na final para passar na disciplina.
							<br/>
							<span class="${styles.motivacional}">Sei que tá difícil, mas deixar pro próximo semestre é pior</span> 😉`
						)
					} else if (quantoPrecisa >= 5) {
						setMessage(
							`Sua média é ${mediaComCor}. Você precisa tirar ${formattedComCor} na final para passar na disciplina.
							<br/>
							<span class="${styles.motivacional}">Não tá tão complicado assim. Vai que dá!</span> 😉`
						)
					} else {
						setMessage(
							`Sua média é ${mediaComCor}. Você precisa tirar ${formattedComCor} na final para passar na disciplina.
							<br/>
							<span class="${styles.motivacional}">Falta pouco pra você se livrar dessa matéria!</span> 😎`
						)
					}
				} else if (media > 10) {
					mediaComCor = `<span class="${styles.mediaGreen}">${media.toFixed(2)}</span>`
					setMessage(
						`Não tenho ideia de como você conseguiu. Mas sua média é ${mediaComCor}! <span class="${styles.motivacional}">Você tá mais do que aprovado! Me ensina?</span> 🥺<span class="${styles.dedoEsquerdo}">👉</span><span class="${styles.dedoDireito}">👈</span>`
					)
				} else if (media == 10) {
					mediaComCor = `<span class="${styles.mediaGreen}">${media.toFixed(2)}</span>`
					setMessage(
						`Você é o novo Einstein? Não? Por que sua média é ${mediaComCor}! <span class="${styles.motivacional}">Meteu essa?</span> 😎`
					)
				} else if (media >= 8.5) {
					mediaComCor = `<span class="${styles.mediaGreen}">${media.toFixed(2)}</span>`
					setMessage(
						`Sua média é ${mediaComCor}! <span class="${styles.motivacional}">Continue assim e logo logo o 10.0 é seu!</span> 💪`
					)
				} else if (media > 7) {
					mediaComCor = `<span class="${styles.mediaGreen}">${media.toFixed(2)}</span>`
					setMessage(
						`Sua média é ${mediaComCor}.
						<br/>
						<span class="${styles.motivacional}">Você está fazendo um ótimo trabalho!</span> 😉`
					)
				} else if (media == 7) {
					mediaComCor = `<span class="${styles.mediaGreen}">${media.toFixed(2)}</span>`
					setMessage(
						`Sua média é exatamente ${mediaComCor}.
						<br/>
						<span class="${styles.motivacional}">Foi no limite, ein?</span> 😅`
					)
				} else {
					mediaComCor = `<span class="${styles.mediaGreen}">${media.toFixed(2)}</span>`
					setMessage(
						`Sua média é ${mediaComCor}.
						<br/>
						<span class="${styles.motivacional}">Parabéns, você passou!</span> 🎉`
					)
				}
			}
		}

		// eslint-disable-next-line
	}, [grades])

	return (
		<div className={styles.pageWrapper} ref={pageWrapperRef}>
			<div className={styles.pageTitle}>
				<h1>Calculadora</h1>
				<div className={styles.headerActions}>
					{grades.length > 0 && emptyGradesCount === 0 && (
						<Link
							href={shareHref}
							className={styles.shareHeaderButton}
							aria-label="Compartilhar notas e pesos calculados"
							title="Gerar link para compartilhar suas notas e pesos com colegas"
						>
							<FiShare2 />
							<span>Compartilhar</span>
						</Link>
					)}
					<Link href="/calculadora/info">
						<AiFillInfoCircle />
						<span>Info</span>
					</Link>
				</div>
			</div>
			<div className={styles.wrapperNotas}>
				{grades.map((grade, index) => (
					<div className={styles.nota} key={index}>
					<div className={styles.info}>
						Nota: <span className={styles.inputValor}>{grade.value ?? "?"}</span>
					</div>
						<div className={styles.info}>
							Peso: <span className={styles.inputValor}>{grade.weight}</span>
						</div>
						<div
							className={[styles.icon, styles.removeGrade].join(" ")}
							onClick={() => handleRemoveGrade(index)}
						>
							<FaTrash size={24} />
						</div>
					</div>
				))}
				<form className={styles.nota} onSubmit={handleSubmit}>
					<div className={styles.info}>
						Nota:
						<input
							id="inputGradeValue"
							className={styles.inputValor}
							type="number"
							step="0.01"
							value={newGrade.value ?? ""}
							onChange={(e) =>
								setNewGrade({
									...newGrade,
									value: e.target.value === "" ? null : +e.target.value,
								})
							}
						/>
					</div>
					<div className={styles.info}>
						Peso:
						<input
							className={styles.inputValor}
							type="number"
							step="0.01"
							value={newGrade.weight}
							onChange={(e) => setNewGrade({ ...newGrade, weight: +e.target.value })}
							required
						/>
					</div>
					<button id={styles.buttonAddGrade} className={styles.icon} type="submit">
						<BiPlus size={32} />
					</button>
				</form>
			</div>
			<div className={styles.footerInfo}>
				<p id={styles.finalValue} dangerouslySetInnerHTML={{ __html: message }}></p>
				<div className={styles.footerButtons}>
					<div
						className={[styles.icon, styles.resetNotas].join(" ")}
						onClick={handleReset}
                        aria-label="Limpar todas as notas lançadas"
                        title="Remover todas as notas e reiniciar a calculadora"
                    >
                        <BiReset size={32} />
                    </div>
				</div>
			</div>
		</div>
	)
}
