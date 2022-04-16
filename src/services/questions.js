import { collection, query, where, getDocs, getFirestore, doc, setDoc } from "firebase/firestore";
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

export const submitAnswers = async (answers, onSuccess, onFailure) => {
  const db = getFirestore();

  setDoc(doc(db, "submissions"), answers).then(() => {
    if (onSuccess) {
      onSuccess();
    }
  }).catch((error) => {
    console.log("emailNotSent")
    // ..
    if (onFailure) {
      onFailure(error.message);
    }
  });
}

const checkCorrect = (qid, aid) => async (questionId, answerId) => {
  const db = getFirestore();
  const q = query(
    collection(db, "answers"),
    where("questionId", "==", questionId),
    where("answerId","==", answerId)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

}