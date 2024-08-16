import { useEffect, useState } from 'react'
import React from 'react'
import './Produtos.css'
import Produto from '../Produto/Produto'
import Botoes from '../Botoes/Botoes'
import Section02 from '../Section02/Section02'


const Produtos = () => {

    const [produtos, setProdutos] = useState([]);
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(16);

    const fetchProducts = () => {
        const url = `http://localhost:3000/products?orderBy=${filter}&page=${page}&limit=${limit}`;

        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json()
            })
            .then(data => {
                setProdutos(data);
                console.log('recebidos: ', data)
            })
            .catch(error => { console.error('Erro when searching for products', error); });
    };

    useEffect(() => {
        fetchProducts();
    }, [filter, page, limit]);

    const handleFiltroChange = (orderBy) => {
        setFilter(orderBy);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleLimitChange = (newLimit) => { 
        setLimit(newLimit);
        setPage(1); 
    }

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
                {produtos.map((produto) => (
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
            <div className='pagination-controls'>
                    <Botoes onPageChange={handlePageChange} />
                    <select onChange={(e) => handleLimitChange(Number(e.target.value))} value={limit}>
                        <option value={4}>4 produtos por página</option>
                        <option value={8}>8 produtos por página</option>
                        <option value={16}>16 produtos por página</option>
                    </select>
                </div>
        </div>
    </>

    

    
  )
}

export default Produtos