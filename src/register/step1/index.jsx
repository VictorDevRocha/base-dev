import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./../../context/ThemeContext";
import axios from "axios";

export const Step1Register = () => {
  const {
    stepRegister,
    setStepRegister,
    fichaCity,
    fichaEmail,
    fichaEstado,
    fichaName,
    fichaPassword,
    fichaPhone,
    fichaSexo,
    fichaBirthday,
    setFichaBirthday,
    setFichaCity,
    setFichaEmail,
    setFichaEstado,
    setFichaName,
    setFichaPassword,
    setFichaPhone,
    setFichaSexo,
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
        <h1 className="heading40 font700 gray2">Cadastre seus dados</h1>
      </div>
      <div className="mid_step">
        <div className="left_step">
          <h4 className="heading24 font700 gray2">Dados Pessoais</h4>

          <div className="input_step">
            <label htmlFor="name" className="body14 font400 gray2 margin4">
              Nome completo *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="body14 font400 gray2 margin4"
              value={fichaName}
              onChange={handleNameChange}
            />
          </div>

          <div className="input_step">
            <label htmlFor="phone" className="body14 font400 gray2 margin4">
              Telefone / WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="body14 font400 gray2 margin4"
              value={fichaPhone}
              onChange={handlePhoneChange}
            />
          </div>

          <div className="input_step">
            <label htmlFor="gender" className="body14 font400 gray2 margin4">
              Sexo
            </label>
            <select
              name="gender"
              id="gender"
              className="body14 font400 gray2 margin4"
              value={fichaSexo}
              onChange={(e) => {
                setFichaSexo(e.target.value);
              }}>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>

          <div className="input_step">
            <label htmlFor="estado" className="body14 font400 gray2 margin4">
              Estado
            </label>
            <select
              name="estado"
              id="estado"
              className="body14 font400 gray2 margin4"
              value={fichaEstado}
              onChange={(e) => {
                setFichaEstado(e.target.value);
              }}>
              <option value="" disabled>
                Selecione
              </option>
              {estados.map((uf, index) => (
                <option key={index} value={uf.sigla}>
                  {uf.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="input_step">
            <label htmlFor="naturalidade" className="body14 font400 gray2 margin4">
              Cidade
            </label>
            <select
              name="naturalidade"
              id="naturalidade"
              className="body14 font400 gray2 margin4"
              value={fichaCity}
              onChange={(e) => {
                setFichaCity(e.target.value);
              }}>
              <option value="" disabled>
                Selecione
              </option>
              {cities.map((city) => (
                <option key={city.id} value={city.nome}>
                  {city.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="input_step">
            <label htmlFor="birthday" className="body14 font400 gray2 margin4">
              Data de nascimento
            </label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              className="body14 font400 gray2 margin4 fit_width"
              value={fichaBirthday}
              onChange={(e) => {
                setFichaBirthday(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="right_step">
          <h4 className="heading24 font700 gray2">Criação do Usuário</h4>
          <div className="input_step">
            <label htmlFor="email" className="body14 font400 gray2 margin4">
              E-mail *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="body14 font400 gray2 margin4"
              value={fichaEmail}
              onChange={handleEmailChange}
            />
          </div>

          <div className="input_step">
            <label htmlFor="password" className="body14 font400 gray2 margin4">
              Senha *
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="body14 font400 gray2 margin4"
              value={fichaPassword}
              onChange={handlePasswordChange}
            />
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
