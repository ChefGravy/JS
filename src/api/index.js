import axios from 'axios';

//url pointing to our backend rout which has all our posts
const url ='https://peppers-memories.herokuapp.com/post';

// this will get our fetch. Add redux capabilities, all actions towards back end is via redux.
export const fetchPosts = () => axios.get(url); 
export const createPost = (newPost) => axios.post(url, newPost); 
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);