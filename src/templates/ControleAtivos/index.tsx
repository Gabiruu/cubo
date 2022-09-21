import AccordionCategoryList from 'components/AccordionCategoryList'
import Button from 'components/Button'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Hero from 'components/Hero'
import RightArrow from 'components/icons/RightArrow'
import NavBar from 'components/NavBar'
import UserIcon from 'components/icons/UserIcon'

import GeoSearchIcon from 'components/icons/GeoSearchIcon'
import CamEngineIcon from 'components/icons/CamEngineIcon'
import UserCheckIcon from 'components/icons/UserCheckIcon'
import FileProcessIcon from 'components/icons/FileProcessIcon'
import FileArrowIcon from 'components/icons/FileArrowIcon'
import UserGuideIcon from 'components/icons/UserGuideIcon'
import CarCamIcon from 'components/icons/CarCamIcon'

import Cards from 'components/Cards'
import { useProblems } from 'contexts/ProblemsContext'
import Router from 'next/router'

import * as S from './styles'

const ControleAtivos = () => {
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
        <S.Wrapper>
          <S.Title>CDA - Cadastro de Ativos </S.Title>
          <S.CardsWrapper>
            <Cards label="Processamento">
              <CamEngineIcon />
            </Cards>
            <Cards label="Pós - Processamento">
              <UserCheckIcon />
            </Cards>
          </S.CardsWrapper>
          <S.CardsWrapper>
            <Cards label="Contrato">
              <FileProcessIcon />
            </Cards>
            <Cards label="Relatório CDA">
              <FileArrowIcon />
            </Cards>
          </S.CardsWrapper>
          <S.CardsWrapper>
            <Cards label="Relatório CDA">
              <UserGuideIcon />
            </Cards>
            <Cards label="Relatório CDA">
              <CarCamIcon />
            </Cards>
          </S.CardsWrapper>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default ControleAtivos
