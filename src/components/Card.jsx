import React from 'react'

const Card = ({children, margin, maxWidth, padding}) => {
  return (
    <div className="w-full text-center max-w-sm p-4 bg-white rounded-lg shadow-md sm:p-6 md:p-8 border-gray-700" style={{margin: margin, maxWidth: maxWidth, padding: padding}}>
        {children}
    </div>
  )
}

export default Card