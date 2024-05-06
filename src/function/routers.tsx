import { createBrowserRouter } from "react-router-dom"
import StyleLearn from "@components/StyleLearn"
import LayoutFlexWorkshop2 from "@components/LayoutFlexWorkshop2"
import LayoutFlexWorkshop1 from "@components/LayoutFlexWorkshop1"
import TailwindStyle from "@components/TailwindStyle"
import FetchAPI from "@components/FetchAPI"
import WorkshopAPI from "@components/WorkshopAPI"
// import ServiceAPI from "@components/ServiceAPI"
// import Dummy from "@components/Dummy"
// import Pokemon from "@components/Pokemon"
// import PokemonApi from "@components/PokemonApi"
import PokemonDetailsCard from "@components/PokemonDetailsCard"
import Pokemon from "@components/Pokemon"
import NotFound from "@components/NotFound"
// import AssignmentPokemonApi from "@components/AssignmentPokemonApi"


const routers = createBrowserRouter ([
    {
      path:"/",
      element:<StyleLearn/>
    },
    {
      path:"layoutflexworkshop1",
      element:<LayoutFlexWorkshop1/>
    },
    {
      path:"layoutflexworkshop2",
      element:<LayoutFlexWorkshop2/>
    },{
      path:"tailwindstyle",
      element:<TailwindStyle/>
    },{
      path:"fetchapi",
      element:<FetchAPI/>
    },
    {
      path:"workshopapi",
      element:<WorkshopAPI/>
    },
    // {
    //   path:"pokemonapi",
    //   element:<AssignmentPokemonApi/>
    // },
    {
      path:"pokemon/:name",
      element:<PokemonDetailsCard/>
    },
    {
      path:"pokemonworkshop",
      element:<Pokemon/>
    },
    {
      path:"*",
      element:<NotFound/>
    },
    
  ])

export default routers

