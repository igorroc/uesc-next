"use client"

import React from "react"
import ProfessorSearch from "../ProfessorSearch"
import ProfessorList from "../ProfessorList"

export default function Professors() {
	const [search, setSearch] = React.useState("")
	const [filter, setFilter] = React.useState("")

	return (
		<>
			<ProfessorSearch search={search} setSearch={setSearch} />
			<ProfessorList search={search} setSearch={setSearch} />
		</>
	)
}
