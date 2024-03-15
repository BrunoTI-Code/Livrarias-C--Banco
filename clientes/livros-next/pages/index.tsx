import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container} >
           <h1>LIVROS-NEXT</h1><br/>
          <h2>Sistema de Gerenciamento de Livros - Banco de dados - Mongodb</h2>

          

          
        </div>
      </main>
    </div>
  )
}
