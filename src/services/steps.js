import axios from 'axios'
//To make this simpler Im just going to put the url here, probably not how we'd really want it
const baseUrl = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const exports = { getAll }

export default exports