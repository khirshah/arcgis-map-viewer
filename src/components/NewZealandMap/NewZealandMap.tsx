import MapComponent from "../common"
import TileLayer from "@arcgis/core/layers/TileLayer"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import './NewZealandMap.scss'

const NewZealandMap = () => {

  const terrainBaseLayer = new TileLayer({
    url: "https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"
  })

  const timeZoneLayer = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Urban_Areas/FeatureServer"
  })

  return (
    <>
      <h2>Map of New Zealand</h2>
      <MapComponent
        layers={[terrainBaseLayer, timeZoneLayer]}
        coordinates={[174.0398562, -39.1450073]}
        zoom={6}
        basemap={'topo'}
      />
    </>
  )
}

export default NewZealandMap
