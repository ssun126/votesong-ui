import axios from 'axios';
 
export function getPost(postId) {
    return axios.get('http://13.209.18.215:3001/api/file/' + postId);
}

export function getComments(postId) {
    return axios.get(`http://13.209.18.215:3001/api/file/${postId}`)
}

export function getFileList(postId) {
    return axios.get('http://13.209.18.215:3001/api/file/list');
}
