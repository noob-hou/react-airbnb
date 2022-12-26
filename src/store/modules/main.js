import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        headerConfig: {
            isFixed: false,
            topAlpha: false
        }
    },
    reducers: {
        changeConfigAction(state, { payload }) {
            state.headerConfig = payload
        }
    }
})
export const { changeConfigAction } = mainSlice.actions
export default mainSlice.reducer