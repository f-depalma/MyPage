export default function Header() {
    return (
        <nav id="header" className="h-24 flex flex-col sm:flex-row sm:justify-between bg-black z-50">
            <img src='logo512.png' className="sm:p-4 h-14 sm:h-24 object-contain"></img>
            <div className="flex flex-row justify-between items-center mr-4 sm:mr-8">
                <div className="px-6 sm:px-8 nav--item hover:text-gray-400 hover:cursor-pointer text-xs sm:text-base">My Projects</div>
                <div className="px-6 sm:px-8 nav--item hover:text-gray-400 hover:cursor-pointer text-xs sm:text-base">Others</div>
                <div className="px-6 sm:px-6 py-2 flex flex-col justify-center bg-yellow-600 text-black rounded nav--item hover:text-white hover:bg-zinc-800 hover:cursor-pointer text-xs sm:text-base">Contact Me</div>
            </div>
        </nav>
    )
}