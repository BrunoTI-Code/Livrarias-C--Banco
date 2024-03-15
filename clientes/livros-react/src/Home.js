import React, { useEffect, useState } from "react";
import './LivroLista.css'
import Header from "./component/Header";


export default function Home() {
    return (
        <>
            <Header />
            <main className='containerHome'>
                <h1>LIVROS-REACT</h1><br/>
                <p><h2>Sistema de Gerenciamento de Livros - Banco de dados - Mongodb</h2></p>

        </main >
        </>
    );
}
