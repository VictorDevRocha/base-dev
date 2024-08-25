/* eslint-disable react-hooks/exhaustive-deps */
import { ContainerDashboard } from "./style";
import { HeaderDashboard } from "./../headerDashboard";
import { Footer } from "./../footer/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "./../loading/index";
import { Pagination } from "antd";
import search from "/svg/dashboard/search.svg";

export const Usuarios = () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("tokenVr");
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Barrer ${token}`,
    },
  };

  const [dados, setDados] = useState([]);
  const [dados2, setDados2] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${base_url}/users/AllUsers`, config)
      .then((response) => {
        setDados(response.data);
        setDados2(response.data);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function converterFormatoData(data) {
    const dataObjeto = new Date(data);

    const dia = dataObjeto.getDate();
    const mes = dataObjeto.getMonth() + 1;
    const ano = dataObjeto.getFullYear();

    const mesFormatado = mes < 10 ? `0${mes}` : mes;
    const diaFormatado = dia < 10 ? `0${dia}` : dia;

    const dataFormatada = `${diaFormatado}/${mesFormatado}/${ano}`;

    return dataFormatada;
  }

  function calculateAge(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    // Ajusta a idade se o aniversário ainda não foi comemorado no ano atual
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }

    return age + " anos";
  }

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const onShowSizeChange = (current, pageSize) => {
    setRowsPerPage(pageSize);
  };

  const RenderMap = () => {
    return dados2
      .slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
      .map((item, index) => (
        <tr key={index}>
          <td className="body12 gray3 font400 ajust_gap4">{item.user_id}</td>
          <td className="body12 gray3 font400 ajust_gap4 underline">{renderHighlightedText(item.name)}</td>
          <td className="body12 gray3 font400 ajust_gap4">{item.gender ? item.gender : "Não informado"}</td>
          <td className="body12 gray3 font400 ajust_gap4">{item.city ? item.city : "Não informado"}</td>
          <td className="body12 gray3 font400 ajust_gap4">{item.state ? item.state : "Não informado"}</td>
          <td className="body12 gray3 font400 ajust_gap4">
            {item.birthday ? calculateAge(item.birthday) : "Não informado"}
          </td>
          <td className="body12 gray3 font400 ajust_gap4">{item.work ? "Sim" : "Não"}</td>
          <td className="body12 gray3 font400 ajust_gap4">{item.occupation_area}</td>
          <td className="body12 gray3 font400 ajust_gap4">{item.time_work}</td>
          <td className="body12 gray3 font400 ajust_gap4">{item.like_work}</td>
          <td className="body12 gray3 font400 ajust_gap4">{converterFormatoData(item.created_at)}</td>
        </tr>
      ));
  };

  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    const valorLowerCase = value.toLowerCase();

    const resultadosFiltrados = dados.filter((item) => item.name.toLowerCase().includes(valorLowerCase));

    setDados2(resultadosFiltrados);

    if (value == "") {
      setDados2(dados);
    }
  };

  const renderHighlightedText = (text) => {
    if (!searchText) {
      return text;
    }

    const valorLowerCase = searchText.toLowerCase();
    const parts = text.split(new RegExp(`(${valorLowerCase})`, "gi"));

    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === valorLowerCase ? (
            <span key={index} className="highlighted">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  // filtros

  const [filterFunction, setFilterFunction] = useState("");
  const [filterWork, setFilterWork] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterTimeWork, setFilterTimeWork] = useState("");

  function handleFilter() {
    if (filterFunction || filterWork || filterTimeWork || filterGender) {
      let newDados = dados;

      if (filterFunction) {
        const filterFunction2 = newDados.filter((filtro) => {
          return filtro.occupation_area == filterFunction;
        });

        newDados = filterFunction2;
      }

      if (filterWork) {
        const filterWork2 = newDados.filter((filtro) => {
          if (filterWork == "sim") {
            return filtro.work == true;
          } else {
            return filtro.work == false;
          }
        });

        newDados = filterWork2;
      }

      if (filterGender) {
        const filterGender2 = newDados.filter((filtro) => {
          return filtro.gender == filterGender;
        });

        newDados = filterGender2;
      }

      if (filterTimeWork) {
        const filterTimeWork2 = newDados.filter((filtro) => {
          return filtro.time_work == filterTimeWork;
        });

        newDados = filterTimeWork2;
      }

      setDados2(newDados);
    } else {
      setDados2(dados);
    }
  }

  function clearFilter() {
    setFilterFunction("");
    setFilterWork("");
    setFilterGender("");
    setFilterTimeWork("");
  }

  useEffect(() => {
    handleFilter();
  }, [filterFunction, filterGender, filterTimeWork, filterWork]);

  return (
    <>
      {loading ? (
        <>
          <HeaderDashboard />
          <ContainerDashboard>
            <div className="container">
              <div className="top_dashboard margin12">
                <h3 className="heading32 white font700">Dashboard - Usuários</h3>
              </div>

              <div className="bottom_dashboard">
                <div className="table_content">
                  <div className="top_table_content">
                    <div className="top_right">
                      <div className="adjust_search">
                        <img src={search} alt="icone de lupa" className="icon_search" />
                        <input
                          type="search"
                          name="search"
                          id="search"
                          placeholder="Procurar por Empresa"
                          className="input_search body14 gray2"
                          onChange={(e) => {
                            handleSearch(e.target.value);
                            setSearchText(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <button className="button16 button button_primary font700">Exportar CSV</button>
                  </div>

                  <div className="filters">
                    <h5 className="heading18 font700 gray">Filtros:</h5>

                    <div className="input_step select-wrapper" style={{ width: "178px" }}>
                      <select
                        name="work"
                        id="work"
                        className="body14 font400 gray2 margin4"
                        value={filterWork}
                        onChange={(e) => {
                          setFilterWork(e.target.value);
                        }}>
                        <option value="" className="body14 font400 gray2">
                          Trabalha Na Área?
                        </option>
                        <option value="sim" className="body14 font400 gray2">
                          Sim
                        </option>
                        <option value="não" className="body14 font400 gray2">
                          Não
                        </option>
                      </select>
                    </div>

                    <div className="input_step select-wrapper" style={{ width: "250px" }}>
                      <select
                        name="função"
                        id="função"
                        className="body14 font400 gray2 margin4"
                        value={filterFunction}
                        onChange={(e) => {
                          setFilterFunction(e.target.value);
                        }}>
                        <option value="" className="body14 font400 gray2">
                          Função de atuação
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
                        <option value="Outro" className="body14 font400 gray2">
                          Outro
                        </option>
                      </select>
                    </div>

                    <div className="input_step select-wrapper" style={{ width: "110px" }}>
                      <select
                        name="gender"
                        id="gender"
                        className="body14 font400 gray2 margin4"
                        value={filterGender}
                        onChange={(e) => {
                          setFilterGender(e.target.value);
                        }}>
                        <option value="" className="body14 font400 gray2">
                          Gênero
                        </option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>

                    <div className="input_step select-wrapper" style={{ width: "165px" }}>
                      <select
                        name="timeWork"
                        id="timeWork"
                        className="body14 font400 gray2 margin4"
                        value={filterTimeWork}
                        onChange={(e) => {
                          setFilterTimeWork(e.target.value);
                        }}>
                        <option value="" className="body14 font400 gray2">
                          Tempo de atuação
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

                    {filterFunction || filterGender || filterWork || filterTimeWork ? (
                      <p className="link16 pointer primary_light font600" onClick={clearFilter}>
                        Limpar filtro
                      </p>
                    ) : null}
                  </div>

                  <table>
                    <thead>
                      <tr>
                        <th className="body12 font600 gray2">#</th>
                        <th className="body12 font600 gray2">Nome</th>
                        <th className="body12 font600 gray2">Gênero</th>
                        <th className="body12 font600 gray2">Cidade</th>
                        <th className="body12 font600 gray2">Estado</th>
                        <th className="body12 font600 gray2">Idade</th>
                        <th className="body12 font600 gray2">Trabalha Na Area</th>
                        <th className="body12 font600 gray2">Função de atuação</th>
                        <th className="body12 font600 gray2">Tempo de atuação</th>
                        <th className="body12 font600 gray2">Gosta do que faz</th>
                        <th className="body12 font600 gray2">Registrado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dados.length >= 1 ? (
                        RenderMap()
                      ) : (
                        <div className="no_testes" key={1}>
                          <h3 className="heading32 gray2 margin12">
                            não possui nenhum usuário cadastrado nessa lista.
                          </h3>
                        </div>
                      )}
                    </tbody>
                  </table>

                  <div className="navegation_align">
                    <p className="body14 font300 gray8">
                      {dados2.length} Usuários / Total de {dados.length} clientes
                    </p>
                    <Pagination
                      className="custom-pagination"
                      showSizeChanger
                      onShowSizeChange={onShowSizeChange}
                      total={Math.ceil(dados2.length)}
                      pageSize={rowsPerPage}
                      current={page}
                      onChange={(page) => setPage(page)}
                      locale={{ items_per_page: "/ página" }}
                    />
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
