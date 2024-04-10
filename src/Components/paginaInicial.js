import Styles from './paginaInicial.module.css'
import { Link } from 'react-router-dom'
function PaginaInicial() {
    return (
        <section className={Styles.container1}>
            <h1><span className={Styles.detalhe}>X</span><span className={Styles.detalhe}>O</span></h1>
            <div className={Styles.container}>

                <div className={Styles.gamecontainer}>
                    <h1>Bem-vindo ao JOGO DO VELHO</h1>
                    <Link className={Styles.startbutton} to='/facil'>Jogar Sozinho</Link>
                    <Link className={Styles.startbutton} to='/amigo'>Jogar com Amigo</Link>
                </div>
            </div>
        </section>
    )
}
export default PaginaInicial