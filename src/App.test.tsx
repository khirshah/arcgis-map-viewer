import App from "./App.tsx"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe('App', () => {
    it('renders the app',() => {
        render(<App />)

        const appTitle = screen.getByText('Hello world!')
        expect(appTitle).toBeInTheDocument()
    })
})
