
export default function Section({ visibility, children }) {
    return (
        <section
            className="section h-screen w-screen pt-24 pb-12"
            style={visibility.getCss()}
        >
            {children}
        </section>
    )
}