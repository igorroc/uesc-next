import { CollectionReference } from "firebase/firestore"

export type TProfessor = {
	id?: string
	name: string
	email: string
	nicknames: string[]
	course: CollectionReference
	photo?: string
}
