"use client"

import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

import styles from "./professor_form.module.css"
import Link from "next/link"
import CustomLink from "../CustomLink"

enum Status {
	DEFAULT = "Pedir para adicionar",
	PENDING = "Pedindo...",
	SUCCESS = "Pedido realizado!",
	ERROR = "Erro ao realizar pedido",
}

export default function ProfessorForm() {
	const form = useRef<HTMLFormElement>(null)
	const [status, setStatus] = React.useState(Status.DEFAULT)

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		if (!form.current) return console.error("form.current is null")
		if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
			return console.error("EMAILJS_SERVICE_ID is null")
		if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
			return console.error("EMAILJS_TEMPLATE_ID is null")
		if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
			return console.error("EMAILJS_PUBLIC_KEY is null")

		setStatus(Status.PENDING)

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text)
					setStatus(Status.SUCCESS)
				},
				(error) => {
					console.log(error.text)
					setStatus(Status.ERROR)
				}
			)
	}

	return status == Status.SUCCESS ? (
		<div className={styles.success}>
			<div>
				<p>Seu pedido foi recebido!</p>
				<p>Esse processo é manual, então pode demorar um pouco.</p>
				<p>
					Mas não se preocupe, você receberá um email quando o professor for adicionado.
				</p>
			</div>
			<CustomLink href="/">Voltar para o início</CustomLink>
		</div>
	) : (
		<form ref={form} className={styles.form} onSubmit={handleSubmit}>
			<span>Suas informações</span>
			<input type="text" placeholder="Seu nome" name="name" required />
			<input type="email" placeholder="Seu email" name="email" required />
			<span>Informações do professor</span>
			<input type="text" placeholder="Nome do professor" name="professor_name" required />
			<input type="email" placeholder="Email do professor" name="professor_email" required />
			<input type="text" placeholder="Curso do professor" name="professor_course" required />
			<input type="text" placeholder="Apelidos do professor" name="professor_nicknames" />
			<button type="submit">{status}</button>
		</form>
	)
}
