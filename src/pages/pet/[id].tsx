import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ArrowLeft,
  XCircle,
  CheckCircle,
  GenderMale,
  GenderFemale,
} from 'phosphor-react';

import { Button } from '@/components/Button';
import { Loading } from '@/components/Loading';

import petsNearby from '../../database/petsNearby.json';

interface PetData {
  id: string;
  name: string;
  breed: string;
  gender: 'male' | 'female';
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
      setPet({
        ...data,
        gender: data.gender === 'male' ? 'male' : 'female',
      });
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
              className="absolute left-4 top-4 p-2 rounded-full bg-zinc-200 text-[0px] hover:bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 hover:text-white border-2 border-purple-500 hover:border-zinc-50"
            >
              <ArrowLeft
                className="text-lg"
                weight="bold"
              />
            </Link>

            <img
              src={pet.largePhoto}
              alt={`${pet.name} photo`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-1 p-8 flex flex-col gap-8 justify-between">
            <div className="flex items-start gap-8">
              <div className="flex flex-col gap-4 flex-1">
                <div className="text-xs p-4 rounded-lg bg-zinc-100 flex flex-col gap-2 text-zinc-600">
                  <h3 className="font-semibold text-xs mb-1">
                    Informações básicas
                  </h3>
                  <div className="flex flex-col">
                    <span>Nome:</span>
                    <span className="text-zinc-800 font-semibold">
                      {pet.name}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>Idade:</span>
                    <span className="text-zinc-800 font-semibold">
                      {pet.age}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>Sexo:</span>
                    {pet.gender === 'male' ? (
                      <span className="text-zinc-800 font-semibold flex items-center gap-1">
                        Macho <Male />
                      </span>
                    ) : (
                      <span className="text-zinc-800 font-semibold flex items-center gap-1">
                        Fêmea <Female />
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span>Raça:</span>
                    <span className="text-zinc-800 font-semibold">
                      {pet.breed}
                    </span>
                  </div>
                </div>

                <div className="text-xs p-4 rounded-lg bg-zinc-100 flex flex-col gap-2 text-zinc-600">
                  <h3 className="font-semibold text-xs mb-1">
                    Informações adicionais
                  </h3>
                  <span className="flex gap-1 items-center text-zinc-600">
                    Vacinado(a): {pet.vaccinated ? <Check /> : <X />}
                  </span>
                  <span className="flex gap-1 items-center text-zinc-600">
                    Castrado(a): {pet.sterilized ? <Check /> : <X />}
                  </span>
                </div>
              </div>

              <p className="flex-[2] leading-loose text-sm text-zinc-600 p-4 rounded-lg bg-zinc-100">
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

const Check = () => {
  return (
    <CheckCircle
      className="text-base text-green-600"
      weight="bold"
    />
  );
};

const X = () => {
  return (
    <XCircle
      className="text-base text-red-600"
      weight="bold"
    />
  );
};

const Male = () => {
  return (
    <GenderMale
      className="text-base text-purple-500"
      weight="bold"
    />
  );
};

const Female = () => {
  return (
    <GenderFemale
      className="text-base text-purple-500"
      weight="bold"
    />
  );
};
