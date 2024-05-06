// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { PokemonRequest } from "@service/AssignmentpokemonService/PokemonRequest";
// import { PokemonResponse, PokemonDetail, PokemonType } from "@service/AssignmentpokemonService/PokemonResponse";


// const AssignmentPokemonService = createApi({
//     reducerPath: "AssignmentPokemonService",
//     baseQuery: fetchBaseQuery({ baseUrl: "https://pokemon-api.cyclic.app/api/v1/pokemon" }),
//     endpoints: (builder) => ({
//         getListPokemon: builder.query<PokemonResponse, PokemonRequest>({
//             query: (data) => {
//                 const params = new URLSearchParams({
//                     limit: data.limit.toString(),
//                     offset: data.offset.toString(),
//                 });
//                 return {
//                     url: `pokemon?${params}`,
//                     method: "GET"
//                 };
//             },
//         }),
//         getListPokemon2: builder.mutation<PokemonResponse, PokemonRequest>({
//             query: (data) => {
//                 const params = new URLSearchParams({
//                     limit: data.limit.toString(),
//                     offset: data.offset.toString(),
//                 });
//                 return {
//                     url: `pokemon?${params}`,
//                     method: "GET"
//                 };
//             },
//         }),
//         getPokemonDetail: builder.query<PokemonDetail, string>({
//             query: (no) => `pokemonapi/${no}`,
//             transformResponse: (rawData: PokemonType, _meta, arg) => {
//                 const resultAbility = rawData.abilities.map((item) => {
//                     return item.ability.name;
//                 });

//                 const resultStats = rawData.stats.map((item) => {
//                     return { base_stat: item.base_stat, name: item.stat.name };
//                 });


//                 const _response: PokemonDetail = {
//                     no: rawData.id,
//                     name: arg,
//                     base_experience: rawData.base_experience,
//                     types: rawData.types.map((type) => type.type.name),
//                     image: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${rawData.no}.png`,
//                     abilities: resultAbility,
//                     stats: resultStats,
//                 };
//                 return _response;
//             },

//         }),
//     }),
// });


// export const { useGetListPokemonQuery, useGetListPokemon2Mutation, useLazyGetListPokemonQuery, useGetPokemonDetailQuery, endpoints: { getPokemonDetail } } = AssignmentPokemonService;
// export default AssignmentPokemonService;
