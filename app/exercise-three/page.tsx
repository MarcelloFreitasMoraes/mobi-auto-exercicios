import { fetchCharacters } from '@/hooks/useData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Characters } from '@/@types/characters';
import ExerciseFour from '../components/exercise-four';

const CHARACTERS = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Jerry Smith"]

const ExerciseThree = async () => {
  const allCharacters = await fetchCharacters(Array.from({ length: 50 }, (_, i) => i + 1));
  const filteredCharacters = allCharacters.filter((character: { name: string; }) =>
    CHARACTERS.includes(character.name)
  );

  const formattedCharacters = filteredCharacters.map((character: Characters) => ({
    id: character.id,
    name: character.name,
    gender: character.gender === "Male" ? "Homem" : "Mulher",
    image: character.image,
    species: character.species === "Human" ? "Humano" : 'Desconhecida'
  }));

  return (
    <>
      <div className='w-full flex items-center justify-center flex-col gap-4 p-4'>
        <h1 className="text-xl font-bold">Exercício 3</h1>
        <div className="flex flex-wrap gap-4">
          {formattedCharacters.map((character: Characters) => (
            <Card key={character.id} className="w-60">
              <CardHeader className="flex flex-col items-center">
                <Image src={character.image} alt={character.name} width={100} height={100} className="rounded-full" />
                <CardTitle className="text-xl font-bold">{character.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p><span className='font-semibold'>Gênero:</span> {character.gender}</p>
                <p><span className='font-semibold'>Espécie:</span> {character.species}</p>
              </CardContent>
            </Card>
          ))}
          <div>
          <h1 className="text-xl font-bold text-center">Exercício 4</h1>
            <ExerciseFour />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseThree;
