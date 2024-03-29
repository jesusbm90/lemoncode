import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const url = '/api/characters';

export const getCharactersCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await Axios.get(url);
  return data;
};
