import React from 'react'
import './Produto.css'

const Produto = (props) => {
  return (
    <>
    <div className='produto'>
        <img src={props.src} alt={props.alt} />
        <div className='descricao'>
            <h1> {props.titulo || 'TituloUndefined'} </h1>
            <p className='subtitulo'> {props.subtitulo || 'SubtituloUndefined'} </p>
            <div className='preco'>
                <p className='p1'>Rp {props.preco || '0'} </p>
                <p className='p2'>{props.precoRiscado} </p>
            </div>
        </div>

        {props.desconto && (
          <div className='promocao'>
          <p> {props.desconto} </p>
          </div>
        )}
      
        {props.novoProduto && (
          <div className='novoProduto'>
          <p> New </p>
          </div>
        )}

        <section className='details'>
            <button className='seeDetails'> See Details </button>
            <div className='detailsDiv01'>

              <div className='share'>
                <img className='share' src="src/components/Produto/img/compartilhar.png" alt="share" />
                <p>Share</p>
              </div>

              <div className='compare'>
                <img className='compare' src="src/components/Produto/img/compare.png" alt="compare" />
                <p>Compare</p>
              </div>

              <div className='like'>
                <img className='like' src="src/components/Produto/img/like.png" alt="like" />
                <p>Like</p>
              </div>
          </div>
        </section>

    </div>
    </>
  );
}

export default Produto