import { ContainerForgot, ModalCheck, Overlay } from "./style";
import { Footer } from "./../../footer/index";
import logo from "/logo.svg";
import bigCheck from "/svg/bigCheck.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "./../../context/ThemeContext";

export const ForgotPassword = () => {
  const { setForgot } = useContext(ThemeContext);
  const [modal, setModal] = useState(false);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setLoading(true);
    setModal(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Overlay className={modal ? "" : "disable"}></Overlay>
      <ModalCheck className={modal ? "" : "disable"}>
        <div className="modal">
          <div className="top_modal">
            <img src={bigCheck} alt="icone grande x vermelho" />
            <h5 className="heading24 primary_light font600">E-mail enviado</h5>
          </div>

          <div className="mid_modal">
            <p className="body16 gray2 font300">
              Enviamos um link para o email: <strong className="primary_light">{email}</strong>,
              acesse para redefinir sua senha!
            </p>
          </div>

          <button
            className="button_primary_light button button16 font700 full_width"
            onClick={() => {
              window.location.reload();
            }}>
            Voltar para o login!
          </button>
        </div>
      </ModalCheck>
      <ContainerForgot>
        <div className="box_form">
          <img src={logo} alt="logo" className="logo" />
          <div className="content_box_form">
            <p className="overline16 font700 white background_text_primary margin16">
              esqueci a senha
            </p>

            <form
              action="submit"
              method="POST"
              onSubmit={handleForgotPassword}
              className="margin16">
              <div className="box_input">
                <label htmlFor="login" className="body16 primary margin4 font400">
                  E-mail
                </label>
                <input
                  type="email"
                  name="login"
                  id="login"
                  value={email}
                  onChange={handleEmailChange}
                  className="body16 primary_light font400"
                />
              </div>
              <div className="bottom_buttons ajust_gap16">
                <button
                  className="button_transparent button button16 font700 fit_width"
                  onClick={() => {
                    setForgot(false);
                  }}>
                  VOLTAR
                </button>
                <button
                  type="submit"
                  className={
                    loading
                      ? "button_primary_light button button16 font700 full_width button_disabled"
                      : "button_primary_light button button16 font700 full_width"
                  }>
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </ContainerForgot>
      <Footer />
    </>
  );
};
