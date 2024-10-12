import LandingNavBar from "../components/LandingNavBar";

const LandingPage = () => {
    return (
        <>
            <LandingNavBar />
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center">
                <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">

                    {/* Left Section (Text and Buttons) */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide leading-tight">
                            Showcase Your GitHub Projects to the World
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-300">
                            Take control of your repositories, make them open source, and let others discover and contribute to your work.
                        </p>

                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-lg rounded-md shadow-lg transition transform hover:scale-105">
                                View Projects
                            </button>
                            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-lg rounded-md shadow-lg transition transform hover:scale-105">
                                Make Open Source
                            </button>
                        </div>
                    </div>

                    {/* Right Section (Image) */}
                    <div className="hidden md:flex md:w-1/2 mt-8 md:mt-0 justify-center md:justify-end">
                        <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="Open Source GitHub"
                            className="w-64 h-64 object-cover transform hover:scale-110 transition duration-300"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
