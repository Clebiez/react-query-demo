import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loader = ({ isLoading, children }) => {
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    } else {
      setShowLoader(true);
    }
  }, [isLoading]);

  if (!showLoader) return children;

  return (
    <div className="flex justify-center align-center mt-44 -ml-28">
      <div className="inline-block">
        <PacmanLoader size={50} />
      </div>
    </div>
  );
};

export default Loader;
