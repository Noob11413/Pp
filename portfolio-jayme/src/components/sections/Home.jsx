export const Home = () => {
    return <section id="about" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 
            bg-clip-text text-transparent leading-right">
            Hi, I'm Joel T Jayme
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto text-center">
                Hey, I’m Joel Jayme, I develop web applications using React, 
                Tailwind, and firebase and many more frameworks, and i recently
                learned how train an AI model using stacked ensemble. 
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#Projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View projects
                </a>
                <a href="#Contact Me" className="border border-blue-500/50 text-text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">Contact Me</a>
            </div>
        </div>
    </section>

};
