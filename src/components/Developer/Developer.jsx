import React from "react";
import Terminal from "../Terminal/Terminal";
import IDCard from "../ProfileCard/IdCard";

function Developer() {
  return (
    <div className="flex h-screen">
      {/* <!-- Left Column --> */}
      <div className="w-1/2 flex flex-col">
        {/* <!-- Developer Section --> */}
        <div className="h-1/4 bg-black flex items-center justify-center border border-green-500">
          <span className="text-green-500 text-lg font-mono font-bold uppercase shadow-lg">
            Dev Dashboard
          </span>
        </div>
        {/* <!-- ID Card Section --> */}
        <div className="h-3/4 bg-black flex items-center justify-center border border-green-500">
          <IDCard />
        </div>
      </div>

      {/* <!-- Right Column --> */}
      <div className="w-1/2 bg-gray-800 flex items-center justify-center">
        <Terminal />
      </div>
    </div>
  );
}

export default Developer;