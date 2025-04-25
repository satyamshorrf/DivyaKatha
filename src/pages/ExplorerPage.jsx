import React from 'react'
import FlagModel from '../models/FlagModel'
import KedarnathModel from '../models/KedarnathModel'

const ExplorerPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-white mt-10">Explore the Yugas</h1>
      <div className="flex justify-center mt-5">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Explore</button>
      </div>
      <div className="flex justify-center mt-5">
        <p className="text-lg text-white">Discover the stories and legends of each Yuga.</p>
        <p className="text-lg text-white">Discover the stories and legends of each Yuga.</p>
        <p className="text-lg text-white">Discover the stories and legends of each Yuga.</p>
        <p className="text-lg text-white">Discover the stories and legends of each Yuga.</p>
        
      </div>
   
      <KedarnathModel />
    </div>
  )
}

export default ExplorerPage
