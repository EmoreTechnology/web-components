import styled from "styled-components";
import TitleProps from "./title.model";

export const TitleStyles = styled.h1`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: ${(props: TitleProps) => props.appeareance};
  margin: 0;
`;
