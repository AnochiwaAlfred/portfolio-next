import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected 
    ? "text-white border-purple-500 hover:border-purple-800"
    : "text[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button onClick={() => onClick(name)} className={`${buttonStyles} rounded-tl-xl rounded-br-xl border-2 px-6 py-2 text-lg cursor-pointer `}>
        {name}
    </button>
  )
}

export default ProjectTag