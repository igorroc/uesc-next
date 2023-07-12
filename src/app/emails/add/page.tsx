import React from "react"
import GoBack from "@/components/GoBack"
import ProfessorForm from "@/components/ProfessorForm"

import styles from "./add.module.css"

export default function Add() {
	return (
		<>
			<GoBack />
			<div className={styles.wrapper}>
				<h1>Adicionar Professor</h1>
				<ProfessorForm />
			</div>
		</>
	)
}
