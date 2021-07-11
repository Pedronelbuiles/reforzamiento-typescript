import { useEffect } from "react"
import { useReducer } from "react"
import { useCounter } from '../hooks/useCounter';

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
}

type LoginPayload = {
    username: string,
    nombre: string
}

type AuthAction = 
    | { type: 'logout' }
    | {type: 'login', payload: LoginPayload}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

const authReducer = (state:AuthState, action: AuthAction):AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
    
        case 'login':
            const {nombre, username} = action.payload
            return {
                ...state,
                token: 'ABC123',
                nombre,
                username
            }
        default:
            return state
    }
}

export const Login = () => {

    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'})
        }, 1500);
    }, [])


    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Pedro',
                username: 'El mejor'
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    if (validando) {
        return(
            <>
                <h3>Login</h3> 
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3> 
            {
                token
                    ? <div className="alert alert-success">Autenticado como {nombre}</div>
                    : <div className="alert alert-danger">No autenticado</div>
            }
            
            {
                token
                    ? 
                        (
                            <button className="btn btn-danger" onClick={logout}>
                                Logout
                            </button>
                        )
                    :
                        (
                            <button className="btn btn-primary" onClick={login}>
                                Login
                            </button>
                        )
            }
        </>
    )
}
