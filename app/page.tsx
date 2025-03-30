import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CardFunction from "./components/card-function";
import Link from "next/link";
import ExerciseTwo from "./components/exercise-two";
import { Button } from "@/components/ui/button";

const dataExerciseOne = [
  {
    cpf: '499.679.413-59',
    cnpj: '82.917.142/0001-82',
    rg: '41.122.657-5',
    pis: '029.76870.89-0',
    cnh: '81937797456',
    tel: '(96) 97538-3392',
    empty: '---',
    test: 'test',
    name: 'Mobi Auto',
  }
];

export const maskify = (string: string) => {
  const cleanString = string.replace(/[^A-Za-z0-9]/g, '');
  if (cleanString.length <= 4) return cleanString;
  return '#'.repeat(cleanString.length - 4) + cleanString.slice(-4);
}

export default function Home() {
  return (
    <>
      <div className="h-screen grid place-items-center bg-gray-100 p-20 w-full">
        <div className="flex gap-4 w-full justify-center mb-4">
          <Card className="w-60">
            <CardHeader>
              <CardTitle className="text-xl">Exercício 1</CardTitle>
            </CardHeader>
            <CardContent>
              {dataExerciseOne.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <p><strong>CPF:</strong> {maskify(item.cpf)}</p>
                  <p><strong>CNPJ: </strong> {maskify(item.cnpj)}</p>
                  <p><strong>RG:</strong> {maskify(item.rg)}</p>
                  <p><strong>PIS:</strong> {maskify(item.pis)}</p>
                  <p><strong>CNH:</strong> {maskify(item.cnh)}</p>
                  <p><strong>Telefone:</strong> {maskify(item.tel)}</p>
                  <p><strong>Vazio:</strong> {maskify(item.empty)}</p>
                  <p><strong>Test:</strong> {maskify(item.test)}</p>
                  <p><strong>Name:</strong> {maskify(item.name)}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="w-80">
            <CardHeader>
              <CardTitle className="text-xl">Testando a Função</CardTitle>
            </CardHeader>
            <CardFunction />
          </Card>
        </div>

        <div className="w-full place-items-center">
          <ExerciseTwo />
        </div>    
        <div className="flex justify-end w-full">
        <Link href="/exercise-three">
        <Button variant="link" className="ml-2 bg-purple-600 text-white px-4 py-2 rounded cursor-pointer">
          Ir para o Exercício 3
        </Button>
        </Link>
      </div>    
      </div>
    </>
  );
}
