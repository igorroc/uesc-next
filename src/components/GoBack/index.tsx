"use client"

import React from "react"
import { useRouter } from "next/navigation"

import { IoIosArrowRoundBack } from "react-icons/io"

import styles from "./go_back.module.css"

export default function GoBack() {
	const router = useRouter()

	function goBack() {
		router.back()
	}

	return (
		<button onClick={goBack} className={styles.go_back}>
			<IoIosArrowRoundBack />
			Voltar
		</button>
	)
}
