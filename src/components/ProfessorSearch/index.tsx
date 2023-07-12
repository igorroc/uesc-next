"use client"

import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { FaFilter, FaUndoAlt } from "react-icons/fa"
import styles from "./professor_search.module.css"

type ProfessorSearchProps = {
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function ProfessorSearch(props: ProfessorSearchProps) {
	return (
		<div className={styles.searchBar}>
			<div className={styles.busca}>
				<AiOutlineSearch />
				<input
					id={styles.inputBusca}
					type="text"
					placeholder="Buscar professor..."
					value={props.search}
					onChange={(e) => props.setSearch(e.target.value)}
				/>
				<FaUndoAlt className={styles.resetHidden} />
			</div>
			<button className={styles.filterButton}>
				<FaFilter />
				<span>Filtro</span>
			</button>
		</div>
	)
}
