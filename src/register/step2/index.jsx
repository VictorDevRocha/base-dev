import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./../../context/ThemeContext";
import axios from "axios";

export const Step1Register = () => {
  const {
    stepRegister,
    setStepRegister,
    fichaArea,
    fichaAttention,
    fichaAvatar,
    setFichaArea,
    setFichaAttention,
    setFichaAvatar,
    fichaLenguages,
    fichaWork,
    setFichaLenguages,
    setFichaWork,
  } = useContext(ThemeContext);

  const [cities, setCities] = useState([]);
  const [estados, setEstados] = useState([]);
  const [valid, setValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/").then((response) => {
      setEstados(response.data);
    });
  }, []);

  useEffect(() => {
    if (fichaEstado == "") {
      return;
    }
    axios
      .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${fichaEstado}/municipios`)
      .then((response) => {
        setCities(response.data);
      });
  }, [fichaEstado]);

  const handleNameChange = (e) => {
    setFichaName(e.target.value);

    if (e.target.value.length <= 5) {
      e.target.classList.add("error");
    } else {
      e.target.classList.remove("error");
    }
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value;

    input = input.replace(/\D/g, "");

    if (input.length > 10) {
      input = input.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (input.length > 6) {
      input = input.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (input.length > 2) {
      input = input.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else if (input.length > 0) {
      input = input.replace(/^(\d{0,2})/, "($1");
    } else {
      input = "";
    }

    e.target.value = input;

    setFichaPhone(input);

    if (input.length < 14 && input.length > 0) {
      e.target.classList.add("error");
    } else {
      e.target.classList.remove("error");
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;

    setFichaEmail(email);

    if (emailRegex.test(email)) {
      e.target.classList.remove("error");
    } else {
      e.target.classList.add("error");
    }
  };

  const handlePasswordChange = (e) => {
    setFichaPassword(e.target.value);

    if (e.target.value.length >= 8) {
      e.target.classList.remove("error");
    } else {
      e.target.classList.add("error");
    }
  };

  const handleNextStep = () => {
    if (fichaPassword.length >= 8 && fichaName.length >= 5) {
      setStepRegister(2);
    }
  };

  useEffect(() => {
    if (emailRegex.test(fichaEmail) && fichaName.length >= 5 && fichaPassword.length >= 8) {
      setValid(true);
    } else {
      setValid(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fichaEmail, fichaName, fichaPassword]);

  return (
    <div className="content_step">
      <div className="top_step">
        <p className="overline16 gray font700 upper margin8">Etapa {stepRegister} de 2</p>
        <h1 className="heading40 font700 gray2">Informações Adicionais</h1>
      </div>
      <div className="mid_step">
        <div className="left_step">
          <h4 className="heading24 font700 gray2">Informações profissionais</h4>

          <div className="input_step">
            <label htmlFor="attention" className="body14 font400 gray2 margin4">
              O que te chamou atenção no mundo dev ? *
            </label>
            <select
              name="attention"
              id="attention"
              className="body14 font400 gray2 margin4"
              value={fichaSexo}
              onChange={(e) => {
                setFichaSexo(e.target.value);
              }}>
              <option value="1">1</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bottom_step">
        <button
          className={
            valid
              ? "button16 white button button_primary_light upper"
              : "button16 white button button_primary_light upper button_disable"
          }
          onClick={handleNextStep}>
          CONTINUAR
        </button>
      </div>
    </div>
  );
};
