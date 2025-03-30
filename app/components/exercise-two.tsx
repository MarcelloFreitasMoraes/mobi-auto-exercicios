'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';

interface Player {
    name: string;
    club: string;
    age: number;
} 

const ExerciseTwo: React.FC = () => {
    const updateData = (currentObject: Player, newDataObject: Partial<Player>): Player => {
        return Object.keys(currentObject).reduce((updatedObject, key) => {
            if (key in newDataObject) {
                updatedObject[key as keyof Player] = newDataObject[key as keyof Player] as Player[keyof Player] & never;
            } else {
                updatedObject[key as keyof Player] = currentObject[key as keyof Player] as Player[keyof Player] & never;
            }
            return updatedObject;
        }, {} as Player);
    }


    const [players, setPlayers] = useState<Player[]>([
        { name: "Lionel Messi", club: "Inter Miami", age: 36 },
        { name: "Cristiano Ronaldo", club: "Al-Nassr", age: 39 },
        { name: "Neymar Jr", club: "Al-Hilal", age: 32 },
    ]);

    const [isMessiUpdated, setIsMessiUpdated] = useState<boolean>(false);
    const [isMbappeAdded, setIsMbappeAdded] = useState<boolean>(false);

    const addPlayer = (newPlayer: Player) => {
        const playerExists = players.some(player => player.name === newPlayer.name);
        if (!playerExists) {
            setPlayers([...players, newPlayer]);
            if (newPlayer.name === "Kylian Mbappé") {
                setIsMbappeAdded(true); 
            }
        } else {
            alert(`${newPlayer.name} já foi adicionado!`);
        }
    };

    const updateMessi = () => {
        const updatedPlayer = updateData(players[0], { club: "Barcelona", age: 37 });
        setPlayers([updatedPlayer, ...players.slice(1)]);
        setIsMessiUpdated(true); 
    };

    return (
        <Card className='w-96' >
            <CardHeader>
                <CardTitle className="text-xl">Exercício 2</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4">
                    {players.map((player, index) => (
                        <div key={index} className="flex flex-col">
                            <p><strong>Name:</strong> {player.name}</p>
                            <p><strong>Club:</strong> {player.club}</p>
                            <p><strong>Age:</strong> {player.age}</p>
                        </div>
                    ))}
                </div>
               <div className='flex items-center justify-between gap-2 mt-4'>
                <Button
                    onClick={updateMessi}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                    disabled={isMessiUpdated} 
                >
                    Atualizar Messi
                </Button>
                
                <Button
                    onClick={() => addPlayer({ name: "Kylian Mbappé", club: "Paris Saint-Germain", age: 25 })}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
                    disabled={isMbappeAdded}
                >
                    Adicionar Mbappé
                </Button>
                </div> 
            </CardContent>
        </Card>
    );
}

export default ExerciseTwo;
