import MapComponent from "../common"
import TileLayer from "@arcgis/core/layers/TileLayer"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"

const NewZealandMap = () => {

  const terrainBaseLayer = new TileLayer({
    url: "https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"
  })

  const timeZoneLayer = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Urban_Areas/FeatureServer"
  })

  return (
    <>
      <h1>Map of New Zealand</h1>
      <MapComponent layers={[terrainBaseLayer, timeZoneLayer]}/>
    </>
  )
}

export default NewZealandMap
