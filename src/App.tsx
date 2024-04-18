// import Checklist from '@components/chechklist/Checklist'
import "tailwindcss/tailwind.css"
import './App.css'
import { RouterProvider } from "react-router-dom"
import routers from "@function/routers"

function App() {
  return(
    <div>
      <RouterProvider router={routers}/>

    </div>
    
  )
}

export default App
