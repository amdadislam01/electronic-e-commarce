import React, { useEffect, useState } from 'react'
import Title from './Title'
import { products } from '../assets/data';
import Item from './Item';

const PopularProduct = () => {
  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    const data = products.filter(item => item.popular)
    setPopularProduct(data.slice(0, 5));
    // console.log(data);
    
  })
  return (
    <section className='max-padd-container py-16'>
      <Title 
      title1={'Popular'}
      title2={'Products'}
      titleStyles={'pb-10'}
      paraStyles={'!block'}
      />
      {/* Container */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {
        popularProduct.map(product => (
          <div className="" key={product._id}>
            <Item product={product} />
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default PopularProduct
