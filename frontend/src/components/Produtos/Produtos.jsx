import { useEffect, useState } from 'react'
import React from 'react'
import './Produtos.css'
import Produto from '../Produto/Produto'
import SytherineIMG from './img/Syltherine.png'
import LeviosaIMG from './img/Leviosa.png'
import LolitoIMG from './img/Lolito.png'
import RespiraIMG from './img/Respira.png'
import Botoes from '../Botoes/Botoes'
import Section02 from '../Section02/Section02'


const Produtos = () => {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                setProdutos(data);
                console.log('dados recebidos: ', data);
            })
            .catch(error => {
                console.error('Erro when searching for products', error)
            });
        
    }, []);

    const handleFiltroChange = (filtro) => {
        let produtosOrdenados = [...produtos];

        if (filtro === 'nomeAZ') {
            produtosOrdenados.sort((a, b) => a.titulo.localeCompare(b.titulo));
        } else if (filtro === 'precoDesc') {
            produtosOrdenados.sort((a, b) => parseFloat(b.preco.replace(/\./g, '')) - parseFloat(a.preco.replace(/\./g, '')));
        } else if (filtro === 'precoCres') {
            produtosOrdenados.sort((a, b) => parseFloat(a.preco.replace(/\./g, '')) - parseFloat(b.preco.replace(/\./g, '')));
        } 

        setProdutos(produtosOrdenados);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('pt-BR').format(price);
    };

    const priceDiscount = (price, discount) => {
        if (discount == null || discount <= 0) {
            return price;
        }
        let discountAmount = price * discount
        let finalPrice = price - discountAmount;
        return finalPrice;
    }

    return (
        <>
        <div className='produtos-container'>
        <Section02 onFiltroChange={handleFiltroChange} />
            <div className='produtos'>
                {produtos.map((produto, index) => (
                    <Produto
                        key={produto.id}
                        src={produto.src}
                        titulo={produto.title}
                        subtitulo={produto.subtitle}
                        preco={formatPrice(priceDiscount(produto.price, produto.discount))}
                        precoRiscado={produto.discount ? formatPrice(produto.price) : ''}
                        desconto={produto.discount ? `${(produto.discount * 100).toFixed(0)}%` : ''}
                        novoProduto={produto.newProduct}
                    />
                ))}
            </div>
            <div className='botoes'>
                <Botoes />
            </div>
        </div>
    </>

    

    
  )
}

export default Produtos