import styled from "styled-components";

export const Spinner_container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .spinner {
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-top: 8px solid var(--primary);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
