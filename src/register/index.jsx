import { useContext } from "react";
import { ContainerRegister } from "./style";
import { ThemeContext } from "./../context/ThemeContext";
import { Footer } from "./../footer/index";
import { Step1Register } from "./step1/index";
import { Step2Register } from "./step2/index";

export const Register = () => {
  const { stepRegister } = useContext(ThemeContext);

  return (
    <>
      <ContainerRegister>
        {stepRegister == 1 && <Step1Register />}
        {stepRegister == 2 && <Step2Register />}
      </ContainerRegister>
      <Footer />
    </>
  );
};
