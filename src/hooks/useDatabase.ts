import { addDocument, getCollection } from "@/firebase/firestore/getData"
import { TCourse } from "@/types/course"
import { TProfessor } from "@/types/professor"

export async function getProfessors() {
	const professorsResponse = await getCollection("professors")
	if (!professorsResponse.error && professorsResponse.result) {
		const professors: TProfessor[] = professorsResponse.result.docs.map((doc) => {
			return {
				id: doc.id,
				name: doc.data().name,
				email: doc.data().email,
				nicknames: doc.data().nicknames,
				course: doc.data().course,
			}
		})
		return professors
	}
	return []
}

export async function addProfessor(professor: TProfessor) {
	const response = await addDocument("professors", professor)
	if (!response.error && response.result) {
		return response.result
	}
	return null
}

export async function getCourses() {
	const coursesResponse = await getCollection("courses")
	if (!coursesResponse.error && coursesResponse.result) {
		const courses: TCourse[] = coursesResponse.result.docs.map((doc) => {
			return {
				id: doc.id,
				name: doc.data().name,
			}
		})
		return courses
	}
	return []
}
