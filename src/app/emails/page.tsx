import React from "react"

import GoBack from "@/components/GoBack"
import Loading from "@/components/Loading"

import { IoMdMail } from "react-icons/io"
import { BsFillPersonFill } from "react-icons/bs"

import styles from "./emails.module.css"
import { ProfessorCard } from "@/components/ProfessorCard"

export default function Emails() {
	return (
		<>
			<GoBack />

			<div>
				<div id="wrapperProfessores" className="wrapperFlex">
					<ProfessorCard.Root id="loadingState">
						<ProfessorCard.Title>
							<Loading />
							<h3>Carregando banco de dados</h3>
						</ProfessorCard.Title>
						<ProfessorCard.Description>
							<div className={styles.mail}>
								<IoMdMail />
								<a href="mailto:" target="_blank" rel="noopener noreferrer">
									Demorando muito? Clique aqui e me mande um email!
								</a>
							</div>
						</ProfessorCard.Description>
					</ProfessorCard.Root>

					{/* <ProfessorCard id="loadingState">
						<div className={styles.title}>
							<Loading />
							<h3>Carregando banco de dados</h3>
						</div>
						<div className={styles.description}>
							<div className={styles.mail}>
								<IoMdMail />
								<a href="mailto:igor_roc@hotmail.com.br">
									Demorando muito? Clique aqui e me mande um email!
								</a>
							</div>
						</div>
					</ProfessorCard> */}
				</div>
				<div id="notFound">
					<div className={styles.text}>
						<p>Não encontrou o seu professor?</p>
						<p>Clique no botão baixo e adicionarei o mais rápido possível!</p>
					</div>
					<button className={styles.btn}>
						<BsFillPersonFill />
						Novo Professor
					</button>
				</div>
			</div>
		</>
	)
}
