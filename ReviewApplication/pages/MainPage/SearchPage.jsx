import React from 'react'
import Img from '../../src/assets/image.jpg'
import './SearchPage.css'
import Header from '../../components/Header'
const SearchPage = () => {
  return (
    <div className='main-page'>
      <Header />
      <div className='top-section'>
        <div>
          <h1>SearchBar</h1>
        </div>
      </div>
    </div>
  )
}

export default SearchPage