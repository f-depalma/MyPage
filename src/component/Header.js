export default function Header() {
    return (
        <nav id="header" className="flex flex-row justify-between bg-neutral-950 z-50">
            <img src='logo.png' className="p-4"></img>
            <div className="flex flex-row justify-between items-center">
                <div className="pr-8 h-8 nav--item hover:text-gray-400 hover:cursor-pointer">My Projects</div>
                <div className="pr-12 h-8 nav--item hover:text-gray-400 hover:cursor-pointer">Contact Me</div>
            </div>
        </nav>
    )
}