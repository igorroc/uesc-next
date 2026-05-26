import React from "react"
import { AiFillHeart } from "react-icons/ai"
import { BiSolidCoffee } from "react-icons/bi"

import styles from "./footer.module.css"
import Link from "next/link"

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<p className={styles.credit}>
					Feito com <AiFillHeart /> e <BiSolidCoffee /> por{" "}
					<Link target="_blank" href="https://ilrocha.com" className={styles.animatedCopy}>
						Igor Rocha
					</Link>
				</p>
				<p className={styles.links}>
					<Link href="/privacidade">Política de Privacidade</Link>
				</p>
				<p className={styles.notice}>
					Site independente, não oficial, sem vínculo com a UESC.
				</p>
			</div>
		</footer>
	)
}
