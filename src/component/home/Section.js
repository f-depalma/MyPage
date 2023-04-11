
export default function Section({ visibility, children }) {
    return (
        <section className="fixed left-0 top-24 h-full w-screen"
            style={visibility.getCss()}>
            {children}
        </section>
    )
}