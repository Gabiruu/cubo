import Button from 'components/Button'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Hero from 'components/Hero'
import LeftArrow from 'components/icons/LeftArrow'
import RightArrow from 'components/icons/RightArrow'
import WarningIcon from 'components/icons/WarningIcon'
import NavBar from 'components/NavBar'
import PrioritizedProblemsList from 'components/PrioritizedProblemsList'
import { useProblems } from 'contexts/ProblemsContext'
import Link from 'next/link'
import Router from 'next/router'

import * as S from './styles'

const AboutUs = () => {
  //const { prioritizedProblems } = useProblems()

  // const handleClick = () => {
  //   if (!prioritizedProblems.length) {
  //     return Router.push('/diagnostico/problemas-do-municipio')
  //   }

  //   return Router.push('/diagnostico/causas-dos-problemas')
  // }

  return (
    <>
      <Header />
      <Link href={'login'}>
        <a style={{ margin: '20px 0' }}>
          <LeftArrow color="white" />
        </a>
      </Link>
      <Container>
        <S.ReturnLinkContainer>
          <Link href="/geoprocessamento/">
            <S.SvgWrrapper>
              <a>
                <LeftArrow/>
              </a>
            </S.SvgWrrapper>
          </Link>
        </S.ReturnLinkContainer>
        <Hero/>
      </Container>
      <Footer />
    </>
  )
}

export default AboutUs
