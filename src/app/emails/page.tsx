import React from "react"

import GoBack from "@/components/GoBack"

import { BsFillPersonFill } from "react-icons/bs"

import styles from "./emails.module.css"
import Professors from "@/components/Professors"
import CustomLink from "@/components/CustomLink"

export default function Emails() {
	return (
		<>
			<GoBack />
			<Professors />
			<div className={styles.notFound}>
				<div className={styles.text}>
					<p>Não encontrou o seu professor?</p>
					<p>Clique no botão baixo e adicionarei o mais rápido possível!</p>
				</div>
				<CustomLink href={"./emails/add"}>
					<BsFillPersonFill />
					Novo Professor
				</CustomLink>
			</div>
		</>
	)
}
