import React, { useEffect, useState } from 'react';
import ListBox from '../component/ListBox';
import Header from '../component/Header';
// import Pagination from '../component/Pagination';
import Footer from '../component/Footer';
import Search from '../component/Search';
import Loading from '../component/Loading';


function CharacterListLazy() {
    const [characters, setCharacters] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);



    const getCharacterData = async () => {
        const res = await fetch(
            `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
        );
        const data = await res.json()
        console.log(data.results);
        setCharacters((prev) => [...prev, ...data.results]);
        setLoading(false);
    };

    useEffect(() => {
        getCharacterData();
    }, [pageNumber]);


    const handelInfiniteScroll = async () => {
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
            ) {
                setLoading(true);
                setPageNumber((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);


    return (
        <>
            <Header />
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />
            <div className='bg-gray-800'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8 bg-[#272B33] py-16 md:px-24 px-8'>
                    {characters.map((character, index) => (

                        <ListBox
                            key={index}
                            // key={character.id}
                            id={character.id}
                            name={character.name}
                            image={character.image}
                            status={character.status}
                            species={character.species}
                            episode={character.episode.name}
                            mylocation={character.location?.name}
                            origin={character.origin.name}
                        />

                    ))}
                    {loading && <Loading />}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default CharacterListLazy;
