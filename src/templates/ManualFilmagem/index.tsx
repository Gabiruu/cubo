import AccordionCategoryList from 'components/AccordionCategoryList'
import Button from 'components/Button'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Hero from 'components/Hero'
import RightArrow from 'components/icons/RightArrow'
import NavBar from 'components/NavBar'
import UserIcon from 'components/icons/UserIcon'
import FileProcessIcon from 'components/icons/FileProcessIcon'
import Cards from 'components/Cards'
import { useProblems } from 'contexts/ProblemsContext'
import Router from 'next/router'
import { PDFViewer } from '@react-pdf/renderer'
import img from '../../../public/images/sobre-nos.jpg'
//import document from '../../../public/images/dummy.pdf'
//import { Document } from 'react-pdf'

import * as S from './styles'

const ManualFilmagem = () => {
  const { prioritizedProblems } = useProblems()

  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          <S.Title>Geoprocessamento</S.Title>
          <S.CardsWrapper>
            {/* <PDFViewer>
              <MyDocument />
              </PDFViewer> 
              <Document file='' />
            */}
          </S.CardsWrapper>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default ManualFilmagem
