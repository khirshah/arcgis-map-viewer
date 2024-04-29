import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { vi } from 'vitest'

import App from "./App.tsx"
import { userEvent } from "@testing-library/user-event"


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

        describe('When the Santa Monica map button is pressed', () => {
            it('renders Santa Monica page',async () => {
                render(<App />)

                const user = userEvent.setup()
                const button = screen.getByText('Santa Monica map')

                await user.click(button)

                const mapTitle = await screen.findByText('Map of Santa Monica')
                expect(mapTitle).toBeInTheDocument()
                const mapDescription = screen.getByText(
                      'Topographic map, centered to Santa Monica', { exact: false })
                    expect(mapDescription).toBeInTheDocument()
            })
        })

        // This will only pass if the previous one ran before
        // Some more test setup is needed to somehow reset the router
        // However, these tests best sit on the scene level
        describe('When the user navigates away and back to the main page', () => {
            it('renders Santa Monica page',async () => {
                render(<App />)

                const user = userEvent.setup()

                const NZbutton = await screen.findByText('New Zealand map')

                await user.click(NZbutton)

                const mapTitle = await screen.findByText('Map of New Zealand')
                expect(mapTitle).toBeInTheDocument()
                const mapDescription = screen.getByText(
                  'Topographic map, centered to New Zealand', { exact: false })
                expect(mapDescription).toBeInTheDocument()
            })
        })
    })
})

