import styled from "styled-components";

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
        width: 87px;
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
        width: 87px;
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
`;
