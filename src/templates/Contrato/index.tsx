import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ContractPen from 'components/icons/ContractPen'
import Contract from 'components/icons/Contract'
import Cards from 'components/Cards'
import { useProblems } from 'contexts/ProblemsContext'

import * as S from './styles'

const Relatorios = () => {
  const { prioritizedProblems } = useProblems()

  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          <S.Title>Contrato</S.Title>
          <S.CardsWrapper>
            <Cards label="Contratos">
              <Contract />
            </Cards>
            <Cards label="Novo Contrato">
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
