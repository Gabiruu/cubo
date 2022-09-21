import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}

const BidLogo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={197}
    height={211}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    
<g clipPath="url(#clip0_975_111)">
<path d="M18.7325 173.05C26.9346 173.05 33.6011 177.462 36.0895 185.062H27.5703C25.8248 181.501 22.6493 179.747 18.6812 179.747C12.2261 179.747 7.62221 184.478 7.62221 192.025C7.62221 199.572 12.2261 204.302 18.6812 204.302C22.6493 204.302 25.8248 202.549 27.5703 198.933H36.0895C33.6026 206.587 26.9346 210.945 18.7325 210.945C8.09639 210.945 0 203.132 0 192.023C0 180.915 8.09639 173.048 18.7325 173.048V173.05Z" fill="#202463"/>
<path d="M58.2061 173.527H65.6139V196.488C65.6139 201.591 68.3651 204.248 73.0746 204.248C77.7842 204.248 80.5882 201.591 80.5882 196.488V173.527H88.0489V196.435C88.0489 206.215 81.0639 210.999 72.9675 210.999C64.8711 210.999 58.2046 206.215 58.2046 196.435V173.527H58.2061Z" fill="#202463"/>
<path d="M126.994 210.627H111.067V173.527H126.307C134.032 173.527 138.319 177.566 138.319 183.095C138.319 187.613 135.62 190.429 132.022 191.599C136.203 192.343 139.166 196.223 139.166 200.582C139.166 206.482 134.668 210.627 126.995 210.627H126.994ZM125.248 179.533H118.475V188.835H125.248C128.741 188.835 130.752 187.241 130.752 184.211C130.752 181.181 128.741 179.533 125.248 179.533ZM125.777 194.576H118.475V204.568H125.935C129.534 204.568 131.651 202.815 131.651 199.678C131.651 196.542 129.375 194.576 125.777 194.576Z" fill="#202463"/>
<path d="M178.109 211C167.684 211 159.165 203.133 159.165 191.972C159.165 180.81 167.684 172.996 178.109 172.996C188.534 172.996 197 180.862 197 191.972C197 203.081 188.587 211 178.109 211ZM178.109 204.355C184.777 204.355 189.379 199.519 189.379 191.972C189.379 184.425 184.775 179.694 178.109 179.694C171.442 179.694 166.786 184.425 166.786 191.972C166.786 199.519 171.39 204.355 178.109 204.355Z" fill="#202463"/>
<path d="M99.4894 0H32.5176V141.972H99.4894V0Z" fill="url(#paint0_linear_975_111)"/>
<path d="M176.007 0H98.5015V141.972H176.007V0Z" fill="url(#paint1_linear_975_111)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M164.481 112.38L98.5014 82.7874L32.5176 112.38L98.9931 141.751L164.481 112.38Z" fill="#1B239D"/>
<path d="M106.231 101.016L108.591 101.985L114.699 98.2515L113.38 97.7103L106.231 101.016ZM114.525 97.181L115.679 97.6543L122.437 93.5239L114.525 97.181ZM80.2078 113.051L86.3605 115.575L96.6223 109.304L92.2195 107.497L80.2078 113.052V113.051ZM94.7931 106.307L98.82 107.96L107.126 102.882L104.515 101.811L94.7916 106.309L94.7931 106.307ZM58.2896 123.186L68.2269 127.642L82.6066 117.87L75.8139 115.083L58.2896 123.186Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_975_111" x1="66.0042" y1="103.481" x2="66.0042" y2="-64.1808" gradientUnits="userSpaceOnUse">
<stop stopColor="#1E27E7"/>
<stop offset="1" stopColor="#2CD1FF"/>
</linearGradient>
<linearGradient id="paint1_linear_975_111" x1="137.254" y1="136.147" x2="137.254" y2="0" gradientUnits="userSpaceOnUse">
<stop stopColor="#1E27E7"/>
<stop offset="1" stopColor="#2CD1FF"/>
</linearGradient>
<clipPath id="clip0_975_111">
<rect width="197" height="211" fill="white"/>
</clipPath>
</defs>
</svg>

)

export default BidLogo
