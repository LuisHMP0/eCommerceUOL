import { useEffect, useState } from 'react'
import React from 'react'
import './Produtos.css'
import Produto from '../Produto/Produto'
import Botoes from '../Botoes/Botoes'
import Section02 from '../Section02/Section02'


const Produtos = () => {

    const [produtos, setProdutos] = useState([]);
    const [filter, setFilter] = useState('');

    const fetchProducts = (orderBy) => {
        const url = `http://localhost:3000/products?orderBy=${orderBy}`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProdutos(data);
            })
            .catch(error => { console.error('Erro when searching for products', error); });
    };

    useEffect(() => {
        fetchProducts(filter);
    }, [filter]);

    const handleFiltroChange = (orderBy) => {
        setFilter(orderBy);
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

            <div className='ordenacao-container'>
                    <button onClick={() => handleFiltroChange('nameAZ')}>Nome A-Z</button>
                    <button onClick={() => handleFiltroChange('nameZA')}>Nome Z-A</button>
                    <button onClick={() => handleFiltroChange('priceAsc')}>Preço Ascendente</button>
                    <button onClick={() => handleFiltroChange('priceDesc')}>Preço Descendente</button>
            </div>
            <div className='produtos'>
                {produtos.map((produto, index) => (
                    <Produto
                        key={produto.id}
                        src={produto.imageUrl}
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