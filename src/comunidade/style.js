import styled from "styled-components";

export const ContainerDashboard = styled.section`
  width: 100%;
  min-height: calc(100vh - 120px);
  background: var(--linear-1, linear-gradient(103deg, #371902 1.18%, #150a01 101.49%));
  padding: 60px 0px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;

    .input_step {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .input_step textarea {
      width: 100%;
      padding: 16px;
      border-radius: 6px;
      border: 1px solid #595356;
      background: #fff;
      width: 100%;
      resize: none;
    }

    textarea:focus {
      outline: none;
    }

    .top_posts {
      width: 100%;
      text-align: center;
    }

    .bottom_posts {
      display: flex;
      justify-content: space-between;
      gap: 24px;

      .left_posts {
        width: 100%;
        max-width: 267px;
        background-color: #fff;
        height: fit-content;
        padding: 32px;
        border-radius: 4px;
        position: sticky;
        top: 5px;
      }

      .mid_posts {
        display: flex;
        flex-direction: column;
        width: 100%;
        width: 597px;
        gap: 24px;

        @media (max-width: 1224px) {
          width: 100%;
          max-width: 597px;
        }

        .add_post {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 24px;

          .input_file {
            width: 100%;

            .box_file {
              width: 100%;
              padding: 8px;
              border-radius: 4px;
              border: 1px solid var(--gray3, #595356);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }
          }
        }

        .post {
          width: 100%;
          background-color: #fff;
          border-radius: 12px;

          .top_post {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            padding: 12px 24px;

            .left_top_post {
              width: 100%;
              max-width: 230px;
              display: flex;
              align-items: center;
              gap: 12px;

              .circle_avatar {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: var(--primary-light);
                display: flex;
                align-items: center;
                justify-content: center;

                .avatar {
                  margin-left: 1px;
                }
              }

              .text {
                width: 100%;
                max-width: 150px;
              }
            }
          }

          .mid_post {
            width: 100%;
            padding: 12px 24px;
          }

          .image_post {
            width: 100%;
            max-width: 587px;
            height: 420px;
            object-fit: cover;
          }

          .bottom_post {
            width: 100%;
            padding: 12px 24px;
          }
        }
      }

      .right_posts {
        width: 100%;
        max-width: 306px;
        background-color: #fff;
        padding: 32px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        height: fit-content;

        h4 {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        hr {
          border: none;
          width: 100%;
          height: 1px;
          background-color: var(--primary-light);
        }

        .list_hashtags {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 6px;

          div {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
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
