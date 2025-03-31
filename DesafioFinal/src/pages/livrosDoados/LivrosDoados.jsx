import Livro1 from '../../assets/livro1.png'
import s from './livrosDoados.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function livrosDoados(){
    
    const [livros, setLivros] = useState([])

    const puxarLivros = async() =>{
        const resposta = await axios.get("https://desafio2vainaweb-api-livros.onrender.com/")
        setLivros(resposta.data.livros)
    }
    useEffect(()=>{
        puxarLivros()
    }, [])
    
    return(
        <section className={s.livrosDoadosSection}  >  
            <h2>Livros Doados</h2>
            <section className={s.containerCards} >
               <section>
                <img src={Livro1} alt="Imagem da capa do livro O Porotagonista" />
                    <div>
                        <h3>O Protagonista</h3> 
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
               </section>
            </section>
        </section>
    )
}