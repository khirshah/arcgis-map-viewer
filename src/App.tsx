import esriConfig from "@arcgis/core/config"
import {
  createBrowserRouter, createRoutesFromElements,
  Route,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom'
import Layout from "./components/Layout/Layout.tsx"
import { NewZealandScene, SantaMonicaScene }  from './scenes'


esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY


const AppRoutes = () => {
  return (
    <>
      <Route
        element={
        <>
          <Layout/>
          <ScrollRestoration/>
        </>}
      >
        <Route
          path='/'
          element={
            <NewZealandScene/>
          }
        />
        <Route
          path='/santa-monica'
          element={
            <SantaMonicaScene/>
          }
        />
        <Route
          path='*'
          element={
            <SantaMonicaScene/>
          }
        />
      </Route>
    </>
  )
}

const router = createBrowserRouter(createRoutesFromElements(AppRoutes()))

const App = () => <RouterProvider router={router}/>

export default App
