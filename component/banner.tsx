export default function Banner() {
    return (
        <div className="relative min-h-screen flex items-center justify-center text-center bg-[url('/banner.webp')] bg-cover bg-center">
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-white">
                <h1 className="text-7xl font-bold">
                    I'm Akanksha Singh
                </h1>

                <h2 className="text-5xl  text-white mt-4">
                    Web developer
                </h2>

                <button className="mt-6 bg-pink-500 font-bold cursor-pointer text-white px-5 py-2 rounded-lg shadow hover:bg-pink-600 transition">
                    Contact me
                </button>
            </div>
        </div>
    );
}
