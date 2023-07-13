"use client"

import React from "react"
import PageConfirmation from "../PageConfirmation"
import { useAddToHomeScreenPrompt } from "@/hooks/pwa"

export default function PWA() {
	const [prompt, promptToInstall] = useAddToHomeScreenPrompt()
	return (
		prompt && (
			<PageConfirmation
				onAccept={promptToInstall}
				question="Instale o aplicativo para ter mais facilidade!"
				buttonText="Instalar agora"
			/>
		)
	)
}
