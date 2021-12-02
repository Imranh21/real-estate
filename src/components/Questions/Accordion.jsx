import { useState } from "react"

const Accordion = ({q, a}) => {
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
    }
    return (
        <div className="flex-grow my-2 bg-gray-100">
            <div onClick={handleClick} className="flex justify-between px-3 py-2 items-center">
                <p>{q}</p>
                <div className="text-2xl">{isActive ? "-" : "+"}</div>
            </div>
            {isActive && <div className="py-2 px-3">{a}</div>}
        </div>
    )
}

export default Accordion
