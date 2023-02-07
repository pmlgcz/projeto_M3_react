import fetch from '../../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NewPost.module.css'

export default function NewPost() {

    const navigate = useNavigate()

    const [titulo, setTitle] = useState()
    const [ano, setAno] = useState()
    const [criadopor, setCriadopor] = useState()
    const [imagem, setImagem] = useState()

    
    const createPost = async(e) => {
        e.preventDefault();
        await fetch.post("/series",{
            titulo: titulo,
            imagem: imagem,
            criadopor: criadopor,
            ano: ano,
        })
        alert(`Serie "${titulo}" adicionada com sucesso!`)
    }

    return(
        <div className={styles.newPost}>
            <h2>Cadastrar última série maratonada</h2>
            <form onSubmit={(e)=>createPost(e)}>
                <div className={styles.formControl}>
                    <label htmlFor="titulo">Título:</label>
                    <input type="text" name="titulo" required placeholder="Digite o título" className={styles.tituloInput} id="titulo" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="ano">Data de lançamento:</label>
                    <input type="number" required min={1900} max={2022} maxLength={4} minLength={4} name="ano" placeholder="Ex.: 2020" className={styles.anoInput} id="ano" onChange={(e) => setAno(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="criado por">Criado por:</label>
                    <input type="text" required name="criado por" placeholder="Digite o criador" className={styles.criadoporInput} id="criadopor" onChange={(e) => setCriadopor(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="imagem">Imagem:</label>
                    <input type="text" required name="imagem" placeholder="Insira a URL da imagem" id="imagem" className={styles.imagemInput} onChange={(e) => setImagem(e.target.value)}/>
                </div>
                <input type="submit" className={styles.btn} value="Adicionar série" />
            </form>
        </div>
    )
}