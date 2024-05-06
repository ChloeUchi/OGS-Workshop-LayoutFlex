import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonRequest } from "@service/PokemonService/PokemonRequest";
import { PokemonResponse, PokemonDetail, PokemonType } from "@service/PokemonService/PokemonResponse";

const pokemonService = createApi({
    reducerPath: "pokemonService",
    baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
    endpoints: (builder) => ({
        getListPokemon: builder.query<PokemonResponse, PokemonRequest>({
            query: (data) => {
                const params = new URLSearchParams({
                    limit: data.limit.toString(),
                    offset: data.offset.toString(),
                });
                return {
                    url: `pokemon?${params}`,
                    method: "GET"
                };
            },
        }),
        getListPokemon2: builder.mutation<PokemonResponse, PokemonRequest>({
            query: (data) => {
                const params = new URLSearchParams({
                    limit: data.limit.toString(),
                    offset: data.offset.toString(),
                });
                return {
                    url: `pokemon?${params}`,
                    method: "GET"
                };
            },
        }),
        getPokemonDetail: builder.query<PokemonDetail, string>({
            query: (name) => `pokemon/${name}`,
            transformResponse: (rawData: PokemonType, _meta, arg) => {
                const resultAbility = rawData.abilities.map((item) => {
                    return item.ability.name;
                });

                const resultStats = rawData.stats.map((item) => {
                    return { base_stat: item.base_stat, name: item.stat.name };
                });


                const _response: PokemonDetail = {
                    id: rawData.id,
                    name: arg,
                    base_experience: rawData.base_experience,
                    types: rawData.types.map((type) => type.type.name),
                    // types: rawData.types.map((type) => type.type.name),
                    image: {
                        main:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${rawData.id}.png`,
                        front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rawData.id}.png`,
                        back_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${rawData.id}.png`,
                        back_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${rawData.id}.png`,
                        front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${rawData.id}.png`,
                    },
                    abilities: resultAbility,
                    stats: resultStats,
                };
                return _response;
            },

        }),
    }),
});


export const { useGetListPokemonQuery, useGetListPokemon2Mutation, useLazyGetListPokemonQuery, useGetPokemonDetailQuery, endpoints: { getPokemonDetail } } = pokemonService;
export default pokemonService;
