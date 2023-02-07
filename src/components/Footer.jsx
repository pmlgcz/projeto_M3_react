import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import "./Footer.css"
export default function Footer () {

    return (
        <div className="Footer">
       
        <p> SeriesFlix - Todos os direitos reservados </p>
        <p> Telefone: 1001 2002 </p>
        <p> Endereço: Avenida California, 2023, Rio de janeiro, RJ | 
            Email: sac@seriesflix.com</p>
        <ul className="listaFooter">
            <li><img className="imgFooter" src={instagram} alt="" /></li>
            <li><img className="imgFooter" src={facebook} alt="" /> </li>
            <li><img className="imgFooter" src={twitter} alt="" /> </li>
        </ul>
        </div>
    )
}
