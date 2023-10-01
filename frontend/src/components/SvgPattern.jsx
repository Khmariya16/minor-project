import React from 'react'

const SvgPattern = ({ id, width, height, patternUnits, children }) => {
  return (
    <pattern id={id} width={width} height={height} patternUnits={patternUnits}>
      {children}
    </pattern>
  )
}

export default SvgPattern