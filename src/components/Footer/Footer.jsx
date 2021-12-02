const Footer = () => {
    return (
        <div className="w-full">
            <div className="w-4/5 m-auto sm:w-11/12">
                <hr />
                <div className="flex justify-between py-4 items-center">
                    <img className="w-12" src="/logo.svg" />
                    <div className="flex">
                        <a href="#" className="px-4 py-2 rounded bg-gray-100 mr-2">facebook</a>
                        <a href="#" className="px-4 py-2 rounded bg-gray-100 mr-2">github</a>
                        <a href="#" className="px-4 py-2 rounded bg-gray-100">linkedin</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
