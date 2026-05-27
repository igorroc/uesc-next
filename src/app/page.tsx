import Link from "next/link"
import styles from "./page.module.css"

import { BsFillEnvelopeFill, BsGlobeAmericas } from "react-icons/bs"
import { FaCalculator } from "react-icons/fa"
import { BiBus } from "react-icons/bi"
import { MdEventBusy } from "react-icons/md"

export default function Home() {
	return (
		<>
			<section className={styles.intro}>
				<h1>Ferramentas para estudantes da UESC</h1>
				<p>
					Este site reúne utilitários acadêmicos para ajudar estudantes a resolver tarefas
					do dia a dia: encontrar contatos institucionais e planejar notas com mais
					clareza.
				</p>
				<p className={styles.notice}>
					Site independente, não oficial, sem vínculo com a UESC.
				</p>
			</section>

			<div className={styles.pageCenter}>
				<div className={styles.wrapper} aria-label="Ferramentas disponíveis">
					<Link href="/emails" className={styles.links}>
						<BsFillEnvelopeFill size={48} />
						<span>Banco de E-mails</span>
					</Link>
					<Link className={styles.links} href="./calculadora">
						<FaCalculator size={48} />
						<span> Calculadora de Notas </span>
					</Link>
					<Link className={styles.links} href="/faltas">
						<MdEventBusy size={48} />
						<span> Contador de Faltas </span>
					</Link>
					<Link className={styles.links} href="https://busca-bus.vercel.app/">
						<BiBus size={48} />
						<span> Horário de Ônibus </span>
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

			<section className={styles.section}>
				<h2>Como usar cada ferramenta</h2>
				<ul>
					<li>
						<strong>Banco de E-mails:</strong> pesquise por nome do professor e abra o
						contato em um clique.
					</li>
					<li>
						<strong>Calculadora de Notas:</strong> informe notas e pesos para estimar
						média e necessidade de final.
					</li>
					<li>
						<strong>Contador de Faltas:</strong> calcule seu limite restante por
						disciplina.
					</li>
					<li>
						<strong>Horário de Ônibus:</strong> atalho para consulta de horários em app
						externo.
					</li>
					<li>
						<strong>Portal Sagres:</strong> acesso rápido ao sistema acadêmico oficial.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Contexto acadêmico e limitações</h2>
				<p>
					As ferramentas foram pensadas para rotinas comuns da graduação: contato com
					docentes, planejamento de desempenho e acesso rápido a serviços usados com
					frequência.
				</p>
				<ul>
					<li>Resultados da calculadora são estimativas e não substituem regras oficiais.</li>
					<li>Contatos podem mudar com o tempo e dependem de atualização do banco.</li>
					<li>Links externos seguem disponibilidade e políticas dos respectivos sites.</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Origem dos dados</h2>
				<p>
					O banco de e-mails é mantido de forma colaborativa e curadoria manual. Novos
					registros podem ser sugeridos por formulário e entram no sistema após revisão.
				</p>
			</section>

			<section className={styles.section}>
				<h2>FAQ rápido</h2>
				<div className={styles.faqItem}>
					<h3>O site é oficial da UESC?</h3>
					<p>Não. Este projeto é independente e não possui vínculo institucional.</p>
				</div>
				<div className={styles.faqItem}>
					<h3>A calculadora garante minha aprovação?</h3>
					<p>
						Não. Ela ajuda no planejamento, mas a validação final depende das regras da
						disciplina e da universidade.
					</p>
				</div>
				<div className={styles.faqItem}>
					<h3>Como pedir correção de e-mail de professor?</h3>
					<p>
						Acesse o Banco de E-mails e use o formulário para solicitar inclusão ou
						ajuste.
					</p>
				</div>
			</section>
		</>
	)
}
