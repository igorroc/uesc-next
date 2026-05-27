"use client"

import React from "react"
import styles from "./faltas_counter.module.css"

function clampNumber(value: number) {
	if (Number.isNaN(value) || value < 0) return 0
	return value
}

export default function FaltasCounter() {
	const [totalClasses, setTotalClasses] = React.useState(60)
	const [maxAbsencePercent, setMaxAbsencePercent] = React.useState(25)
	const [currentAbsences, setCurrentAbsences] = React.useState(0)
	const [classesPerWeek, setClassesPerWeek] = React.useState(2)

	const allowedAbsences = Math.floor((totalClasses * maxAbsencePercent) / 100)
	const remainingAbsences = allowedAbsences - currentAbsences
	const remainingPercent = totalClasses > 0 ? (remainingAbsences / totalClasses) * 100 : 0
	const usagePercent = allowedAbsences > 0 ? (currentAbsences / allowedAbsences) * 100 : 0

	const estimatedWeeks =
		classesPerWeek > 0 && remainingAbsences > 0
			? (remainingAbsences / classesPerWeek).toFixed(1)
			: "0.0"

	return (
		<div className={styles.wrapper}>
			<div className={styles.formGrid}>
				<label>
					Carga horária total (aulas)
					<input
						type="number"
						min={1}
						value={totalClasses}
						onChange={(e) => setTotalClasses(Math.max(1, clampNumber(+e.target.value)))}
					/>
				</label>

				<label>
					Limite de faltas (%)
					<input
						type="number"
						min={1}
						max={100}
						value={maxAbsencePercent}
						onChange={(e) =>
							setMaxAbsencePercent(Math.min(100, Math.max(1, clampNumber(+e.target.value))))
						}
					/>
				</label>

				<label>
					Faltas atuais
					<input
						type="number"
						min={0}
						value={currentAbsences}
						onChange={(e) => setCurrentAbsences(clampNumber(+e.target.value))}
					/>
				</label>

				<label>
					Aulas por semana
					<input
						type="number"
						min={1}
						value={classesPerWeek}
						onChange={(e) => setClassesPerWeek(Math.max(1, clampNumber(+e.target.value)))}
					/>
				</label>
			</div>

			<div className={styles.result}>
				<p>
					Limite de faltas: <strong>{allowedAbsences}</strong>
				</p>
				<p>
					Faltas restantes: <strong>{remainingAbsences}</strong>
				</p>
				<p>
					Percentual restante da carga: <strong>{remainingPercent.toFixed(1)}%</strong>
				</p>
				<p>
					Uso do limite: <strong>{usagePercent.toFixed(1)}%</strong>
				</p>
				<p>
					Estimativa de semanas restantes (faltando em todas): <strong>{estimatedWeeks}</strong>
				</p>

				{remainingAbsences < 0 ? (
					<p className={styles.danger}>Você já ultrapassou o limite de faltas.</p>
				) : remainingAbsences === 0 ? (
					<p className={styles.warning}>Você chegou ao limite máximo de faltas.</p>
				) : (
					<p className={styles.success}>Ainda há margem de faltas. Se organize para não estourar.</p>
				)}
			</div>
		</div>
	)
}
