/* eslint-disable react-hooks/exhaustive-deps */
import { ContainerDashboard, ModalCheck, Overlay } from "./style";
import { HeaderDashboard } from "./../headerDashboard";
import { Footer } from "./../footer/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "./../loading/index";
import home from "/svg/comunidade/home.svg";
import search from "/svg/comunidade/search.svg";
import image1 from "/svg/comunidade/image1.png";
import hot from "/svg/comunidade/hot.svg";
import avatar from "/svg/dashboard/avatar.svg";
import like from "/svg/comunidade/like.svg";
import likeActive from "/svg/comunidade/like-active.svg";
import deslike from "/svg/comunidade/deslike.svg";
import deslikeActive from "/svg/comunidade/deslike-active.svg";
import bigCheck from "/svg/bigCheck.svg";

export const Comunidade = () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const base_url_image = process.env.REACT_APP_BASE_URL_IMAGE;
  const token = localStorage.getItem("tokenVr");
  const idUser = localStorage.getItem("idUserVr");

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Barrer ${token}`,
    },
  };

  const [valid, setValid] = useState(false);
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios
      .get(`${base_url}/posts/allPosts`, config)
      .then((response) => {
        setDados(response.data);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [descriptionPost, setDescriptionPost] = useState("");
  const [filePost, setFilePost] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const fileType = file.type;
      const validTypes = ["image/png", "image/jpeg"];
      const maxSize = 5 * 1024 * 1024;

      if (!validTypes.includes(fileType)) {
        alert("Somente arquivos PNG e JPEG são permitidos.");
        setFilePost([]);

        e.target.value = null;
        return;
      }

      if (file.size > maxSize) {
        alert("O tamanho máximo do arquivo é 5MB.");
        setFilePost([]);

        e.target.value = null;
        return;
      }

      setFilePost(file);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("imageInput").click();
  };

  function formatDescription(description) {
    return description.split(/\r\n|\n/).map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  }

  function handleSubmitPost() {
    setValid(false);

    axios
      .post(
        `${base_url}/post`,
        {
          description: descriptionPost,
          image: filePost,
        },
        config
      )
      .then(() => {
        setModal(true);
      })
      .finally(() => {
        setValid(true);
      });
  }

  function updatePosts() {
    axios.get(`${base_url}/posts/allPosts`, config).then((response) => {
      setDados(response.data);
    });
  }

  function handleLike(idPost) {
    axios
      .put(`${base_url}/posts/updateLike/${idPost}`, null, config)
      .then(() => {
        updatePosts();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDesLike(idPost) {
    axios
      .put(`${base_url}/posts/updateDeslike/${idPost}`, null, config)
      .then(() => {
        updatePosts();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (filePost.name && descriptionPost) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [filePost, descriptionPost]);

  return (
    <>
      {loading ? (
        <>
          <Overlay className={modal ? "" : "disable"}></Overlay>
          <ModalCheck className={modal ? "" : "disable"}>
            <div className="modal">
              <div className="top_modal">
                <img src={bigCheck} alt="icone grande x vermelho" />
                <h5 className="heading24 primary_light font600">Post adicionado</h5>
              </div>

              <button
                className="button_primary_light button button16 font700 full_width"
                onClick={() => {
                  window.location.reload();
                }}>
                ir para COMUNIDADE
              </button>
            </div>
          </ModalCheck>
          <HeaderDashboard />
          <ContainerDashboard>
            <div className="container">
              <div className="top_posts">
                <h2 className="heading40 white font700" id="inicio">
                  Comunidade
                </h2>
              </div>

              <div className="bottom_posts">
                <div className="left_posts">
                  <a href="#inicio" className="heading24 font700 primary_light ajust_gap4 margin12">
                    <img src={home} alt="home" /> Início da pagina
                  </a>
                  <a href="#inicio" className="heading24 font700 primary_light ajust_gap4 button_disable">
                    <img src={search} alt="home" /> Procurar
                  </a>
                </div>

                <div className="mid_posts">
                  <div className="add_post">
                    <div className="input_step">
                      <label htmlFor="description" className="body14 font400 gray2">
                        Descrição
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        rows={10}
                        value={descriptionPost}
                        onChange={(e) => {
                          setDescriptionPost(e.target.value);
                        }}
                      />
                    </div>

                    <div className="input_file">
                      <label htmlFor="imageInput" className="body14 gray2 font400">
                        Upload de imagem
                      </label>
                      <input
                        type="file"
                        id="imageInput"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                        accept=".png, .jpeg, .jpg"
                      />
                      <p className="box_file body14 font700 primary_light" onClick={handleButtonClick}>
                        {filePost.name ? filePost.name : "Clique para selecionar seu arquivo"}
                      </p>
                      <p className="body12 gray2 font400">Obs: Somente png/jpeg e até 5mb</p>
                    </div>

                    <button
                      className={
                        valid
                          ? "button button16 font700 button_primary_light upper"
                          : "button button16 font700 button_primary_light upper button_disable"
                      }
                      onClick={handleSubmitPost}>
                      Adicionar Post
                    </button>
                  </div>

                  {dados.map((item, index) => {
                    return (
                      <div className="post" key={index}>
                        <div className="top_post">
                          <div className="left_top_post">
                            <div className="circle_avatar">
                              <img
                                src={`${base_url_image}/${item.user.avatar}`}
                                alt="avatar"
                                className="avatar"
                              />
                            </div>
                            <div className="text">
                              <p className="body14 primary_light font700">{item.user.name}</p>
                              <p className="body12 primary_light font400">{item.user.occupation_area}</p>
                            </div>
                          </div>
                          <p className="link16 font400 primary_light">3 d</p>
                        </div>
                        <div className="mid_post">
                          <p className="link16 gray2 font400">{formatDescription(item.description)}</p>
                        </div>
                        <img src={`${base_url_image}/${item.image}`} alt="image" className="image_post" />
                        <div className="bottom_post ajust_gap16">
                          <div className="ajust_gap4">
                            <img
                              src={item.likes.includes(Number(idUser)) ? likeActive : like}
                              alt="like"
                              className="pointer"
                              onClick={() => {
                                handleLike(item.post_id);
                              }}
                            />
                            <p className="body18 gray font400">{item.likes.length}</p>
                          </div>
                          <div className="ajust_gap4">
                            <img
                              src={item.deslikes.includes(Number(idUser)) ? deslikeActive : deslike}
                              alt="deslike"
                              className="pointer"
                              onClick={() => {
                                handleDesLike(item.post_id);
                              }}
                            />
                            <p className="body18 gray font400">{item.deslikes.length}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="right_posts">
                  <h4 className="heading24 font700 primary_light ajust_gap4">
                    <img src={hot} alt="fogo" />
                    Principais hashtags
                  </h4>
                  <hr className="divider" />
                  <div className="list_hashtags">
                    <div className="line">
                      <p className="link14 primary_light font400">#TECNOLOGIA</p>
                      <p className="body12 primary_light font400">8</p>
                    </div>
                    <div className="line">
                      <p className="link14 primary_light font400">#PROFISSIONAL</p>
                      <p className="body12 primary_light font400">7</p>
                    </div>
                    <div className="line">
                      <p className="link14 primary_light font400">#DESIGN</p>
                      <p className="body12 primary_light font400">5</p>
                    </div>
                    <div className="line">
                      <p className="link14 primary_light font400">#Emprego</p>
                      <p className="body12 primary_light font400">4</p>
                    </div>
                    <div className="line">
                      <p className="link14 primary_light font400">#SQN</p>
                      <p className="body12 primary_light font400">2</p>
                    </div>
                    <div className="line">
                      <p className="link14 primary_light font400">#TECH</p>
                      <p className="body12 primary_light font400">2</p>
                    </div>
                    <div className="line">
                      <p className="link14 primary_light font400">#VAGA</p>
                      <p className="body12 primary_light font400">2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContainerDashboard>
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};
