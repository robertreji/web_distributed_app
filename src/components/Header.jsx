import React from 'react'
import {useLocation} from"react-router-dom"
import patient from "../assets/patient.png"
import todo from "../assets/pending.png"

const Header = () => {
  const url = useLocation().pathname
  let heading=""
  let icon=""
  if(url==="/")
  {
    heading="Pending Tasks"
    icon=todo
  }else if(url==="/patients")
  {
    heading="Patients"
    icon=patient
  }

  return (
    <div className="  bg-white w-full h-16 flex border-b border-gray-200 items-center gap-4">
      <div className='flex flex-row gap-4 pl-4 items-center'>
        <img className='h-10' src={icon} alt="" />
        <p className='text-2xl font-bold font-serif'>{heading}</p>
      </div>
    </div>
  )
}

export { Header }