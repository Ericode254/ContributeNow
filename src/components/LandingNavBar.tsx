import { Button, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const LandingNavBar = () => {
    const navigate = useNavigate();

    return (
        <Navbar fluid rounded className="bg-gray-900 px-4 py-2">
            <Navbar.Brand href="/">
                <img src="/title-icon.png" className="mr-3 h-6 sm:h-9" alt="ContributeNow" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ContributeNow</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button onClick={() => navigate("/sign-in")} className="bg-blue-600 hover:bg-blue-700">
                    Sign in
                </Button>
                {/* <Navbar.Toggle /> */}
            </div>
            {/* <Navbar.Collapse>
                <Navbar.Link href="#" active className="text-white" aria-label="Home">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#" className="text-gray-300 hover:text-white" aria-label="About">
                    About
                </Navbar.Link>
                <Navbar.Link href="#" className="text-gray-300 hover:text-white" aria-label="Contact">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse> */}
        </Navbar>
    );
};

export default LandingNavBar;
