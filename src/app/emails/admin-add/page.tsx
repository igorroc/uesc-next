import ProfessorFormAdmin from "@/components/ProfessorFormAdmin"
import React from "react"

import styles from "./add.module.css"
import GoBack from "@/components/GoBack"

export default function AdminAdd() {
	return (
		<>
			<GoBack />
			<div className={styles.wrapper}>
				<h1>Admin add</h1>
				<ProfessorFormAdmin />
			</div>
		</>
	)
}
