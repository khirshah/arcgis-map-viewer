import { useRef, useEffect } from 'react'
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import Search from "@arcgis/core/widgets/Search"
import TileLayer from "@arcgis/core/layers/TileLayer"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import "./MapComponent.scss"
import { JSX } from "react/jsx-runtime"
import IntrinsicAttributes = JSX.IntrinsicAttributes;

type MapComponentProps = {
  layers: IntrinsicAttributes & (TileLayer | FeatureLayer)[]
}

const MapComponent = ({ layers }: MapComponentProps) => {
  const mapDiv = useRef(null)

  useEffect(() => {
    if (mapDiv.current) {


      const map: Map = new Map({ basemap: "topo", layers: layers })

      const view = new MapView({
        map,
        center: [174.0398562, -41.1450073] ,
        zoom: 6,
        container: mapDiv.current,
      })


      const searchWidget = new Search({ view })
      view.ui.add(searchWidget, "top-right")
    }
  })

  return (
    <div className="mapContainer">
     <div className="gisDiv" ref={mapDiv}></div>
    </div>
  )
}

export default MapComponent
