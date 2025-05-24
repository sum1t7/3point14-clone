import PlanningCards from "./PlanningCards";

const DesignNext = () => {
  return (
    <div className=" relative p-10 my-10 z-2 lg:mt-35 flex flex-col space-y-4 ">
      <p className="text-8xl flex gap-10 justify-end  text-[#1e1d1c] font-serif">
        Design services & more
      </p>

      <div className=" mt-40 flex w-full   space-y-33 flex-col">
        <div className="relative   ">
          <div className="sticky top-20 z-13 ">
            <div className="flex flex-col pt-5 bg-[#ededef] ">
              <div className="flex justify-between mb-5 ">
                <div className=" text-5xl  text-[#1e1d1c] font-serif  ">
                  <sup className="text-[#868686] text-2xl font-mont">01</sup>{" "}
                  Planning
                </div>
                <div className="text-center px-5 mr-24 py-1.5 border-1 hover:bg-[#1e1d1c] hover:text-[#ededef] transition cursor-pointer rounded-4xl h-fit w-fit  ">
                  Contact Us
                </div>
              </div>
              <hr />
            </div>
          </div>
          <PlanningCards />
          <div className="sticky top-42.5 z-12   ">
            <div className="flex flex-col pt-5 bg-[#ededef] ">
              <div className="flex justify-between mb-5 ">
                <div className=" text-5xl  text-[#1e1d1c] font-serif  ">
                  <sup className="text-[#868686] text-2xl font-mont">02</sup>{" "}
                  Design
                </div>
              </div>
              <hr />
            </div>
          </div>
          <PlanningCards />

          <div className="sticky top-65 z-11">
            <div className="flex flex-col pt-5 bg-[#ededef] ">
              <div className="flex justify-between mb-5 ">
                <div className=" text-5xl  text-[#1e1d1c] font-serif  ">
                  <sup className="text-[#868686] text-2xl font-mont">03</sup>{" "}
                  Execution
                </div>
                 
              </div>
              <hr />
            </div>
          </div>
          <PlanningCards />
        </div>
      </div>
    </div>
  );
};

export default DesignNext;
