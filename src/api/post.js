import HttpUtility from './HttpUtility'

export const createPost = ({name, description, share_mode, status, token, tag}) => {
    return HttpUtility.post(`https://testdeploygolang-production.up.railway.app/posts`, {name, description, share_mode, status, token, tag})   
}