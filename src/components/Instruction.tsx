import { MagnifyingGlass } from 'phosphor-react';
import { PropsWithChildren } from 'react';

export const Instruction = ({}: PropsWithChildren) => {
  return (
    <div className="flex items-center gap-4">
      <MagnifyingGlass className="text-2xl" />
      <div>
        <h3 className="font-semibold">Search Pet</h3>
        <p className="text-sm text-zinc-700 mt-2">
          Adote o companheiro certo para você. Apenas informe sua cidade para
          começar sua busca.
        </p>
      </div>
    </div>
  );
};
