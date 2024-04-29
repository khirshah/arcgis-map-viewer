import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { vi } from 'vitest'

import App from "./App.tsx"


vi.mock('./components/NewZealandMap/NewZealandMap.tsx', () => ({
  default: 'div',
}))
vi.mock('./components/SantaMonicaMap/SantaMonicaMap.tsx', () => ({
  default: 'div',
}))

describe('App', () => {
  beforeAll(() => {
    global.scrollTo = vi.fn(() => {})
  })

  describe('On first render', () => {
    it('renders the app header',() => {
      render(<App />)

      const appTitle = screen.getByText('ArcGIS Map Viewer')
      expect(appTitle).toBeInTheDocument()
    })

    it('renders New Zealand section',() => {
      render(<App />)

      const mapTitle = screen.getByText('Map of New Zealand')
      expect(mapTitle).toBeInTheDocument()
    })
  })
})

