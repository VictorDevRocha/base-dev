import { ContainerDashboard } from "./style";
import { HeaderDashboard } from "./../headerDashboard";
import { Footer } from "./../footer/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "./../loading/index";

export const Dashboard = () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("tokenVr");
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Barrer ${token}`,
    },
  };

  const [dados, setDados] = useState([]);
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${base_url}/infosDashboard`, config)
      .then((response) => {
        setDados(response.data.users);
        setInfos(response.data.infos);
        console.log(response.data);
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

  const RenderMap = () => {
    return dados.map((item, index) => (
      <tr key={index}>
        <td className="body12 gray3 font400 ajust_gap4">{index + 1}</td>
        <td className="body12 gray3 font400 ajust_gap4 underline">{item.name}</td>
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

  return (
    <>
      {loading ? (
        <>
          <HeaderDashboard />
          <ContainerDashboard>
            <div className="container">
              <div className="top_dashboard">
                <h2 className="heading40 white font700">INFORMAÇÕES GERAIS</h2>

                <div className="group_boxs">
                  <div className="box_infos">
                    <div className="circle margin12">
                      <p className="white">{infos.number_users}</p>
                    </div>
                    <h4 className="heading24 font600 white">Número de Usuários</h4>
                  </div>
                  <div className="box_infos">
                    <div className="circle margin12">
                      <p className="white">{infos.number_users_work}</p>
                    </div>
                    <h4 className="heading24 font600 white">Usuários Trabalhando</h4>
                  </div>
                  <div className="box_infos">
                    <div className="circle margin12">
                      <p className="white">{infos.number_posts}</p>
                    </div>
                    <h4 className="heading24 font600 white">Número de Posts</h4>
                  </div>
                </div>
              </div>

              <div className="bottom_dashboard">
                <h2 className="heading40 white font700">ÚLTIMOS CANDIDATOS</h2>
                <div className="table_content">
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
