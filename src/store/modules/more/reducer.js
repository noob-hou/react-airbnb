import * as actionTypes from "./constants"

const initialState = {
    roomList: [],
    pagination: 0,
    totalCount: 0,
    loading: false,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_ROOM_LIST:
            return { ...state, roomList: action.roomList }
        case actionTypes.CHANGE_PAGINATION:
            return { ...state, pagination: action.pagination }
        case actionTypes.CHANGE_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case actionTypes.CHANGE_LOADING:
            return { ...state, loading: action.loading }
        default:
            return state
    }

}
export default reducer