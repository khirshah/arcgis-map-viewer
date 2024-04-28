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
    describe('On first render', () => {
        it('renders the app header',() => {
            render(<App />)

            const appTitle = screen.getByText('ArcGIS Map Viewer')
            expect(appTitle).toBeInTheDocument()
        })

        it('renders New Zealand section title',() => {
            render(<App />)

            const mapTitle = screen.getByText('Map of New Zealand')
            expect(mapTitle).toBeInTheDocument()
        })

        it('renders New Zealand section description',() => {
            render(<App />)

            const mapDescription = screen.getByText(
              'Topographic map, centered to New Zealand', { exact: false })
            expect(mapDescription).toBeInTheDocument()
        })

        it('renders Santa Monica section title',() => {
            render(<App />)

            const mapTitle = screen.getByText('Map of Santa Monica')
            expect(mapTitle).toBeInTheDocument()
        })

        it('renders Santa Monica section description',() => {
            render(<App />)

            const mapDescription = screen.getByText(
              'Topographic map, centered to Santa Monica', { exact: false })
            expect(mapDescription).toBeInTheDocument()
        })
    })
})

