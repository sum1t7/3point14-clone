import { useEffect, useRef, useState } from "react";

const DesignInto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Element is visible");
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px", 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={` p-10 my-10 flex z-2 flex-col space-y-4 transition-all duration-1000 ease-out
          ${
            isVisible
              ? " transform translate-y-0 opacity-100 "
              : " transform translate-y-20 opacity-0 "
          }
          `}
    >
      <p className="text-8xl flex gap-10  text-[#1e1d1c] font-serif">
        <a href="/secret-page">
          <img
            src="https://cdn.prod.website-files.com/665a18870d1e95bfe9fd9110/66a0f6b17b682694c623d711_BlueStar.svg"
            loading="lazy"
            alt=""
          />
        </a>{" "}
        We live & breathe design
      </p>
      <p className="text-xl text-[#1e1d1c] mt-7">100+ projects completed</p>
      <p className="text-2xl w-[70%] text-justify ">
        Throughout the last 20 years, we’ve developed and transformed spaces,
        brands, & businesses across the commercial as well as the residential
        landscape globally. We’ve cultivated an extensive network of
        professionals and creatives that we work with to get the best possible
        end result. We’ve also honed a deep understanding on how to execute and
        make sure things get done.
      </p>{" "}
      <div className="text-center mt-2 px-5 py-1 border-1 hover:bg-[#1e1d1c] hover:text-[#ededef] transition cursor-pointer rounded-4xl w-fit  ">
        About Us
      </div>
    </div>
  );
};

export default DesignInto;
