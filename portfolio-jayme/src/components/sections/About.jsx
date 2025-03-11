import { RevealOnScroll } from "../RevealOnScroll";

export const About =  () => {

    const FrontendSkills = [
        "React", 
        "Vue",
        "TailwindCSS", 
        "DaisyUI",
        "laravel",
        "Xamarin"
    ];

    const BackendSkills = [
        "SQL",
        "MySQL",
        "Firebase",
        "Node.js",
        "laravel"
    ];

    const AISkills = [
        "YoloV8",
        "GhostmoduleV2",
        "NetShuffleV2",
    ];

    const OtherSkills =[
        "Photoshop",
        "lightroom",
        "sony vegas 14",
        "figma"
    ];



    return <sectionn id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                About Me
                </h2>
            <RevealOnScroll>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 trainsition-all"> 
                <p className="text-gray-300 mb-6">
                    Im a passionate developer, and I really love to work with new technologies and explore more of what these tools are
                    capable of. 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">

                            {FrontendSkills.map((tech,key )=>(
                                <span key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                
                                {tech}
                                </span>

                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">

                            {BackendSkills.map((tech,key )=>(
                                <span key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                
                                {tech}
                                </span>

                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">AI</h3>
                        <div className="flex flex-wrap gap-2">

                            {AISkills.map((tech,key )=>(
                                <span key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                
                                {tech}
                                </span>

                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Other</h3>
                        <div className="flex flex-wrap gap-2">

                            {OtherSkills.map((tech,key )=>(
                                <span key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                
                                {tech}
                                </span>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-8 ">
                <div className="p-6 rouded-xl border-white/10 border hover:-translate-y-1 transtition-all">
                <h3 className="text-xl font-bold mb-4">🏫 Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>B.S in Computer Science</strong>-University of San Calos Talamban Campus
                    </li>
                    <li>
                        Relevant course work: Data Structures,CCNA: Introduction to Networks
                        Introduction to Cybersecurity, Sparta: Data Analytics Certification, Networking 1-2, Web development,
                        COMPUTER HARDWARE SERVICING NC II.
                    </li>
                    
                </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-8 ">
                <div className="p-6 rouded-xl border-white/10 border hover:-translate-y-1 transtition-all">
                <h3 className="text-xl font-bold mb-4"> 🎉Extra curricular </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        I've been an amatuer photographer for 9 years, I do T-shirt designs, and dabble on magazine designing, studying raspberry pi
                        I did some robotics when I was in Senior High.
                    </li>
                    
                </ul>
                </div>
            </div>
            </RevealOnScroll>
        </div>
    </sectionn>
};