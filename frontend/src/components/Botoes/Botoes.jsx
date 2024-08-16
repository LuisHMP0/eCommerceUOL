import React from 'react'
import './Botoes.css'

const Botoes = ({ onPageChange }) => {
  const handlePrevious = () => {
      onPageChange((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
      onPageChange((prevPage) => prevPage + 1);
  };

  return (
      <div className="pagination-buttons">
          <button className='pagination' onClick={handlePrevious}>Previous</button>
          <button className='pagination' onClick={handleNext}>Next</button>
      </div>
  );
};

export default Botoes;