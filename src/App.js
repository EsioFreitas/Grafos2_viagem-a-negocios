import React, { useState } from 'react';
import './App.css';
import Brazil from '@svg-maps/brazil';
import { CheckboxSVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';

function App() {
  const [selectedStages, setSelectedStages] = useState([]);

  return (
    <div className='bg-light' style={{ height: '100vh' }}>
      <div className='container'>
        <div className='text-center mb-5 pt-4' style={{ color: '#353535' }}>
          <h1 className='mb-3'>
            Projeto <span className='bold-text'>Viagem a Trabalho</span>{' '}
          </h1>
          <p>
            Luciana foi promovida a gerente executiva da empresa GRAFOS-LTDA o
            qual tem filiais em vários estados do Brasil. Nessa empresa, há o
            costume dos gerentes visitarem todas as filiais uma vez por ano. No
            entanto, Luciana precisa saber qual é o melhor percurso, ou seja, o
            caminho que minimize as distâncias/custos dessa viagem. Luciana irá
            informar quais são os estados que a empresa tem filiais. O serviço
            da aplicação será encontrar o melhor caminho (custo/benefício) que
            ela deverá percorrer.
          </p>
        </div>
        <div className='row'>
          <div className='col-6'>
            <h4 className='mb-4'>Selecione os estados</h4>
            <CheckboxSVGMap
              map={Brazil}
              onChange={(values) => {
                setSelectedStages(values);
              }}
            />
          </div>
          <div className='col-6'>
            <h4 className='mb-4'>Estados selecionados</h4>
            <div className='selected-stages'>
              {selectedStages.map((selectedStage, i) => (
                <li className='stage-item' key={i}>{`${i + 1}. ${
                  selectedStage.ariaLabel
                }`}</li>
              ))}
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='start-btn'>Definir melhor percurso</div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='reset-btn'>Fazer novo percurso</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
