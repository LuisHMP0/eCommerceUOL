import React, { useState } from 'react';
import './Section02.css'
import filter from './img/filter.png'
import line from './img/Line.png'

const Section02 = ({onFiltroChange}) => {
    const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

    const toggleOpcoes = () => {
      setMostrarOpcoes(!mostrarOpcoes);
    };

    {/* Filter*/}

    const handleOrdenacaoChange = (e) => {
      const novoFiltro = e.target.value;
      onFiltroChange(novoFiltro);
    };

    return (
      <section className='sec02'>

        <div className="filtro-container">

            <div className='filter'>
                <img className='imgFilter' src={filter} alt="Filtro" onClick={toggleOpcoes} />
                <p> Filter </p>
            </div>
        
            {mostrarOpcoes && (
            <div className="opcoes-container">
                <select id="ordenacao" onChange={handleOrdenacaoChange}>
                        <option value="nomeAZ">Name (A - Z)</option>
                        <option value="precoDesc">Price (Bigger - Smaller)</option>
                        <option value="precoCres">Price (Smaller - Bigger)</option>
                </select>
            </div>
          )}

            <div className='results'> 
                <img className='lineImg' src={line} alt="Line" />
                <p> Showing 1–16 of 32 results </p>
            </div>

        </div>

        
        <div className='input'> 
            <p> Show </p>
            <input type='number' id='inputResult' className='inputResult' placeholder=''/> 
        </div>
      </section>
    );}

export default Section02