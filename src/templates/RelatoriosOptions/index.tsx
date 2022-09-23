import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import WarningIcon from 'components/icons/WarningIcon'

import * as S from './styles'

const RelatoriosOptions = () => {
  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          <S.Title>Relatórios</S.Title>
          <S.SearchRow>
            <div>
              <WarningIcon></WarningIcon>
            </div>
            <div>
              <WarningIcon></WarningIcon>
            </div>
          </S.SearchRow>
          <S.Table>
          <S.TableHead>

          </S.TableHead>
          </S.Table>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default RelatoriosOptions
