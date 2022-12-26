import { apiGetGoodPriceInfo, apiGetHighScoreInfo, apiGetDiscountInfo, apiGetRecommendInfo, apiGetLongforInfo, apiGePlusInfo } from "@/services/home"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {

  apiGetGoodPriceInfo().then(res => {
    dispatch(goodPriceInfoAction(res))
  })
  apiGetHighScoreInfo().then(res => {
    dispatch(highScoreInfoAction(res))
  })
  apiGetDiscountInfo().then(res => {
    dispatch(discountInfoAction(res))
  })
  apiGetRecommendInfo().then(res => {
    dispatch(recommendInfoAction(res))
  })
  apiGetLongforInfo().then(res => {
    dispatch(longforInfoInfoAction(res))
  })
  apiGePlusInfo().then(res => {
    dispatch(plusInfoInfoAction(res))
  })
})
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    goodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    highScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    discountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    recommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    longforInfoInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    plusInfoInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  }
})
export const { goodPriceInfoAction,
  highScoreInfoAction,
  discountInfoAction,
  recommendInfoAction,
  longforInfoInfoAction,
  plusInfoInfoAction
} = homeSlice.actions
export default homeSlice.reducer