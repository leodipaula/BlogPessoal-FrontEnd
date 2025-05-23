import axios from "axios";

const api = axios.create({
    baseURL: "https://blog-pessoal-0z51.onrender.com/"
});

export const cadastrarUsuario =
    async (
        url: string,
        dados: Object,
        setDados: Function
    ) => {
        const resposta = await api.post(url, dados);
        setDados(resposta.data);
    }

export const login =
    async (
        url: string,
        dados: Object,
        setDados: Function
    ) => {
        const resposta = await api.post(url, dados);
        setDados(resposta.data);
    }
