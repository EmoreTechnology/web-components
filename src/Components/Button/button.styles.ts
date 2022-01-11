import styled from "styled-components";

import ButtonProps from "./button.model";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props: ButtonProps) => props.hasBorder};
  width: 250px;
  height: 50px;
  border-radius: 49px;
  cursor: pointer;
  background: ${(props: ButtonProps) => props.appeareance};

  &:hover {
    opacity: 0.8;
    transition: 0.4s;
  }
`;
