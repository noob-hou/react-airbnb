import request from "../request";

export const apiGetGoodPriceInfo = ()=>{
   return request.get({
     url:'/home/goodPrice'
   })
}
export const apiGetHighScoreInfo = ()=>{
   return request.get({
     url:'/home/highScore'
   })
}
export const apiGetDiscountInfo = ()=>{
    return request.get({
      url:'/home/discount'
    })
 }
 export const apiGetRecommendInfo = ()=>{
  return request.get({
    url:'/home/hotrecommenddest'
  })
}
 export const apiGetLongforInfo = ()=>{
  return request.get({
    url:'/home/longfor'
  })
}
export const apiGePlusInfo = ()=>{
  return request.get({
    url:'/home/plus'
  })
}