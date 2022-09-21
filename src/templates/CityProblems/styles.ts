import styled, { css } from 'styled-components'

import * as Button from 'components/Button/styles'

export const Wrapper = styled.div``

export const NavBarWrapper = styled.div`
  margin-bottom: 8rem;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 10rem;

  & ${Button.Wrapper} {
    display: block;
    width: 34.9rem;
    margin: 0 auto;

    svg {
      margin-left: 27.5rem;
    }

    &:hover:enabled {
      svg path {
        fill: white;
      }
    }
  }
`

export const Text = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.content.small};
    font-weight: ${theme.font.weights.light};
    font-style: italic;
    margin: 8rem 0 7rem;
  `}
`
export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 3rem;
`