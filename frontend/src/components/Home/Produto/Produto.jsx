import { useNavigate } from 'react-router-dom'
import './Produto.css'
import compare from './img/compare.png'
import compartilhar from './img/compartilhar.png'
import like from './img/like.png'

const Produto = (props) => {

  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/singleProduct/${props.id}`);
    console.log('Navigation to:', `/singleProduct/${props.id}`)
  }

  return (
    <>
    <div className='produto'>
        <img src={props.src} alt={props.alt} />
        <div className='descricao'>
            <h1> {props.titulo || 'TituloUndefined'} </h1>
            <p className='subtitulo'> {props.subtitulo || 'SubtituloUndefined'} </p>
            <div className='preco'>
                <p className='p1'>Rp {props.preco || 'priceUndefined'} </p>
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
            <button className='seeDetails' onClick={handleDetailsClick} > See Details </button>
            <div className='detailsDiv01'>

              <div className='share'>
                <img className='share' src={compartilhar} alt="share" />
                <p>Share</p>
              </div>

              <div className='compare'>
                <img className='compare' src={compare} alt="compare" />
                <p>Compare</p>
              </div>

              <div className='like'>
                <img className='like' src={like} alt="like" />
                <p>Like</p>
              </div>
          </div>
        </section>

    </div>
    </>
  );
}

export default Produto