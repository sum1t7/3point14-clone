const Footer = () => {
    return (
        <div className="bg-[#272625] sticky bottom-0 w-full p-10 -z-10">
            <div className="flex flex-wrap justify-between items-start px-8 pt-4 pr-40 gap-8">
                {/* Contact Section */}
                <div className="flex flex-col min-w-[180px]">
                    <div className="text-2xl  mb-2 text-white ">Contact</div>
                    <a href="tel:9056040314" className="block mb-1 text-xl text-[#868686] hover:text-white transition">
                        (905) 604-0314
                    </a>
                    <a href="mailto:hi@3point14.ca" className="block text-xl text-[#868686] hover:text-white transition">
                        hi@3point14.ca
                    </a>
                </div>
                {/* Company Section */}
                <div className="flex flex-col min-w-[180px]">
                    <div className="text-2xl  mb-2 text-white ">Company</div>
                    <a
                        href="https://maps.app.goo.gl/jQprFJhRbjTzVQyFA"
                        className="block text-xl text-[#868686] hover:text-white transition"
                    >
                        400 Esna Park Dr #3,<br />
                        Markham, ON L3R 3K2
                    </a>
                </div>
                {/* Socials Section */}
                <div className="flex flex-col min-w-[180px]">
                    <div className="text-2xl  mb-2 text-white ">Socials</div>
                    <a href="#" className="block text-xl text-[#868686] hover:text-white transition mb-1">
                        Instagram
                    </a>
                    <a href="#" className="block text-xl text-[#868686] hover:text-white transition mb-1">
                        Behance
                    </a>
                    <a
                        href="https://maps.app.goo.gl/jQprFJhRbjTzVQyFA"
                        className="block text-xl text-[#868686] hover:text-white transition"
                    >
                        Google
                    </a>
                </div>
                 <div className="flex flex-col min-w-[180px]">
                    <div className="text-2xl  mb-2 text-white  ">Useful Links</div>
                    <a
                        href="https://www.3point14.ca/#services"
                        className="block text-xl text-[#868686] hover:text-white transition mb-1 leading-tight"
                    >
                        Services
                    </a>
                    <a href="/projects" className="block text-xl text-[#868686] hover:text-white transition mb-1 leading-tight">
                        Works
                    </a>
                    <a href="/about" className="block text-xl text-[#868686] hover:text-white transition mb-1 leading-tight">
                        About
                    </a>
                    <a href="/contact-us" className="block text-xl text-[#868686] hover:text-white transition leading-tight">
                        Contact
                    </a>
                </div>
            </div>
            <div className="flex  p-4">
                <img
                    src="https://cdn.prod.website-files.com/665a18870d1e95bfe9fd9110/66a21cdae42c822bf70eb7c3_FooterLogo.svg"
                    alt="Footer Logo"
                 />
            </div>
        </div>
    );
};

export default Footer;
