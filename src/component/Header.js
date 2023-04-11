import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav id="header" className="h-24 flex flex-col items-center sm:flex-row sm:justify-between bg-black z-50">
            <a href="/" className="w-24 sm:p-4 sm:ml-6">
                <img src='logo512.png' className="m-auto h-14 sm:h-24 object-contain"></img>
            </a>
            <div className="flex flex-row justify-between items-center mr-4 sm:mr-8">
                <div className="px-6 sm:px-8 nav--item text-gray-200 hover:text-gray-400 hover:cursor-pointer text-xs sm:text-base">
                <a href="/my-projects">My Projects</a>
                </div>
                <div className="px-6 sm:px-8 nav--item text-gray-200 hover:text-gray-400 hover:cursor-pointer text-xs sm:text-base">
                    <a href="/others">Others</a>
                </div>
                <div className="px-6 sm:px-6 py-2 flex flex-col justify-center bg-yellow-600 text-black rounded nav--item hover:text-white hover:bg-zinc-800 hover:cursor-pointer text-xs sm:text-base">
                    <Link to="/contact-me">Contact Me</Link>
                </div>
            </div>
        </nav>
    )
}