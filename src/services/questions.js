import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import store from "../store";

export const getListOfQuestions = async () => {
  const db = getFirestore();
  const q = query(collection(db, "question"));

  const querySnapshot = await getDocs(q);
  const questions = []
  querySnapshot.forEach((doc) => {
    questions.push(doc.data())
  });
  store.questions.set(questions)

}

