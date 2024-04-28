import './App.scss'
import Page from "./components/common/Page/Page.tsx"
import { Header, NewZealandMap, SantaMonicaMap } from "./components"
import mapData from "./data/mapsInfo.json"
import esriConfig from "@arcgis/core/config"
esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY

function App() {

  return (
    <div className="app">
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
  )
}

export default App
