import * as S from './styles'
import UserIcon from '../../components/icons/UserIcon'
import NavBar from '../../components/NavBar'

const links = [
  {
    id: 1,
    href: '/geoprocessamento',
    label: 'Diagnóstico'
  },
]

const Cards = () => (
  <S.Wrapper>
    <UserIcon></UserIcon>
    {/* <S.Label>Geoprocessamento</S.Label> */}
    <NavBar links={links} variant="small" />
  </S.Wrapper>
)

export default Cards
