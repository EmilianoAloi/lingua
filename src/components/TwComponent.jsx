"use client";
import { useEffect } from "react";

const TwComponent = () => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTWE } = await import("tw-elements");
      initTWE({ Tooltip });
    };
    init();
  }, []);

  return (
    <div className="mt-16 flex justify-center">
      <p className="text-lg">
        Hover the link to see the
        <a
          href="#"
          className="text-primary ps-1 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          data-twe-toggle="tooltip"
          title="Hi! I'm tooltip"
        >
          tooltip
        </a>
      </p>
    </div>
  );
};

export default TwComponent;
