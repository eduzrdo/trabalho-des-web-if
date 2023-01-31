import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft, XCircle, CheckCircle } from 'phosphor-react';

import { Button } from '@/components/Button';
import { Loading } from '@/components/Loading';

import petsNearby from '../../database/petsNearby.json';

interface PetData {
  id: string;
  name: string;
  breed: string;
  photo: string;
  largePhoto: string;
  age: string;
  description: string;
  vaccinated: boolean;
  sterilized: boolean;
}

export default function Pet() {
  const [pet, setPet] = useState<PetData>({} as PetData);
  const { id } = useRouter().query as { id: string };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const [data] = petsNearby.filter((pet) => pet.id === id);
      setPet(data);
    }, 1000);

    return () => clearTimeout(timeout);
  });

  return (
    <main className="flex h-screen">
      {pet.id ? (
        <>
          <div className="flex-1 relative">
            <Link
              href="/"
              className="p-3 border-2 border-white rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 absolute left-4 top-4"
            >
              <ArrowLeft
                className="text-xl text-white"
                weight="bold"
              />
            </Link>

            <img
              src={pet.largePhoto}
              alt={`${pet.name} photo`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-1 p-8 flex flex-col gap-4 justify-between">
            <div className="flex gap-4">
              <div className="flex-1">
                <Title>Nome</Title>
                <Description>{pet.name}</Description>
                <Title>Raça</Title>
                <Description>{pet.breed}</Description>
                <Title>Idade</Title>
                <Description>{pet.age}</Description>

                <div className="text-xs p-4 rounded-lg bg-zinc-100 flex flex-col gap-2">
                  <h3 className="font-semibold text-xs mb-1 text-zinc-800">
                    Informações adicionais
                  </h3>
                  <span className="flex gap-1 items-center">
                    Vacinado(a):{' '}
                    {pet.vaccinated ? (
                      <CheckCircle
                        className="text-base text-green-600"
                        weight="bold"
                      />
                    ) : (
                      <XCircle
                        className="text-base text-red-600"
                        weight="bold"
                      />
                    )}
                  </span>
                  <span className="flex gap-1 items-center">
                    Castrado(a):{' '}
                    {pet.sterilized ? (
                      <CheckCircle
                        className="text-base text-green-600"
                        weight="bold"
                      />
                    ) : (
                      <XCircle
                        className="text-base text-red-600"
                        weight="bold"
                      />
                    )}
                  </span>
                </div>
              </div>

              <p className="flex-[2] leading-loose text-sm text-zinc-600">
                {pet.description}
              </p>
            </div>

            <Button>
              Agendar visita com{' '}
              <span className="font-semibold relative right-1">{pet.name}</span>
            </Button>
          </div>
        </>
      ) : (
        <div className="h-screen flex flex-1 justify-center items-center">
          <Loading size="extraLarge" />
        </div>
      )}
    </main>
  );
}

const Title = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-sm font-semibold text-zinc-500">{children}</h2>;
};

const Description = ({ children }: { children: ReactNode }) => {
  return <p className="mb-4 text-zinc-900">{children}</p>;
};
