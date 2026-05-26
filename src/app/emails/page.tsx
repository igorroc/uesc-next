import React from "react"

import GoBack from "@/components/GoBack"

import { BsFillPersonFill } from "react-icons/bs"

import styles from "./emails.module.css"
import Professors from "@/components/Professors"
import CustomLink from "@/components/CustomLink"

export default function Emails() {
	return (
		<>
			<GoBack />
			<section className={styles.section}>
				<h1>Banco de E-mails de Professores</h1>
				<p>
					Use a busca para encontrar rapidamente o contato do professor e abrir seu app
					de e-mail.
				</p>
				<p>
					Os registros sao mantidos com curadoria manual e podem levar um tempo para
					atualizar.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Origem dos dados e limitacoes</h2>
				<ul>
					<li>Dados reunidos de contribuicoes da comunidade academica.</li>
					<li>Inclusoes e ajustes sao revisados antes de aparecer na lista.</li>
					<li>E-mails institucionais podem mudar por decisao administrativa.</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>FAQ rapido</h2>
				<p>
					<strong>Como solicitar inclusao?</strong> Use o botao &quot;Novo Professor&quot; ao final
					da pagina.
				</p>
				<p>
					<strong>Posso solicitar correcao?</strong> Sim. Envie novamente com os dados
					corretos para revisao.
				</p>
			</section>

			<Professors />
			<div className={styles.notFound}>
				<div className={styles.text}>
					<p>Não encontrou o seu professor?</p>
					<p>Clique no botão baixo e adicionarei o mais rápido possível!</p>
				</div>
				<CustomLink href={"./emails/add"}>
					<BsFillPersonFill />
					Novo Professor
				</CustomLink>
			</div>
		</>
	)
}
