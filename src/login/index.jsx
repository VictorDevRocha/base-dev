import { ContainerLogin } from "./style";
import { Footer } from "./../footer/index";
import logo from "/logo.svg";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <ContainerLogin>
        <div className="box_form">
          <img src={logo} alt="logo" />
          <div className="content_box_form">
            <p className="overline16 font700 white background_text_primary">Faça seu login!</p>
            <p className="heading32 font700 primary_light">Bem vindo</p>
            <form action="submit">
              <div className="box_input margin16">
                <label htmlFor="login" className="body12 primary font400">
                  E-mail
                </label>
                <input
                  type="email"
                  name="login"
                  id="login"
                  className="body12 primary_light font400"
                />
              </div>
              <div className="box_input">
                <label htmlFor="password" className="body12 primary font400">
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="body12 primary_light font400"
                />
              </div>
              <p className="body12 font400 primary">Esqueceu a senha ?</p>
              <button className="button_primary button button16 font700">ENTRAR</button>
            </form>
            <Link to={"/cadastro"} className="body12 font400 gray">
              Não possui uma conta ?{" "}
              <span className="underline primary_light">Crie uma agora!</span>
            </Link>
          </div>
        </div>
      </ContainerLogin>
      <Footer />
    </>
  );
};
