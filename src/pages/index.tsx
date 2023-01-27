import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { PetCard } from "@/components/PetCard";
import { Cat, Dog } from "phosphor-react";

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
              <button className="min-w-[150px] flex justify-center items-center gap-2 p-4 rounded-lg text-white bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500">
                Quero adotar <i className="ph-dog-fill text-lg"></i>
              </button>
              {/* <button className="min-w-[150px] flex justify-center items-center gap-2 p-4 rounded-lg text-white bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500">
                Quero doar <i className="ph-paw-print-fill text-lg"></i>
              </button> */}
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
          <PetCard
            name="Whisk"
            breed="Frajola"
            photo="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
            age="1 ano e 5 meses"
          />

          <PetCard
            name="Simba"
            breed="Malhado"
            photo="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
            age="2 anos e 7 meses"
          />

          <PetCard
            name="Felix"
            breed="Maine"
            photo="https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
            age="3 anos"
          />

          <PetCard
            name="Luna<"
            breed="Malhado"
            photo="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
            age="2 anos e 1 mês"
          />

          <PetCard
            name="Bella"
            breed="Angorá"
            photo="https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
            age="1 ano"
          />

          <PetCard
            name="Tiger"
            breed="Napoleon"
            photo="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
            age="2 meses"
          />
        </div>
      </div>
    </>
  );
}
