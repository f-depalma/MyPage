import { useWindowHeight } from "../hooks/window-height"
import Section from "./Section"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./section4"
import { useVisibilities } from "../hooks/visibilities"
import Section5 from "./Section5"

export default function Content() {

    const sections = [
        <Section1 />,
        <Section2 />,
        <Section3 />,
        <Section4 />,
        <Section5 />
    ]

    const screenHeight = useWindowHeight()
    const height = screenHeight + ((sections.length - 1) * 1000);

    const visibilities = useVisibilities(sections.length)

    const contents = sections.map((content, idx) => {
        return <Section
            key={idx}
            visibility={findVisibility(visibilities, idx)}
        >
            {content}
        </Section>
    })

    function findVisibility(list, id) {
        return list.find((obj) => obj.id === id)
    }

    return (
        <main className="w-screen" style={{ height: height }}>
            {contents}
        </main>
    )
}