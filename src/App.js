import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Brazil from '@svg-maps/brazil';
import { CheckboxSVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';

const NONE_STAGE = 0;
const SELECTED_STAGE = 1;
const CAN_RESET_STAGE = 2;

function App() {
  const [selectedStages, setSelectedStages] = useState([]);
  const [state, setState] = useState(NONE_STAGE);
  const mapEl = useRef(null);

  useEffect(() => {
    console.log(selectedStages.length);
    if (selectedStages.length > 1) {
      setState(SELECTED_STAGE);
    } else {
      setState(NONE_STAGE);
    }

    console.log(selectedStages);
    console.log(mapEl);
  }, [selectedStages]);

  const setRoute = () => {
    setState(CAN_RESET_STAGE);
  };

  const resetRoute = () => {
    setState(NONE_STAGE);
    mapEl.current.state.selectedLocations = [];
    setSelectedStages([]);
  };

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
            <h3 className='mb-4 subtitle text-center'>Selecione os estados</h3>
            <CheckboxSVGMap
              ref={mapEl}
              map={Brazil}
              onChange={(values) => {
                setSelectedStages(values);
              }}
            />
          </div>
          <div className='col-6'>
            <h3 className='mb-4 subtitle text-center'>Estados selecionados</h3>
            <ul className='selected-stages'>
              {state === SELECTED_STAGE &&
                selectedStages.map((selectedStage, i) => (
                  <li className='stage-item' key={i}>
                    {selectedStage.ariaLabel}
                  </li>
                ))}
            </ul>

            <div className='selected-stages-route'>
              {state === CAN_RESET_STAGE &&
                selectedStages.map((selectedStage, i) => {
                  let title = selectedStage.id.toUpperCase();

                  if (i !== selectedStages.length - 1) {
                    title += ' > ';
                  }

                  return (
                    <div className='stage-item-route' key={i}>
                      {title}
                    </div>
                  );
                })}
            </div>
            {state === NONE_STAGE && (
              <p className='text-center'>Selecione 2 ou mais estados no mapa</p>
            )}

            {state === SELECTED_STAGE && (
              <div className='d-flex justify-content-center align-items-center'>
                <div className='start-btn' onClick={setRoute}>
                  Definir melhor percurso
                </div>
              </div>
            )}
            {state === CAN_RESET_STAGE && (
              <div className='d-flex justify-content-center align-items-center'>
                <div className='reset-btn' onClick={resetRoute}>
                  Fazer novo percurso
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
