import { keyframes, styled } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(14, 10, 61, 1) 0%,
    rgba(77, 5, 120, 1) 31%,
    rgba(19, 49, 188, 1) 100%
  );

  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 100px;
`;

export const Screenshots = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  @media (max-width: 1300px) {
    width: 140%;
  }
`;

export const Phones = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 160px;

  img {
    width: 200px;
    transition: transform 0.3s ease-in-out;
  }

  img:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1300px) {
    gap: 50px;

    img {
      width: 300px;
    }
  }
`;

export const Phrase = styled.div`
  width: 40%;
  height: 300px;
  display: flex;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  z-index: 3;
  border-radius: 100px;
  img {
    width: 900px;
  }

  @media (max-width: 1300px) {
    margin-bottom: 0px;

    img {
      width: 400px;
    }
  }
`;

export const Tiger = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  img {
    width: 160%;
  }
  @media (max-width: 1300px) {
    display: none;
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
  margin-top: 90px;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 600px;
  height: 90px;
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
    width: 350px;
    height: 80px;
    font-size: 25px;
  }
`;

export const CoinOne = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  img {
    width: 50%;
  }
`;

export const CoinTwo = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 0;

  img {
    width: 100%;
  }
`;
