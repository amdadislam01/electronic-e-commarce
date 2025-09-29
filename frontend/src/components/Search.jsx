import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  const {search, setSearch} = useContext(ShopContext)
  return (
    <div>
      <div>
        <div>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search here.......' className='border-none outline-none w-full bg-white text-sm' />
          <div>
            <FaSearch className='cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
