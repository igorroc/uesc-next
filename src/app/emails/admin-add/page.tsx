import ProfessorFormAdmin from "@/components/ProfessorFormAdmin"
import type { Metadata } from "next"
import React from "react"

import styles from "./add.module.css"
import GoBack from "@/components/GoBack"

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
	},
}

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
