import { createContext, useState } from "react";

const DistributeContexts = createContext();

export default DistributeContexts;

export const CompoProvider = ({ children }) => {
  const [text, setText] = useState(
    "An opinion paragraph should include a topic sentence"
  );

  const changeTextHandler = () => {
    setText("Hello!");
  };

  const myProvider = {
    text: text,
    onChangeTextHandler: changeTextHandler,
  };
  return (
    <DistributeContexts.Provider value={myProvider}>
      {children}
    </DistributeContexts.Provider>
  );
};
