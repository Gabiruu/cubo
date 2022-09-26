import LeftArrow from 'components/icons/LeftArrow'
import Link from 'next/link'

import * as S from './styles'

const ReturnLink = () => {

  return (
    <>
        <S.ReturnLinkContainer>
          <Link href="/geoprocessamento/">
            <S.SvgWrrapper>
              <a>
                <LeftArrow/>
              </a>
            </S.SvgWrrapper>
          </Link>
        </S.ReturnLinkContainer>
    </>
  )
}

export default ReturnLink
