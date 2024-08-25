import { Link, useNavigate } from "react-router-dom";
import { ContainerHeaderDashboard, MenuMobile, OverlayMenuMobile } from "./style";
import logo from "/logo.svg";
import iconAvatar from "/svg/dashboard/avatar.svg";
import iconLogout from "/svg/dashboard/logout.svg";
import close from "/svg/dashboard/close.svg";
import { useState } from "react";

export const HeaderDashboard = () => {
  const history = useNavigate();

  const logout = () => {
    localStorage.removeItem("idLoginVr");
    localStorage.removeItem("tokenVr");
    window.location.assign("/");
  };
  const [menuMobile, setMenuMobile] = useState(false);

  const handleOpenMenuMobile = () => {
    setMenuMobile(true);
  };

  const handleCloseMenuMobile = () => {
    setMenuMobile(false);
  };

  return (
    <>
      <OverlayMenuMobile className={menuMobile ? "" : "disable"} onClick={handleCloseMenuMobile} />
      <ContainerHeaderDashboard>
        <div className="container">
          <img
            src={logo}
            alt="logo"
            className="logo pointer"
            onClick={() => {
              history("/dashboard");
            }}
          />
          <ul className="links_header">
            <Link to={"/dashboard"} className="font400 link16 primary">
              Início
            </Link>
            <Link to={"/usuarios"} className="font400 link16 primary">
              Usuários
            </Link>
            <Link to={"/comunidade"} className="font400 link16 primary">
              Comunidade
            </Link>
            <Link to={"/dados"} className="font400 link16 primary">
              Dados
            </Link>
            <Link to={"/meus-dados"} className="font400 link16 primary">
              Meus Dados
            </Link>
          </ul>
          <div className="left_header">
            <div className="box_avatar avatar pointer">
              <img
                src={iconAvatar}
                alt="avatar"
                onClick={() => {
                  history("/meus-dados");
                }}
              />
            </div>
            <img src={iconLogout} alt="log-out" className="logout pointer" onClick={logout} />
          </div>
          <div className="menu" onClick={handleOpenMenuMobile}>
            <div className="line_menu"></div>
            <div className="line_menu"></div>
            <div className="line_menu"></div>
          </div>
        </div>

        <MenuMobile className={menuMobile ? "" : "disable"}>
          <div className="top_menu_mobile">
            <img src={close} alt="close" className="close" onClick={handleCloseMenuMobile} />
            <img src={logo} alt="logo" className="logo" />
          </div>
          <ul className="links_menu_mobile">
            <Link to={"/dashboard"} className="font700 heading24 primary_light">
              Início
            </Link>
            <Link to={"/usuarios"} className="font700 heading24 primary_light">
              Usuários
            </Link>
            <Link to={"/comunidade"} className="font700 heading24 primary_light">
              Comunidade
            </Link>
            <Link to={"/dados"} className="font700 heading24 primary_light">
              Dados
            </Link>
            <Link to={"/meus-dados"} className="font700 heading24 primary_light">
              Meus Dados
            </Link>
            <img src={iconLogout} alt="logout" onClick={logout} />
          </ul>
        </MenuMobile>
      </ContainerHeaderDashboard>
    </>
  );
};
