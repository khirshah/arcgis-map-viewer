import React, { useMemo, useState } from "react"
import "@esri/calcite-components/dist/components/calcite-combobox"
import "@esri/calcite-components/dist/components/calcite-combobox-item"
import { CalciteCombobox, CalciteComboboxItem } from '@esri/calcite-components-react'
import { MapComponent } from "../common"


const SantaMonicaMap = () => {
  const [baseMapStyle,setBaseMapStyle] = useState<string>('topo')
  const layerTypes = useMemo(() => {
    return [
      {
        name: "Topographic",
        value: "arcgis/topographic"
      },
      {
        name: "Navigation",
        value: "arcgis/navigation"
      },
      {
        name: "Outdoor",
        value: "arcgis/outdoor"
      },
      {
        name: "Satellite",
        value: "arcgis/imagery"
      }
    ]
  }, [])

  const Widget: React.FC = () => (
    <CalciteCombobox
      label="Change basemap style"
      placeholder="Change basemap style here"
    >
      {
        layerTypes.map((layer) => {
          return (
            <CalciteComboboxItem
              key={layer.name}
              textLabel={layer.name}
              value={layer.value}
              onCalciteComboboxItemChange={(e) => setBaseMapStyle(e.target.value)}
            />
          )
        })
      }
    </CalciteCombobox>
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
