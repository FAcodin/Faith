import { useState } from "@hookstate/core";
import { useFormik } from "formik";
const AssessmentQuestions = ({ listOfQuestions }) => {
    const processing = useState(false)
    const currentQuestionIndex = useState(0)
    const formik = useFormik({
        initialValues: {

        },
        onSubmit: async (values) => {
            processing.set(true)
            console.log("I am here")
        },
        // validationSchema: loginvalidationSchema,
    })
    const index = currentQuestionIndex.get()
    const q = listOfQuestions[index]
    console.log(q)
    const next = () => {
        currentQuestionIndex.set(currentQuestionIndex.get() + 1);

    };

    let buttonHtml;
    if (index === 0) {
        buttonHtml = (
            <>
                <input type="button" value="Next" onClick={next} />
            </>
        );
    } else if (index === listOfQuestions.length - 1) {
        buttonHtml = (
            <>
                <input
                    onClick={() => {
                        currentQuestionIndex.set(currentQuestionIndex.get() - 1);
                    }}
                    type="button"
                    value="Previous"
                />
                <input type="submit" value="Submit" />
            </>
        );
    } else {
        <>
            <input type="button" value="Next" onClick={next} />
        </>;
    }

    return (
        <form onSubmit={formik.handleSubmit} className="bg-[url('images/question.jpg')] bg-cover h-screen">
            <div key={`question${index}`}>
                <div>Question {index + 1}</div>
                <div>{q?.question}</div>
                <div>{q?.type === "multiple-choice" ?
                    <>{q?.options.map((o, i) => {
                        return (
                            <div key={`option${i}`}>
                                <input
                                    type="radio"
                                    id={`${q.id}-option${i}`}
                                    name={`${q.id}-option${i}`}
                                    onChange={() => formik.setFieldValue(q.id, o)}
                                    value={o}
                                    checked={formik.values[q.id] === o}
                                />
                                {o}
                            </div>
                        )
                    })}</>
                    :
                    <div >Answer: <input id="answer" value={formik.values.answer} onChange={formik.handleChange} type="text" name="answer" placeholder="Enter Answer" className="m-4" /></div>}
                </div>
                <div ></div>
                {buttonHtml}
                <br />
            </div>
            {/* <input type="submit" name='submit' value="Submit" /> */}
            {/* {processing && <FaSpinner icon="spinner" className="spinner animate-spin" color="white" size={35} />} */}
        </form>
    );
};
export default AssessmentQuestions;