import GoBack from "@/components/GoBack"
import FaltasCounter from "@/components/FaltasCounter"
import styles from "../calculadora/page.module.css"

export default function FaltasPage() {
	return (
		<>
			<GoBack />
			<section className={styles.section}>
				<h1>Contador de Faltas</h1>
				<p>
					Ferramenta para acompanhar o limite de faltas por disciplina e evitar surpresas no
					fim do semestre.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Como usar</h2>
				<ul>
					<li>Informe o total de aulas da disciplina no semestre.</li>
					<li>Defina o limite de faltas em porcentagem.</li>
					<li>Atualize suas faltas atuais e veja quanto ainda pode faltar.</li>
				</ul>
			</section>

			<FaltasCounter />
		</>
	)
}
