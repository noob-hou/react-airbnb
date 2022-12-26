import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'

const SectionTabs = memo((props) => {
   const {tabNames=[],tabClick} = props
   const [currentIndex,setCurrentIndex] = useState(0)
   const itemClickHandle = (item,index)=>{
   
     setCurrentIndex(index)
     tabClick(item)
   }
  return (
    <SectionTabsWrapper>
       <ScrollView>
       {
        tabNames.map((item, index) => {
          return (
            <div
              key={index}
              onClick={e => itemClickHandle(item, index)}
              className={classNames("item", { 'active': index === currentIndex })}
            >
              {item}
            </div>
          )
        })
       }
       </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames:PropTypes.array,
  tabClick:PropTypes.func
}

export default SectionTabs