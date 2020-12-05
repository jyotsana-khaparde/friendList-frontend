import { GET_FRIEND_LIST, ADD_FRIEND, DELETE_FRIEND } from './actionTypes'

const initialState = {
    friendList: [],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIEND_LIST:
            let friendListData = [...action.data]
            // friendListData.sort((a, b) => {
            //     let da = new Date(a.CreatedAt);
            //     let db = new Date(b.CreatedAt);
            //     return db - da;
            // });
        return {
            ...state,
            friendList: friendListData
        }
        case ADD_FRIEND:
            let updatedDate = [...state.friendList, action.data]
            // updatedDate.sort((a, b) => {
            //     let da = new Date(a.CreatedAt);
            //     let db = new Date(b.CreatedAt);
            //     return db - da;
            // });
        return {
            ...state,
            friendList: updatedDate
        }
        case DELETE_FRIEND:
            let dataForFilter = [...state.friendList];
            let filteredData = dataForFilter.filter(dataForFilters => dataForFilters.id !== action.data)
        return {
            ...state,
            friendList: filteredData
        }
        default: return state
    }
}

export default todoReducer;