import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { characterList } from '../../../reducer/actions/characterActtions';
import CardUI from '../../../UI/CardUI';

const ExtraCharacters = () => {
  const dispatch = useDispatch();
  const { loading, characters, error } = useSelector((state) => state.characterList);

  const shortListCharacters = !loading && characters.slice(0, 5);

  console.log('characters', characters);

  useEffect(() => {
    dispatch(characterList());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error.message}</h1>
      ) : (
        shortListCharacters.map((character) => <CardUI key={character.id} character={character} />)
      )}
    </>
  );
};

export default ExtraCharacters;
