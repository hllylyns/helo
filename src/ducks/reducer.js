import axios from 'axios';

const initialState = {
    user: {
        username: "",
        id: "",
        profile_picture: ""
    }
}

const UPDATE_USER = 'UPDATE_USER'


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, { user: action.payload });
        default:
            return state;
    }
}

export function updateUser(username, id, profile_picture) {
    return {
        type: UPDATE_USER,
        payload: {
            username,
            id,
            profile_picture
        }
    }
}

export function getUser(){
    let user = axios.get('/:id').then( res => {
        return res.data;
    })
    return {
        type: GET_USER,
        payload: user
    }
}