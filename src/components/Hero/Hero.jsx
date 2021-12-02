import { HeaderData } from "../../data/header"

const Hero = () => {
    const {heading, subHeading, stats} = HeaderData
    return (
        <div className="w-full pb-20 bg-hero-pattern bg-cover bg-center bg-no-repeat ">
            <div className="w-4/5 m-auto py-10 sm:w-11/12">
                <h1 className="text-6xl w-2/4 mt-20 mb-10 font-bold  text-gray-800 sm:text-4xl sm:w-full">
                    {heading}
                </h1>
                <p className="text-1xl w-6/12 mb-5 text-gray-700 sm:w-11/12">{subHeading}</p>
                <button className="py-2 px-6 text-gray-200 bg-gray-800">Get Started</button>
                {/* <div className="flex mt-10">
                    {stats.map(stat => (
                        <div key={stat.id} className="mr-10">
                            <h2 className="text-2xl font-bold text-gray-900 sm:text-1xl">{stat.countity}<span className="text-blue-600">+</span></h2>
                            <p className="font-bold text-gray-500 sm:text-1xl">{stat.heading}</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Hero
