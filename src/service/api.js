import firebase from "firebase";
import { db } from "../service/firebase";

import { collection, addDoc } from "firebase/firestore";

// export const addTodo = (content, uid) => {
//   db.collection("todo").add({
//     content: content,
//     createdAt: createdAt,
//     isComplete: firebase.firestore.FieldValue.serverTimestamp(),
//     uid: "",
//   });
// };

const docRef = await addDoc(collection(db, "cities"), {
  content: content,
  createdAt: createdAt,
  isComplete: firebase.firestore.FieldValue.serverTimestamp(),
  uid: "",
});
console.log("Document written with ID: ", docRef.id);
