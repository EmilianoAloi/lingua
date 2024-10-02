import React from "react";

const VerticalLoader = () => {
  return (
    <div className="relative w-2 h-20 bg-[#f04967] rounded">
      <div
        className="absolute bottom-0 left-0 w-full  bg-slate-200 rounded"
        style={{ animation: "load 5s linear " }}
      ></div>
      <style jsx="true">{`
        @keyframes load {
          0% {
            height: 100%;
          }
          100% {
            height: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default VerticalLoader;
