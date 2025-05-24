const PlanningCards = () => {
  return (
    <div className="flex flex-row z-2 bg-[#ededef] justify-between mx-15 py-26 ">
      <div className="flex flex-col text-xl text-[#8e8e8f] justify-center ">
        <pre>Spatial Planning </pre>
        <pre>Design Consultation</pre>
        <pre>Building Permit Application</pre>
        <pre>3D Rendering and Visualization</pre>
      </div>

      <div className="flex flex-col items-center justify-center  ">
        <div className="border-1 border-black rounded-full p-4 w-57 h-57 flex items-center justify-center ">
          <div className="border-1 border-black w-40 h-40 flex items-center justify-center rotate_animation">
            <div className="border-1 border-black rounded-full w-40 h-40 "></div>
          </div>
        </div>
      <div className="plus-container ">
        <div className="horizontal-line"></div>
        <div className="vertical-line"></div>
      </div>
      </div>

    </div>
  );
};

export default PlanningCards;
