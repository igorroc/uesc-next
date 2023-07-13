import React from "react"
import { AiFillHeart } from "react-icons/ai"
import { BiSolidCoffee } from "react-icons/bi"

import styles from "./footer.module.css"
import Link from "next/link"

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				<p>
					Feito com <AiFillHeart /> e <BiSolidCoffee /> por{" "}
					<Link target="_blank" href="https://ilrocha.com" className={styles.animatedCopy}>
						Igor Rocha
					</Link>
				</p>
			</div>
		</footer>
	)
}
