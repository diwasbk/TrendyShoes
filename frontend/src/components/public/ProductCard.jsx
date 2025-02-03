import React from 'react'

function ProductCard({props}) {
  return (
    <div>
        {/* Product Image Section */}
        <div className="w-[360px] bg-gradient-to-r from-slate-700 via-red-400 to-white border-black rounded-tl-[150px] rounded-br-[150px] rounded-tr-[4px] rounded-bl-[8px] mt-8">
          <img src= {props} alt="Image" className="rounded-tl-[150px] rounded-br-[150px] rounded-tr-[20px] rounded-bl-[20px] h-[400px] w-[400px] p-4"/>
        </div>
    </div>
  )
}

export default ProductCard