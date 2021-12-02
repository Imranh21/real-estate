import { Blogs } from "../../data/blog"

const Blog = () => {
    return (
        <div className="w-full my-20 py-20 bg-gray-50">
            <div className="w-4/5 m-auto sm:w-11/12">
                <div className="flex items-baseline">
                    <div className="w-10 h-0.5 bg-gray-400"></div>
                    <p className="text-gray-400 ml-2">Our Blogs</p>
                </div>
                
                <div className="w-full flex justify-between mb-6 items-center">
                    <h1 className="text-2xl font-bold">Our latest blogs</h1>
                    <p>View All <span></span></p>
                </div>
                <div className="grid grid-cols-3 gap-10 sm:grid-cols-1">
                    {Blogs.map(item => (
                        <div key={item.id}>
                            <img src="/images/hero.jpg" />
                            <div>
                                <p className="py-2 text-gray-400">{item.date}</p>
                                <hr />
                                <p className="py-2">{item.shortDes.slice(0, 50)}</p>
                                <button className="bg-blue-100 py-2 px-4 rounded text-blue-700">Read more</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Blog
