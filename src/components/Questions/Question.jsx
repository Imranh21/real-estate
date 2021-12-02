import { Questions } from "../../data/question"
import { useState } from "react"
import Accordion from "./Accordion"

const Question = () => {
    const [accordian, setAccordion] = useState(false)

    console.log(accordian)
    const handleAccordion = () => {
        setAccordion(!accordian)
        // console.log("clicked")
    }
    return (
        <div className="w-full">
            <div className="w-4/5 m-auto py-20 sm:w-11/12">
                <div className="flex items-baseline">
                    <div className="w-10 h-0.5 bg-gray-400"></div>
                    <p className="text-gray-400 ml-2">Questions</p>
                </div>
                <div className="w-full flex justify-between sm:flex-col">
                    <div className="w-6/12 sm:w-full">
                        <h1 className="text-4xl sm:text-2xl">Frequently Asked Questions</h1>
                        <p className="text-gray-400 my-6 w-full">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                        <button className="py-2 px-4 bg-gray-800 text-gray-100">See more</button>
                    </div>
                    <div className="w-6/12 ml-20 mt-10 flex flex-col sm:w-full sm:ml-0">
                        {Questions.map(q => (
                            <Accordion q={q.question} a={q.answer}/>
                        ))}
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Question
