import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Brazil from '@svg-maps/brazil';
import { CheckboxSVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import Graph from './graph';
import distances from './distances';
import states from './states';

const NONE_STAGE = 0;
const SELECTED_STAGE = 1;
const CAN_RESET_STAGE = 2;

function App() {
  const [selectedStages, setSelectedStages] = useState([]);
  const [state, setState] = useState(NONE_STAGE);
  const [answer, setAnswer] = useState(null);
  const mapEl = useRef(null);

  useEffect(() => {
    if (selectedStages.length >= 2) {
      setState(SELECTED_STAGE);
    } else {
      setState(NONE_STAGE);
    }
  }, [selectedStages]);

  const setRoute = () => {
    setState(CAN_RESET_STAGE);

    const graph = createGraph();
    const result = graph.Dijkstras(selectedStages[0].id, selectedStages[1].id);

    const selectedPaths = [];
    result.forEach((state) =>
      selectedPaths.push(document.getElementById(state))
    );
    mapEl.current.state.selectedLocations = selectedPaths;
    setAnswer(result);
  };

  const resetRoute = () => {
    setState(NONE_STAGE);
    mapEl.current.state.selectedLocations = [];
    setSelectedStages([]);
  };

  const createGraph = () => {
    const graph = new Graph();

    states.forEach((state) => {
      graph.addNode(state);
    });
    Object.keys(distances).forEach((travel) => {
      const origin = travel[0] + travel[1];
      const destination = travel[3] + travel[4];
      graph.addEdge(origin, destination, distances[`${origin}-${destination}`]);
    });
    return graph;
  };

  return (
    <div className='bg-light' style={{ height: '100vh' }}>
      <div className='container'>
        <div className='text-center mb-5 pt-4' style={{ color: '#353535' }}>
          <h1 className='mb-3'>
            Projeto <span className='bold-text'>Viagem a Trabalho</span>{' '}
          </h1>
          <p>
            Luciana foi promovida a nova gerente executiva na empresa o qual
            trabalha. Essa empresa tem a cutura de que quando há um novo
            gerente, ele tem que ir em uma filial escolhida para saber o
            andamento das atividades e retirar métricas. No entanto, Luciana
            quer mais! Como vai viajar de carro e sabe que todas as filiais
            ficam nas capitais, ela deseja passar por todas as filiais dos
            estados que passar, desde que esse percurso seja o menor
            possível. Informe qual o estado de origem de Luciana e qual o estado
            de destino. A aplicação irá se responsabilizar por dizer qual será o
            menor trajeto, passando pelas capitais da origem ao destino
            desejado.
          </p>
        </div>
        <div className='row'>
          <div className='col-6'>
            <h3 className='mb-4 subtitle text-center'>Selecione os estados</h3>
            <CheckboxSVGMap
              ref={mapEl}
              map={Brazil}
              onChange={(values) => {
                if (values.length > 2) {
                  values.shift();
                }
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
              {state === CAN_RESET_STAGE && (
                <table className='table table-hover'>
                  <thead>
                    <tr>
                      <th className='text-center'>Origem</th>
                      <th className='text-center'>Chegada</th>
                      <th className='text-center'>Quilometros</th>
                    </tr>
                  </thead>
                  <tbody>
                    {answer.map((selectedStage, i) => {
                      if (i === answer.length - 1) return null;
                      return (
                        <tr key={i}>
                          <td className='text-center'>
                            {selectedStage.toUpperCase()}
                          </td>
                          <td className='text-center'>
                            {answer[i + 1].toUpperCase()}
                          </td>
                          <td className='text-center'>
                            {distances[`${selectedStage}-${answer[i + 1]}`]}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
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
