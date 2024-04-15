export const input = ({
    field,
    label,
    value,
    onChangeHandler, //manejar cambios
    type,
    showErrorMessage,
    validationMenssage,
    onBlurHandler, //para hacer focus
    textarea
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }

    const handleInputBlur = (event) =>{
        onBlurHandler(event.target.value, field)
    }
    return (
        <>
            <div className="auth-form-label">
                <span>{label}</span>
            </div>
            <div >
                {textarea?(
                    <textarea
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                        rows={5}
                        style={{maxWidth: '400px'}}
                    />
                ) : (
                    <input
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                    />
                )
                }
                <span className="auth-form-validation-message">
                    {showErrorMessage && validationMenssage}
                </span>
            </div>
        </>
    )
}
