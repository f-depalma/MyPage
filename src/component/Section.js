
export default function Section({ visibility, children }) {
    return (
        <section
            className="section h-screen w-screen"
            style={visibility.getCss()}
        >
            {children}
        </section>
    )
}