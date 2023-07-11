import React from "react"

import GoBack from "@/components/GoBack"
import Loading from "@/components/Loading"

import { IoMdMail } from "react-icons/io"
import { BsFillPersonFill } from "react-icons/bs"

export default function Emails() {
	return (
		<>
			<GoBack />

			<div>
				<div id="wrapperProfessores" className="wrapperFlex">
					<div className="professor" id="loadingState">
						<div className="title">
							<Loading />
							<h3>Carregando banco de dados</h3>
						</div>
						<div className="description">
							<div className="mail">
								<IoMdMail />
								<a href="mailto:igor_roc@hotmail.com.br">
									Demorando muito? Clique aqui e me mande um email!
								</a>
							</div>
						</div>
					</div>
				</div>
				<div id="notFound">
					<div className="text">
						<p>Não encontrou o seu professor?</p>
						<p>Clique no botão baixo e adicionarei o mais rápido possível!</p>
					</div>
					<button className="btn btn-primary btn-icon">
						<BsFillPersonFill />
						Novo Professor
					</button>
				</div>
			</div>
		</>
	)
}
