import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import pokemonService from '@service/PokemonService/PokemonService';
// import { PokemonApi } from 'service/PokemonApi'
// import { PokemonSlice } from '@components/stores/slice/PokemonSlice'

export const Store = configureStore({
  reducer: {
    [pokemonService.reducerPath]: pokemonService.reducer,
    // [PokemonApi.reducerPath]: PokemonApi.reducer,
    // [PokemonSlice.name]: PokemonSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonService.middleware),
  // middleware: (getDefaultMiddleware) =>
  //   process.env.NODE_ENV === 'development'
  //     ? getDefaultMiddleware({
  //       serializableCheck: false,
  //     }).concat(PokemonApi.middleware)
  //     : getDefaultMiddleware().concat(PokemonApi.middleware),
})

setupListeners(Store.dispatch)

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;