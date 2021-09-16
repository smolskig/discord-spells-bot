require('dotenv').config();
import axios from 'axios'

const http = axios.create({
    baseURL: process.env.API_URL
})

export default http