import React from "react"

import styles from "./professor_card.module.css"

type ProfessorCardProps = {
	id?: string
	className?: string
	children: React.ReactNode
}

export default function ProfessorCardRoot(props: ProfessorCardProps) {
	return (
		<div className={styles.professor} id={props.id}>
			{props.children}
		</div>
	)
}
