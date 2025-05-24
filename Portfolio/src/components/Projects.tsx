import { useRef } from "react";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";

const Projects = () => {
  const projects = [
    {
      img: "https://cdn.prod.website-files.com/66a492925b4e3f2cc341d9b7/66fadc49700e52e148363a55_cover.png",
      alt: "Soban",
      title: "Soban",
      desc: "Korean restaurant specializing in authentic Korean cuisine.",
    },
    {
      img: "https://cdn.prod.website-files.com/66a492925b4e3f2cc341d9b7/66e05a426c7fa942e4240699_Ajisen%20(1).png",
      alt: "Ajisen",
      title: "Ajisen",
      desc: "Japanese restaurant chain specializing in authentic tonkotsu ramen.",
    },
    {
      img: "https://cdn.prod.website-files.com/66a492925b4e3f2cc341d9b7/66fad60654c2c9482dd23c78_Cover.png",
      alt: "Issan Der",
      title: "Issan Der",
      desc: "Modern Thai restaurant established in Toronto.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const onAutoplayTimeLeft = (
    _swiper: SwiperClass,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="  p-10 flex z-2 flex-col space-y-6 ">
      <pre className="text-8xl  text-[#1e1d1c] font-serif">Projects</pre>

      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        speed={1000}
        slidesPerView={"auto"}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        spaceBetween={-100}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 4000,
          reverseDirection: true,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="flex gap-10 relative items-center justify-center"
      >
        <div className="autoplay-progress">
          <svg viewBox="0 0 60 48" ref={progressCircle}>
            <line
              x1="56"
              y1="24"
              x2="4"
              y2="24"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col space-y-2 items-center"
          >
            <img
              src={project.img}
              alt={project.alt}
              className={
                "w-full h-3/3 object-cover transition-all duration-1000 " +
                (activeIndex === index ? "scale-110 z-10" : "scale-100  ")
              }
            />
          </SwiperSlide>
        ))}

        <div className="mt-8 text-center relative h-32">
          <h2
            key={activeIndex}
            className="text-5xl font-serif text-black font-bold transition-all duration-700 ease-out transform opacity-0 translate-y-8 animate-fadeInDown"
          >
            {projects[activeIndex].title}
          </h2>
          <p
            key={activeIndex + "-desc"}
            className="text-lg text-gray-600 transition-all duration-700 delay-100 ease-out transform opacity-0 translate-y-8 animate-fadeInDown"
          >
            {projects[activeIndex].desc}
          </p>
        </div>

      <div className="text-center px-5 py-1 border-1 hover:bg-[#1e1d1c] hover:text-[#ededef] transition cursor-pointer rounded-4xl w-fit mx-auto">
        View All
      </div>

      </Swiper>


    </div>
  );
};

export default Projects;
