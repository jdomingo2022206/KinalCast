export const validateDescription = (description) => {
    return description.length >= 10 && description.length <= 200
}

export const descriptionValidateMessage = "La descripcion debe tener entre 10 y 200 caracteres"