export default function Header() {
    return (
        <nav id="header" className="h-28 sm:h-24 flex flex-col sm:flex-row sm:justify-between bg-black z-50">
            <img src='logo.png' className="p-4 h-20 sm:h-24 object-contain"></img>
            <div className="flex flex-row justify-between items-center">
                <div className="px-8 h-8 nav--item hover:text-gray-400 hover:cursor-pointer text-xs sm:text-base">My Projects</div>
                <div className="px-8 h-8 nav--item hover:text-gray-400 hover:cursor-pointer text-xs sm:text-base">Others</div>
                <div className="px-8 h-8 nav--item hover:text-gray-400 hover:cursor-pointer text-xs sm:text-base">Contact Me</div>
            </div>
        </nav>
    )
}