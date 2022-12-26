

import { apiGetMoreList } from "@/services/more"
import * as actionTypes from "./constants"
export const paginationAction = (pagination) => {
    return {
        type: actionTypes.CHANGE_PAGINATION,
        pagination
    }
}
export const roomListAction = (roomList) => {
    return {
        type: actionTypes.CHANGE_ROOM_LIST,
        roomList
    }
}
export const totalCountAction = (totalCount) => {
    return {
        type: actionTypes.CHANGE_TOTAL_COUNT,
        totalCount
    }
}
export const loadingAction = (loading) => {
    return {
        type: actionTypes.CHANGE_LOADING,
        loading
    }
}
export const fetchMoreAction = (page = 0) => {

    return async (dispatch, getState) => {
        dispatch(paginationAction(page))
        dispatch(loadingAction(true))
        const res = await apiGetMoreList(page * 20)
        dispatch(loadingAction(false))
        dispatch(roomListAction(res.list))
        dispatch(totalCountAction(res.totalCount))
    }

}

