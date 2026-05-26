"use client"

import React from "react"
import ProfessorSearch from "../ProfessorSearch"
import ProfessorList from "../ProfessorList"

export type ProfessorFilter = "all" | "withPhoto" | "withoutPhoto"

export default function Professors() {
	const [search, setSearch] = React.useState("")
	const [filter, setFilter] = React.useState<ProfessorFilter>("all")

	return (
		<>
			<ProfessorSearch search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
			<ProfessorList search={search} setSearch={setSearch} filter={filter} />
		</>
	)
}
