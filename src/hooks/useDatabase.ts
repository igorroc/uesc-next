import { getCollection } from "@/firebase/firestore/getData"
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
