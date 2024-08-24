import styled from "styled-components";

export const ContainerRegister = styled.section`
  width: 100%;
  background: var(--linear-1, linear-gradient(103deg, #371902 1.18%, #150a01 101.49%));
  min-height: calc(100vh - 40px);
  display: flex;
  align-items: center;
  justify-content: center;

  .content_step {
    width: 100%;
    max-width: 808px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    padding: 32px;
    margin: 32px 0px;

    .top_step {
      text-align: center;
    }

    .mid_step {
      display: flex;
      justify-content: space-between;
      width: 100%;
      gap: 48px;

      .left_step {
        width: 100%;
        max-width: 344px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .right_step {
        width: 100%;
        max-width: 344px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .input_step {
        display: flex;
        flex-direction: column;
        width: 100%;

        input,
        select {
          width: 100%;
          max-width: 344px;
          padding: 8px 12px;
          border-radius: 4px;
          border: 1px solid var(--gray3, #595356);
        }

        input:focus,
        select {
          outline: none;
        }

        .error {
          border: 1px solid red;
        }

        .error:focus {
          border: 1px solid ed;
        }
      }
    }

    .bottom_step {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        width: 100%;
        max-width: 353px;
      }
    }
  }

  .box_image_avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    .avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
    }

    .avatar_content {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: #d9d9d9;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .content_step {
      margin: 32px 20px;

      .mid_step {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h4 {
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 400px) {
    .content_step {
      padding: 32px 20px;
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
