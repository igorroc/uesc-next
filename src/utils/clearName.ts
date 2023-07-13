// function that clears the name of a professor, removing accents and special characters to normal characters
export function clearString(name: string) {
	var _a
	if (!name) return ""
	return (_a = name
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-zA-Z ]/g, "")
		.replace(/\s+/g, " ")
		.trim()
		.toLowerCase()) !== null && _a !== void 0
		? _a
		: ""
}
