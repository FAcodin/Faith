import { useState } from "@hookstate/core";
import React, { useEffect } from "react";
import { getListOfQuestions } from "../../services/questions";
import store from "../../store";
import AssessmentQuestions from "../AssessmentQuestions";

function Home() {
  const { user, questions } = useState(store)

  console.log(questions.get())

  useEffect(() => {
    getListOfQuestions()
  }, [])

  return (
    <AssessmentQuestions listOfQuestions={questions.get()} />
  )
}
export default Home