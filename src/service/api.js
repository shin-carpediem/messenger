import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const addTodo = async (content, uid) => {
  const docRef = await addDoc(collection(db, "todo"), {
    content: content,
    createdAt: serverTimestamp(),
    isComplete: false,
    uid: uid,
  });
  console.log("Document written with ID: ", docRef.id);
};
