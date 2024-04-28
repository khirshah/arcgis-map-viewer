import React, { useState } from "react"
import { MapComponent } from "../common"

const SantaMonicaMap = () => {
  const [baseMapStyle,setBaseMapStyle] = useState<string>("arcgis/topographic")
  const [ dropDownLabel, setDropDownLabel ] = useState<string>('Change basemap style here')

  const Widget: React.FC = () => (
    <select
      aria-label='Change basemap style here'
      defaultValue={dropDownLabel}
      onChange={(event) => {
        setBaseMapStyle(event.target.value)
        setDropDownLabel(event.target.value)
      }}
    >
      <option
        value={"arcgis/topographic"}
        aria-label="Topographic"
      >Topographic</option>
      <option
        value={"arcgis/navigation"}
        aria-label="Navigation"
      >Navigation</option>
      <option
        value={"arcgis/outdoor"}
        aria-label="Outdoor"
      >Outdoor</option>
      <option
        value={"arcgis/imagery"}
        aria-label="Satellite"
      >Satellite</option>
    </select>
  )

  return (
    <MapComponent
      coordinates={[-118.805, 34.027]}
      zoom={13}
      basemap={baseMapStyle}
      Widget={Widget}
    />
  )
}

export default SantaMonicaMap
