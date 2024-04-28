import './App.scss'
import Page from "./components/common/Page/Page.tsx"
import { Header, NewZealandMap, SantaMonicaMap } from "./components"
import mapData from "./data/mapsInfo.json"
import esriConfig from "@arcgis/core/config"
import {
  createBrowserRouter, createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY

const CurrentApp = () => {
  return <div className="app">
    <Header/>
    <Page
      mapData={mapData.newZealandMap}
      MapContent={NewZealandMap}
    />
    <Page
      mapData={mapData.santaMonicaMap}
      MapContent={SantaMonicaMap}
    />
  </div>
}

const AppRoutes = () => {

  return (
    <>
    <Route
      path='/'
      element={<CurrentApp />}
    />
    </>
  )
}

const router = createBrowserRouter(createRoutesFromElements(AppRoutes()))

const App = () => <RouterProvider router={router}/>

export default App
