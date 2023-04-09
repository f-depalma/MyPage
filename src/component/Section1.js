import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export default function Section1() {
    return (
        <div className="bg-black h-full w-full flex flex-col items-center justify-center">
            <img src='face-in-black.jpg' className='face-image z-0 object-contain' />
            <h1 className='md:text-7xl text-4xl z-10 text-center'>FRANCESCO DE PALMA</h1>
            <br />
            <h2 className='md:text-4xl text-xl z-10 text-center'>
                Full-stack Software Developer
                <FontAwesomeIcon className="pl-4" icon={faLaptopCode} beat style={{ color: "#ca0" }} />
            </h2>
        </div>
    )
}