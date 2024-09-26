import React from 'react'

const App = () => {
  return (
    <div className="h-screen w-screen bg-slate-900 flex flex-col">
      <h1 className="text-5xl text-slate-300 my-6 text-center">CSS Shape outside</h1>
        <div className='h-[200px] w-[200px] mx-auto'>
          <img className='h-full w-full object-cover' src="/assets/images/orange.png" alt="" />
        </div>
    </div>
  )
}

export default App