import { useState } from "@hookstate/core";
import React, { useEffect } from "react";
import { getAnswers, getListOfQuestions } from "../../services/questions";
import store from "../../store";
import AssessmentQuestions from "../AssessmentQuestions";
import Completed from "../completed";
import { showResults } from "../../services/questions";

function Home() {
  const { user, questions, answers, results} = useState(store)
console.log("aa", results.length)
useEffect(() => {
  showResults(user.isAuthenticated.get())
  getListOfQuestions()
  getAnswers(user.isAuthenticated.get())
}, [])
if(results.length !==0){
  return <Completed/>
}
  return (
    <div>
      <AssessmentQuestions listOfQuestions={questions.get()} 
    answersDictionary={answers.get()}/>
    </div>
  )
}
export default Home