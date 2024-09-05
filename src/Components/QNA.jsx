import React from 'react'
import Question from './Questions'
export default function QNA() {
  return (
    <div className='bg-black'>
      <div>
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Q&A
        </h1>
      </div>
      
      <Question/>
      <Question/>
      <Question/>
      <Question/>
      <Question/>
      <Question/>
    </div>
    
  )
}
