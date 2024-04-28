import './App.scss'
import Page from "./components/common/Page/Page.tsx"
import { Header, NewZealandMap } from "./components"
import mapData from "./data/mapsInfo.json"

function App() {

  return (
    <div className="app">
      <Header/>
      <Page
        mapData={mapData.newZealandMap}
        MapContent={NewZealandMap}
      />
    </div>
  )
}

export default App
