import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import {
    RightOutlined
  } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const SectionFooter = memo((props) => {
    const navigate = useNavigate()
    const {name} = props
    let message = '查看更多'
    if(name){
        message = `查看更多${name}房源`
    }
  return (
    <SectionFooterWrapper color={name?'#00848a':'#000'}>
        <div className="info" onClick={moreClick}>
            <span className='text'>{message}</span>
            <RightOutlined/>
        </div>
    </SectionFooterWrapper>
  )
  function moreClick(){
    navigate('/more')
  }
})

SectionFooter.propTypes = {
    name:PropTypes.string
}

export default SectionFooter