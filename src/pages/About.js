import { useContext } from "react";
import distributeContexts from "../contexts/distributeContexts";

const About = () => {
  const { text, onChangeTextHandler } = useContext(distributeContexts);

  const onClickHandler = () => {
    onChangeTextHandler();
  };
  return (
    <div className="p-4">
      <p className="text-lg mb-4">{text}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={onClickHandler}
      >
        Click Me!
      </button>
    </div>
  );
};

export default About;
