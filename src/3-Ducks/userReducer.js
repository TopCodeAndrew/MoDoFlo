const initialState = {
    userID: '',
    isLoggedIn: false,
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT = 'LOGOUT'
const CHECK_USER = 'CHECK_USER'


export function loginUser(userID) {
    return {
        type: LOGIN_USER,
        payload: userID,
    }
}

export function reduxLogoutUser() {
    return {
        type: LOGOUT,
    }
}

export function checkUser() {
    return {
        type: CHECK_USER,
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, userID: action.payload, isLoggedIn: true }
        case LOGOUT:
            return initialState
        case CHECK_USER:
            return { ...state, userID: action.payload }
        default:
            return state
    }
}