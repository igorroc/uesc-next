"use client"

import React, { useEffect, useState } from "react"

import styles from "./page_confirmation.module.css"
import { IoMdClose } from "react-icons/io"
import Image from "next/image"
import Logo from "/public/icon-384x384.png"

type TPageConfirmation = {
	onAccept: () => void
	question: string
	buttonText?: string
}

export default function PageConfirmation(props: TPageConfirmation) {
	const [show, setShow] = useState(false)

	useEffect(() => {
		setShow(true)
	}, [])

	function handleClose() {
		setShow(false)
	}
	function handleCloseOutside(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		if (e.target !== e.currentTarget) return
		handleClose()
	}

	function handleAccept() {
		props.onAccept()
		handleClose()
	}

	return (
		<div
			className={[styles.pageWrapper, show ? styles.show : ""].join(" ")}
			onClick={handleCloseOutside}
		>
			<div className={styles.pageConfirmation}>
				<div className={styles.logo}>
					<Image src={Logo} alt="Logo" />
				</div>
				<div className={styles.content}>
					<div className={styles.question}>{props.question}</div>

					<button className={styles.confirmButton} onClick={handleAccept}>
						{props.buttonText || "Confirmar"}
					</button>
				</div>

				<button className={styles.closeButton} onClick={handleClose}>
					<IoMdClose />
				</button>
			</div>
		</div>
	)
}
