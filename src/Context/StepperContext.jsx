import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
  const [formDetail, setFormDetail] = useState({
    personal: {
      fName: "",
      FatherName: "",
      lName: "",
    },
    address: {
      city: "",
      country: "",
    },
    payment: {
      num: "",
      cvv: "",
    },
  });

  function handleChange(e) {
    const { id, value, name } = e.target;
    setFormDetail((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        [id]: value,
      },
    }));
  }

  return (
    <StepperContext.Provider
      value={{ formDetail, handleChange, setFormDetail }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export const useStepperContext = () => useContext(StepperContext);
