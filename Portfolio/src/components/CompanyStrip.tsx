import {   useRef,   } from "react";

const companies = [
    {
        name: "Captains",
        src: "https://cdn.prod.website-files.com/66a492925b4e3f2cc341d9b7/66e9f0c07e108c7fd41de239_Captains.svg",
    },
    {
        name: "Ajisen",
        src: "https://cdn.prod.website-files.com/66a492925b4e3f2cc341d9b7/66e9eb2f97d8b9cf7b6cf30f_Ajisen.svg",
    },
    {
        name: "NYF",
        src: "https://cdn.prod.website-files.com/66a492925b4e3f2cc341d9b7/66b3c621e4652b10ca7d30a3_nyf.svg",
    },
    {
        name: "Issan",
        src: "https://cdn.prod.website-files.com/66a492925b4e3f2cc341d9b7/66e9eb7325a6dae9a5dc3fdb_Issan.svg",
    },
    {
        name: "Ishin",
        src: "https://cdn.prod.website-files.com/66a492925b4e3f2cc341d9b7/66e9eb4338b110862c050002_Ishin.svg",
    },
    {
        name: "Sessions",
        src: "https://cdn.prod.website-files.com/66a492925b4e3f2cc341d9b7/66e9eb872e29abca99131a66_Sessions.svg",
    },
];

const CompanyStrip = () => {
    const containerRef = useRef<HTMLDivElement>(null);
 
    
    return (
        <div
            className="overflow-hidden whitespace-nowrap z-2 py-14 px-0 relative"
            aria-live="off"
            aria-atomic="true"
        >
            <style>
                {`
                @keyframes scroll-strip {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-strip {
                    animation: scroll-strip 10s linear infinite;
                }
                `}
            </style>
            <div 
                ref={containerRef} 
                className="flex items-center animate-strip w-max"
            >
                 {companies.map((company, idx) => (
                    <div
                        key={`original-${company.name}-${idx}`}
                        className="flex-shrink-0 flex flex-col items-center mx-8"
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${idx + 1} of ${companies.length}`}
                    >
                        <img
                            src={company.src}
                            alt={company.name}
                            loading="lazy"
                            className="h-20 w-auto object-contain"
                        />
                    </div>
                ))}
                 {companies.map((company, idx) => (
                    <div
                        key={`duplicate-${company.name}-${idx}`}
                        className="flex-shrink-0 flex flex-col items-center mx-8"
                        role="group" 
                        aria-roledescription="slide"
                        aria-label={`${idx + 1} of ${companies.length}`}
                    >
                        <img
                            src={company.src}
                            alt={company.name}
                            loading="lazy"
                            className="h-22 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyStrip;