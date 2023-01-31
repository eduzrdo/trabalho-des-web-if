import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft } from 'phosphor-react';

import { Button } from '@/components/Button';

import petsNearby from '../../database/petsNearby.json';

export default function Pet() {
  const { id } = useRouter().query as { id: string };

  const [pet] = petsNearby.filter((pet) => pet.id === id);

  return (
    <main className="flex h-screen">
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
          </div>

          <p className="flex-[2] leading-loose text-sm text-zinc-600">
            {pet.description}
          </p>
        </div>

        <Button>
          Agendar visita com <span className="font-semibold">{pet.name}</span>
        </Button>
      </div>

      {/* <div></div> */}
    </main>
  );
}

const Title = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-sm font-semibold text-zinc-500">{children}</h2>;
};

const Description = ({ children }: { children: ReactNode }) => {
  return <p className="mb-4 text-zinc-900">{children}</p>;
};
