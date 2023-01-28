import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Cat, Dog, MagnifyingGlass, PawPrint, Syringe } from 'phosphor-react';

import { PetCard } from '@/components/PetCard';
import { Button } from '@/components/Button';
import { GradientText } from '@/components/GradientText';

import petsNearby from '../database/petsNearby.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Família Pet - Início</title>
        <meta
          name="description"
          content="Pet Family - Adote um animal de estimação."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className="flex flex-col min-h-screen">
        <nav className="flex justify-between items-center px-12 h-16 z-10">
          <Link
            href="/"
            className="flex items-center"
          >
            {/* <img src="" alt="Logo da Shabum" /> */}
            <h1 className="text-lg mr-2 font-semibold">Família Pet</h1>
            <Dog
              className="text-xl mr-1"
              weight="fill"
            />
            <Cat className="text-xl" />
          </Link>

          <ul className="flex gap-3">
            <li className="flex items-center gap-2">
              <a
                href=""
                className="px-2 py-4"
              >
                Sobre
              </a>
              {/* <i className="ph-heart text-xl"></i> */}
            </li>
            <li className="flex items-center gap-2">
              <a
                href=""
                className="px-2 py-4"
              >
                Contato
              </a>
              {/* <i className="ph-headset text-xl"></i> */}
            </li>
            <li className="mr-[-0.5rem] flex items-center gap-2">
              <a
                href=""
                className="px-2 py-4"
              >
                Nos encontre
              </a>
              {/* <i className="ph-shopping-cart-simple text-xl"></i> */}
            </li>
          </ul>
        </nav>

        <div className="flex flex-1 px-12 gap-8">
          <div className="flex flex-col flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">
              <GradientText>Transformando vidas</GradientText>, uma patinha de
              cada vez
              <i className="ph-heart-fill relative top-1.5"></i>
            </h1>

            <p className="text-zinc-600 mt-8">
              Ao adotar um animal, você está salvando uma vida e dando a ele uma
              segunda chance de encontrar um lar amoroso e seguro.
            </p>

            <div className="flex gap-4 mt-8 w-full">
              <Button>
                Quero adotar{' '}
                <Dog
                  className="text-lg"
                  weight="fill"
                />
              </Button>
            </div>
          </div>

          <div className="flex flex-1 justify-center items-center relative">
            <img
              src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="absolute w-[260px] aspect-[3/4] rounded-3xl object-cover left-1/2 top-1/2 translate-x-[-25%] translate-y-[-75%] shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              alt=""
              className="absolute w-[260px] aspect-[3/4] rounded-3xl object-cover left-1/2 top-1/2 translate-x-[-75%] translate-y-[-25%] shadow-xl"
            />
          </div>
        </div>
      </main>

      <div className="px-20">
        <h2 className="text-3xl font-bold mt-16 mb-12 text-center">
          Pets disponíveis para adoção por perto
        </h2>

        <ul className="flex gap-4 mx-auto w-fit">
          <li className="px-4 py-2 cursor-pointer text-xs shadow-[0_0_0_1px_rgb(0,0,0,0.2)] rounded-lg">
            Cães
          </li>
          <li className="px-4 py-2 cursor-default bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 text-xs text-white rounded-lg">
            Gatos
          </li>
          <li className="px-4 py-2 cursor-pointer text-xs shadow-[0_0_0_1px_rgb(0,0,0,0.2)] rounded-lg">
            Coelhos
          </li>
          <li className="px-4 py-2 cursor-pointer text-xs shadow-[0_0_0_1px_rgb(0,0,0,0.2)] rounded-lg">
            Pássaros
          </li>
        </ul>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {petsNearby.map((pet) => (
            <PetCard
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              photo={pet.photo}
              age={pet.age}
            />
          ))}
        </div>
      </div>

      <div className="px-20 mt-32">
        <h2 className="text-3xl font-bold text-center">
          Sua jornada de <GradientText>adoção pet</GradientText> começa com a
          gente
        </h2>

        <div className="flex gap-8 mt-20">
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex items-center gap-4">
              <MagnifyingGlass
                className="text-4xl text-pink-500"
                weight="bold"
              />
              <div className="flex-1">
                <h3 className="font-semibold">Busque</h3>
                <p className="text-sm text-zinc-700 mt-2">
                  Adote o companheiro certo para você. Apenas informe sua cidade
                  para começar sua busca.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Syringe
                className="text-4xl text-purple-500"
                weight="bold"
              />
              <div className="flex-1">
                <h3 className="font-semibold">Consulta veterinária gratuita</h3>
                <p className="text-sm text-zinc-700 mt-2">
                  Nós ajudamos seu pet se ajustar em seu novo lar, assim que
                  você concluir a jornada de adoção.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=80"
              alt="Dog with flower in its mouth"
              className="aspect-square w-full object-cover rounded-full shadow-[0_0_0_24px_rgba(220,0,10,0.15)]"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center">
            <div className="flex items-center gap-4">
              <PawPrint
                className="text-4xl text-indigo-500"
                weight="bold"
              />
              <div className="flex-1">
                <h3 className="font-semibold">Adote amor</h3>
                <p className="text-sm text-zinc-700 mt-2">
                  Os pais de resgate dos animais de estimação irão orientá-lo no
                  processo de adoção, assim que você concluir a jornada de
                  adoção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
