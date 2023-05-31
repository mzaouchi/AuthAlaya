import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"

const intialState = {
    user : {},
    errors : []
}

const AuthReducer=(state = intialState,action)=>{
    switch (action.type) {
        case FAIL : return {...state, errors : action.payload,user : null}
        case REGISTER : 
        localStorage.setItem('token',action.payload.token)
        return {...state,user : action.payload.newUser, errors : null}
        case LOGIN : 
        localStorage.setItem('token',action.payload.token)
        return {...state,user : action.payload.found, errors : null}
        case CURRENT : return {...state, user : action.payload,errors:null}
        case LOGOUT : 
        localStorage.removeItem('token')
        return {...state,user : null,errors : null}
        default: return state
    }
}

export default AuthReducer
