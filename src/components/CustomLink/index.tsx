import Link from "next/link"
import React from "react"

import styles from "./custom_link.module.css"

type CustomLinkProps = {
	href: string
	children: React.ReactNode
}

export default function CustomLink(props: CustomLinkProps) {
	return (
		<Link href={props.href} className={styles.link}>
			{props.children}
		</Link>
	)
}
