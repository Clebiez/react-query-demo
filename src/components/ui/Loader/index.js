import PacmanLoader from "react-spinners/PacmanLoader";

const Loader = ({ loading }) => (
  <div className="flex justify-center align-center mt-44 -ml-28">
    <div className="inline-block">
      <PacmanLoader loading={loading} size={50} />
    </div>
  </div>
);

export default Loader;
