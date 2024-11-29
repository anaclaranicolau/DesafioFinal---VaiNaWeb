import Livro1 from '../../assets/livro1.png'
import s from './livrosDoados.module.scss'

export default function livrosDoados(){
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