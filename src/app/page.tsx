import Link from "next/link"
import styles from "./page.module.css"

import { BsFillEnvelopeFill, BsGlobeAmericas } from "react-icons/bs"
import { FaCalculator } from "react-icons/fa"

export default function Home() {
	return (
		<>
			<div className={styles.pageCenter}>
				<div className={styles.wrapper}>
					<Link href="/emails" className={styles.links}>
						<BsFillEnvelopeFill size={48} />
						<span>Banco de E-mails</span>
					</Link>
					<Link className={styles.links} href="./calculadora">
						<FaCalculator size={48} />
						<span> Calculadora de Notas </span>
					</Link>
					<Link
						className={styles.links}
						href="https://www.prograd.uesc.br/PortalSagres/Acesso.aspx"
					>
						<BsGlobeAmericas size={48} />
						<span> Portal Sagres </span>
					</Link>
				</div>
			</div>
		</>
	)
}
