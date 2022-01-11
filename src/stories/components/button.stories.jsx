// Components
import { Button } from '../../Components/Button/button.component';
import { Title } from '../../Components/Title/title.component';

export default {
  title: 'Components/Button',
  component: Button
};

// Stories

const DefaultButton = ({ ...args }) => {
  return (
    <Button appeareance={args.appeareance} hasBorder={args.hasBorder}>
      <Title appeareance="#fff" content="Button" />
    </Button>
  );
};

const ButtonWithBorder = ({ ...args }) => {
  return (
    <Button appeareance={args.appeareance} hasBorder={args.hasBorder}>
      <Title appeareance="#11142D" content="Button" />
    </Button>
  );
};

export const Primary = DefaultButton.bind({});

export const Secondary = ButtonWithBorder.bind({});

Primary.args = {
  appeareance: '#3772FF',
  hasBorder: 'none'
};

Secondary.args = {
  appeareance: '#fff',
  hasBorder: '2px solid #E6E8EC'
};
