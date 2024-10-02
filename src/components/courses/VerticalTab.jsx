"use client";
import { useState } from "react";

const VerticalTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "NIVELES",
      subtitle: "A1, A2, B1, B2, C1, C2",
      content: "Foto",
    },
    {
      title: "FECHA DE INICIO",
      subtitle: "",
      content: "Export a quality Next.js codebase...",
    },
    {
      title: "CAPACIDAD",
      subtitle: "",
      content: "Foto",
    },
    {
      title: "CLASES Y ACTIVIDADES",
      subtitle: "",
      content: "Foto",
    },
  ];

  return (
    <div className="flex space-x-4">
      {/* Vertical Tabs */}
      <div className="flex flex-col space-y-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-left py-2 px-4 rounded-lg cursor-pointer transition-colors ${
              activeTab === index
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <div className="flex flex-col">
              <div className="font-semibold text-xl">{tab.title}</div>
              {/* <p> {tab.subtitle}</p> */}
            </div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-white rounded-lg shadow-md flex-1">
        <h2 className="text-lg font-semibold">{tabs[activeTab].title}</h2>

        <p className="mt-2 text-gray-600">{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default VerticalTab;
