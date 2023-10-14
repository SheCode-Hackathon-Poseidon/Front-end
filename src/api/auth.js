import HttpUtility from './HttpUtility'

export const login = ({email, password}) => {
    return HttpUtility.sendRequestWithObject('https://testdeploygolang-production.up.railway.app/login', {email, password})
}
