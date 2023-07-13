import React from "react"
import GoBack from "@/components/GoBack"

import styles from "./info.module.css"
import Link from "next/link"

export default function Info() {
	return (
		<>
			<div className={styles.pageWrapper}>
				<GoBack />
				<h1>Informações</h1>
				<p>
					Esse sistema foi desenvolvido com base no sistema da{" "}
					<Link href="https://uesc.br" target="__blank">
						UESC
					</Link>
					, que a média para ser aprovado é:
				</p>
				<div className={styles.code}>
					<span className={styles.codeSuccess}>7</span>
				</div>
				<p>Como calcular a sua média:</p>
				<div className={styles.code}>
					Acumulado = <span className={styles.codeInfo}>(Nota 1 * Peso 1)</span> +{" "}
					<span className={styles.codeInfo}>(Nota 2 * Peso 2)</span> +{" "}
					<span className={styles.codeInfo}>...</span> +{" "}
					<span className={styles.codeInfo}>(Nota N * Peso N)</span>
					<br />
					Total de pesos = <span className={styles.codeInfo}>Peso 1</span> +{" "}
					<span className={styles.codeInfo}>Peso 2</span> +{" "}
					<span className={styles.codeInfo}>...</span> +{" "}
					<span className={styles.codeInfo}>Peso N</span>
					<br />
					<br />
					Média = <span className={styles.codeSuccess}>Acumulado</span> /{" "}
					<span className={styles.codeSuccess}>Total de pesos</span>
				</div>
				<p>Como calcular quanto você precisa na final:</p>
				<div className={styles.code}>
					Necessário = <span className={styles.codeDanger}>(5 - Média * 0.6) / 0.4</span>
				</div>
			</div>
		</>
	)
}
