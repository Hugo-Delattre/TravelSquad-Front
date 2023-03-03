



let saveToken = (token) => {
    localStorage.setItem('token', token)
}


let logout = () => {
    localStorage.removeItem('token')
}



let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}


// Déclaration des serivces pour import
export const accountService = {
     saveToken, logout, isLogged,
}