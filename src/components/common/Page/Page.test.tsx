import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Page from "./Page.tsx"

const MapMock = () => <div/>
const mapDataMock = {
  title: "Map title",
  description: "Map description",
}

describe('Page', () => {
  it('renders the map title',() => {
    render(
      <Page
        mapData={mapDataMock}
        MapContent={MapMock}
      />
    )

    const mapTitle = screen.getByText('Map title')
    expect(mapTitle).toBeInTheDocument()
  })

  it('renders the map description',() => {
    render(
      <Page
        mapData={mapDataMock}
        MapContent={MapMock}
      />
    )

    const mapTitle = screen.getByText('Map description')
    expect(mapTitle).toBeInTheDocument()
  })
})
