import HttpUtility from './HttpUtility'

export const createPost = ({name, description, share_mode, status}) => {
    return HttpUtility.post(`http://127.0.0.1:8000/createpost`, {name, description, share_mode, status})   
}