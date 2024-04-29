import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import "@testing-library/jest-dom"
import { vi } from 'vitest'
import { MemoryRouter, Route, Routes } from "react-router-dom"

import NewZealandScene from "./NewZealandScene.tsx"


vi.mock('../../components/NewZealandMap/NewZealandMap.tsx', () => ({
  default: 'div',
}))
vi.mock('../../components/SantaMonicaMap/SantaMonicaMap.tsx', () => ({
  default: 'div',
}))

describe('NewZealandScene', () => {
  const SantaMonicaSceneMock = () => <div>Map of Santa Monica</div>
  const NewZealandSceneWrapped = () => {
    return <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route
          path="/"
          element={<NewZealandScene/>}
        />
        <Route
          path="/santa-monica"
          element={<SantaMonicaSceneMock/>}
        />
      </Routes>
    </MemoryRouter>
  }

  beforeAll(() => {
    global.scrollTo = vi.fn(() => {})
  })

  describe('On first render', () => {
    it('renders New Zealand section title',() => {
      render(<NewZealandSceneWrapped />)

      const mapTitle = screen.getByText('Map of New Zealand')
      expect(mapTitle).toBeInTheDocument()
    })

    it('renders New Zealand section description',() => {
      render(<NewZealandSceneWrapped />)

      const mapDescription = screen.getByText(
        'Topographic map, centered to New Zealand', { exact: false })
      expect(mapDescription).toBeInTheDocument()
    })
  })

  describe('When the Santa Monica map button is pressed', () => {
    it('renders Santa Monica page',async () => {
      render(<NewZealandSceneWrapped />)

      const user = userEvent.setup()
      const SMbutton = screen.getByText('Santa Monica map')

      await user.click(SMbutton)

      const mapTitle = await screen.findByText('Map of Santa Monica')
      expect(mapTitle).toBeInTheDocument()
    })
  })

})

