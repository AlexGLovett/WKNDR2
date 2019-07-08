export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const REGISTER = 'REGISTER'
export const SET_PREFERENCES = 'UPDATE_PREFERENCES'
export const VALIDATE_REGISTRATION = 'VALIDATE_REGISTRATION'
export const SET_ZIPCODE

export const _valid = false

export function login(uid) {
    return { type: LOGIN, uid }
}

export function logout() {
    return { type: LOGOUT }
}

export function register(data) {
    return { type: REGISTER, data }
}

export function setPreferences(prefs) {
    return { type: SET_PREFERENCES, prefs }
}

export function validateRegistration(data) {
    return { type: VALIDATE_REGISTRATION, data }
}

export function setZipcode(zip) {
    return { type: SET_ZIPCODE, zip }
}