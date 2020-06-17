import axios from 'axios'

const baseURL = 'https://non-cors.herokuapp.com/https://rickandmortyapi.com/api/'

const service = axios.create({ withCredentials: true, baseURL });

export const getChar = async () => await service.get('character')

export const getEpisodes = async () => await service.get('episode')