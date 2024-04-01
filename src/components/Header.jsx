const Header = () => {
    return (
        <div className="bg-gray-700">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center text-white">Maltese Dictionary</h1>
                <p className="text-center mt-1 mb-10 text-slate-300 text-lg">Find Maltese Words</p>
                <div className="flex item-center justify-center mt-5">
                    <div className="flex border-2 border-gray-200 rounded">
<input className="px-4 py-2 md:w-80" type="text" placeholder="Search for a word"/>
<button className="bg-blue-400 border-l px-4 py-2">Search</button>
                    </div>
                </div>
        </div>
        </div>
       
    )
}
export default Header