import { Links } from "../../data/navbar"
import { useState, useEffect } from "react"
import './Navbar.css'

const Navbar = () => {
    const [show, setShow] = useState("hidden")
    const [menuBtn, setMenuBtn] = useState(true)
    const [scroll, setScroll] = useState("transparent");

    const showMenu = () => {
        setShow("flex")
        setMenuBtn(false)
    }
    const closeMenu = () => {
        setShow("hidden")
        setMenuBtn(true)
    }
    

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.innerHeight >= 50){
                setScroll("bg-gray-50")
            }
        });
            
    }, [])
    return (
        <div className={`w-full fixed top-0 left-0 ${scroll}`}>
            <div className="w-4/5 m-auto flex justify-between items-center py-4 relative sm:w-11/12">
                <div>
                    <img className="w-12" src="/logo.svg" />
                </div>
                <div className="hidden sm:inline-flex">
                    {menuBtn ? 
                    <button onClick={showMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    :
                    <button onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>}
                </div>
                {/* <div className="hidden sm:inline-flex" onClick={() => setShow("flex")}>Close</div> */}
                <div className={`flex justify-between items-center sm:absolute sm:w-full sm:${show}  sm:top-20 sm:py-10 sm:px-6 sm:flex-col sm:shadow-xl sm:bg-gray-50 sm:rounded`}>
                    {Links.map(link => (
                        <a className="text-sm text-gray-700 mx-2 sm:my-2" key={link.id} href="#" >{link.title}</a>
                    ))}
                    <div className="ml-6 sm:mt-6">
                        <button className="py-2 px-6 bg-gray-800 text-gray-100">Sign Up</button>
                        <button className="py-2 px-6 text-gray-700 font-bold">Login</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
