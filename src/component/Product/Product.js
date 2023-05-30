import React from 'react'
import './Product.css'


const Product = ({title, category, price, img}) => {
  return (
    <div className='product --card'>
        <img src={img} alt='img'/>
        <div className='--bg-primary --center-all'>
            <h3 className='--text-light'>{title}</h3>
            <h3>{category}</h3>
            <div className='--flex-between'>
                <p className='--text-light'>{price}</p>
                <button href="#" className='--btn'></button>
            </div>
        </div>
        
    </div>
  )
}

export default Product