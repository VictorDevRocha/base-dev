import styled from "styled-components";

export const ContainerForgot = styled.section`
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
      padding: 48px 24px;
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

export const ModalCheck = styled.div`
  width: 100%;
  max-width: 551px;
  height: fit-content;
  border-radius: 12px;
  position: fixed;
  background-color: #fff;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;

  @media (max-width: 600px) {
    width: 90%;
    padding: 32px;
  }

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    position: relative;
  }

  .top_modal {
    width: 100%;
    max-width: 242px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .mid_modal {
    text-align: center;
  }

  button {
    width: 100%;
    padding: 18px 64px;
  }

  .input_step {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .input_step input {
    padding: 16px;
    border-radius: 6px;
    border: 1px solid #d8d8e8;
    background: #fff;
    width: 100%;
  }

  .input_step_select {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .input_step_select select {
    width: 100%;
    padding: 16px;
    border-radius: 6px;
    border: 1px solid #d8d8e8;
    background: #fff;
    width: 100%;
    text-transform: capitalize;
  }
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 5;
`;
