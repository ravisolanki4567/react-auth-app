import { createContext, useState } from "react";
const AppContexts = createContext();
export default AppContexts;

export const AppProvider = ({ children }) => {
  const [username, setUsername] = useState("Aems");
  const [no, setNo] = useState(0);
  const [theme, setTheme] = useState(false);

  const changeUserNameHandler = () => {
    setUsername("Ravi");
  };

  const changeThemeHandler = () => {
    setTheme(!theme);
  };

  let myProvider = {
    username: username,
    no: no,
    onChangeUserNameHandler: changeUserNameHandler,
    isDarkTheme: changeThemeHandler,
    theme: theme,
  };

  return (
    <AppContexts.Provider value={myProvider}>{children}</AppContexts.Provider>
  );
};
