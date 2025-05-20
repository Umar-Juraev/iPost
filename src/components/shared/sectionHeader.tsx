import React from 'react'

const SectionHeader = ({title}: {title: string}) => {
  return (
      <div className='w-full pb-4 border-b border-b-[#2B39444D]'>
          <h3 className='text-[20px] text-[#2B3944] tracking-[2%]'>{title}</h3>
    </div>
  )
}

export default SectionHeader