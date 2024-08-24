import styled from "styled-components";

export const ContainerLogin = styled.section`
  width: 100%;
  background: var(--linear-1, linear-gradient(103deg, #371902 1.18%, #150a01 101.49%));
  min-height: calc(100vh - 40px);
  display: flex;
  align-items: center;
  justify-content: center;

  .box_form {
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 12px;
    background: var(--gray6, #f7f7fc);
    box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    padding: 48px;
    min-height: 572px;

    .logo {
      position: absolute;
      left: 32px;
      top: 32px;
    }

    .content_box_form {
      width: 100%;
      max-width: 354px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .background_text_primary {
        padding: 4px 12px;
        border-radius: 4px;
        background: var(--primary-light, #311602);
        text-align: center;
        width: fit-content;
      }

      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;

        .box_input input {
          width: 100%;
          border: none;
          background-color: transparent;
          border-bottom: 1px solid var(--primary-light);
          padding: 8px 12px;
          border-radius: 2px;
          transition: 1s;
        }

        .box_input input:focus {
          outline: none;
          border-bottom: 1px solid var(--primary-light);
        }

        .end {
          text-align: end;
          cursor: pointer;
        }

        button {
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 60px 20px;

    .box_form {
      padding: 60px 32px 48px;
      min-height: fit-content;

      .logo {
        top: 16px;
        left: 16px;
      }
    }

    .content_box_form h1 {
      margin-bottom: 24px;
    }

    .background_text_primary {
      margin-bottom: 8px;
    }

    a {
      text-align: center;
    }
  }
`;
