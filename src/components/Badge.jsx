import React from 'react'

const Badge = ({ badgeText, className }) => {
  return (
    <div className={`w-[92px] bg-black py-2.25 px-7.5 text-white font-bold font-dmFont text-sm text-center ${className}`}>{badgeText}</div>
  )
}

export default Badge