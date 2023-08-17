import styled, { keyframes } from "styled-components";
import background from "../../img/background.png";

export const ContainerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 900px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1300px) {
    height: auto;
    padding-top: 100px;
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1300px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 30%;
  height: 700px;
  flex-direction: column;
  background: #0e0a3d;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  gap: 110px;
  animation: pulse 2s infinite;

  @media (max-width: 1300px) {
    width: 32%;
    height: 700px;
  }
  @media (max-width: 1200px) {
    width: 45%;
    height: 700px;
  }

  @media (max-width: 700px) {
    width: 80%;
    height: 700px;
  }

  @keyframes pulse {
    0% {
      box-shadow:
        0px 0px 30px #5271ff,
        0px 0px 60px #5271ff,
        0px 0px 90px #5271ff,
        0px 0px 120px #5271ff,
        0px 0px 150px rgba(255, 255, 255, 0.5);
    }
    50% {
      box-shadow:
        0px 0px 35px #5271ff,
        0px 0px 65px #5271ff,
        0px 0px 95px #5271ff,
        0px 0px 125px #5271ff,
        0px 0px 155px rgba(255, 255, 255, 0.5);
    }
    100% {
      box-shadow:
        0px 0px 30px #5271ff,
        0px 0px 60px #5271ff,
        0px 0px 90px #5271ff,
        0px 0px 120px #5271ff,
        0px 0px 150px rgba(255, 255, 255, 0.5);
    }
  }
`;
export const LogoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
`;

export const Imagem = styled.div`
  img {
    width: 700px;
  }

  @media (max-width: 1300px) {
    img {
      width: 500px;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ImagemTwo = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    display: block;

    img {
      width: 400px;
    }
  }
`;

export const Phrase = styled.div`
  height: 50px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 400px;
  }
  @media (max-width: 1300px) {
    img {
      width: 300px;
    }
  }
`;

export const PhraseTwo = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 400px;
  }

  @media (max-width: 1300px) {
    img {
      width: 300px;
    }
  }
`;
const neonPurple = "#A020F0";
const whiteColor = "#FFFFFF";
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0px 0px 30px ${neonPurple},
                0px 0px 60px ${neonPurple},
                0px 0px 90px ${neonPurple},
                0px 0px 120px ${neonPurple},
                0px 0px 150px ${whiteColor};
  }
  50% {
    transform: scale(0.9);
    box-shadow: 0px 0px 35px ${neonPurple},
                0px 0px 65px ${neonPurple},
                0px 0px 95px ${neonPurple},
                0px 0px 125px ${neonPurple},
                0px 0px 155px ${whiteColor};
  }
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 300px;
  height: 60px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  animation: ${pulse} 2s infinite;
  color: ${whiteColor};
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
  transition:
    background-color 0.3s,
    transform 0.3s;

  &:hover {
    background-color: ${neonPurple};
  }

  @media (max-width: 1300px) {
    width: 250px;
    height: 50px;
    font-size: 25px;
  }
`;
