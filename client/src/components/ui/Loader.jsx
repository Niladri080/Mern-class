import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={{ marginTop: "400px", textAlign: "center" }}>
      <PropagateLoader color={"rgb(var(--primary))"} size={15} />
    </div>
  );
};

export default Loader;
