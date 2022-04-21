import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router";
import { submitAnswers } from "../services/questions";
import { useState as useGlobalState } from "@hookstate/core";
import store from "../store";
 
const AssessmentQuestions = ({ listOfQuestions, answersDictionary }) => {
    const navigate = useNavigate()
    const { user } = useGlobalState(store)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState({})
    const [previousAnswers, setPreviousAnswers] = useState({})
    const selectedAnswer = useState()
    const [processing, setProcessing] = useState(false)
    const q = listOfQuestions[currentQuestionIndex]
    const questionId = q?.id
    const selectedAnswers = answersDictionary[questionId]
    useEffect(() => {
        setAnswers(selectedAnswers)
    }, [selectedAnswers])
    const formik = useFormik({
 
 
        initialValues: {
 
        },
        onSubmit: async (values) => {
            setProcessing(true)
            submitAnswers(answers, onSuccess, true)
        },
 
    })
    const questionsIndex = currentQuestionIndex
    const next = () => {
        submitAnswers(answers, onNextSuccess)
    }
    const previous = () => {
        setAnswers(previousAnswers)
        setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
    const onNextSuccess = (answers) => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setPreviousAnswers(answers)
        //setAnswers({answer: ''})
    }
    const onSuccess = (answers) => {
        navigate("/completed")
    }
    let buttonHtml;
    const nextButton = <button className=" m-3 bg-white hover:bg-red-700 font-bold text-red-300 py-2 px-4 md: w-1/6 rounded-full place-items-center" onClick={next} type="button"> Next</button>
    const previousButton = <button className="m-3 bg-white hover:bg-red-700 font-bold text-red-300 py-2 px-4 md: w-1/6 rounded-full place-items-center" type="button" onClick={previous}> Previous</button>
    if (currentQuestionIndex === 0) {
        buttonHtml = (
            <>
                {nextButton}
            </>
        );
    } else if (currentQuestionIndex === listOfQuestions.length - 1) {
        buttonHtml = (
            <>
                {previousButton}
                <button className=" m-3 bg-white hover:bg-red-700 font-bold text-red-300 py-2 px-4 md: w-1/6 rounded-full place-items-center" type="submit"> Submit</button>
            </>
        );
    } else {
        buttonHtml = (
            <>
                {previousButton}
                {nextButton}
            </>
        )
    }
    return (
        <div className="bg-[url('./images/question.jpg')] bg-cover h-screen">
            <form onSubmit={formik.handleSubmit}>
                <div >
                    <div key={`questions${currentQuestionIndex}`}>
                        <div >Question {currentQuestionIndex + 1}</div>
                        <div>{q?.question}</div>
                        <div>
                            {q?.type === "multiple-choice" ?
                                <>
                                    {q?.options?.map((o, i) => {
                                        return (
                                            <>
 
                                                <div key={`option${i}`}>
                                                    <input type="radio"
                                                        id={`option${i}`}
                                                        name={`option${i}`}
                                                        onChange={() => {
                                                            formik.setFieldValue(q.id, o)
                                                            setAnswers({ ...answers, answer: o, questionId: q.id, uid: user.uid.get() })
                                                        }
                                                        }
                                                        checked={formik.values[q.id] === o || selectedAnswers?.answer === o}
                                                        value={o}
                                                    />
                                                    {o}
                                                </div>
                                            </>
                                        );
 
 
                                    })}</>
                                :
 
                                <div>
                                    Answer:<input value={answers?.answer} onChange={(e) => {
                                        setAnswers({ ...answers, answer: e.target.value, questionid: q.id, uid: user.uid.get() })
                                    }} className='text-red-300 mb-5 border-b-2 border-black bg-zinc-100 md:w-1/2 h-10   py-2 w-full placeholder:text-black-200 font-md  text-left md:text-3xl sm:text-2xl text-center' id="Answer" name="Answer" placeholder='Enter Text' />
                                </div>
                            }</div>
 
 
                    </div>
 
                    <div>
                        {buttonHtml}
                    </div>
                </div>
 
            </form>
        </div>
    )
}
 
export default AssessmentQuestions;