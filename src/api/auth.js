import HttpUtility from './HttpUtility'

export const login = ({email, password}) => {
    return HttpUtility.post('http://127.0.0.1:8000/user-app/users/login', {email, password})
}