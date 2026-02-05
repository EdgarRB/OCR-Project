interface ILoadingProgressProps {
  loading: boolean;
  progress: number;
}

const LoadingProgress = ({ loading, progress }: ILoadingProgressProps) => {
  return (
    <>
      {loading && (
        <div className="w-full flex items-center justify-center">
          <div className="w-2/3 bg-orange-200 rounded-sm ">
            <div
              className="bg-red-400  text-xs font-medium text-black text-center m-1 leading-none rounded-sm h-4 flex items-center justify-center"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingProgress;
