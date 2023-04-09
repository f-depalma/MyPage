import { useWindowHeight } from "../hooks/window-height"
import Section from "./Section"
import Section1 from "./Section1"
import Section2 from "./Section2"
import { useVisibilities } from "../hooks/visibilities"

export default function Content() {

    const sections = [
        <Section1 />,
        <Section2 />
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
        <main className="bg-black h-screen w-screen" style={{ height: height }}>
            {contents}
        </main>
    )
}