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
					Os registros são mantidos com curadoria manual e podem levar um tempo para
					atualizar.
				</p>
			</section>

			<section className={styles.section}>
				<h2>Origem dos dados e limitações</h2>
				<ul>
					<li>Dados reunidos de contribuições da comunidade acadêmica.</li>
					<li>Inclusões e ajustes são revisados antes de aparecer na lista.</li>
					<li>E-mails institucionais podem mudar por decisão administrativa.</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>FAQ rápido</h2>
				<p>
					<strong>Como solicitar inclusão?</strong> Use o botão &quot;Novo Professor&quot; ao final
					da página.
				</p>
				<p>
					<strong>Posso solicitar correção?</strong> Sim. Envie novamente com os dados
					corretos para revisão.
				</p>
			</section>

			<Professors />
			<div className={styles.notFound}>
				<div className={styles.text}>
					<p>Não encontrou o seu professor?</p>
					<p>Clique no botão abaixo e adicionarei o mais rápido possível!</p>
				</div>
				<CustomLink href={"./emails/add"}>
					<BsFillPersonFill />
					Novo Professor
				</CustomLink>
			</div>
		</>
	)
}
