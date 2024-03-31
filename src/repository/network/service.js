import axios from 'axios'

const API_URL = 'https://nuevomern-7y1b.onrender.com/api/';

export const getNoticias = async () => {
    try {

        const response = await axios.get(`${API_URL}noticias`)
        return response.data

    } catch (error) {

        console.error(error)

    }
}


export const getNoticia = async (id) => {
    try {

        const response = await axios.get(`${API_URL}noticias/${id}`)
        return response.data

    } catch (error) {

        console.error(error)

    }
}


export const createNoticia = async (noticia) => {
    try {
        
        const response = await axios.post(`${API_URL}noticias`, noticia)
        return response.data

    } catch (error) {

        console.error(error)

    }
}


export const updateNoticia = async (id, noticia) => {
    try {

        const response = await axios.put(`${API_URL}noticias/${id}`, noticia)
        return response.data

    } catch (error) {

        console.error(error)

    }
}


export const deleteNoticia = async (id) => {
    try {

        const response = await axios.delete(`${API_URL}noticias/${id}`)
        return response.data

    } catch (error) {

        console.error(error)

    }
}


export const logInfetch = async (user) => {
    try {

        const response = await axios.post(`${API_URL}login`, user)
        console.log(response.data)
        return response.data

    } catch (error) {

        console.error(error)

    }
}

export const RegisterUser = async (user) => {
    try {

        const response = await axios.post(`${API_URL}register`, user)
        console.log(response)
        return response.data

    } catch (error) {

        console.error(error)

    }
}


export const crearmenor = async (menor) => {
    try {

        const response = await axios.post(`${API_URL}menor`, menor)
        console.log(response)
        return response.data

    } catch (error) {

        console.error(error)

    }
}

export const getMenores = async () => {
    try {

        const response = await axios.get(`${API_URL}menor`)
        return response.data

    } catch (error) {

        console.error(error)

    }
}


export const getTutores = async () => {
    try {

        const response = await axios.get(`${API_URL}tutor`)
        return response.data

    } catch (error) {

        console.error(error)

    }
}