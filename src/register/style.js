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
`;
