import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ContractPen from 'components/icons/ContractPen'
import Contract from 'components/icons/Contract'
import Cards from 'components/Cards'

import * as S from './styles'

const Relatorios = () => {

  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          <S.Title>Relatórios </S.Title>
          <S.CardsWrapper>
            <Cards label="Relatórios Técnicos" href=''>
              <Contract />
            </Cards>
            <Cards label="Novo Cadastro" href=''>
              <ContractPen />
            </Cards>
          </S.CardsWrapper>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Relatorios
