import { styled } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(53, 53, 128, 1) 0%,
    rgba(14, 10, 61, 1) 33%,
    rgba(53, 53, 128, 1) 100%
  );
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 100px;
`;

export const Screenshots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
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
    transform: scale(1.2); /* Aumenta em 10% */
  }

  @media (max-width: 1300px) {
    gap: 50px;

    img {
      width: 300px;
    }
  }
`;

export const Phrase = styled.div`
  width: 200px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  img {
    width: 900px;
  }

  @media (max-width: 1300px) {
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

  @media (max-width: 1300px) {
    display: none;
  }
`;
