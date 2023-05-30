
import style from './Home.module.scss'
import { data } from '../Data'
import {AiOutlineSearch} from 'react-icons/ai'
import Search from '../Search/Search'
import Productlist from '../Product/Productlist'
import React, { useState, useEffect } from 'react'
import { products as produc_data } from '../Product/Productdata'
import Product from '../Product/Product'

const Home = () => {
  // const [slide, setSlide] = useState(0)

  // const handleNext = () => {
  //   setSlide(slide + 1);
  //   if (slide >= 7) {
  //     return setSlide(0)
  //   }
  // }

  // const handlePrevious = () => {
  //   setSlide(slide - 1);
  //   if (slide <= -7) {
  //     return setSlide(0)
  //   }
  // }

  // SEARCH FUNCTION

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
    <div className={style.home}>
     <Search onInputChange={handleSearch} inputValue={search} />
    <div>
    {data.map(({ id, image, heading, desc }) => (
          <div className="slide" key={id}>
            {image}
            <h3>{heading}</h3>
            <h5>{desc}</h5>
            </div>
            ))}
            </div>
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
    )}
      
export default Home;



// import React from 'react'
// import style from './Home.module.scss'
// import { data } from '../Data'
// import ImageSlider, { Slide } from "react-auto-image-slider";

// const Home = () => {
//   return (
//     <div className={style.home}>
//       <ImageSlider effectDelay={500} autoPlayDelay={2000}>
//         {data.map(({ id, img, name, job, company }) => (
//           <Slide key={id}>
           

// import React from 'react';
// import style from './Home.module.scss';
// import { data } from '../Data';
// import ImageSlider, { Slide } from 'react-auto-image-slider';

// const Home = () => {
//   return (
//     <div className={style.home}>
//       <ImageSlider effectDelay={500} autoPlayDelay={2000}>
//         {data.map(({ id, img, name, job, company }) => (
//           <Slide key={id}>
//             <img src={img}  alt={name} />
//           </Slide>
//         ))}
//       </ImageSlider>
//     </div>
//   );
// };

// export default Home;
