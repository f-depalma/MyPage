import { skills } from "../resurce/skills"
import Skill from "./Skill"

export default function Section2() {

    const skillComponents = skills.map((skill, idx) => <Skill key={idx} props={skill} />)

    return (
        <div className="bg-white text-neutral-800 flex justify-center">
            <div className="w-10/12 overflow-x-scroll flex justify-start pr-0">
                <div className="w-fit flex flex-row justify-center items-center h-screen  m-auto">
                    {skillComponents}
                </div>
            </div>
        </div>
    )
}