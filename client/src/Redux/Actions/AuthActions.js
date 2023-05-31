import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"
import axios from 'axios'
import { handleErrors } from "./ErrorActions"
export const register=(newUser,navigate)=>async(dispatch)=>{
    try {
        
        const res = await axios.post('/api/users/SignUp',newUser)
        console.log(res)
        dispatch({
            type : REGISTER,
            payload : res.data
        })

        navigate('/Profile')
    } catch (error) {
        // dispatch({
        //     type : FAIL,
        //     payload : error.response.data.errors
        // })
        error.response.data.errors.forEach(element => {
            dispatch(handleErrors(element.msg))
        });
    }
}

export const login=(logedUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/users/SignIn',logedUser)
        dispatch({
            type : LOGIN,
            payload : res.data
        })
        navigate('/Profile')
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data.errors
        })
    }
}

export const current=()=>async(dispatch)=>{
    try {
        const config = {
            headers : {
                Authorization : localStorage.getItem('token')
            }
        }
        const res = await axios.get('/api/users/getCurrentUser',config)

        dispatch({
            type : CURRENT,
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data.errors
        })
    }
}

export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}