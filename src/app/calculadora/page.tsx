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
					Ferramenta de apoio para estimar media parcial e nota necessaria na final com
					base nas informacoes inseridas por voce.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Como usar</h2>
				<ul>
					<li>Adicione cada avaliacao com nota e peso.</li>
					<li>Deixe a nota em branco para simular cenarios.</li>
					<li>Use o resultado como planejamento de estudo.</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Limitacoes e contexto academico</h2>
				<ul>
					<li>Os calculos sao estimativos e podem variar conforme regra da disciplina.</li>
					<li>Arredondamentos e criterios de avaliacao podem mudar entre turmas.</li>
					<li>A confirmacao final depende sempre dos registros oficiais.</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>FAQ rapido</h2>
				<p>
					<strong>Esta media e oficial?</strong> Nao. E uma previsao para apoiar decisoes de
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
