"use client"

import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { FaFilter, FaUndoAlt } from "react-icons/fa"
import styles from "./professor_search.module.css"
import type { ProfessorFilter } from "../Professors"

type ProfessorSearchProps = {
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
	filter: ProfessorFilter
	setFilter: React.Dispatch<React.SetStateAction<ProfessorFilter>>
}

export default function ProfessorSearch(props: ProfessorSearchProps) {
	function handleFilter() {
		if (props.filter === "all") {
			props.setFilter("withPhoto")
			return
		}

		if (props.filter === "withPhoto") {
			props.setFilter("withoutPhoto")
			return
		}

		props.setFilter("all")
	}

	const filterLabel =
		props.filter === "all"
			? "Filtro: Todos"
			: props.filter === "withPhoto"
				? "Filtro: Com foto"
				: "Filtro: Sem foto"

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
			<button className={styles.filterButton} onClick={handleFilter} type="button">
				<FaFilter />
				<span>{filterLabel}</span>
			</button>
		</div>
	)
}
