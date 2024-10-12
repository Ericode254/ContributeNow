import { SignInButton } from "@clerk/clerk-react";
import { Navbar } from "flowbite-react";

const LandingNavBar = () => {
    return (
        <Navbar fluid rounded className="bg-gray-900">
            <Navbar.Brand href="/">
                <img src="/title-icon.png" className="mr-3 h-6 sm:h-9" alt="ContributeNow" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ContributeNow</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <div className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md shadow-md transition-all transform hover:scale-105">
                    <SignInButton />
                </div>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active className="text-white">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#" className="text-gray-300 hover:text-white">
                    About
                </Navbar.Link>
                <Navbar.Link href="#" className="text-gray-300 hover:text-white">
                    Services
                </Navbar.Link>
                <Navbar.Link href="#" className="text-gray-300 hover:text-white">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="#" className="text-gray-300 hover:text-white">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default LandingNavBar;
