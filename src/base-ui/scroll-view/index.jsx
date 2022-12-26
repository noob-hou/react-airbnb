import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollWrapper } from './style'

const ScrollView = memo((props) => {
  //是否显示左右按钮
  const [showRight,setShowRight] = useState(false)
  const [showLeft,setShowLeft] = useState(false)
  //记录移动的itemIndex
  const [posIndex,setPosIndex] = useState(0)
  const scrollRef = useRef()
  const contentRef = useRef()
  useEffect(()=>{
    //根据滚动距离是否大于盒子宽度 决定是否显示右侧移动按钮
    const clientWidth = contentRef.current.clientWidth
    const scrollWidth = contentRef.current.scrollWidth
    let totalDistance = scrollWidth-clientWidth
    setShowRight(totalDistance>0)
    //记录一下 是否滚动大于盒子的距离
    scrollRef.current = totalDistance
  },[props.children])
  return (
    <ScrollWrapper >
      { showLeft && (
        <div className='control left' onClick={e => handleClick(-1)}>
          <IconArrowLeft/>
        </div>
      ) }
      { showRight && (
        <div className='control right' onClick={e => handleClick(1)}>
          <IconArrowRight/>
        </div>
      ) }
      <div className="scroll">
      <div className="scroll-content" ref={contentRef}>
        {props.children}
      </div>
      </div>
    </ScrollWrapper>
  )
  function handleClick(countIndex){
    let index = posIndex+countIndex
    const offsetLeft = contentRef.current.children[index].offsetLeft
    contentRef.current.style.transform = `translate(-${offsetLeft}px)`
    setPosIndex(index)
    setShowLeft(offsetLeft>0)
    setShowRight(scrollRef.current>offsetLeft)
  }
})



export default ScrollView