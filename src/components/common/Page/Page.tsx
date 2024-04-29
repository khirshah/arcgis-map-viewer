import React, { ComponentProps } from "react"
import "./Page.scss"
import Button from "../Button/Button.tsx"

type PageProps = {
  mapData: {
    title: string
    description: string
    buttonDetails?: ComponentProps<typeof Button>
    buttonExplainer?: string
  },
  MapContent: React.FC

}

const Page = ({ 
  mapData, 
  MapContent,
}: PageProps) => {
  return (
    <div className="page">
      <h2>{ mapData.title }</h2>
      <MapContent/>
      <p className="description">{ mapData.description }</p>
      {
        mapData.buttonDetails &&
          <>
              <p className="description">{ mapData.buttonExplainer }</p>
              <div className="centered">
                <Button
                    text={mapData.buttonDetails.text}
                    label={mapData.buttonDetails.label}
                    href={mapData.buttonDetails.href || undefined}
                />
              </div>
          </>
      }
    </div>
  )
}

export default Page
