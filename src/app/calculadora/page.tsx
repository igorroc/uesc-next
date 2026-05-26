import React from "react"
import GoBack from "@/components/GoBack"
import Notas from "@/components/Notas"
import styles from "./page.module.css"


export default function Calculadora() {
	return (
		<>
			<GoBack />
			<section className={styles.section}>
				<h1>Calculadora de Notas</h1>
				<p>
					Ferramenta de apoio para estimar média parcial e nota necessária na final com
					base nas informações inseridas por você.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Como usar</h2>
				<ul>
					<li>Adicione cada avaliação com nota e peso.</li>
					<li>Deixe a nota em branco para simular cenários.</li>
					<li>Use o resultado como planejamento de estudo.</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Limitações e contexto acadêmico</h2>
				<ul>
					<li>Os cálculos são estimativos e podem variar conforme regra da disciplina.</li>
					<li>Arredondamentos e critérios de avaliação podem mudar entre turmas.</li>
					<li>A confirmação final depende sempre dos registros oficiais.</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>FAQ rápido</h2>
				<p>
					<strong>Esta média é oficial?</strong> Não. É uma previsão para apoiar decisões de
					estudo.
				</p>
				<p>
					<strong>Posso usar pesos diferentes?</strong> Sim. Informe os pesos de acordo com
					o plano da disciplina.
				</p>
				<a className={styles.jumpButton} href="#calculadora-interativa">
					Ir direto para a calculadora
				</a>
			</section>

			<div id="calculadora-interativa">
				<Notas />
			</div>
		</>
	)
}
