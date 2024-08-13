import { ContainerLogin } from "./style";
import { Footer } from "./../footer/index";
import logo from "/logo.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ForgotPassword } from "./forgot";
import { ThemeContext } from "./../context/ThemeContext";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { forgot, setForgot } = useContext(ThemeContext);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(login) && password.length >= 8) {
      alert("passei");
    } else {
      alert("não passei");
    }
  };

  const handleLoginChange = (e) => {
    const value = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setLoginError(true);
      setLogin(value);
    } else {
      setLoginError(false);
      setLogin(value);
    }
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;

    if (value.length < 8) {
      setPasswordError(true);
      setPassword(value);
    } else {
      setPasswordError(false);
      setPassword(value);
    }
  };

  return (
    <>
      {forgot ? (
        <ForgotPassword />
      ) : (
        <ContainerLogin>
          <div className="box_form">
            <img src={logo} alt="logo" className="logo" />
            <div className="content_box_form">
              <p className="overline16 font700 white background_text_primary margin16">
                Faça seu login!
              </p>
              <h1 className="heading32 font700 primary_light margin32">Bem vindo</h1>

              <form action="submit" method="POST" onSubmit={handleSubmitForm} className="margin16">
                <div className="box_input">
                  <label htmlFor="login" className="body16 primary margin4 font400">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="login"
                    id="login"
                    value={login}
                    onChange={handleLoginChange}
                    className="body16 primary_light font400"
                    style={{ borderBottom: loginError ? "1px solid red" : "" }}
                  />
                </div>

                <div className="box_input">
                  <label htmlFor="password" className="body16 primary margin4 font400">
                    Senha
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handleChangePassword}
                    className="body16 primary_light font400 margin4"
                    style={{ borderBottom: passwordError ? "1px solid red" : "" }}
                  />
                  <p className="body12 font400 primary">Mínimo de 8 caracteres</p>
                </div>

                <p
                  className="body14 font400 primary end"
                  onClick={() => {
                    setForgot(true);
                  }}>
                  Esqueceu a senha ?
                </p>

                <button type="submit" className="button_primary_light button button16 font700">
                  ENTRAR
                </button>
              </form>

              <Link to={"/cadastro"} className="body14 font400 gray">
                Não possui uma conta ?{" "}
                <span className="underline primary_light">Crie uma agora!</span>
              </Link>
            </div>
          </div>
        </ContainerLogin>
      )}
      <Footer />
    </>
  );
};
