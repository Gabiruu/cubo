import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ContractPen from 'components/icons/ContractPen'
import Contract from 'components/icons/Contract'
import Cards from 'components/Cards'

import * as S from './styles'

const Contrato = () => {

  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          <S.Title>Contrato</S.Title>
          <S.CardsWrapper>
            <Cards label="Contratos" href=''>
              <Contract />
            </Cards>
            <Cards label="Novo Contrato" href=''>
              <ContractPen />
            </Cards>
          </S.CardsWrapper>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Contrato
