import React from 'react'
import { Link } from 'react-router-dom'

function DetailBox(props) {

    let { image, origin, species, gender, status, name } = props;

    return (


        <>
            <div className='flex flex-col justify-center items-center min-h-screen '>
                <h1 className='text-xl py-4'>Character Details</h1>
                <div className='inline-block flex-col space-y-2 bg-gray-800 text-white px-4 py-6'>
                    <Link className='px-2 py-1 rounded-sm bg-blue-600 text-white' to="/characters">Back</Link>
                    <h1 className=''>{name}</h1>
                    <img src={image} alt="" srcset="" />
                    <p>{status}</p>
                    <p>{species}</p>
                    <p>{gender}</p>
                    <p>{origin?.name}</p>
                </div>

            </div>
        </>
    )
}

export default DetailBox