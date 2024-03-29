import Axios from 'axios';
import { Character } from './character.api-model';

const characterUrl = '/api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${characterUrl}/${id}`);

  return data;
};

export const editCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await Axios.put<Character>(`${characterUrl}/${character.id}`, character);
  } else {
    await Axios.put<Character>(characterUrl, character);
  }

  return true;
};
