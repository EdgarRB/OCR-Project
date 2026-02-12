import { type JSX } from "react";

interface ILoadingProgressProps {
  progress: number;
}

const LoadingProgress = ({ progress }: ILoadingProgressProps) => {
  const handleProgressToShow = () => {
    const divElement = (
      <div
        className={`bg-red-400 mt-0.5 ml-1 h-4 -skew-x-20`}
        style={{ width: "13%" }}
      ></div>
    );
    if (progress && progress <= 7) {
      let incrementComponent: JSX.Element[] = [];
      for (let i = 0; i < progress; i++) {
        incrementComponent = incrementComponent.concat(divElement);
      }
      return incrementComponent;
    } else {
      return divElement;
    }
  };

  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-2/3 bg-orange-200 rounded flex flex-row h-6 pl-2.5 overflow-hidden border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
        {handleProgressToShow()}
      </div>
    </div>
  );
};

export default LoadingProgress;
