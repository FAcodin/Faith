import { useFormik } from "formik";
import react from "react";
const AssessmentQuestions = ({ listOfQuestions }) => {
    const formik= useFormik({
        initialValues:{
           
        },
        onSubmit:(values) => {

        },
        // validationSchema: loginvalidationSchema,
    })
    return (
        <form onSubmit={formik.handleSubmit} className=" h-screen grid grid rows-3 w-full mx-auto text-center bg-red-700">
            {listOfQuestions.map((q, index) => {
                return (
                    <div key={`option${index}`}>
                        <div>Question {index + 1}</div>
                        <div>{q.question}</div>
                        <div>{q.type === "multiple-choice" ?
                            <>{q.options.map((o, i) => {
                                return <div key={`option${index}`}>
                                    <input
                                        type="radio"
                                        id={`option${index}`}
                                        name={`option${index}`}
                                        value=""
                                    />
                                        {o}
                                </div>
                            })}</>
                            :
                            <div>Answer: <input id="answer" value={formik.values.answer} onChange={formik.handleChange} type="text" name="answer" placeholder="Enter Answer" className="m-4"/></div>}
                        </div>
                        <div ></div>
        <button className="bg-red-200 px-28 text-black font-bold text-xl">Submit</button>
                        <br />
                    </div>
                )
            })}
        </form>
    );
};
export default AssessmentQuestions;