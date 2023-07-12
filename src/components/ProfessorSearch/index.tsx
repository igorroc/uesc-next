import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { FaFilter, FaUndoAlt } from "react-icons/fa"
import styles from "./professor_search.module.css"

export default function ProfessorSearch() {
	return (
		<div className={styles.searchBar}>
			<div className={styles.busca}>
				<AiOutlineSearch />
				<input id={styles.inputBusca} type="text" placeholder="Buscar professor..." />
				<FaUndoAlt className={styles.resetHidden} />
			</div>
			<button className={styles.filterButton}>
				<FaFilter />
				<span>Filtro</span>
			</button>
		</div>
	)
}
