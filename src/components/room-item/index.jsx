import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { RoomItemWrapper } from './style'
import { Rating } from '@mui/material';
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';
const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const [indicatorIndex, setIndicatorIndex] = useState(0)
  const carouselRef = useRef()

  const pictureEl = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )
  const sliderEl = (
    <div className="slider">
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(e, false)}>
          <IconArrowLeft width="30px" height="30px" />
        </div>
        <div className='btn right' onClick={e => controlClickHandle(e, true)}>
          <IconArrowRight width="30px" height="30px" />
        </div>
      </div>
      <div className="indicator">
        <Indicator index={indicatorIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item} onClick={e => toImageClick(e, index)}>
                <span className={classNames('dot', { active: indicatorIndex === index })}></span>
              </div>
            )
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={carouselRef}>
        {
          itemData.picture_urls?.map(item => {
            return (
              <div className="cover" key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }

      </Carousel>
    </div>
  )
  return (
    <RoomItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"} itemWidth={itemWidth} onClick={itemClickHandle}>
      <div className="inner">
        {!itemData.picture_urls ? pictureEl : sliderEl}
        <div className="desc">
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>
        <div className='bottom'>
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </RoomItemWrapper>
  )
  function controlClickHandle(e, isRight) {
    e.stopPropagation()
    isRight ? carouselRef.current.next() : carouselRef.current.prev()
    let newIndex = isRight ? indicatorIndex + 1 : indicatorIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex > length - 1) newIndex = 0
    if (newIndex < 0) newIndex = length - 1
    setIndicatorIndex(newIndex)
  }
  function toImageClick(e, index) {
    e.stopPropagation()
    setIndicatorIndex(index)
    carouselRef.current.goTo(index)
  }
  function itemClickHandle(e) {
    e.preventDefault()
    itemClick && itemClick(itemData)
  }
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
  itemClick: PropTypes.func
}

export default RoomItem