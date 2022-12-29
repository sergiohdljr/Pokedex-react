import styled from "styled-components";

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme, tipo }) => theme.pokemonType[tipo]};
`;

export const ContainerHome = styled.div`
  margin: 0 auto;
  width: 91%;
  min-height: 432px;
`;
