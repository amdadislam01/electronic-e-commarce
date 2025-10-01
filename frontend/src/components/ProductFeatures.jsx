import React from 'react'
import { TbArrowBackUp } from 'react-icons/tb'

const ProductFeatures = () => {
  return (
    <div className='bg-primary rounded-xl mt-6'>
      <div className="gird grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="">
            <div className=""><TbArrowBackUp /></div>
            <div className="">
                <h4>Easy Return</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque corrupti asperiores animi, praesentium temporibus!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFeatures
