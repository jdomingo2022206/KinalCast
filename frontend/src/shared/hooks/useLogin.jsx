import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { login as loginRequest } from '../../services';
import toast from 'react-hot-toast';

export const useLogin = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    
    const login = async(password, email) => {
        setIsLoading(true);
        const response = await loginRequest({
            email,
            password
        })
        setIsLoading(false)
        
        if(response.error){
            return toast.error(response.e?.response?.data || 'Ocurrio un error al iniciar sesion, intenta de nuevo');       
        }

        const { userDatails } = response.data;

        localStorage.setItem('user', JSON.stringify(userDatails))
        navigate('/')
    }
    return{
        login,
        isLoading
    }
}
