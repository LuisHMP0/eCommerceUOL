import { useEffect, useState } from 'react'
import React from 'react'
import './Produtos.css'
import Produto from '../Produto/Produto'
import Botoes from '../Botoes/Botoes'


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

    return (
        <>
        <div className='produtos-container'>

            <div className='filters'>
                <select onChange={(e) => handleFiltroChange(e.target.value)}>
                    <option value='default'> Filter </option>
                    <option value='nameAZ'>Name A-Z</option>
                    <option value='nameZA'>Name Z-A</option>
                </select>

                <div className='showing'>
                    <p>Showing 1–16 of 32 results</p>
                </div>

                <div className='pagination-controls'>
                        <select onChange={(e) => handleLimitChange(Number(e.target.value))} value={limit}>
                            <option value={16}> Show </option>
                            <option value={4}>4 products per page</option>
                            <option value={8}>8 products per page</option>
                            <option value={16}>16 products per page</option>
                        </select>
                </div>
                <div className='orderBy'>
                    <select onChange={(e) => handleFiltroChange(e.target.value)}>
                        <option value='default'> Show by </option>
                        <option value='priceAsc'>Rising Price</option>
                        <option value='PriceDesc'>Decreasing Price</option>
                    </select>
                </div>
            </div>

            <div className='produtos'>
                {produtos.map((produto) => {
                    const preco = formatPrice(produto.price);
                    const precoRiscado = produto.discount 
                        ? formatPrice(produto.price / (1 - produto.discount)) 
                        : formatPrice(produto.price);
                    const desconto = produto.discount ? `${(produto.discount * 100).toFixed(0)}%` : '';

                    return (
                        <Produto
                            key={produto.id}
                            id={produto.id}
                            src={produto.imageUrl}
                            titulo={produto.title}
                            subtitulo={produto.subtitle}
                            preco={preco}
                            precoRiscado={precoRiscado}
                            desconto={desconto}
                            novoProduto={produto.newProduct}
                        />
                    );
                })}
            </div>

            <Botoes onPageChange={handlePageChange} />

            
        </div>
    </>

    

    
  )
}

export default Produtos