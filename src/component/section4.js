export default function Section4() {

    const rowClass = "px-6 py-4 text-sm text-gray-100 whitespace-nowrap"
    const headerClass = "px-6 py-3 text-xs font-bold text-left text-zinc-300 uppercase "

    return (
        <div className="bg-black flex flex-col justify-center items-start p-16 h-full">
            <img src="Subject.png" className="object-contain fixed bottom-0 right-20 h-3/4 opacity-70" />
            <img src="VIA-logo.png" className="w-80"></img>
            <h1 className="text-2xl pt-10 font-bold text-zinc-300">Software Technology Engineering</h1>
            <h2>3° Semester</h2>
            <div className="flex flex-col pt-8">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden rounded">
                            <table className="min-w-full">
                                <thead style={{backgroundColor: "#bc8b00"}}>
                                    <tr>
                                        <th scope="col"
                                            className={headerClass}>Exam</th>
                                        <th scope="col"
                                            className={headerClass}>Grade</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-600 bg-zinc-800">
                                    <tr>
                                        <td className={rowClass}>SDJ1 Software Development with Java</td>
                                        <td className={rowClass}>12</td>
                                    </tr>
                                    <tr>
                                        <td className={rowClass}>SEP1 Semester Project 1</td>
                                        <td className={rowClass}>4</td>
                                    </tr>
                                    <tr>
                                        <td className={rowClass}>RWD1 Responsive Web Design</td>
                                        <td className={rowClass}>10</td>
                                    </tr>
                                    <tr>
                                        <td className={rowClass}>DMA1 Discrete Mathematics and Algorithms</td>
                                        <td className={rowClass}>12</td>
                                    </tr>
                                    <tr>
                                        <td className={rowClass}>SEP2 Semester Project 2</td>
                                        <td className={rowClass}>10</td>
                                    </tr>
                                    <tr>
                                        <td className={rowClass}>SWE1 Software Engineering</td>
                                        <td className={rowClass}>10</td>
                                    </tr>
                                    <tr>
                                        <td className={rowClass}>DBS1 Database Systems</td>
                                        <td className={rowClass}>12</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}