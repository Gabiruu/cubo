import * as S from './styles'
import NavBar from '../../components/NavBar'

type CardsProps = {
  id?: number;
  label: string;
  children: React.ReactNode;
}

const links = [
  {
    id: 1,
    href: '/geoprocessamento',
    label: 'Diagnóstico'
  },
]

const Cards = (props: CardsProps) => (
  <S.Wrapper>
    {/* <NavBar links={links} variant="small" /> */}
    {props.children}
    <S.Label>{props.label}</S.Label>
  </S.Wrapper>
)

export default Cards
