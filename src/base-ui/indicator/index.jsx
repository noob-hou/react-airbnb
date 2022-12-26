import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
    const contentRef = useRef()
    const { index = 0 } = props
    useEffect(() => {
        const contentWidth = contentRef.current.clientWidth
        const activeChild = contentRef.current.children[index]
        let distance = activeChild.offsetLeft - contentWidth * 0.5 + activeChild.clientWidth * 0.5
        if (distance < 0) distance = 0
        const totalDistance = contentRef.current.scrollWidth - contentWidth
        if (distance > totalDistance) distance = totalDistance

        contentRef.current.style.transform = `translateX(${-distance}px)`


    }, [index])
    return (
        <IndicatorWrapper>
            <div className="i-content" ref={contentRef}>
                {props.children}
            </div>
        </IndicatorWrapper>
    )
})

Indicator.propTypes = {
    index: PropTypes.number
}

export default Indicator