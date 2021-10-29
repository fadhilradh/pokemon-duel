import { useState } from "react";

export const EnemyStatus = ({ pokemon, allPokemon }) => {
  const [hp, setHp] = useState();

  return (
    <article
      className="flex flex-col justify-between font-default h-32 bg-[#F8F7D8] w-96 
    border-4 border-black rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg drop-shadow-2xl p-4"
    >
      <div className="flex justify-between">
        <p className="text-4xl font-semibold capitalize">{pokemon.name}</p>
        <p className="text-4xl font-semibold">LV 70</p>
      </div>

      <div className="border-2 border-black rounded-xl">
        <div className="h-4 w-full bg-[#e0e0de] rounded-xl border-2 border-white">
          <div className="h-full bg-[#58D584] rounded-xl "></div>
        </div>
      </div>
    </article>
  );
};
