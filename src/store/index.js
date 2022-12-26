import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./modules/home.js"
import detailReducer from "./modules/detail.js"
import moreReducer from './modules/more/index'
import mainReducer from "./modules/main"
const store = configureStore({
   reducer: {
      home: homeReducer,
      more: moreReducer,
      detail: detailReducer,
      main: mainReducer
   }
})

export default store