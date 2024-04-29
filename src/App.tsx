import mapData from "./data/mapsInfo.json"
import esriConfig from "@arcgis/core/config"
import {
  createBrowserRouter, createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Page from "./components/common/Page/Page.tsx"
import { NewZealandMap, SantaMonicaMap } from "./components"
import Layout from "./components/Layout/Layout.tsx"

esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY

const AppRoutes = () => {
  return (
    <>
      <Route
        element={<Layout/>}
      >
        <Route
          path='/'
          element={
            <Page
              mapData={mapData.newZealandMap}
              MapContent={NewZealandMap}
            />
          }
        />
        <Route
          path='/santa-monica'
          element={
            <Page
              mapData={mapData.santaMonicaMap}
              MapContent={SantaMonicaMap}
            />
          }
        />
      </Route>
    </>
  )
}

const router = createBrowserRouter(createRoutesFromElements(AppRoutes()))

const App = () => <RouterProvider router={router}/>

export default App
