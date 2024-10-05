import React from 'react'

const App = () => {
  return (
    <div className="h-screen w-screen bg-slate-900 flex flex-col justify-between relative">
     <div>
     <h1 className="text-5xl text-slate-300 my-6 text-center">CSS Shape outside</h1>
        <div className='h-[300px] w-[300px] mx-auto relative'>
          <img className='h-full w-full object-cover relative z-[1]' src="/assets/images/orange.png" alt="" />
          <div className='h-[30px] w-[600px] bg-[#fe8238] rounded-full flex justify-center left-1/2 -mt-3 absolute z-[2] animate-[dropDown_3s_ease-in-out_infinite]'>
            <span className='block h-[30px] w-[17px] bg-[#fe8238] -mt-[2px] rotate-45'></span>
          </div>
        </div>
     </div>

        {/* <div style={{transform:"rotateX(71deg)"}} className='h-[300px] w-[300px] mx-auto border-[4px] rounded-full bottom-0 rotate bg-slate-800 relative'>
          <div className="absolute h-[300px] w-[301px] -left-[2px] top-1/2 bg-slate-500 border-[4px] border-t-0 rounded-b-lg"></div>
        </div> */}
        
    </div>
  )
}

export default App