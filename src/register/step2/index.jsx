import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./../../context/ThemeContext";
import iconImage from "/svg/icon-image.png";
import bigCheck from "/svg/bigCheck.svg";
import { ModalCheck, Overlay } from "./../style";
import axios from "axios";

export const Step2Register = () => {
  const {
    stepRegister,
    fichaCity,
    fichaEmail,
    fichaEstado,
    fichaName,
    fichaPassword,
    fichaPhone,
    fichaSexo,
    fichaBirthday,
    fichaArea,
    fichaAttention,
    fichaAvatar,
    fichaWork,
    fichaTime,
    fichaLike,
    setFichaArea,
    setFichaAttention,
    setFichaAvatar,
    setFichaWork,
    setFichaLike,
    setFichaTime,
  } = useContext(ThemeContext);

  const base_url = process.env.REACT_APP_BASE_URL;

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const [valid, setValid] = useState(false);
  const [modal, setModal] = useState(false);

  const handleSubmit = () => {
    axios
      .post(
        `${base_url}/user`,
        {
          name: fichaName,
          password: fichaPassword,
          email: fichaEmail,
          image: fichaAvatar ? fichaAvatar : null,
          phone: fichaPhone,
          gender: fichaSexo,
          city: fichaCity,
          state: fichaEstado,
          birthday: fichaBirthday,
          caught_attention: fichaAttention,
          occupation_area: fichaWork,
          work: fichaArea,
          like_work: fichaLike,
          time_work: fichaTime,
        },
        config
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.message == "Usuario Registrado com sucesso!") {
          setModal(true);
        } else {
          response.data.message;
        }
      })
      .catch(() => {
        alert("Erro ao finalizar o cadastro!");
      });
  };

  useEffect(() => {
    if (
      fichaArea != "" &&
      fichaAttention != "" &&
      fichaWork != "" &&
      fichaTime != "" &&
      fichaLike != ""
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fichaArea, fichaAttention, fichaWork, fichaTime, fichaLike]);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFichaAvatar(file);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("imageInput").click();
  };

  return (
    <>
      <Overlay className={modal ? "" : "disable"}></Overlay>
      <ModalCheck className={modal ? "" : "disable"}>
        <div className="modal">
          <div className="top_modal">
            <img src={bigCheck} alt="icone grande x vermelho" />
            <h5 className="heading24 primary_light font600">Cadastro finalizado !</h5>
          </div>

          <button
            className="button_primary_light button button16 font700 full_width"
            onClick={() => {
              window.location.assign("/");
            }}>
            Voltar para o login!
          </button>
        </div>
      </ModalCheck>
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
                O que te chamou atenção no mundo da tech ? *
              </label>
              <select
                name="attention"
                id="attention"
                className="body14 font400 gray2 margin4"
                value={fichaAttention}
                onChange={(e) => {
                  setFichaAttention(e.target.value);
                }}>
                <option value="" className="body14 font400 gray2">
                  Selecione
                </option>
                <option value="Inovação constante" className="body14 font400 gray2">
                  Inovação constante
                </option>
                <option value="Desafios intelectuais" className="body14 font400 gray2">
                  Desafios intelectuais
                </option>
                <option value="Oportunidade de ser criativo" className="body14 font400 gray2">
                  Oportunidade de ser criativo
                </option>
                <option value="Construir o futuro" className="body14 font400 gray2">
                  Construir o futuro
                </option>
                <option value="Possibilidades de carreira" className="body14 font400 gray2">
                  Possibilidades de carreira
                </option>
                <option value="Comunidade tech" className="body14 font400 gray2">
                  Comunidade tech
                </option>
                <option value="Fazer impacto no mundo" className="body14 font400 gray2">
                  Fazer impacto no mundo
                </option>
                <option value="Aprendizado contínuo" className="body14 font400 gray2">
                  Aprendizado contínuo
                </option>
                <option value="Autonomia para resolver problemas" className="body14 font400 gray2">
                  Autonomia para resolver problemas
                </option>
                <option value="Paixão por tecnologia" className="body14 font400 gray2">
                  Paixão por tecnologia
                </option>
              </select>
            </div>

            <div className="input_step">
              <label htmlFor="Area" className="body14 font400 gray2 margin4">
                Trabalha atualmente na area de tecnologia ? *
              </label>
              <select
                name="Area"
                id="Area"
                className="body14 font400 gray2 margin4"
                value={fichaArea}
                onChange={(e) => {
                  setFichaArea(e.target.value);
                }}>
                <option value="" className="body14 font400 gray2">
                  Selecione
                </option>
                <option value={true} className="body14 font400 gray2">
                  Sim
                </option>
                <option value={false} className="body14 font400 gray2">
                  Não
                </option>
              </select>
            </div>

            <div className="input_step">
              <label htmlFor="função" className="body14 font400 gray2 margin4">
                Em qual função você atua ?
              </label>
              <select
                name="função"
                id="função"
                className="body14 font400 gray2 margin4"
                value={fichaWork}
                onChange={(e) => {
                  setFichaWork(e.target.value);
                }}>
                <option value="" className="body14 font400 gray2">
                  Selecione
                </option>
                <option value="Desenvolvedor Front-End" className="body14 font400 gray2">
                  Desenvolvedor Front-End
                </option>
                <option value="Desenvolvedor Back-End" className="body14 font400 gray2">
                  Desenvolvedor Back-End
                </option>
                <option value="Desenvolvedor Full Stack" className="body14 font400 gray2">
                  Desenvolvedor Full Stack
                </option>
                <option value="Designer UX/UI" className="body14 font400 gray2">
                  Designer UX/UI
                </option>
                <option value="Product Manager" className="body14 font400 gray2">
                  Product Manager
                </option>
                <option value="DevOps Engineer" className="body14 font400 gray2">
                  DevOps Engineer
                </option>
                <option value="Data Scientist" className="body14 font400 gray2">
                  Data Scientist
                </option>
                <option value="Data Engineer" className="body14 font400 gray2">
                  Data Engineer
                </option>
                <option value="QA Engineer" className="body14 font400 gray2">
                  QA Engineer
                </option>
                <option value="Cybersecurity Specialist" className="body14 font400 gray2">
                  Cybersecurity Specialist
                </option>
                <option value="Cloud Engineer" className="body14 font400 gray2">
                  Cloud Engineer
                </option>
                <option value="Tech Lead" className="body14 font400 gray2">
                  Tech Lead
                </option>
                <option value="Engenheiro de Machine Learning" className="body14 font400 gray2">
                  Engenheiro de Machine Learning
                </option>
                <option value="Analista de Negócios" className="body14 font400 gray2">
                  Analista de Negócios
                </option>
                <option value="Administrador de Sistemas" className="body14 font400 gray2">
                  Administrador de Sistemas
                </option>
                <option value="Arquiteto de Software" className="body14 font400 gray2">
                  Arquiteto de Software
                </option>
              </select>
            </div>

            <div className="input_step">
              <label htmlFor="like" className="body14 font400 gray2 margin4">
                Gosta do que faz ? *
              </label>
              <select
                name="like"
                id="like"
                className="body14 font400 gray2 margin4"
                value={fichaLike}
                onChange={(e) => {
                  setFichaLike(e.target.value);
                }}>
                <option value="" className="body14 font400 gray2">
                  Selecione
                </option>
                <option value="Sim">Sim</option>
                <option value="Um pouco">Um pouco</option>
                <option value="Não">Não</option>
              </select>
            </div>

            <div className="input_step">
              <label htmlFor="Time" className="body14 font400 gray2 margin4">
                Quanto tempo atua na sua função ? *
              </label>
              <select
                name="Time"
                id="Time"
                className="body14 font400 gray2 margin4"
                value={fichaTime}
                onChange={(e) => {
                  setFichaTime(e.target.value);
                }}>
                <option value="" className="body14 font400 gray2">
                  Selecione
                </option>
                <option value="Menos de 1 ano" className="body14 font400 gray2">
                  Menos de 1 ano
                </option>
                <option value="1 a 2 anos" className="body14 font400 gray2">
                  1 a 2 anos
                </option>
                <option value="3 a 5 anos" className="body14 font400 gray2">
                  3 a 5 anos
                </option>
                <option value="6 a 10 anos" className="body14 font400 gray2">
                  6 a 10 anos
                </option>
                <option value="Mais de 10 anos" className="body14 font400 gray2">
                  Mais de 10 anos
                </option>
              </select>
            </div>
          </div>

          <div className="right_step">
            <h4 className="heading24 font700 gray2">Foto do Usuario (opcional)</h4>

            <div className="box_image_avatar">
              <div className="avatar_content">
                <img
                  src={selectedImage}
                  alt="imagem selecionada"
                  className={selectedImage ? "avatar" : "disable"}
                />
                <img src={iconImage} alt="icone" className={selectedImage ? "disable" : ""} />
              </div>
              <input
                type="file"
                id="imageInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
                accept="image/*"
              />
              <button className="button_primary_light button button16" onClick={handleButtonClick}>
                Alterar
              </button>
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
            onClick={handleSubmit}>
            FINALIZAR
          </button>
        </div>
      </div>
    </>
  );
};
