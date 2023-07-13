import React from "react"

import styles from "./professor_card.module.css"
import { CollectionReference } from "firebase/firestore"

type ProfessorCardProps = {
	id?: string
	className?: string
	course?: CollectionReference
	children: React.ReactNode
}

export default function ProfessorCardRoot(props: ProfessorCardProps) {
	return (
		<div className={styles.professor} id={props.id}>
			{props.children}
		</div>
	)
}
