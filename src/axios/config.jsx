import axios from "axios";

const API = axios.create({
    baseURL: "https://modulo-3-projecto-individual.onrender.com/"
})

export default API