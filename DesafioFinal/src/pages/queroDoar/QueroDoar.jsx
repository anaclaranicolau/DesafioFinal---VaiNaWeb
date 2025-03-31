import FormLivro from '../../assets/FormLivro.png'
import s from './queroDoar.module.scss'
import {useState} from 'react'

export default function queroDoar(){
    
    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url,setImage_url] = useState("")
    
    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImg = (e) =>{
        setImage_url(e.target.value)
    }

    const envioDados = async() => {

        const dadosPEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://desafio2vainaweb-api-livros.onrender.com//", dadosPEnviar)
    
    }



    return(
        <section className={s.queroDoarSection} >
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form onSubmit={(e)=> e.preventDefault()}>
                <div>
                    <img src={FormLivro} alt="imagem de ícone livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" name="" id=""  placeholder='Título' onChange={capturaTitulo}/>
                <input type="text" name="" id="" placeholder='Categoria' onChange={capturaCategoria} />
                <input type="text" name="" id="" placeholder='Autor' onChange={capturaAutor}/>
                <input type="url" name="" id="" placeholder='Link da Imagem' onChange={capturaImg} />
                <input type="submit" value="Doar"  className={s.buttonDoar} onClick={envioDados} />
            </form>
        </section>
    )
}