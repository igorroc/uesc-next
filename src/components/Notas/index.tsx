"use client"

import React from "react"
import styles from "./notas.module.css"
import { Grade } from "@/types/grade"

export default function Notas() {
	const [grades, setGrades] = React.useState<Grade[]>([])
	const [newGrade, setNewGrade] = React.useState<Grade>({
		weight: 10,
	} as Grade)
	const [message, setMessage] = React.useState<string>(`Insira suas notas para eu calcular!<br />
	Deixe <span class="${styles.mediaYellow}">vazio</span> o campo de
	<span class="${styles.info}">Nota</span> e clique no <b>+</b>
	para que eu possa te mostrar quanto você precisa.`)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		handleAddGrade()
	}

	function handleAddGrade() {
		setGrades([...grades, newGrade])
		setNewGrade({ value: null, weight: 10 } as Grade)

		// focus on input value
		const input = document.querySelector(`#inputGradeValue`) as HTMLInputElement
		input.focus()
	}

	function handleRemoveGrade(index: number) {
		setGrades(grades.filter((_, i) => i !== index))
	}

	const accumulated = grades.reduce((acc, grade) => {
		const value = grade.value || 0
		const sum = acc + value * grade.weight

		return sum
	}, 0)

	const totalWeight = grades.reduce((acc, grade) => {
		return acc + grade.weight
	}, 0)

	const media = accumulated / totalWeight

	const emptyGradesCount = grades.filter((grade) => !grade.value).length

	React.useEffect(() => {
		if (grades.length === 0) {
			setMessage(`Insira suas notas para eu calcular!<br />
			Deixe <span class="${styles.mediaYellow}">vazio</span> o campo de
			<span class="${styles.info}">Nota</span> e clique no <b>+</b>
			para que eu possa te mostrar quanto você precisa.`)
		} else {
			if (emptyGradesCount) {
				if (media >= 7) {
					setMessage(
						`Mesmo se você tirar <u>0.0</u> nas notas coringa, você passa com <span class="${styles.mediaGreen}">${media}</span>.
						<br/>
						<span class="${styles.motivacional}">Cê é o bichão mesmo ein?</span>😎`
					)
				} else {
					let needed = (totalWeight * 7 - accumulated) / 10 / emptyGradesCount
					needed = needed.toFixed(2)
					if (needed > 10) {
						let cMedia = (accumulated + 100) / totalWeight
						let quantoPrecisa = (5 - cMedia * 0.6) / 0.4
						let formatted = quantoPrecisa.toFixed(2)

						setMessage(
							`Se você tirar <span class="mediaRed">10.0</span> em cada nota coringa, você precisa tirar <span class="${styles.mediaRed}">${formatted}</span> na final para passar. <span class="${styles.motivacional}">Tá complicado, mas vai que dá!</span>🤗`
						)
					} else {
						let texto = "Você precisa tirar "
						let mensagemMotivacional = ""
						let emojiMotivacional = ""
						if (needed < 7) {
							texto += `<span class="${styles.mediaGreen}">${needed}</span>`
							mensagemMotivacional = "Metendo essa, você passa!"
							emojiMotivacional = "🎉"
						} else if (needed >= 9) {
							texto += `<span class="${styles.mediaRed}">${needed}</span>`
							mensagemMotivacional = "Veja pelo lado bom: dá pra passar sem final!"
							emojiMotivacional = "🫠"
						} else {
							texto += `<span class="${styles.mediaRed}">${needed}</span>`
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
					mediaComCor = `<span class="${styles.mediaRed}">${media}</span>`
					let quantoPrecisa = (5 - media * 0.6) / 0.4
					let formatted = quantoPrecisa.toFixed(2)
					let formattedComCor = `<span class="${styles.needsGrade}">${formatted}</span>`

					if (parseFloat(formatted) > 10) {
						setMessage(
							`Sua média é ${mediaComCor}. Nem tirando 10 na final você consegue passar na disciplina.
							<br/>
							<span class="${styles.motivacional}">Não foi dessa vez, vamos deixar pro próximo semestre</span>😓`
						)
					} else if (parseFloat(formatted) >= 7) {
						setMessage(
							`Sua média é ${mediaComCor}. Você precisa tirar ${formattedComCor} na final para passar na disciplina.
							<br/>
							<span class="${styles.motivacional}">Sei que tá difícil, mas deixar pro próximo semestre é pior</span> 😉`
						)
					} else if (parseFloat(formatted) >= 5) {
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
					mediaComCor = `<span class="${styles.mediaGreen}">${media}</span>`
					setMessage(
						`Não tenho ideia de como você conseguiu. Mas sua média é ${mediaComCor}! <span class="${styles.motivacional}">Você tá mais do que aprovado! Me ensina?</span> 🥺<span class="${styles.dedoEsquerdo}">👉</span><span class="${styles.dedoDireito}">👈</span>`
					)
				} else if (media == 10) {
					mediaComCor = `<span class="${styles.mediaGreen}">${media}</span>`
					setMessage(
						`Você é o novo Einstein? Não? Por que sua média é ${mediaComCor}! <span class="${styles.motivacional}">Meteu essa?</span> 😎`
					)
				} else if (media >= 8.5) {
					mediaComCor = `<span class="${styles.mediaGreen}">${media}</span>`
					setMessage(
						`Sua média é ${mediaComCor}! <span class="${styles.motivacional}">Continue assim e logo logo o 10.0 é seu!</span> 💪`
					)
				} else if (media > 7) {
					mediaComCor = `<span class="${styles.mediaGreen}">${media}</span>`
					setMessage(
						`Sua média é ${mediaComCor}.
						<br/>
						<span class="${styles.motivacional}">Você está fazendo um ótimo trabalho!</span> 😉`
					)
				} else if (media == 7) {
					mediaComCor = `<span class="${styles.mediaGreen}">${media}</span>`
					setMessage(
						`Sua média é exatamente ${mediaComCor}.
						<br/>
						<span class="${styles.motivacional}">Foi no limite, ein?</span> 😅`
					)
				} else {
					mediaComCor = `<span class="${styles.mediaGreen}">${media}</span>`
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
		<div className={styles.pageWrapper}>
			<h1>Calculadora</h1>
			<div className={styles.wrapperNotas}>
				{grades.map((grade, index) => (
					<div className={styles.nota} key={index}>
						<div className={styles.info}>
							Nota: <span className={styles.inputValor}>{grade.value || "?"}</span>
						</div>
						<div className={styles.info}>
							Peso: <span className={styles.inputValor}>{grade.weight}</span>
						</div>
						<div className={styles.icon} onClick={() => handleRemoveGrade(index)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M24 10h-24v4h24v-4z" />
							</svg>
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
							value={newGrade.value || ""}
							onChange={(e) => setNewGrade({ ...newGrade, value: +e.target.value })}
							required
						/>
					</div>
					<div className={styles.info}>
						Peso:
						<input
							className={styles.inputValor}
							type="number"
							value={newGrade.weight}
							onChange={(e) => setNewGrade({ ...newGrade, weight: +e.target.value })}
							required
						/>
					</div>
					<button
						id={styles.buttonAddGrade}
						className={styles.icon}
						onClick={handleAddGrade}
						type="submit"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
						</svg>
					</button>
				</form>
			</div>
			<div className={styles.footerInfo}>
				<p id={styles.finalValue} dangerouslySetInnerHTML={{ __html: message }}></p>
				<div id={styles.resetNotas} className={[styles.icon, styles.resetNotas].join(" ")}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M9 12l-4.463 4.969-4.537-4.969h3c0-4.97 4.03-9 9-9 2.395 0 4.565.942 6.179 2.468l-2.004 2.231c-1.081-1.05-2.553-1.699-4.175-1.699-3.309 0-6 2.691-6 6h3zm10.463-4.969l-4.463 4.969h3c0 3.309-2.691 6-6 6-1.623 0-3.094-.65-4.175-1.699l-2.004 2.231c1.613 1.526 3.784 2.468 6.179 2.468 4.97 0 9-4.03 9-9h3l-4.537-4.969z" />
					</svg>
				</div>
			</div>
		</div>
	)
}
