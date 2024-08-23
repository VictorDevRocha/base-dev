import { createContext, useState } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [stepRegister, setStepRegister] = useState(1);
  const [forgot, setForgot] = useState(false);

  // STEP Register
  const [fichaName, setFichaName] = useState("");
  const [fichaPhone, setFichaPhone] = useState("");
  const [fichaSexo, setFichaSexo] = useState("");
  const [fichaCity, setFichaCity] = useState("");
  const [fichaEstado, setFichaEstado] = useState("");
  const [fichaBirthday, setFichaBirthday] = useState("");
  const [fichaEmail, setFichaEmail] = useState("");
  const [fichaPassword, setFichaPassword] = useState("");

  const [fichaAttention, setFichaAttention] = useState("");
  const [fichaArea, setFichaArea] = useState("");
  const [fichaLenguages, setFichaLenguages] = useState([]);
  const [fichaWork, setFichaWork] = useState("");
  const [fichaTime, setFichaTime] = useState("");
  const [fichaLike, setFichaLike] = useState("");
  const [fichaAvatar, setFichaAvatar] = useState("");

  return (
    <ThemeContext.Provider
      value={{
        forgot,
        setForgot,
        stepRegister,
        fichaLike,
        fichaTime,
        fichaArea,
        fichaAttention,
        fichaAvatar,
        fichaBirthday,
        fichaCity,
        fichaEmail,
        fichaEstado,
        fichaName,
        fichaPassword,
        fichaPhone,
        fichaLenguages,
        fichaWork,
        fichaSexo,
        setStepRegister,
        setFichaArea,
        setFichaAttention,
        setFichaAvatar,
        setFichaBirthday,
        setFichaCity,
        setFichaEmail,
        setFichaEstado,
        setFichaName,
        setFichaPassword,
        setFichaPhone,
        setFichaLenguages,
        setFichaWork,
        setFichaSexo,
        setFichaLike,
        setFichaTime,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
