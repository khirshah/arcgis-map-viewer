import Page from "../../components/common/Page/Page.tsx"
import mapData from "../../data/mapsInfo.json"
import SantaMonicaMap from "../../components/SantaMonicaMap/SantaMonicaMap.tsx"

const SantaMonicaScene = () => {
  return (
    <Page
      mapData={mapData.santaMonicaMap}
      MapContent={SantaMonicaMap}
    />
  )
}

export default SantaMonicaScene
