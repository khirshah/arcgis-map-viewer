import React from "react"
import "./Page.scss"

type PageProps = {
  mapData: {
    title: string
    description: string
  },
  MapContent: React.FC
}

const Page = ({ mapData, MapContent }: PageProps) => {
  return (
    <div className="page">
      <h2>{ mapData.title }</h2>
      <MapContent/>
      <p className="description">{ mapData.description }</p>
    </div>
  )
}

export default Page
