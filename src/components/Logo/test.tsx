import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // renderizar o component 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getBy...
    // expect - assertion - comparação - análise

    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    // renderizar o component 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getBy...
    // expect - assertion - comparação - análise

    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
