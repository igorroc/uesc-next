"use client"

import { useEffect, useState } from "react"

interface IBeforeInstallPromptEvent extends Event {
	platforms: string[]
	userChoice: Promise<{
		outcome: "accepted" | "dismissed"
		platform: string
	}>
	prompt(): Promise<void>
}

export function useAddToHomeScreenPrompt(): [IBeforeInstallPromptEvent | null, () => void] {
	const [prompt, setPrompt] = useState<IBeforeInstallPromptEvent | null>(null)

	const promptToInstall = async () => {
		if (prompt) {
			prompt.prompt()
			const { outcome } = await prompt.userChoice
			// Optionally, send analytics event with outcome of user choice
			console.log(`User response to the install prompt: ${outcome}`)
			// We've used the prompt, and can't use it again, throw it away
			return outcome
		}
		return Promise.reject(
			new Error('Tried installing before browser sent "beforeinstallprompt" event')
		)
	}

	useEffect(() => {
		console.log("add listner beforeinstallprompt")

		const ready = (e: IBeforeInstallPromptEvent) => {
			e.preventDefault()
			console.log("Set prompt!")

			setPrompt(e)
		}

		window.addEventListener("beforeinstallprompt", ready as any)

		return () => {
			window.removeEventListener("beforeinstallprompt", ready as any)
		}
	}, [])

	return [prompt, promptToInstall]
}
