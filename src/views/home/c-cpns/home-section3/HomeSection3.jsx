import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionFooter from '../section/footer'
import SectionHeader from '../section/header/SectionHeader'

const HomeSection3 = memo((props) => {
    const {infoData} = props
  return (
    <div >
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
        <div  style={{marginLeft:'-8px'}}>
            <ScrollView>
            {
                infoData.list.map(item=>{
                    return <RoomItem itemData={item} key={item.id} width="20%"/>
                })
            }
            </ScrollView>
        </div>
        <SectionFooter name="plus"/>
    </div>
  )
})

HomeSection3.propTypes = {
    infoData: PropTypes.object
}

export default HomeSection3