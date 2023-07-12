import { addDocument, getCollection } from "@/firebase/firestore/getData"
import { TCourse } from "@/types/course"
import { TProfessor } from "@/types/professor"

export async function getProfessors() {
	const fakeData: TProfessor[] = [
		{
			id: "1",
			name: "Professor 1",
			email: "professor1@gmail.com",
			nicknames: ["teste", "1"],
			course: "1",
		},
		{
			id: "2",
			name: "Professor 2",
			email: "professor2@gmail.com",
			nicknames: ["professor2", "2"],
			course: "2",
		},
		{
			id: "3",
			name: "Professor 3",
			email: "professor3@gmail.com",
			nicknames: ["professor3", "3"],
			course: "3",
		},
		{
			id: "4",
			name: "Professor 4",
			email: "professor4@gmail.com",
			nicknames: ["professor4", "4"],
			course: "4",
		},
		{
			id: "5",
			name: "Professor 5",
			email: "professor5@gmail.com",
			nicknames: ["professor5", "5"],
			course: "5",
		},
		{
			id: "6",
			name: "Professor 6",
			email: "professor6@gmail.com",
			nicknames: ["professor6", "6"],
			course: "6",
		},
		{
			id: "7",
			name: "Professor 7",
			email: "professor7@gmail.com",
			nicknames: ["professor7", "7"],
			course: "7",
		},
		{
			id: "8",
			name: "Professor 8",
			email: "professor8@gmail.com",
			nicknames: ["professor8", "8"],
			course: "8",
		},
		{
			id: "9",
			name: "Professor 9",
			email: "professor9@gmail.com",
			nicknames: ["professor9", "9"],
			course: "9",
		},
		{
			id: "10",
			name: "Professor 10",
			email: "professor10@gmail.com",
			nicknames: ["professor10", "10"],
			course: "10",
		},
		{
			id: "11",
			name: "Professor 1",
			email: "professor1@gmail.com",
			nicknames: ["professor1", "1"],
			course: "1",
		},
		{
			id: "12",
			name: "Professor 2",
			email: "professor2@gmail.com",
			nicknames: ["professor2", "2"],
			course: "2",
		},
		{
			id: "13",
			name: "Professor 3",
			email: "professor3@gmail.com",
			nicknames: ["professor3", "3"],
			course: "3",
		},
		{
			id: "14",
			name: "Professor 4",
			email: "professor4@gmail.com",
			nicknames: ["professor4", "4"],
			course: "4",
		},
		{
			id: "15",
			name: "Professor 5",
			email: "professor5@gmail.com",
			nicknames: ["professor5", "5"],
			course: "5",
		},
		{
			id: "16",
			name: "Professor 6",
			email: "professor6@gmail.com",
			nicknames: ["professor6", "6"],
			course: "6",
		},
		{
			id: "17",
			name: "Professor 7",
			email: "professor7@gmail.com",
			nicknames: ["professor7", "7"],
			course: "7",
		},
		{
			id: "18",
			name: "Professor 8",
			email: "professor8@gmail.com",
			nicknames: ["professor8", "8"],
			course: "8",
		},
		{
			id: "19",
			name: "Professor 9",
			email: "professor9@gmail.com",
			nicknames: ["professor9", "9"],
			course: "9",
		},
		{
			id: "20",
			name: "Professor 10",
			email: "professor10@gmail.com",
			nicknames: ["professor10", "10"],
			course: "10",
		},
	]

	return fakeData

	// const professorsResponse = await getCollection("professors")
	// if (!professorsResponse.error && professorsResponse.result) {
	// 	const professors: TProfessor[] = professorsResponse.result.docs.map((doc) => {
	// 		return {
	// 			id: doc.id,
	// 			name: doc.data().name,
	// 			email: doc.data().email,
	// 			nicknames: doc.data().nicknames,
	// 			course: doc.data().course,
	// 		}
	// 	})

	// 	return professors
	// }
	// return []
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
