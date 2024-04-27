import App from "./App.tsx"
import { vi } from 'vitest'

import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

vi.mock('./components/MapComponent.tsx', () => ({
    default: 'div',
}))

describe('App', () => {

    it('renders the app',() => {
        render(<App />)

        const appTitle = screen.getByText('Map of New Zealand')
        expect(appTitle).toBeInTheDocument()
    })
})
