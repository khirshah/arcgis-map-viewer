import { useRef, useEffect } from 'react'
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import Search from "@arcgis/core/widgets/Search"
import "./MapComponent.css"

const MapComponent = () => {
  const mapDiv = useRef(null)

  useEffect(() => {
    if (mapDiv.current) {
      const map: Map = new Map({ basemap: "topo" })

      const view = new MapView({
        map,
        center: [-73, 42] ,
        zoom: 10,
        container: mapDiv.current,
      })

      const searchWidget = new Search({ view })
      view.ui.add(searchWidget, "top-right")
    }
  })


  return <div id="gisDiv" ref={mapDiv}></div>
}

export default MapComponent
