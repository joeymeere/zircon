import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

export async function addSolution(
    id: string,
    correct: boolean, 
    solution: string, 
    execTime: number,
    user: {
        username: string, 
        image: string, 
        userId: string
    }
) {
    try {
        if (!correct) throw new Error("The provided solution must be correct to be submitted");

        const collRef = collection(db, `challenges/${id}/solutions`);

        await addDoc(collRef, {
            username: user.username,
            image: user.image,
            userId: user.userId,
            rating: 0,
            execTime: execTime,
            solution: solution,
        });
    } catch(err) {
        throw err;
    }
}