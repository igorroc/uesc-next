import React from "react"

import styles from "./professor_card.module.css"

type ProfessorCardImageProps = {
	src: string
	alt: string
}

export default function ProfessorCardImage(props: ProfessorCardImageProps) {
	return (
		<div className={styles.imagem}>
			{/* eslint-disable-next-line */}
			<img src={props.src} alt={props.alt} />
		</div>
	)
}
