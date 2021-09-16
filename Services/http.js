require('dotenv').config();
const axios = require('axios') 

const http = axios.create({
    baseURL: process.env.API_URL
})

module.exports = http