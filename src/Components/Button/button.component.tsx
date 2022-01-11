import { ButtonStyled } from "./button.styles";
import ButtonProps from "./button.model";

export const Button = ({ children, appeareance, hasBorder }: ButtonProps) => {

  return (
    <ButtonStyled hasBorder={hasBorder} appeareance={appeareance}>{children}</ButtonStyled>
  );
};
