import { GET_FRIEND_LIST, ADD_FRIEND, EDI_FAVORITE, DELETE_FRIEND } from './actionTypes'
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

export const updateFavorite = (payload) => {
    return (dispatch) => {
        axios.put(`http://localhost:3000/friendList/${payload.id}`, payload)
          .then(res => {
            dispatch({ type: EDI_FAVORITE, data: res.data })
          })
          .catch(error => {
            console.log(error)
          })
    }
}
