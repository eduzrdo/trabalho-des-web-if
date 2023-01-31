import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  Cat,
  Confetti,
  Copyright,
  Dog,
  FacebookLogo,
  Heart,
  InstagramLogo,
  MagnifyingGlass,
  PawPrint,
  Syringe,
  TwitterLogo,
} from 'phosphor-react';

import { PetCard } from '@/components/PetCard';
import { Button } from '@/components/Button';
import { GradientText } from '@/components/GradientText';
import { HowItWorks } from '@/components/HowItWorks';

import petsNearby from '../database/petsNearby.json';

export default function Home() {
  const [subscribedToNewsletter, setSubscribedToNewsletter] = useState(false);
  const [email, setEmail] = useState('');

  const subscribe = () => {
    if (email === '') {
      alert('Insira um e-mail para se cadastrar.');
      return;
    }

    setSubscribedToNewsletter(true);
  };

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

          <ul className="flex gap-3 text-sm">
            <li className="flex items-center gap-2">
              <a
                href="#petsNearby"
                className="px-2 py-4"
              >
                Adote
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#about"
                className="px-2 py-4"
              >
                Sobre
              </a>
            </li>
            <li className="mr-[-0.5rem] flex items-center gap-2">
              <a
                href="#howItWorks"
                className="px-2 py-4"
              >
                Como funciona
              </a>
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
              <a
                href="#petsNearby"
                className="scroll-smooth"
              >
                <Button>
                  Quero adotar{' '}
                  <Dog
                    className="text-lg"
                    weight="fill"
                  />
                </Button>
              </a>
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

      <div
        className="px-20 bg-zinc-50 py-16"
        id="petsNearby"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">
          Pets disponíveis para adoção por perto
        </h2>

        <ul className="flex gap-4 mx-auto w-fit">
          <li className="px-4 py-2 cursor-pointer text-xs shadow-[0_0_0_1px_rgb(0,0,0,0.2)] rounded-lg hover:shadow-purple-500 transition-all duration-300">
            Cães
          </li>
          <li className="px-4 py-2 cursor-default bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 text-xs text-white rounded-lg">
            Gatos
          </li>
          <li className="px-4 py-2 cursor-pointer text-xs shadow-[0_0_0_1px_rgb(0,0,0,0.2)] rounded-lg hover:shadow-purple-500 transition-all duration-300">
            Coelhos
          </li>
          <li className="px-4 py-2 cursor-pointer text-xs shadow-[0_0_0_1px_rgb(0,0,0,0.2)] rounded-lg hover:shadow-purple-500 transition-all duration-300">
            Pássaros
          </li>
        </ul>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {petsNearby.map((pet) => (
            <PetCard
              key={pet.id}
              id={pet.id}
              name={pet.name}
              breed={pet.breed}
              photo={pet.photo}
              age={pet.age}
            />
          ))}
        </div>
      </div>

      <div
        className="px-20 py-16"
        id="about"
      >
        <h2 className="text-3xl font-bold text-center">
          Sua jornada de <GradientText>adoção pet</GradientText> começa com a
          gente
        </h2>

        <div className="flex gap-8 mt-20">
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex items-center gap-4 pr-16">
              <MagnifyingGlass
                className="text-4xl text-pink-500"
                weight="bold"
              />
              <div className="flex-1">
                <h3 className="font-semibold">Busque</h3>
                <p className="text-sm text-zinc-700 mt-4 leading-relaxed">
                  Adote o companheiro certo para você. Apenas informe sua cidade
                  para começar sua busca.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pr-16">
              <Syringe
                className="text-4xl text-purple-500"
                weight="bold"
              />
              <div className="flex-1">
                <h3 className="font-semibold">Consulta veterinária gratuita</h3>
                <p className="text-sm text-zinc-700 mt-4 leading-relaxed">
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
            <div className="flex items-center gap-4 pl-16">
              <PawPrint
                className="text-4xl text-indigo-500"
                weight="bold"
              />
              <div className="flex-1">
                <h3 className="font-semibold">Adote amor</h3>
                <p className="text-sm text-zinc-700 mt-4 leading-relaxed">
                  Os pais de resgate dos animais de estimação irão orientá-lo no
                  processo durante a jornada de adoção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="px-20 bg-zinc-50 py-16"
        id="howItWorks"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Como funciona?</h2>

        <div className="flex gap-8">
          <HowItWorks
            icon={<MagnifyingGlass className="text-3xl text-white" />}
            title="Procure um pet"
            description="Apenas informe sua cidade e comece sua busca."
            color="bg-pink-500"
          />

          <HowItWorks
            icon={<PawPrint className="text-3xl text-white" />}
            title="Conheça"
            description="Agende seu horário para conhecer o pet."
            color="bg-purple-500"
          />

          <HowItWorks
            icon={<Heart className="text-3xl text-white" />}
            title="Adote"
            description="Finalmente, adote seu novo bichinho."
            color="bg-indigo-500"
          />
        </div>
      </div>

      {subscribedToNewsletter ? (
        <div className="px-20 py-16 max-w-[740px] mx-auto">
          <div className="p-2 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500">
            <div className="bg-white rounded-xl p-8">
              <div className="flex gap-4 justify-center items-center text-2xl font-semibold">
                <Confetti className="text-3xl text-pink-500" />
                <GradientText>Parabéns!</GradientText>
                <Confetti className="text-3xl text-indigo-500" />
              </div>

              <h2 className="text-sm mt-4 text-center">
                A partir de agora você estará atualizado com novos pets
                disponíveis para adoção, dicas, e outras notícias em primeira
                mão!
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-20 py-16">
          <h2 className="text-3xl font-bold text-center">
            Receba nossa newsletter
          </h2>

          <h3 className="font-bold mt-4 text-center">
            Para se juntar à comunidade mundial
          </h3>

          <div className="w-fit mx-auto mt-12 p-1 overflow-hidden pb-24">
            <div className="shadow-[0_32px_68px_-14px_rgba(68,85,247,0.5)] flex gap-4 p-4">
              <div className="flex flex-col flex-1">
                <span className="text-sm text-zinc-500">
                  Informe seu endereço de e-mail
                </span>
                <input
                  type="email"
                  placeholder="seuemail@mail.com"
                  className="px-4 py-2 outline-none flex-1 flex rounded-lg focus:bg-zinc-200 mt-2"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <Button onClick={subscribe}>Enviar</Button>
            </div>
          </div>
        </div>
      )}

      <div className="px-20 bg-zinc-50 pb-4 flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="flex items-center"
          >
            {/* <img src="" alt="Logo da Shabum" /> */}
            <h2 className="text mr-2 font-semibold">Família Pet</h2>
            <Dog
              className="text-xl mr-1"
              weight="fill"
            />
            <Cat className="text-xl" />
          </Link>

          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full border-2 border-purple-200 hover:border-purple-500 hover:bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 hover:text-white"
            >
              <FacebookLogo
                className="text-lg"
                weight="bold"
              />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border-2 border-purple-200 hover:border-purple-500 hover:bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 hover:text-white"
            >
              <TwitterLogo
                className="text-lg"
                weight="bold"
              />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border-2 border-purple-200 hover:border-purple-500 hover:bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 hover:text-white"
            >
              <InstagramLogo
                className="text-lg"
                weight="bold"
              />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs text-zinc-600 font-semibold justify items-center">
            Copyright{' '}
            <Copyright
              className="text-base inline relative bottom-[2px]"
              weight="bold"
            />{' '}
            2023. Família Pet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </>
  );
}
