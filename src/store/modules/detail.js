import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        detailInfo: JSON.parse(window.localStorage.getItem('detailInfo')) || {}
    },
    reducers: {
        changeInfoAction(state, { payload }) {

            window.localStorage.setItem('detailInfo', JSON.stringify(payload))
            state.detailInfo = payload
        }
    }
})
export const { changeInfoAction } = detailSlice.actions
export default detailSlice.reducer
