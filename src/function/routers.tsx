import { createBrowserRouter } from "react-router-dom"
import StyleLearn from "@components/StyleLearn"
import LayoutFlexWorkshop2 from "@components/LayoutFlexWorkshop2"
import LayoutFlexWorkshop1 from "@components/LayoutFlexWorkshop1"
import TailwindStyle from "@components/TailwindStyle"


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
    },
    
  ])

export default routers

