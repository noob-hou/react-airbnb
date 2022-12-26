import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import SectionFooter from '../section/footer'
import SectionHeader from '../section/header/SectionHeader'
import SectionRoom from '../section/room/SectionRoom'
import SectionTabs from '../section/tabs/SectionTabs'

const HomeSection2 = memo((props) => {
    
    const {infoData} =  props
    const initialName = Object.keys(infoData.dest_list)[0]
    const [name,setName] = useState(initialName)
    const tabClickHandler = useCallback((name)=>{
       setName(name)
    },[])
  return (
    <div>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
        <SectionTabs tabNames={infoData?.dest_address?.map(item=>item.name)} tabClick={tabClickHandler} />
        <SectionRoom itemList={infoData.dest_list?.[name]} itemWidth="33.3333%"/>
        <SectionFooter name={name}/>
    </div>
  )
})

HomeSection2.propTypes = {
    infoData: PropTypes.object,
}

export default HomeSection2