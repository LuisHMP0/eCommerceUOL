import React, {} from 'react'
import './RelatedProducts.css'
import Produto from '../../Home/Produto/Produto'

const RelatedProducts = ( { relatedProducts = [], onLoadMore } ) => {

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR').format(price);
  };

  return (
    <>
    <section className='relatedProducts'>
        <h2> Related Products </h2>
          <div className='productsGridContainer'> 
            <div className='productsGrid'>
            {relatedProducts.map((product) => {
              const precoRiscado = product.discount ? product.price : null;
              const precoComDesconto = product.discount ? product.price * (1 - product.discount) : product.price;
              const desconto = product.discount ? `${(product.discount * 100).toFixed(0)}%` : '';

              return (
                <Produto
                  key={product.id}
                  id={product.id}
                  titulo={product.title}
                  subtitulo={product.subtitle}
                  preco={formatPrice(precoComDesconto)}
                  precoRiscado={precoRiscado ? formatPrice(precoRiscado) : null}
                  desconto={desconto}
                  novoProduto={product.newProduct}
                />
              );
            })}
            </div>
          </div>
        <div className='loadNewProducts'>
          <button className='showMore' onClick={onLoadMore}> Show More </button>
        </div>
    </section>
    </>
  )
}

export default RelatedProducts