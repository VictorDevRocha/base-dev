import styled from "styled-components";

export const ContainerHeaderDashboard = styled.header`
  width: 100%;
  background-color: #fff;
  height: 80px;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 100%;
      width: 75px;
      height: 36px;
      gap: 24px;
    }

    .links_header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }

    .left_header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }
  }

  .menu {
    width: 100%;
    max-width: 32px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    display: none;

    div {
      height: 2px;
      width: 100%;
      background-color: var(--primary);
    }
  }

  .box_avatar {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--primary);
  }

  @media (max-width: 1224px) {
    padding: 10px 20px;
  }

  @media (max-width: 768px) {
    .links_header {
      display: none !important;
    }

    .menu {
      display: flex;
    }

    .left_header {
      display: none !important;
    }
  }
`;

export const MenuMobile = styled.div`
  width: 100%;
  max-width: 450px;
  height: 100vh;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #fff;
  z-index: 5;
  padding: 48px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  .top_menu_mobile {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .close {
      position: absolute;
      top: 15px;
      right: 40px;
      width: 48px;
      height: 48px;
    }
  }

  .links_menu_mobile {
    display: flex;
    flex-direction: column;
    gap: 12px;

    img {
      margin-top: 24px;
      width: 80px;
    }
  }
`;

export const OverlayMenuMobile = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: transparent;
  z-index: 4;
  position: absolute;
  top: 0;
  right: 0;
`;
