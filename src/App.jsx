import React from 'react'

const App = () => {
  return (
    <div className="h-screen w-screen bg-slate-900 flex flex-col">
      <h1 className="text-5xl text-slate-300 my-6 text-center">CSS Shape outside</h1>
        <div className='h-[200px] w-[200px] mx-auto relative'>
          <img className='h-full w-full object-cover relative z-[1]' src="/assets/images/orange.png" alt="" />
          <div className='h-[30px] w-[30px] bg-[#fe8238] rounded-full flex justify-center ml-[100px] -mt-3 absolute z-[2] animate-[dropDown_3s_ease-in-out_infinite]'>
            <span className='block h-[15px] w-[15px] bg-[#fe8238] -mt-[2px] rotate-45'></span>
          </div>
        </div>
        
    </div>
  )
}

export default App