/* eslint-disable react/jsx-filename-extension */
// Components
import { Button } from '../Components/Button/button.component';
import { Title } from '../Components/Title/title.component';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App() {
  return (
    <div className="App">
      <Button label="clicouuuu" appeareance="blue">
        <Title content="button" appeareance="white" />
      </Button>

      <Title content="Aqui eu sou um título qualquer" appeareance="#FF9F38" />

      <Button appeareance="#FF9F38">
        <Title content="button" appeareance="white" />
      </Button>
    </div>
  );
}
