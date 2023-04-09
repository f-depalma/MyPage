import { useEffect, useState } from "react"
import useScrollPosition from "../hooks/scroll-position"

export default function Section({id, section, children}) {
    const [visible, setVisible] = useState('section-hide')

    useEffect(() => {
        if (section === id) {
            setTimeout(() => setVisible('section-visible'))
        }
    })

    const scrollPosition = useScrollPosition();
    

    return (
        <section className={`${visible} + section h-screen w-screen`}>
            {children}
        </section>
    )
}