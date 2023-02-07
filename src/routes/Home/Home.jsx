import { useEffect, useState } from "react";
import API from "../../axios/config";
import ListItems from "../../components/ListItems";
import Section from "../../components/Section";
import "./Home.css"
import MaisvistasIMG from '../../images/play.png'
import LoadingGIF from '../../images/gif-loading.gif'


export default function Home() {

  const [series, setSeries] = useState([]);

  useEffect(() => {
    API.get("/seriesmaisvistas")
    .then(response=>setSeries(response.data))
  }, []);


  return (
    <>
      <div id="MaisVistas">
        <img src={MaisvistasIMG}/>
        <h2>Mais vistas</h2>
      </div>
      <Section>
        {series.length === 0 ? (
          <img src={LoadingGIF} id="LoadingGIF" alt="" />
        ) : (
          series.map((item) => (

            <ListItems nomeSeries={item.titulo} anoSerie={item.ano} img={item.imagem} id={item.id} criadopor={item.criadopor} sinopse={item.sinopse} />
            

          ))
        )}
        
      </Section>
    </>
  );
}