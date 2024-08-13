import { useState } from 'react'
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

    const [produtos, setProdutos] = useState([
        {
            src: SytherineIMG,
            titulo: 'Syltherine',
            subtitulo: 'Stylish cafe chair',
            preco: '2.500.000',
            precoRiscado: 'Rp 3.500.000',
            desconto: '-30%'
        },
        {
            src: LeviosaIMG,
            titulo: 'Leviosa',
            subtitulo: 'Stylish cafe chair',
            preco: '2.500.000'
        },
        {
            src: LolitoIMG,
            titulo: 'Lolito',
            subtitulo: 'Luxury big sofa',
            preco: '7.000.000',
            precoRiscado: 'Rp 14.000.000',
            desconto: '-50%'
        },
        {
            src: RespiraIMG,
            titulo: 'Respira',
            subtitulo: 'Outdoor bar table and stool',
            preco: '500.000',
            novoProduto: true
        },
        {
            src: SytherineIMG,
            titulo: 'Syltherine',
            subtitulo: 'Stylish cafe chair',
            preco: '2.500.000',
            precoRiscado: 'Rp 3.500.000',
            desconto: '-30%'
        },
        {
            src: LeviosaIMG,
            titulo: 'Leviosa',
            subtitulo: 'Stylish cafe chair',
            preco: '2.500.000'
        },
        {
            src: LolitoIMG,
            titulo: 'Lolito',
            subtitulo: 'Luxury big sofa',
            preco: '7.000.000',
            precoRiscado: 'Rp 14.000.000',
            desconto: '-50%'
        },
        {
            src: RespiraIMG,
            titulo: 'Respira',
            subtitulo: 'Outdoor bar table and stool',
            preco: '500.000',
            novoProduto: true
        },
        {
            src: SytherineIMG,
            titulo: 'Syltherine',
            subtitulo: 'Stylish cafe chair',
            preco: '2.500.000',
            precoRiscado: 'Rp 3.500.000',
            desconto: '-30%'
        },
        {
            src: LeviosaIMG,
            titulo: 'Leviosa',
            subtitulo: 'Stylish cafe chair',
            preco: '2.500.000'
        },
        {
            src: LolitoIMG,
            titulo: 'Lolito',
            subtitulo: 'Luxury big sofa',
            preco: '7.000.000',
            precoRiscado: 'Rp 14.000.000',
            desconto: '-50%'
        },
        {
            src: RespiraIMG,
            titulo: 'Respira',
            subtitulo: 'Outdoor bar table and stool',
            preco: '500.000',
            novoProduto: true
        },
        {
            src: SytherineIMG,
            titulo: 'Syltherine',
            subtitulo: 'Stylish cafe chair',
            preco: '2.500.000',
            precoRiscado: 'Rp 3.500.000',
            desconto: '-30%'
        },
        {
            src: LeviosaIMG,
            titulo: 'Leviosa',
            subtitulo: 'Stylish cafe chair',
            preco: '2.500.000'
        },
        {
            src: LolitoIMG,
            titulo: 'Lolito',
            subtitulo: 'Luxury big sofa',
            preco: '7.000.000',
            precoRiscado: 'Rp 14.000.000',
            desconto: '-50%'
        },
        {
            src: RespiraIMG,
            titulo: 'Respira',
            subtitulo: 'Outdoor bar table and stool',
            preco: '500.000',
            novoProduto: true
        },
        
        
    ]);

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

    return (
        <>
        <div className='produtos-container'>
        <Section02 onFiltroChange={handleFiltroChange} />
            <div className='produtos'>
                {produtos.map((produto, index) => (
                    <Produto
                        key={index}
                        src={produto.src}
                        titulo={produto.titulo}
                        subtitulo={produto.subtitulo}
                        preco={produto.preco}
                        precoRiscado={produto.precoRiscado}
                        desconto={produto.desconto}
                        novoProduto={produto.novoProduto}
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