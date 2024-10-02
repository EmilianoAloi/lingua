"use client";
import { useState, useEffect } from "react";
import VerticalLoader from "./VerticalLoader";
import Image from "next/image";

const VerticalTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Niveles",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ",
      content: "Foto",
      img: "/img/levels.jpg",
    },
    {
      title: "Fechas de inicio",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ",
      content: "Foto",
      img: "/img/date.jpg",
    },
    {
      title: "Capacidad",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ",
      content: "Foto",
      img: "/img/capacity.jpg",
    },
    {
      title: "Clases y actividades",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur ",
      content: "Foto",
      img: "/img/classes.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [tabs.length]);

  return (
    <div className="flex space-x-8 ">
      {/* Tabs */}
      <div className="flex w-2/5 flex-col overflow-x-auto overflow-visible space-x-0 space-y-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex text-left py-2  cursor-pointer transition-colors ${
              activeTab === index ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {/* Loader visible solo si la pestaña está activa */}
            {activeTab === index && <VerticalLoader />}

            <div className="ps-4">
              <h4 className="text-lg font-semibold"> {tab.title}</h4>
              <p className="text-sm mt-2">{tab.subtitle}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-md mt-4 lg:mt-0 flex-1 overflow-hidden max-h-[420px] ">
        {/* <h2 className="text-lg font-semibold">{tabs[activeTab].title}</h2>
        <p className="mt-2 text-gray-600">{tabs[activeTab].content}</p> */}
        <Image
          width={2000}
          height={2000}
          src={tabs[activeTab].img}
          className="tab-img "
        />
      </div>
    </div>
  );
};

export default VerticalTab;
