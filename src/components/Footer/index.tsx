import React from "react"
import { AiFillHeart } from "react-icons/ai"
import { BiSolidCoffee } from "react-icons/bi"

import styles from "./footer.module.css"

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				<p>
					Feito com <AiFillHeart /> e <BiSolidCoffee /> por{" "}
					<a target="_blank" href="https://ilrocha.com">
						Igor Rocha
					</a>
				</p>
			</div>
		</footer>
	)
}
