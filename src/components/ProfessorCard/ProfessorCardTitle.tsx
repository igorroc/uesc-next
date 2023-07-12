import React from "react"

import styles from "./professor_card.module.css"

type ProfessorCardTitleProps = {
	children: React.ReactNode
}

export default function ProfessorCardTitle(props: ProfessorCardTitleProps) {
	return <div className={styles.title}>{props.children}</div>
}
