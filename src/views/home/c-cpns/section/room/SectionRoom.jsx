import RoomItem from '@/components/room-item'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionRoomWrapper } from './style'

const SectionRoom = memo((props) => {
    const {itemList=[],itemWidth} = props
  return (
    <SectionRoomWrapper>
       {
        itemList.slice(0,8).map(item=>{
            return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id}/>
        })
       }
    </SectionRoomWrapper>
  )
})

SectionRoom.propTypes = {
    itemList: PropTypes.array,
    itemWidth: PropTypes.string,
}

export default SectionRoom