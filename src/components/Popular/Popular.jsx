import {Items} from '../../data/residence'
import {GrLocation} from 'react-icons/gr'
import {BiBed} from 'react-icons/bi'
import {BsAspectRatio} from 'react-icons/bs'




const Popular = () => {
    return (
        <div className="w-full my-10">
            <div className="w-4/5 m-auto sm:w-11/12">
                <div className="flex items-baseline">
                    <div className="w-10 h-0.5 bg-gray-400"></div>
                    <p className="text-gray-400 ml-2">Popular</p>
                </div>
                {/* <p className="text-gray-400">Populer</p> */}
                <div className="w-full flex justify-between mb-6 items-center">
                    <h1 className="text-2xl font-bold sm:text-lg">Our Popular residence</h1>
                    <p>View All <span></span></p>
                </div>
                <div className="grid grid-cols-3 gap-10 sm:grid-cols-1">
                    {Items.map(item => (
                        <div key={item.id} className="">
                            <img src="/images/hero.jpg" />
                            <div className="p-2">
                                <div className="flex items-center text-gray-400">
                                    <GrLocation />
                                    <p className="ml-1">{item.location}</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex items-center text-gray-400">
                                        <BiBed />
                                        <p>{item.beds}</p>
                                    </div>
                                    <div className="flex items-center ml-4 text-gray-400">
                                        <BsAspectRatio />
                                        <p>{item.ratio}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-4 items-center">
                                    <button className="bg-gray-900 flex-grow py-2 px-4 rounded text-gray-50">Buy now</button>
                                    <h2 className="text-2xl ml-4 font-bold">{item.cost}</h2>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
            
        </div>
    )
}

export default Popular
