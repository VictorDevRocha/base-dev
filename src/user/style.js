import styled from "styled-components";
import iconArrow from "/svg/dashboard/arrow-input.svg";

export const ContainerDashboard = styled.section`
  width: 100%;
  min-height: calc(100vh - 120px);
  background: var(--linear-1, linear-gradient(103deg, #371902 1.18%, #150a01 101.49%));
  padding: 60px 0px;

  .top_dashboard {
    width: 100%;

    h2 {
      text-align: center;
      margin-bottom: 40px;
    }

    .group_boxs {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 48px;
      margin-bottom: 40px;

      .box_infos {
        width: 100%;
        max-width: 236px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        .circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 5px solid #fff;
          display: flex;
          align-items: center;
          justify-content: center;

          p {
            font-size: 72px;
            font-style: normal;
            font-weight: 700;
            line-height: 50px;
          }
        }
      }
    }
  }

  .bottom_dashboard {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;

    h2 {
      width: 100%;
      text-align: center;
    }

    table {
      width: 100%;
      background-color: #fff;

      .no_testes {
        text-align: center;
        padding: 24px 20px;
      }

      thead {
        bottom: 1px solid #e1e6ef;
        background: #f7f7fc;
        width: 100%;
      }

      th,
      td {
        text-align: left;
        padding: 12px 4px;
        text-transform: capitalize;
      }

      tr {
        display: flex;
        border-bottom: 1px solid #e1e6ef;
      }

      th:nth-child(1) {
        width: 100%;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      th:nth-child(2) {
        width: 100%;
        width: 216px;
      }

      th:nth-child(3) {
        width: 100%;
        width: 90px;
      }

      th:nth-child(4) {
        width: 100%;
        width: 90px;
      }

      th:nth-child(5) {
        width: 100%;
        width: 99px;
      }

      th:nth-child(6) {
        width: 100%;
        width: 90px;
      }

      th:nth-child(7) {
        width: 100%;
        width: 122px;
      }

      th:nth-child(8) {
        width: 100%;
        width: 153px;
      }

      th:nth-child(9) {
        width: 100%;
        width: 132px;
      }

      th:nth-child(10) {
        width: 100%;
        width: 105px;
      }

      th:nth-child(11) {
        width: 100%;
        width: 83px;
      }

      td:nth-child(1) {
        width: 100%;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      td:nth-child(2) {
        width: 100%;
        width: 216px;
      }

      td:nth-child(3) {
        width: 100%;
        width: 90px;
      }

      td:nth-child(4) {
        width: 100%;
        width: 90px;
        overflow: auto;
        white-space: nowrap;
        display: inline-block;
      }

      td:nth-child(5) {
        width: 100%;
        width: 99px;
      }

      td:nth-child(6) {
        width: 100%;
        width: 90px;
      }

      td:nth-child(7) {
        width: 100%;
        width: 122px;
      }

      td:nth-child(8) {
        width: 100%;
        width: 153px;
      }

      td:nth-child(9) {
        width: 100%;
        width: 132px;
      }

      td:nth-child(10) {
        width: 100%;
        width: 105px;
      }

      td:nth-child(11) {
        width: 100%;
        width: 83px;
      }
    }

    .table_content::-webkit-scrollbar,
    td:nth-child(4)::-webkit-scrollbar {
      width: 1px;
      height: 6px;
    }

    .table_content::-webkit-scrollbar-track,
    td:nth-child(4)::-webkit-scrollbar-track {
      background-color: #f1f1f1;
      width: 1px;
      height: 1px;
    }

    .table_content::-webkit-scrollbar-thumb,
    td:nth-child(4)::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 5px;
      width: 1px;
    }

    .table_content {
      width: 100%;
      background-color: #fff;
      border-radius: 12px;

      .input_step {
        position: relative;
      }

      .input_step select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-image: none;
        padding: 12px;
        border-radius: 6px;
        border: 1px solid #d8d8e8;
        background: #fff;
        text-transform: capitalize;
        width: 100%;
      }

      .select-wrapper {
        position: relative;
        display: inline-block;
      }

      .select-wrapper::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 10px; /* Ajuste a posição do ícone */
        transform: translateY(-60%);
        width: 24px; /* Ajuste o tamanho do ícone */
        height: 24px; /* Ajuste o tamanho do ícone */
        background: url(${iconArrow}) no-repeat center center; /* Caminho para o seu ícone */
        pointer-events: none; /* Permite clicar no select mesmo com o ícone sobreposto */
      }

      .input_step select:focus {
        border: 1px solid #d8d8e8;
        outline: none;
      }

      .top_table_content {
        width: 100%;
        padding: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .top_right {
          width: 100%;
          max-width: 269px;
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;

          .input_search {
            width: 269px;
            font-weight: 400;
            padding: 12px 12px 12px 36px;
            border-radius: 4px;
            background: #f7f7fc;
            border: none;
          }

          .input_search:focus-visible {
            border: none;
            outline: none;
          }

          .input_search::placeholder {
            color: var(--gray02);
          }

          .icon_search {
            position: absolute;
            left: 10px;
            top: 12px;
          }
        }
      }

      .filters {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 0px 24px 24px;
      }
    }

    .navegation_align {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      width: 100%;
    }
  }

  @media (max-width: 1224px) {
    padding: 60px 20px;

    .table_content {
      width: 100%;
      max-width: 1224px;
      overflow: scroll;
      height: 100%;
    }
  }

  .custom-pagination .ant-pagination-item-active a {
    color: var(--primary) !important;
    border-color: var(--primary) !important;
  }

  .custom-pagination .ant-pagination-item:hover a {
    color: var(--primary) !important;
  }

  .custom-pagination .ant-pagination-item-active {
    border-color: var(--primary) !important;
  }

  .custom-pagination .ant-pagination-item:hover {
    border-color: var(--primary) !important;
  }

  .custom-pagination .ant-pagination-options {
    color: var(--primary);
  }

  .ant-select-focused:where(.css-dev-only-do-not-override-1gwfwyx).ant-select-outlined:not(
      .ant-select-disabled
    ):not(.ant-select-customize-input):not(.ant-pagination-size-changer)
    .ant-select-selector {
    border-color: var(--primary) !important;
  }

  .ant-select-selector {
    border-color: var(--primary) !important;
  }

  .ant-select-selector:focus {
    box-shadow: 0 0 0 2px var(--primary) !important;
  }
`;
