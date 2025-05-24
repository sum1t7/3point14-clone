import "../App.css"
const Navbar = () => {
    return (
        <nav className="bg-[#ededef] py-7 px-7 sticky top-0 z-50">
            <div className=" mx-auto flex items-center "> 
            
            <div className="text-white font-bold flex-1 text-xl">🔴</div>

            <div className="flex space-x-4 justify-center flex-1  items-center">
            <div className="font-semibold">Formal</div>
            <div className="px-7 py-4 bg-[#3d3b39] relative cursor-pointer rounded-4xl">
                <div className="p-3 rounded-full absolute top-1 left-1 bg-[#efefef]"></div>
            </div>
            <div className="">Raw</div>
            </div>

            <ul className="flex space-x-8 flex-1 items-center">
                <li>
                 <a href="#home" className="text-black    text-xl -z-10">Projects</a>
                </li>
                 <li>
                <a href="#about" className="text-black text-xl hover:text-white transition">Services</a>
                </li>
                <li>
                <a href="#projects" className="text-black text-xl hover:text-white transition">About</a>
                </li>
                <div className="px-5 py-1 border-1 hover:bg-[#1e1d1c] hover:text-[#ededef] transition cursor-pointer rounded-4xl">Let's Collaborate</div>
            </ul>
             

            </div>
        </nav>
    );
}

export default Navbar