import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from '@stores/Store';
import "tailwindcss/tailwind.css";
import './App.css';
import routers from '@function/routers';
import { useEffect } from 'react';
import { useGetListPokemon2Mutation } from '@service/PokemonService/PokemonService';

function App() {

  // const [getListPokemon, result_data_pokemon] = useGetListPokemon2Mutation();
  // const fnGetListPokemon = async () => {
  //   try {
  //     await getListPokemon({
  //       limit: '10',
  //       offset: '0'
  //     }).unwrap();
  //   } catch (error) {
  //     console.log({ error })
  //   }
  // }
  // useEffect(() => {
  //   fnGetListPokemon();
  // }, [])
// console.log({result_data_pokemon})
  return (
    <Provider store={Store}>
      <RouterProvider router={routers}/>
      {/* <div>
        {
          result_data_pokemon.data?.results?.map((items) => (
            <ul key={items.name}>
              <li>{items.name}</li>
            </ul>
          ))
        }
      </div> */}
    </Provider>
  );
}

export default App;


// // import Checklist from '@components/chechklist/Checklist'
// import "tailwindcss/tailwind.css"
// import './App.css'
// import { RouterProvider } from "react-router-dom"
// import routers from "@function/routers"

// function App() {
//   return(
//     <div>
//       <RouterProvider router={routers}/>

//     </div>
    
//   )
// }

// export default App