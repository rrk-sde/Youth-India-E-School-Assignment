// import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/rick-and-morty-wazzaldorp-deviantart-34.png'
// import Search from './Search'


function Header() {
    // const [search, setSearch] = useState();

    return (
        <>
            <header className='bg-white'>
                <nav className='flex h-16 md:justify-between justify-around items-center md:px-12 py-4'>
                    <img className='h-12' src={logo} alt="Rick and Morty Logo" />

                    <ul className='flex gap-6 items-center'>
                        <Link>Docs</Link>
                        <Link>About</Link>
                        <Link className='uppercase py-2 px-3 border-2 border-orange-300 rounded-xl'>Support Us</Link>
                    </ul>
                </nav>
                <h1 className='drop-shadow-xl text-center font-extrabold text-6xl py-20'> The Rick and Morty API </h1>
                {/* <Search setSearch={setSearch} /> */}
            </header>

        </>
    )
}

export default Header