import React from 'react'

const LightButton = ({title, icon, position, handleClick, otherClasses}: {title: string, icon?: React.ReactNode, position?: string, handleClick?: () => void, otherClasses?: string}) => {
  return (
    <button className="p-[3px] relative gap-2 items-center justify-center">
        <div className="absolute inset-0 w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className={`px-8 py-2  bg-black rounded-[6px]  relative h-full w-full items-center justify-center group transition duration-200 text-white hover:bg-transparent ${otherClasses}`}>
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </div>
    </button>
  )
}

export default LightButton
