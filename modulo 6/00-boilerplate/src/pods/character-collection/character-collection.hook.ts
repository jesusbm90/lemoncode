import React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharactersCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = () => {
    getCharactersCollection().then((result) =>
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  return { characterCollection, loadCharacterCollection };
};
