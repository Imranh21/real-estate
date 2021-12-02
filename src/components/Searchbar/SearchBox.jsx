import {GrLocation} from 'react-icons/gr'
import {BiHomeAlt, BiDollarCircle} from 'react-icons/bi'

const SearchBox = () => {
    return (
        <div className="w-full z-10 -mt-20 my-20">
            <div className="w-4/5 shadow-2xl bg-gray-50 m-auto py-6 px-8 sm:w-11/12 sm:px-4">
                <h1 className="text-2xl mb-6 sm:mb-4">Search the price you looking for</h1>
                <form className="flex flex-auto justify-between items-center sm:flex-col">
                    <div className="bg-gray-100 border-solid border-2 border-light-blue-600 flex items-center px-4 sm:w-full sm:justify-between sm:my-2">
                        <input className="flex-grow py-2 bg-transparent focus:outline-none" placeholder="location"/>
                        <GrLocation />
                    </div>
                    <div className="bg-gray-100 w-auto border-solid border-2 border-light-blue-600 flex items-center px-4 sm:w-full sm:justify-between sm:my-2">
                        <input className="flex-grow py-2 bg-transparent focus:outline-none" placeholder="Type"/>
                        <BiHomeAlt />
                    </div>
                    <div className="bg-gray-100 w-auto border-solid border-2 border-light-blue-600 flex items-center px-4 sm:w-full sm:justify-between sm:my-2">
                        <input className="flex-grow py-2 bg-transparent focus:outline-none" placeholder="Budget"/>
                        <BiDollarCircle />
                    </div>
                    <button className="bg-gray-800 text-gray-100 py-2 px-10 border-solid border-2 border-gray-800 sm:w-full sm:mt-4">Search</button>
                </form>
            </div>
            
        </div>
    )
}

export default SearchBox
