export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  bestSentences: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  image: '',
  bestSentences: '',
});
