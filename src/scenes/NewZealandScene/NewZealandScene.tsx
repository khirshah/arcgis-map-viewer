import Page from "../../components/common/Page/Page.tsx"
import mapData from "../../data/mapsInfo.json"
import { NewZealandMap } from "../../components"

const NewZealandScene = () => {
  return (
    <Page
      mapData={mapData.newZealandMap}
      MapContent={NewZealandMap}
    />
  )
}

export default NewZealandScene
