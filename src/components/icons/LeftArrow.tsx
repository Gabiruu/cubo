import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
  color?: string
}

const LeftArrow = ({
  title,
  titleId,
  color = '#BABABA',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={38}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M30.084 19H7.916M19 30.083 7.917 19 19 7.917"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default LeftArrow
