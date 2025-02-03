import React from 'react'
import ProductCard from './ProductCard'

function Product() {
  return (
    <div>
      {/* Explore Trendy Section */}
      <h1 className="text-5xl font-bold mb-5 text-center mt-20">Explore TrendyShoes now</h1>
      {/* Product Quote Section */}
      <div className="text-center mt-10">
        <p className="text-[20px]">
        Grab your favorite pair today and step out in style.
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly md:mt-10 mb-10">
        <ProductCard props = "https://img.joomcdn.net/a74f798db0dd7f75461f746406346bce1f7510b7_original.jpeg"/>
        <ProductCard props = "https://th.bing.com/th/id/R.3c7087d56c992d97a4f36b58dcaff53b?rik=Eihc7neoDuf%2ffw&riu=http%3a%2f%2ftots.pk%2fcdn%2fshop%2fproducts%2f1657503471db097ec62b04566997b47421d9902e9c.jpg%3fv%3d1664811979&ehk=Y%2btpiTEpBM2pbJr%2bHerzJbcZwcUbBnnzx8IEoH%2baafI%3d&risl=&pid=ImgRaw&r=0"/>
        <ProductCard props = "https://th.bing.com/th/id/OIP.ZnaA0bqhTEkCSUy6PqHhHQAAAA?rs=1&pid=ImgDetMain"/>
      </div>
    </div>
  )
}

export default Product