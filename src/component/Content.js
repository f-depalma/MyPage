import { useState } from "react"
import { useWindowHeight } from "../hooks/window-height"
import Section from "./Section"
import Section1 from "./Section1"
import Section2 from "./Section2"

export default function Content() {

    const [section, setSection] = useState(0)

    const sections = [
        <Section1/>,
        <Section2/>
    ]

    const contents = sections.map((content, idx) => <Section key={idx} section={section} id={idx}>{content}</Section>)

    
    const height = useWindowHeight() * sections.length;

    return (
        <main className="bg-black h-screen w-screen" style={{height: height}}>
            {contents}
        </main>
    )
}