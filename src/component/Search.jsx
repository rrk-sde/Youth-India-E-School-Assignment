import React from 'react'

const Search = ({ setSearch, setPageNumber }) => {
    return (
        <>
            <form action="" className='flex gap-3 justify-center py-4'>
                <input onChange={e => { setPageNumber(1); setSearch(e.target.value); }} className='focus:outline-none rounded-md shadow-lg caret-red-700 px-1 py-1 border-2 border-gray-500 focus:border-gray-900 md:w-1/3' placeholder='Search for Character' type="text" name="search" id="" />
                <button onClick={e => {
                    e.preventDefault();
                }} className='px-4 py-1 bg-blue-600 text-white rounded-md shadow-lg'>Search</button>
            </form>
        </>
    )
}

export default Search;