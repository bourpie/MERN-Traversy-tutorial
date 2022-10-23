import axios from 'axios'

const API_URL = '/api/users/'

//register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    // Set token in local storage
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//Login
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    // Set token in local storage
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Se déconnecter
const logout = async () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
}

export default authService