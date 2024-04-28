import App from "./App.tsx"
import { vi } from 'vitest'

import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

vi.mock('./components/NewZealandMap/NewZealandMap.tsx', () => ({
    default: 'div',
}))

describe('App', () => {
    it('renders the app header',() => {
        render(<App />)

        const appTitle = screen.getByText('ArcGIS Map Viewer')
        expect(appTitle).toBeInTheDocument()
    })

    it('renders the map title',() => {
        render(<App />)

        const appTitle = screen.getByText('Map of New Zealand')
        expect(appTitle).toBeInTheDocument()
    })
})
