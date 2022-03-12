import styled from "styled-components";

export const ElectroNextHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  color: #fff;
  gap: 2rem;


  & .heart {
    font-size: 4.5rem;
    font-family: system-ui;
    animation: pulse 2s linear infinite;
  }
  @keyframes pulse {
    0% {transform: scale(1);}
    50% {transform: scale(1.1);}
    100% {transform: scale(1);}
  }
  & .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & .ElectronIcon {
    width: 20rem;
  }

  & .NextIcon {
    width: 6rem;
  }

  & .footer {
    display: flex;
    gap: 0.15rem;
  }
`