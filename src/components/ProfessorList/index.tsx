import { getProfessors } from "@/hooks/useDatabase"
import React from "react"
import { ProfessorCard } from "../ProfessorCard"
import Loading from "../Loading"
import { IoMdMail } from "react-icons/io"

import styles from "./professor_list.module.css"
import Link from "next/link"

export default async function ProfessorList() {
	const professors = await getProfessors()

	return (
		<div className={styles.professorList}>
			{professors ? (
				professors.map((professor) => (
					<ProfessorCard.Root key={professor.id}>
						<ProfessorCard.Title>
							<h3>{professor.name}</h3>
						</ProfessorCard.Title>
						<ProfessorCard.Description>
							<div className={styles.mail}>
								<IoMdMail />
								<Link
									href={`mailto:${professor.email}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									{professor.email}
								</Link>
							</div>
						</ProfessorCard.Description>
					</ProfessorCard.Root>
				))
			) : (
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
				</div>
			)}
		</div>
	)
}
