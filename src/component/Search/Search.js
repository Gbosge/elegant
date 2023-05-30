import React from 'react'
import './Search.css'
import {BiSearchAlt2} from 'react-icons/bi'

const Search = ({inputValue, onInputChange} ) => {
  return (
    // <div className='--form-control'>

    // <input 
    //     type="text" 
    //     placeholder=" Search products, brands and categories"
    //     value={inputValue}
    //     onChange={onInputChange}>
    //     <i class="fa fa-search"><BiSearchAlt2/></i>
            
        

        

    // // </input>
    
    // // </div>
    <div class="search-container">
  <input 
  type="text" 
  placeholder="Search products, brands and categories"
  value={inputValue}
  onChange={onInputChange}
  />
  <i class="fa fa-search"><BiSearchAlt2/></i>
  <a href="/"> <button class="btn__1">SEARCH</button></a>
</div>

  )
}

export default Search