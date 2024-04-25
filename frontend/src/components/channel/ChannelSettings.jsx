import { useState } from "react";
import {validateUsername, validationAvatarUrl, avatarUrlValidationMessage,
        validateUsernameMessage, validateDescription, validateTitle,
        validateTitleMessage,
        descriptionValidateMessage} from "../../shared/validators";

const inputs = [
    {
        field: 'username',
        lablel: 'Username',
        validationMessage: validateUsernameMessage,
        type: 'text'
    },
    {
        field: 'title',
        lablel: 'title',
        validationMessage: validateTitleMessage,
        type: 'text'
    },
    {
        field: 'avatarUrl',
        lablel: 'avatarUrl',
        validationMessage: avatarUrlValidationMessage,
        type: 'text'
    },
    {
        field: 'description',
        lablel: 'description',
        validationMessage: descriptionValidateMessage,
        type: 'text'
    }
]

export const channelSettings ({settings, saveSettings}) => {
    const [formState, setFormState] = useState({
        title: {
            isValid: validateTitle(settings.title),
            showError: false,
            value: settings.title
        },
        username: {
            isValid: validateUsername(settings.username),
            showError: false,
            value: settings.username
        },
        avatarUrl: {
            isValid: validationAvatarUrl(settings.avatarUrl),
            showError: false,
            value: settings.avatarUrl
        },
        description: {
            isValid: validateDescription(settings.description),
            showError: false,
            value: settings.description
        },
    })

    const handleInputValueChange = (value, field){
        setFormState((prevState)=>({
            ...prevState,
            [field]:{
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field)=> {
        let isValid = false

        switch (field) {
            case 'username':
                isValid= validateUsername(value)
                break;
            case 'title':
                isValid= validateTitle(value)
                break;
            case 'avatarUrl':
                isValid= validationAvatarUrl(value)
                break;
            case 'description':
                isValid= validateDescription(value)
                break;
            default:
                break;
        }

        setFormState((prevState)=>({
            ...prevState,
            [field]:{
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))

        const handleFormSubmit = (event) => {
            event.preventDefault()
            
            saveSettings({
                username: formState.username.value,
                title: formState.title.value,
                avatarUrl: formState.avatarUrl.value,
                description: formState.description.value
            })
        }

        const isSubmitButtonDisable = !formState.username.isValid||
                                        !formState.title.isValid||
                                        !formState.avatarUrl.isValid||
                                        !formState.description.isValid|| 
                                    
        return(
            <form className="settings-form">
                {inputs.map((input) =>{
                    <Input
                        key={input.field}
                        field={input.field}
                        label={input.field}
                        value={formState[input.field].value}
                        onChangeHandler={handleInputValueChange}
                        onBlurHandler={handleInputValidationOnBlur}
                        showErrorMessage={formState[input.field].value}
                        validationMessage={input.validationMessage}
                        type={input.type}
                        textarea={input.textarea}
                    />
                
                })
                }
                <button onClick={handleFormSubmit} disabled={isSubmitButtonDisable}>
                    Actualizar Data
                </button>
            </form>
        )

    }
}