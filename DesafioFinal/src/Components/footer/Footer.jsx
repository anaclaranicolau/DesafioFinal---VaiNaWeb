import s from './footer.module.scss'
import Facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'
import Youtube from '../../assets/Youtube.png'
import Linkedin from '../../assets/Linkedin.png'
        

    export default function Footer(){
            return(
                <footer>
                    <section className={s.contatosFooter}>
                        <p>4002-8922</p>
                        <nav>
                            <a href=""><img src={Facebook} alt="logo do Facebook" /></a>
                            <a href=""><img src={Twitter} alt="logo do twitter" /></a>
                            <a href=""><img src={Youtube} alt="logo do Youtube" /></a>
                            <a href=""><img src={Linkedin} alt="logo do LinkedIn"/></a>
                           </nav> 
                           </section>
                           <section className={s.copyright}>
                            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
                           </section>
                    </footer>
                            
            )             
         }