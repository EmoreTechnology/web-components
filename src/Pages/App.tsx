// Components
import { Button } from "../Components/Button/button.component";
import { Title } from "../Components/Title/title.component";

export default function App() {
  return (
    <div className="App">
      <Button label="clicouuuu" appeareance="blue" />

      <Title content="Aqui eu sou um título qualquer" appeareance="#FF9F38" />

      <Button label="clicouuuu" appeareance="#FF9F38">

      </Button>
    </div>
  );
}
