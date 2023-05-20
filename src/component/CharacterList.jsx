import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListBox from './ListBox';
import Header from './Header';
import Pagination from './Pagination';
import Footer from './Footer';
import Search from './Search';



function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [info, setInfo] = useState([]);

    const [search, setSearch] = useState('');

    // console.log(results);
    // let api = `https://rickandmortyapi.com/api/character/?page=4`
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`


    useEffect(() => {

        (async function () {
            try {
                const response = await fetch(api);
                const data = await response.json();
                // let data = await fetch(api).then((res) => res.json());
                setCharacters(data.results);
                setInfo(data.info);
            } catch (error) {
                // console.log(data.results);
                // if (!data) {
                //     // console.log("no results");
                //     setCharacters([]);
                //     setInfo([]);
                // }
                console.log('There was an error', error);
            }
        })();

    }, [api]);

    return (

        <>
            <Header />
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />
            {(characters) ?
                <ul className='bg-gray-800'>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 bg-[#272B33] py-16 md:px-24 px-8">
                        {characters.map((character) => {
                            return (
                                // <Link key={character.id} to={`/characters/${character.id}`}>
                                <ListBox key={character.id} id={character.id} name={character.name} image={character.image} status={character.status} species={character.species}
                                    episode={character.episode.name} mylocation={character.location?.name}
                                    origin={character.origin.name} />
                                // </Link>
                            )
                        })}
                    </div>
                </ul> : <div className="text-center text-2xl text-black py-12">No result Found</div>

            }

            {(characters) &&
                <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />}
            <Footer />

        </>

    );
}


export default CharacterList;