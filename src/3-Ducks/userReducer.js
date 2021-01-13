const initialState = {
    userID: '',
    isLoggedIn: false,
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT = 'LOGOUT'


export function loginUser(userID) {
    return {
        type: LOGIN_USER,
        payload: userID,
    }
}

export function logout() {
    return {
        type: LOGOUT,
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, userID: action.payload, isLoggedIn: true }
        case LOGOUT:
            return initialState
        default:
            return state
    }
}