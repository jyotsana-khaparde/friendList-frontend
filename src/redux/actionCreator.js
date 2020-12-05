import { GET_FRIEND_LIST, ADD_FRIEND, EDIT_TASK, DELETE_FRIEND } from './actionTypes'
import axios from 'axios';

export const getFriendList = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/friendList')
          .then(res => {
            dispatch({ type: GET_FRIEND_LIST, data: res.data})
          })
          .catch(error => {
              console.log(error)
          })
    }
}

export const addFriend = (payload) => {
    console.log('addFriend payload---', payload);
    return (dispatch) => {
        axios.post('http://localhost:3000/friendList', payload)
          .then(res => {
            dispatch({ type: ADD_FRIEND, data: res.data })
          })
          .catch(error => {
              console.log(error)
          })
    }
}

export const deleteFriend = (id) => {
    return (dispatch) => {
      axios.delete(`http://localhost:3000/friendList/${id}`)
      .then(res => {
          dispatch({ type: DELETE_FRIEND, data: id })
      }).catch(error => {
          console.log(error);
      });
    }
}