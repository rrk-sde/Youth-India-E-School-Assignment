import React from 'react'
import { Link } from 'react-router-dom'

function ListBox(props) {

    return (
        <Link to={`/characters/${props.id}`} className="box1 md:flex-row flex flex-col w-full bg-[#3C3E44] rounded-2xl md:gap-4 gap-0 text-white">
            <div className="">
                <img className="md:rounded-l-2xl md:rounded-r-none  rounded-t-2xl  md:w-[229px] md:h-[220px] w-full aspect-[67/50] " src={props.image} alt="" srcSet="" />
            </div>
            <div className="flex flex-col md:justify-between justify-between md:gap-0 gap-4 md:items-start py-2 md:px-0 px-4">
                <div>
                    <h1 className='text-3xl font-bold'>{props.name}</h1>
                    <p className='flex items-center'><div className={`inline-block mr-2 h-2 w-2  ${props.status === "Alive" ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></div>{props.status} - {props.species}</p>
                </div>
                <div>
                    <h3 className=' text-gray-400'>Last Known Location</h3>
                    <p className='text-xl font-normal'>{props.mylocation}</p>
                </div>
                <div>
                    <h3 className='text-gray-400'>Origin:</h3>
                    <p className='text-xl font-normal'>{props.origin}</p>
                    {/* <h3>First seen in:</h3>
                        <p className='text-md'>episode</p> */}
                </div>
            </div>
        </Link>

    )
}

export default ListBox