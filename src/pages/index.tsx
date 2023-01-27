import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Cat, Dog } from "phosphor-react";

import { PetCard } from "@/components/PetCard";
import { Button } from "@/components/Button";

import petsNearby from "../database/petsNearby.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pet Family - Início</title>
        <meta
          name="description"
          content="Pet Family - Adote um animal de estimação."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col min-h-screen">
        <nav className="flex justify-between items-center px-12 h-16 z-10">
          <a href="#" className="flex items-center">
            {/* <img src="" alt="Logo da Shabum" /> */}
            <h1 className="text-lg mr-2">Pet Family</h1>
            <Dog className="text-xl mr-1" weight="fill" />
            <Cat className="text-xl" />
          </a>

          <ul className="flex gap-3">
            <li className="flex items-center gap-2">
              <a href="" className="px-2 py-4">
                Sobre
              </a>
              {/* <i className="ph-heart text-xl"></i> */}
            </li>
            <li className="flex items-center gap-2">
              <a href="" className="px-2 py-4">
                Contato
              </a>
              {/* <i className="ph-headset text-xl"></i> */}
            </li>
            <li className="mr-[-0.5rem] flex items-center gap-2">
              <a href="" className="px-2 py-4">
                Nos encontre
              </a>
              {/* <i className="ph-shopping-cart-simple text-xl"></i> */}
            </li>
          </ul>
        </nav>

        <div className="flex flex-1 px-12 gap-8">
          <div className="flex flex-col flex-1 justify-center items-center">
            <h1 className="text-4xl font-bold">
              Transformando vidas, uma patinha de cada vez
              <i className="ph-heart-fill relative top-1.5"></i>
            </h1>

            <p className="text-zinc-600 mt-8">
              Ao adotar um animal, você está salvando uma vida e dando a ele uma
              segunda chance de encontrar um lar amoroso e seguro.
            </p>

            <div className="flex gap-4 mt-8 w-full">
              <Button>
                Quero adotar <Dog className="text-lg" weight="fill" />
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

        <div className="grid grid-cols-3 gap-8 mt-8">
          {petsNearby.map((pet) => (
            <PetCard
              name={pet.name}
              breed={pet.breed}
              photo={pet.photo}
              age={pet.age}
            />
          ))}
        </div>
      </div>
    </>
  );
}
