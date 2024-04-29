import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import "@testing-library/jest-dom"
import { vi } from 'vitest'
import { MemoryRouter, Route, Routes } from "react-router-dom"

import SantaMonicaScene from "./SantaMonicaScene.tsx"

vi.mock('../../components/SantaMonicaMap/SantaMonicaMap.tsx', () => ({
  default: 'div',
}))

describe('SantaMonicaScene', () => {
  const NewZealandSceneMock = () => <div>Map of New Zealand</div>
  const SantaMonicaSceneWrapped = () => {
    return <MemoryRouter initialEntries={['/santa-monica']}>
      <Routes>
        <Route
          path="/"
          element={<NewZealandSceneMock/>}
        />
        <Route
          path="/santa-monica"
          element={<SantaMonicaScene/>}
        />
      </Routes>
    </MemoryRouter>
  }

  beforeAll(() => {
    // @ts-expect-error test
    global.scrollTo = vi.fn()
  })

  describe('On first render', () => {
    it('renders Santa Monica section title',() => {
      render(<SantaMonicaSceneWrapped />)

      const mapTitle = screen.getByText('Map of Santa Monica')
      expect(mapTitle).toBeInTheDocument()
    })

    it('renders Santa Monica section description',() => {
      render(<SantaMonicaSceneWrapped />)

      const mapDescription = screen.getByText(
        'Topographic map, centered to Santa Monica', { exact: false })
      expect(mapDescription).toBeInTheDocument()
    })
  })

  describe('When the New Zealand map button is pressed', () => {
    it('renders New Zealand page',async () => {
      render(<SantaMonicaSceneWrapped />)

      const user = userEvent.setup()

      const NZbutton = await screen.findByText('New Zealand map')

      await user.click(NZbutton)

      const mapTitle = await screen.findByText('Map of New Zealand')
      expect(mapTitle).toBeInTheDocument()
    })
  })
})

