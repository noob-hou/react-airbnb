import React, { memo } from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../section/header/SectionHeader'
import SectionRoom from '../section/room/SectionRoom'
import SectionFooter from '../section/footer'

const HomeSection1 = memo((props) => {
  const {infoData}  = props
  return (
    <div>
        <SectionHeader title={infoData.title} subtitle = {infoData.subtitle}/>
        <SectionRoom itemList={infoData.list}/>
        <SectionFooter/>
    </div>
  )
})
HomeSection1.propTypes = {
    infoData: PropTypes.object
  }
export default HomeSection1