import Link from "next/link"
import styles from "./page.module.css"

import { BsFillEnvelopeFill, BsGlobeAmericas } from "react-icons/bs"
import { FaCalculator } from "react-icons/fa"
import { BiBus } from "react-icons/bi"

export default function Home() {
	return (
		<>
			<section className={styles.intro}>
				<h1>Ferramentas para estudantes da UESC</h1>
				<p>
					Este site reúne utilitarios academicos para ajudar estudantes a resolver tarefas
					do dia a dia: encontrar contatos institucionais e planejar notas com mais
					clareza.
				</p>
				<p className={styles.notice}>
					Site independente, nao oficial, sem vinculo com a UESC.
				</p>
			</section>

			<div className={styles.pageCenter}>
				<div className={styles.wrapper} aria-label="Ferramentas disponiveis">
					<Link href="/emails" className={styles.links}>
						<BsFillEnvelopeFill size={48} />
						<span>Banco de E-mails</span>
					</Link>
					<Link className={styles.links} href="./calculadora">
						<FaCalculator size={48} />
						<span> Calculadora de Notas </span>
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
						media e necessidade de final.
					</li>
					<li>
						<strong>Horario de Onibus:</strong> atalho para consulta de horarios em app
						externo.
					</li>
					<li>
						<strong>Portal Sagres:</strong> acesso rapido ao sistema academico oficial.
					</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Contexto academico e limitacoes</h2>
				<p>
					As ferramentas foram pensadas para rotinas comuns da graduacao: contato com
					docentes, planejamento de desempenho e acesso rapido a servicos usados com
					frequencia.
				</p>
				<ul>
					<li>Resultados da calculadora sao estimativas e nao substituem regras oficiais.</li>
					<li>Contatos podem mudar com o tempo e dependem de atualizacao do banco.</li>
					<li>Links externos seguem disponibilidade e politicas dos respectivos sites.</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>Origem dos dados</h2>
				<p>
					O banco de e-mails e mantido de forma colaborativa e curadoria manual. Novos
					registros podem ser sugeridos por formulario e entram no sistema apos revisao.
				</p>
			</section>

			<section className={styles.section}>
				<h2>FAQ rapido</h2>
				<div className={styles.faqItem}>
					<h3>O site e oficial da UESC?</h3>
					<p>Nao. Este projeto e independente e nao possui vinculo institucional.</p>
				</div>
				<div className={styles.faqItem}>
					<h3>A calculadora garante minha aprovacao?</h3>
					<p>
						Nao. Ela ajuda no planejamento, mas a validacao final depende das regras da
						disciplina e da universidade.
					</p>
				</div>
				<div className={styles.faqItem}>
					<h3>Como pedir correcao de e-mail de professor?</h3>
					<p>
						Acesse o Banco de E-mails e use o formulario para solicitar inclusao ou
						ajuste.
					</p>
				</div>
			</section>
		</>
	)
}
