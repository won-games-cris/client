import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    // renderizar o component 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getBy...
    // expect - assertion - comparação - análise

    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    // renderizar o component 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getBy...
    // expect - assertion - comparação - análise

    renderWithTheme(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    // renderizar o component 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getBy...
    // expect - assertion - comparação - análise

    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    // renderizar o component 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getBy...
    // expect - assertion - comparação - análise

    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
