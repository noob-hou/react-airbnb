import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'

import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSection1 from './c-cpns/home-section1'
import HomeSection2 from './c-cpns/home-section2'

import isEmptyObj from '@/utils/isEmptyObj'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSection3 from './c-cpns/home-section3/HomeSection3'
import { changeConfigAction } from '@/store/modules/main'
const Home = memo(() => {


  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)


  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyObj(discountInfo) && <HomeSection2 infoData={discountInfo} />}
        {isEmptyObj(recommendInfo) && <HomeSection2 infoData={recommendInfo} />}
        {isEmptyObj(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {isEmptyObj(goodPriceInfo) && <HomeSection1 infoData={goodPriceInfo} />}
        {isEmptyObj(highScoreInfo) && <HomeSection1 infoData={highScoreInfo} />}
        {isEmptyObj(plusInfo) && <HomeSection3 infoData={plusInfo} />}

      </div>
    </HomeWrapper>
  )
})

export default Home