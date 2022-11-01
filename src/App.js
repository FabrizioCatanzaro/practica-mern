import './App.css';
import TituloCard from './components/TituloCard';
import BodyCard from './components/BodyCard';
import ButtonCard from './components/ButtonsCards';
import data from './events1';
import React from 'react';
import { useState } from 'react';

function App() {

  let [numeroAIncrementar, setNumeroAIncrementar] = useState(0)
  let nextCard = () => numeroAIncrementar<data.length-1 ? setNumeroAIncrementar(++numeroAIncrementar) : setNumeroAIncrementar(0)
  let previousCard = () => numeroAIncrementar > 0 ? setNumeroAIncrementar(--numeroAIncrementar) : setNumeroAIncrementar(data.length-1)

  let [showInfo, setShowInfo] = useState(false)
  let showInfoRender = () => setShowInfo(!showInfo)

  return (
    <div className="App">
      <main id='Main'>
        <div className='contenedorCard'>
            <TituloCard category={data[numeroAIncrementar].category} photo={data[numeroAIncrementar].image} />
            { showInfo ? (
            <>
            <BodyCard name={data[numeroAIncrementar].name} description={data[numeroAIncrementar].description} />
              <div id='ContenedorButtons'>
                    <ButtonCard value={<img className='imageButtonCard' src='https://cdn-icons-png.flaticon.com/512/860/860790.png' alt=""></img>} evento={previousCard} clases='btnFlecha'/>
                    <ButtonCard value='Hide Info' evento={showInfoRender} clases='btn btnCard'/>
                    <ButtonCard value={<img className='imageButtonCard' src='https://cdn-icons-png.flaticon.com/512/2735/2735071.png' alt=""></img>} evento={nextCard} clases='btnFlecha' />
                </div>
            </>
            ):
              <div id='ContenedorButtons2'>
                <ButtonCard value={<img className='imageButtonCard' src='https://cdn-icons-png.flaticon.com/512/860/860790.png' alt=""></img>} evento={previousCard} clases='btnFlecha'/>
                <ButtonCard value='Show Info' evento={showInfoRender} clases='btn btnCard'/>
                <ButtonCard value={<img className='imageButtonCard' src='https://cdn-icons-png.flaticon.com/512/2735/2735071.png' alt=""></img>} evento={nextCard} clases='btnFlecha' />
              </div> 
            }
           </div>
      </main>
    </div>
  );
}
// Linea 8 --> para utilzar una variable de JS se emplea directamente con {}
export default App;
