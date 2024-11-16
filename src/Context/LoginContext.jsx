import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log(isLoggedIn, "loginContext");
  // const navigate = useNavigate();
  // const Login = () => {
  //   setIsLoggedIn(true);
  // };

  // const Logout = () => {
  //   setIsLoggedIn(true);
  // };
  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        username,
        password,
        setPassword,
        setUserName,
        // Login,
        // Logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
