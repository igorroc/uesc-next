"use client"

import React, { useEffect, useRef } from "react"

import styles from "./professor_form.module.css"
import CustomLink from "../CustomLink"
import { TCourse } from "@/types/course"
import { getCourses } from "@/hooks/useDatabase"

enum Status {
	DEFAULT = "Adicionar",
	PENDING = "Adicionando...",
	SUCCESS = "Adicionado!",
	ERROR = "Erro ao adicionar",
}

export default function ProfessorFormAdmin() {
	const form = useRef<HTMLFormElement>(null)
	const [status, setStatus] = React.useState(Status.DEFAULT)
	const [courses, setCourses] = React.useState<TCourse[]>([])

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		if (!form.current) return console.error("form.current is null")

		// get data from form
		const data = new FormData(form.current)

		console.log(data)

		setStatus(Status.PENDING)
	}

	useEffect(() => {
		getCourses().then(setCourses)
	}, [])

	return status == Status.SUCCESS ? (
		<div className={styles.success}>
			<div>
				<p>Professor adicionado</p>
			</div>
			<CustomLink href="/">Voltar para o início</CustomLink>
		</div>
	) : (
		<form ref={form} className={styles.form} onSubmit={handleSubmit}>
			<input type="text" placeholder="Nome do professor" name="professor_name" required />
			<input type="email" placeholder="Email do professor" name="professor_email" required />
			<select name="professor_course" required defaultValue={"Selecione um curso"}>
				{courses.map((course) => (
					<option key={course.id} value={course.id}>
						{course.name}
					</option>
				))}
			</select>
			<input type="text" placeholder="Apelidos do professor" name="professor_nicknames" />
			<button type="submit">{status}</button>
		</form>
	)
}
