"use client"

import React, { useEffect, useRef } from "react"

import styles from "./professor_form.module.css"
import CustomLink from "../CustomLink"
import { TCourse } from "@/types/course"
import { addProfessor, getCourses } from "@/hooks/useDatabase"
import { CollectionReference } from "firebase/firestore"

enum Status {
	DEFAULT = "Adicionar",
	PENDING = "Adicionando...",
	SUCCESS = "Adicionado!",
	ERROR = "Erro ao adicionar",
}

export default function ProfessorFormAdmin() {
	const form = useRef<HTMLFormElement>(null)
	const adminForm = useRef<HTMLFormElement>(null)
	const [status, setStatus] = React.useState(Status.DEFAULT)
	const [courses, setCourses] = React.useState<TCourse[]>([])
	const [loggedIn, setLoggedIn] = React.useState(false)

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		if (!form.current) return console.error("form.current is null")

		// get data from form
		const data = {
			name: form.current.professor_name.value,
			email: form.current.professor_email.value,
			course: form.current.professor_course.value,
			nicknames: form.current.professor_nicknames.value.split(","),
			photo: form.current.professor_photo.value,
		} as {
			name: string
			email: string
			course: CollectionReference
			nicknames: string[]
			photo: string
		}

		const res = await addProfessor(data)

		if (res) {
			alert("Professor adicionado com sucesso")
			form.current.reset()
		} else {
			alert("Erro ao adicionar professor")
		}

		setStatus(Status.DEFAULT)
	}

	function handleLogin(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		if (!adminForm.current) return console.error("adminLogin.current is null")

		// get data from form
		const data = new FormData(adminForm.current)

		// check if email and password are correct

		const adminLogin = {
			email: data.get("admin_email"),
			password: data.get("admin_password"),
		}

		if (
			adminLogin.email == process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
			adminLogin.password == process.env.NEXT_PUBLIC_ADMIN_PASSWORD
		) {
			setLoggedIn(true)
			// reset form
			adminForm.current.reset()
			// save login in local storage
			localStorage.setItem("ILR_ADMIN_TOKEN", adminLogin.email + adminLogin.password)
		} else {
			alert("Senha incorreta")
		}
	}

	useEffect(() => {
		getCourses().then(setCourses)

		// check if admin is logged in
		const adminLoginToken = localStorage.getItem("ILR_ADMIN_TOKEN")
		if (
			process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
			process.env.NEXT_PUBLIC_ADMIN_PASSWORD &&
			adminLoginToken ==
				process.env.NEXT_PUBLIC_ADMIN_EMAIL + process.env.NEXT_PUBLIC_ADMIN_PASSWORD
		) {
			setLoggedIn(true)
		}
	}, [])

	if (!loggedIn) {
		return (
			<form ref={adminForm} className={styles.form} onSubmit={handleLogin}>
				<input type="text" placeholder="Email" name="admin_email" required />
				<input type="password" placeholder="Senha" name="admin_password" required />
				<button type="submit">Entrar</button>
			</form>
		)
	}

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
			<select name="professor_course" required defaultValue="CIC">
				{courses.map((course) => (
					<option key={course.id} value={course.id}>
						{course.name}
					</option>
				))}
			</select>
			<input type="text" placeholder="Apelidos do professor" name="professor_nicknames" />
			<input type="text" placeholder="Foto do professor" name="professor_photo" />
			<button type="submit">{status}</button>
		</form>
	)
}
