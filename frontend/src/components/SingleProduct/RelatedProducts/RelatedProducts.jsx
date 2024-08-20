import React, {} from 'react'
import './RelatedProducts.css'
import Produto from '../../Home/Produto/Produto'

const RelatedProducts = ( { relatedProducts = [] } ) => {


  return (
    <>
    <section className='relatedProducts'>
        <h2> Related Products </h2>
        <div className='productsGrid'>
            {relatedProducts.map((product) => (
                <Produto
                key={product.id}
                id={product.id}
                titulo={product.title}
                subtitulo={product.subtitle}
                preco={product.price}
                desconto={product.discount}
                novoProduto={product.newProduct}
          />
        ))}
        </div>
        
    </section>
    </>
  )
}

export default RelatedProducts