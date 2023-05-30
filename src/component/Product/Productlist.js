import React, { useState, useEffect } from 'react';
import './Productlist.css';
import Product from './Product';
import { products as produc_data } from './Productdata';
import Search from '../Search/Search';

const Productlist = () => {
  
  const [products, setProducts] = useState(produc_data);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, products]);

  return (
    <>
      <div className='header'>
        <header className='container'>
          
          {/* <Search onInputChange={handleSearch} inputValue={search} /> */}
        </header>
        <div className='product-container'>
          <div className='container products --grid-25 --py2'>
            {filteredProducts.map((y) => {
              const { id, title, category, price, img } = y;
              return (
                <div key={id}>
                  <Product title={title} img={img} category={category} price={price} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Productlist;
















// import React from 'react'
// import './Productlist.css'
// import Product from './Product'
// import { products as produc_data } from './Productdata';
// import Search from '../Search/Search'
// import {useState, useEffect} from 'react'

// const Productlist = () => {
//     const [products, setProducts] = useState(produc_data)
//     const [filteredProducts, setFilteredProducts] = useState([])
//     const [search, setSearch] = useState('');

//     const handleSearch = (e) =>{
//         setSearch(e.target.value)
//     }
//         useEffect(() => {
            
//             setFilteredProducts(
//             products.filter((product) => {
//                 product.title.toLowerCase().includes(search.toLowerCase)
//             })
//            )
//                  }, [search,products]);       
    
//   return (
//     <>
//     <div className='header'>
//         <header className='container'>
//         <h1 className='--color-primary --text-centre'>Elegant <span>Collections</span></h1>
//         <Search onInputChange={handleSearch} inputValue={search}/>
//         </header>
//         <div className='product-container'>
//         <div className='container products --grid-25 --py2'>
//             {produc_data.map((y)=>{
//                 const {id,title, category, price, img} = y
//                 return(
//                     <div key={id}>
//                     <Product title={title} img={img} category={category} price={price}  />
            
//                     </div>
//                 )
//             })}
            
            
//         </div>
//         </div>
        
//     </div>
//     </>
//   )
// }

// export default Productlist