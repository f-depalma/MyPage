import { skills } from "../resurce/skills"
import Skill from "./Skill"

export default function Section2() {

    const skillComponents = skills.map((skill, idx) => <Skill key={idx} props={skill}/>)
    
    return (
        <div className="bg-white text-neutral-800 flex justify-center">
            <div className="flex flex-row items-center justify-around flex-wrap h-screen w-10/12">
                {skillComponents}
            </div>
        </div>
    )
}