import React from 'react'
import ImageSlider from './components/imageSlider/imageSlider'

const App = () => {
  return (
    <div className="h-screen w-screen bg-[#18181a] flex flex-col ">
      <h1 className="text-5xl text-slate-300 my-6 text-center">CSS Mask animation</h1>
      <ImageSlider />
    </div>
  )
}

export default App