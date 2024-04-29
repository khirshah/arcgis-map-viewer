import React, { useRef, useEffect } from 'react'
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import Search from "@arcgis/core/widgets/Search"
import TileLayer from "@arcgis/core/layers/TileLayer"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import "./MapComponent.scss"
import { JSX } from "react/jsx-runtime"
import IntrinsicAttributes = JSX.IntrinsicAttributes;

type MapComponentProps = {
  layers?: IntrinsicAttributes & (TileLayer | FeatureLayer)[]
  coordinates: number[]
  zoom: number
  basemap: string
  Widget?: React.FC
}

const MapComponent = ({
  layers,
  coordinates,
  zoom,
  basemap,
  Widget

}: MapComponentProps) => {
  const mapDiv = useRef(null)

  useEffect(() => {
    if (mapDiv.current) {

      const mapOptions = {
        basemap: basemap,
        layers: layers
      }
      const map: Map = new Map(mapOptions)

      const view = new MapView({
        map,
        center: coordinates,
        zoom: zoom,
        container: mapDiv.current,
      })

      const searchWidget = new Search({ view })
      view.ui.add(searchWidget, "bottom-right")
    }
  })

  return (
    <div className="mapContainer">
     <div className="gisDiv" ref={mapDiv}></div>
      {Widget && (
        <div className="dropdown">
          <Widget/>
        </div>
      )}
    </div>
  )
}

export default MapComponent
