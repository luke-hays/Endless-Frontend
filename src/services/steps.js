import axios from 'axios'
// For some reason linter is complaining, its not an issue though
// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API_URL

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const exports = { getAll }

export default exports