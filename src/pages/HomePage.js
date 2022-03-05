import React from "react";

const HomePage = () => {
  return (
    <div className="bg-[white] h-[90vh] w-full flex flex-rol">
      <div className="w-[30%] border-r-[0.5px] border-gray-500/50 p-2">
        left
      </div>
      <div className="w-[70%] p-2">
        <div className="flex justify-between">
          <span>
            <h1>Today</h1>
          </span>
          <span></span>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
