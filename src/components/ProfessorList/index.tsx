import { getProfessors } from "@/hooks/useDatabase"
import React, { useEffect } from "react"
import { ProfessorCard } from "../ProfessorCard"
import Loading from "../Loading"
import { IoMdMail } from "react-icons/io"

import styles from "./professor_list.module.css"
import Link from "next/link"
import { TProfessor } from "@/types/professor"
import { clearString } from "@/utils/clearName"
import { easterEggs } from "@/utils/easterEgg"

type ProfessorListProps = {
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function ProfessorList(props: ProfessorListProps) {
	const [professors, setProfessors] = React.useState<TProfessor[]>([])
	const [loading, setLoading] = React.useState<boolean>(true)

	const filteredProfessors = professors.filter((professor) =>
		clearString(professor.name.toLowerCase()).includes(
			clearString(props.search.toLowerCase())
		) ||
		professor.nicknames?.some((nickname) =>
			clearString(nickname.toLowerCase()).includes(clearString(props.search.toLowerCase()))
		)
			? true
			: false
	)

	useEffect(() => {
		getProfessors().then((data) => {
			setProfessors(data)
			setLoading(false)
		})
	}, [])

	return (
		<div className={styles.professorList}>
			{loading && (
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
			)}
			{filteredProfessors &&
				filteredProfessors.map((professor) => (
					<ProfessorCard.Root key={professor.id} course={professor.course}>
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
						{professor.photo && (
							<ProfessorCard.Image
								src={professor.photo}
								alt={`Foto de ${professor.name}`}
							/>
						)}
					</ProfessorCard.Root>
				))}

			{easterEggs.includes(clearString(props.search)) && (
				<>
					<p className={styles.easterEgg}>
						Você encontrou um Easter Egg! Parabéns! <br />
						Eu sou o criador desse site! <br />
					</p>
					<ProfessorCard.Root id="loadingState">
						<ProfessorCard.Title>
							<h3>Igor Lima Rocha</h3>
						</ProfessorCard.Title>
						<ProfessorCard.Description>
							<div className={styles.mail}>
								<IoMdMail />
								<a
									href="mailto:igor@ilrocha.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									igor@ilrocha.com
								</a>
							</div>
						</ProfessorCard.Description>
						<ProfessorCard.Image
							src={"https://github.com/igorroc.png"}
							alt={`Foto de Igor Rocha`}
						/>
					</ProfessorCard.Root>
				</>
			)}
		</div>
	)
}
