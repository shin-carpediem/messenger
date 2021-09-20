import { db } from "./firebase";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
  updateDoc,
  serverTimestamp,
  query,
  orderBy,
  where,
} from "firebase/firestore";

export const initGet = async (uid) => {
  console.log(uid);

  const todo = await query(
    collection(db, "todo"),
    orderBy("createdAt", "desc"),
    where("uid", "==", uid)
  );

  const snapShot = await getDocs(todo);
  let todos = [];
  snapShot.forEach((doc) => {
    todos.push({
      id: doc.id,
      content: doc.data().content,
      isComplete: doc.data().isComplete,
    });
  });
  return todos;
};

export const addTodo = async (content, uid) => {
  await addDoc(collection(db, "todo"), {
    content: content,
    createdAt: serverTimestamp(),
    isComplete: false,
    uid: uid,
  });
};

export const todoDelete = async (id) => {
  await deleteDoc(doc(db, "todo", id));
};

export const toggleComplte = async (id) => {
  const todo = await query(doc(db, "todo", id));
  return await updateDoc(todo, {
    // もしチェックされたTOdoが未完了 →  isCompleteをtrue
    // もしチェックされたTOdoが完了 →  isCompleteをfalse
    isComplete: todo.isComplete ? false : true,
  });
};
