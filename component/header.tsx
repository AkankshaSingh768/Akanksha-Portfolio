'use client';

export default function Header() {
    return (
        <header className="w-full absolute top-0 left-0 z-50">
            <div className="max-w-full mx-auto flex items-center justify-between px-8 py-5">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-white tracking-wide">
                    <span className="text-pink-500">*</span>
                    Akanksha
                    <span className="text-pink-500">*</span>
                </h1>

                {/* Navigation */}
                <nav className="hidden md:flex text-white gap-8 text-lg font-medium">
                    <a href="#about" className="hover:text-pink-500 transition">About</a>
                    <a href="#skills" className="hover:text-pink-500 transition">Skills</a>
                    <a href="#experience" className="hover:text-pink-500 transition">Experience</a>
                    <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
                </nav>

                {/* Download CV Button */}
                <button className="bg-pink-500 font-bold cursor-pointer text-white px-5 py-2 rounded-lg shadow hover:bg-pink-600 transition">
                    Download CV
                </button>
            </div>
        </header>
    );
}
