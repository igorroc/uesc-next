import { getProfessors } from "@/hooks/useDatabase"
import React, { useEffect } from "react"
import { ProfessorCard } from "../ProfessorCard"
import Loading from "../Loading"
import { IoMdMail } from "react-icons/io"

import styles from "./professor_list.module.css"
import Link from "next/link"
import { TProfessor } from "@/types/professor"

type ProfessorListProps = {
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function ProfessorList(props: ProfessorListProps) {
	const [professors, setProfessors] = React.useState<TProfessor[]>([])
	const [loading, setLoading] = React.useState<boolean>(true)

	const filteredProfessors = professors.filter((professor) =>
		professor.name.toLowerCase().includes(props.search.toLowerCase()) ||
		professor.nicknames?.some((nickname) =>
			nickname.toLowerCase().includes(props.search.toLowerCase())
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
		</div>
	)
}
