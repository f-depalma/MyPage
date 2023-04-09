export default function Skill({ props: { icon, name, description } }) {
    return (
        <div className="min-w-32 max-w-32 px-6">
            <img src={icon} className="pb-4 w-32 m-auto" />
            <h4 className="text-center text-xl font-bold pb-2">{name}</h4>
            <p className="text-center">{description}</p>
        </div>
    )
}