import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "sonner";

export async function saveSnippet(id: string, name: string, code: string) {
    let collectionRef = collection(db, `users/${id}/snippets`);

    await addDoc(collectionRef, {
        name: name,
        code: code,
        created: Date.now(),
        edited: Date.now(),
    });

    toast("✅ Snippet Added!");
}