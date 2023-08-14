import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

import './App.css';

import { UseForm } from './components/UseForm';
import { ReviewForm } from './components/ReviewForm';
import { Thanks } from './components/Thanks';
import { useForm } from './hooks/useForm';

export const App = () => {
  const formComponents = [<UseForm />, <ReviewForm />, <Thanks />];

  const {currentStep, currentComponent} = useForm(formComponents)

  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>Etapas</p>
        <form>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            <button type="button">
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
