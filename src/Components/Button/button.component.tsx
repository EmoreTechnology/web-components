import { ButtonStyled } from './button.styles';
import ButtonProps from './button.model';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Button = ({ children, appeareance, hasBorder }: ButtonProps) => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ButtonStyled hasBorder={hasBorder} appeareance={appeareance}>
      {children}
    </ButtonStyled>
  );
};
