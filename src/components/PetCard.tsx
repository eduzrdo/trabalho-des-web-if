import { ArrowRight } from "phosphor-react";

interface PetCardProps {
  name: string;
  breed: string;
  photo: string;
  age: string;
}

export const PetCard = ({ name, breed, photo, age }: PetCardProps) => {
  return (
    <a href="" className="flex flex-col group">
      <img
        src={photo}
        alt={name}
        className="w-full rounded-2xl h-52 object-cover"
      />
      <footer className="flex justify-between items-center">
        <div className="mt-3">
          <strong className="text-lg">{name}</strong>
          <div className="text-xs text-zinc-600 mt-1">
            <span className="relative pr-2 mr-2 after:absolute after:content-['\2022'] after:right-[-2px]">
              {breed}
            </span>
            <span>{age}</span>
          </div>
        </div>

        <button className="p-2 rounded-full bg-zinc-200 text-[0px] group-hover:bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 group-hover:text-white">
          <ArrowRight className="text-lg" />
        </button>
      </footer>
    </a>
  );
};
