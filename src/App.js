import React from 'react';
import './App.css';
import Brazil from '@svg-maps/brazil';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';

function App() {
  return (
    <div className='bg-light' style={{ height: '100vh' }}>
      <div className='container'>
        <div className='text-center' style={{ color: '#353535' }}>
          <h1 className='mb-3 pt-3'>
            Projeto{' '}
            <span style={{ color: '#84ba7e', fontWeight: 'bold' }}>
              Viagem a Trabalho
            </span>{' '}
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
          <div className='col'>
            <SVGMap map={Brazil} />
          </div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
