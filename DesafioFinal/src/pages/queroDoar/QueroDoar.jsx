import FormLivro from '../../assets/FormLivro.png'
import s from './queroDoar.module.scss'

export default function queroDoar(){
    return(
        <section className={s.queroDoarSection} >
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form action="">
                <div>
                    <img src={FormLivro} alt="imagem de ícone livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" name="" id=""  placeholder='Título'/>
                <input type="text" name="" id="" placeholder='Categoria'/>
                <input type="text" name="" id="" placeholder='Autor'/>
                <input type="text" name="" id="" placeholder='Link da Imagem'/>
                <input type="submit" value="Doar"  className={s.buttonDoar} />
            </form>
        </section>
    )
}