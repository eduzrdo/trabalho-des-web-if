import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ArrowLeft,
  XCircle,
  Check as PhCheck,
  CheckCircle,
  GenderMale,
  GenderFemale,
} from 'phosphor-react';

import { Button } from '@/components/Button';
import { Loading } from '@/components/Loading';

import petsNearby from '../../database/petsNearby.json';
import { GradientText } from '@/components/GradientText';

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
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [appointmentIsConfirmed, setAppointmentIsConfirmed] = useState(false);

  const { id } = useRouter().query as { id: string };

  const scheduleAppointment = () => {
    setModalIsOpen(true);
  };

  const confirmAppointment = () => {
    setAppointmentIsConfirmed(true);
    setName('');
    setPhone('');
  };

  const cancelScheduleAppointment = () => {
    setModalIsOpen(false);
  };

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
    <>
      <Head>
        <title>{pet.name} - Família Pet</title>
        <meta
          name="description"
          content="Pet Family - Adote um animal de estimação."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <main className="flex h-screen relative">
        {pet.id ? (
          <div className="flex flex-col lg:flex-row">
            <div className="h-1/3 md:h-1/2 lg:h-auto md:flex-1 relative">
              <Link
                href="/"
                className="z-10 absolute left-4 top-4 p-2 rounded-full bg-zinc-200 text-[0px] hover:bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 hover:text-white border-2 border-purple-500 hover:border-zinc-50"
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
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex flex-row md:flex-col items-start md:items-stretch gap-4 flex-1 w-full">
                  <div className="text-xs p-4 rounded-lg bg-zinc-100 flex flex-col gap-2 text-zinc-600 flex-1">
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

                  <div className="text-xs p-4 rounded-lg bg-zinc-100 flex flex-col gap-2 text-zinc-600 flex-1">
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

              <div className="relative z-10">
                <Button
                  onClick={
                    appointmentIsConfirmed ? () => {} : scheduleAppointment
                  }
                  fullWidth
                  buttonStyle={appointmentIsConfirmed ? 'success' : 'primary'}
                  disabled={appointmentIsConfirmed}
                >
                  {appointmentIsConfirmed ? (
                    <span className="font-semibold relative right-1">
                      Solicitação enviada
                    </span>
                  ) : (
                    <>
                      Agendar visita com{' '}
                      <span className="font-semibold relative right-1">
                        {pet.name}
                      </span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-screen flex flex-1 justify-center items-center">
            <Loading size="extraLarge" />
          </div>
        )}

        <div
          className={`absolute w-full h-full bg-[rgba(0,0,0,0.3)] ${
            modalIsOpen ? 'opacity-1' : 'opacity-0'
          } transition-all duration-[400ms]`}
        ></div>

        <div
          className={`flex flex-col p-5 md:px-64 bg-white fixed ${
            modalIsOpen ? 'bottom-[0%]' : 'bottom-[-70%]'
          } w-full transition-all duration-[400ms] shadow-[0_-5px_15px_rgba(0,0,0,0.1)] z-20`}
        >
          {appointmentIsConfirmed ? (
            <>
              <p className="text-lg text-center font-semibold">
                <GradientText>Tudo certo!</GradientText>
              </p>
              <p className="mt-2 mb-4 text-zinc-600 leading-relaxed text-center text-sm">
                Sua solicitação para conhecer {pet.name} foi recebido com
                sucesso. Aguarde nosso retorno para combinarmos o horário de sua
                visita. Qualquer dúvida, entre em contato conosco.
              </p>
              <Button onClick={() => setModalIsOpen(false)}>
                Entendido{' '}
                <PhCheck
                  className="text-white text-xl"
                  weight="bold"
                />
              </Button>
            </>
          ) : (
            <>
              <p className="text-sm text-zinc-500 text-center md:text-left">
                Informe seu telefone
              </p>
              <input
                type="tel"
                placeholder="32988887777"
                className="p-4 outline-none flex-1 flex rounded-lg bg-zinc-100 focus:bg-zinc-200 mt-2 text-center md:text-left"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <p className="text-sm text-zinc-500 text-center md:text-left mt-4">
                Seu nome
              </p>
              <input
                type="text"
                placeholder="Nome completo"
                className="p-4 outline-none flex-1 flex rounded-lg bg-zinc-100 focus:bg-zinc-200 mt-2 text-center md:text-left"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <div className="flex flex-col gap-2 mt-4">
                <Button onClick={confirmAppointment}>Agendar</Button>
                <Button
                  buttonStyle="secondary"
                  onClick={cancelScheduleAppointment}
                >
                  Cancelar
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
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
