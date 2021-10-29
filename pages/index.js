import { EnemyStatus } from "../components/EnemyStatus";
import Layout from "../components/Layout";
import { getAllPokeUrl, getPokeByIdUrl } from "../utils/baseUrls";
import useAxiosGet from "../utils/hooks/useAxiosGet";
import { Select } from "@chakra-ui/react";

export default function Home() {
  const { data: pokemon, isLoading, error } = useAxiosGet(getPokeByIdUrl + "1");
  const { data: allPokemon } = useAxiosGet(getAllPokeUrl);

  return (
    <Layout title="Pokemon Duel">
      <Select variant="filled" placeholder="Select option">
        {allPokemon?.results?.map((pokemon) => (
          <option value={pokemon.name}>{pokemon.name}</option>
        ))}
      </Select>
      <EnemyStatus pokemon={pokemon} />
      {/* <EnemyPokemon />
         <OwnStatus />
         <OwnPokemon />
         <ActionBox /> */}
    </Layout>
  );
}
