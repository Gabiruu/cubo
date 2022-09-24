import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ModifyIcon from 'components/icons/ModifyIcon'
import DeleIcon from 'components/icons/DeleIcon'
import ArrowLeft from 'components/icons/ArrowLeft'
import ArrowRight from 'components/icons/ArrowRight'
import * as S from './styles'

const ContratosOptions = () => {
  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          <S.Title>Contratos</S.Title>

          <S.Table>
            <S.TableHead>
              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Número</p>
              </div>
              <div>
                <p>Data</p>
              </div>
              <div>
                <p>Ações</p>
              </div>
            </S.TableHead>
            <S.TableLine>
              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Número</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon>
                  <ModifyIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <DeleIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>

            <S.TableLine>
              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Número</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon>
                  <ModifyIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <DeleIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>

            <S.TableLine>
              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Número</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon>
                  <ModifyIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <DeleIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>

            <S.TableLine>
              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Número</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon>
                  <ModifyIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <DeleIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>
            <S.PaginationLine>
              <S.PaginationBtnWrraper>
                <S.PaginationBtn>
                  <p>1</p>
                </S.PaginationBtn>
                <S.PaginationBtn>
                  <ArrowLeft />
                </S.PaginationBtn>
                <S.PaginationBtn>
                  <ArrowRight />
                </S.PaginationBtn>
              </S.PaginationBtnWrraper>
            </S.PaginationLine>
          </S.Table>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default ContratosOptions
