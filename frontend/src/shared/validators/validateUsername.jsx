
export const validateUsername = (username) => {
    const regex = /^\S{3,8}$/
    
    return regex.test(username)
}

export const validateUsernameMessage = "El username debe tener de 3 a 8 caracteres"
