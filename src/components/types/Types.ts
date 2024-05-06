// export interface PokemonTypes {
//     name: string;
//     sprites: {
//       front_default: string;
//     };
//     abilities: {
//       ability: {
//         name: string;
//       };
//     }[];
//     types: {
//       type: {
//         name: string;
//       };
//     }[];
//   }

// export interface PokemonState {
//     pokemons: PokemonTypes[];
//     status: 'idle' | 'loading' | 'succeeded' | 'failed';
//     error: string | null;
//   }

//   export const initialState: PokemonState = {
//     pokemons: [],
//     status: 'idle',
//     error: null,
//   };

//   export interface HomePageProps {
//     pokemonData: PokemonTypes[];
//     handleLoadMore: () => void;
//   }





export type Types = {
  no: string;
  name: string;
  species: string;
  types: string[];
  stats: [];
  sprite: {
    redblue: string;
    redgreen: string;
    yellow: string;
  };
};

export type stats = {
  base_stat: number;
  effort: number;
  stat: {
      name: string;
      url: string;
  }
}


export const typeColors = {
  normal: ["#A4ACAF"],
  fire: ["#FD7D24"],
  water: ["#4592C3"],
  grass: ["#9BCC50"],
  flying: ["#3DC7EF", "#BDB9B8"],
  fighting: ["#D56723"],
  poison: ["#B97FC9"],
  electric: ["#EED535"],
  ground: ["#F7DE3F", "#AB9842"],
  rock: ["#A38C21"],
  psychic: ["#F366B9"],
  ice: ["#51C4E7"],
  bug: ["#729F3F"],
  ghost: ["#7B62A3"],
  steel: ["#9EB7B8"],
  dragon: ["#51C4E7", "#F16E57"],
  dark: ["#707070"],
  fairy: ["#FDB9E9"],
};