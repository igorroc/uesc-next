import React from "react"

import styles from "./professor_card.module.css"

type ProfessorCardDescriptionProps = {
	children: React.ReactNode
}

export default function ProfessorCardDescription(props: ProfessorCardDescriptionProps) {
	return <div className={styles.description}>{props.children}</div>
}
