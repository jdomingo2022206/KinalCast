
export const validatePassword = (url) => {
    const regex = /^\S{6,12}$/
    
    return regex.test(password)
}

export const passwordValidationMessage = "Esta contraseña no es valida"
