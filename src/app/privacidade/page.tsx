import type { Metadata } from "next"
import Link from "next/link"

import styles from "./privacidade.module.css"

export const metadata: Metadata = {
	title: "Política de Privacidade",
	description:
		"Política de Privacidade, com informações sobre cookies do Google AdSense e anúncios personalizados.",
}

export default function PrivacidadePage() {
	return (
		<div className={styles.wrapper}>
			<h1>Política de Privacidade</h1>
			<p>
				Esta página explica como dados podem ser usados no site <strong>Ferramentas para
				estudantes da UESC</strong>.
			</p>

			<h2>Cookies e anúncios do Google AdSense</h2>
			<p>
				Terceiros, incluindo o Google, usam cookies para veicular anúncios com base em
				visitas anteriores do usuário a este e a outros sites.
			</p>
			<p>
				Com o uso de cookies de publicidade, o Google e seus parceiros podem exibir anúncios
				personalizados para você.
			</p>
			<p>
				Você pode desativar a publicidade personalizada em{" "}
				<Link href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer">
					Configurações de anúncios do Google
				</Link>
				. Também pode acessar{" "}
				<Link href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer">
					aboutads.info/choices
				</Link>
				 para gerenciar preferências de cookies de terceiros.
			</p>

			<h2>Dados informados em formulários</h2>
			<p>
				Quando voce envia dados em formulários (por exemplo, sugestão de professor), as
				informações são usadas somente para processar sua solicitação.
			</p>

			<h2>Contato</h2>
			<p>
				Se tiver dúvidas sobre esta política, entre em contato pelo site do criador:{" "}
				<Link href="https://ilrocha.com" target="_blank" rel="noreferrer">
					ilrocha.com
				</Link>
				.
			</p>

			<p className={styles.notice}>
				Site independente, não oficial, sem vínculo com a UESC.
			</p>
		</div>
	)
}
