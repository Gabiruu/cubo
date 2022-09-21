import AccordionCategoryList from 'components/AccordionCategoryList'
import Button from 'components/Button'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Hero from 'components/Hero'
import RightArrow from 'components/icons/RightArrow'
import NavBar from 'components/NavBar'
import Cards from 'components/Cards'
import { useProblems } from 'contexts/ProblemsContext'
import Router from 'next/router'

import * as S from './styles'

const CityProblems = () => {
  const { prioritizedProblems } = useProblems()

  const links = [
    {
      id: 1,
      href: '/diagnostico/problemas-do-municipio',
      label: 'Problemas do Município',
      disabled: false
    },
    {
      id: 2,
      href: '/diagnostico/problemas-priorizados',
      label: 'Problemas Priorizados',
      disabled: !prioritizedProblems.length
    },
    {
      id: 3,
      href: '/diagnostico/causas-dos-problemas',
      label: 'Causas',
      disabled: true
    }
  ]

  const handleClick = () => {
    Router.push('/diagnostico/problemas-priorizados')
  }

  return (
    <>
      <Header />
      <Container>
        {/* <Hero /> */}
        {/* <S.NavBarWrapper>
          <NavBar links={links} />
        </S.NavBarWrapper>
        <AccordionCategoryList />
        <S.ButtonWrapper>
          <Button disabled={!prioritizedProblems.length} onClick={handleClick}>
            Problemas Priorizados
            <RightArrow />
          </Button>
        </S.ButtonWrapper>
        <S.Text>Última atualização de dados: Fev/2022</S.Text> */}
        <S.CardsWrapper>
          <Cards />
          <Cards />
        </S.CardsWrapper>
      </Container>
      <Footer />
    </>
  )
}

export default CityProblems
