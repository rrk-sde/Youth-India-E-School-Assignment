import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailBox from './DetailBox';



function CharacterDetail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();
            setCharacter(data);
            // console.log(data);
        }
        fetchData();
    }, [id]);

    let { image, origin, species, gender, status, name } = character;

    return (
        <>
            <DetailBox image={image} origin={origin} species={species} gender={gender} status={status} name={name} />
        </>
    );
}

export default CharacterDetail;