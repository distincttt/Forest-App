import { Box, Container, Icon, Link } from '@chakra-ui/react'

import { useHeader } from '../../shared/hooks'

import { linkIconStyle, containerStyle, iconStyle, logoStyle, navbarPageStyle } from './HeaderStyle'

export const Header = (): JSX.Element => {
   const [iconSvg, navbarPage] = useHeader()
   return (
      <Container {...containerStyle}>
         <Link {...logoStyle}>Forest.</Link>
         <Box m={'0 auto 0 50px'}>
            {iconSvg.map((svg, i) => (
               <Link key={i} {...linkIconStyle}>
                  <Icon {...iconStyle}>
                     <path fill='currentColor' d={svg} />
                  </Icon>
               </Link>
            ))}
         </Box>
         <Box>
            {navbarPage.map((text, i) => (
               <Link key={i} {...navbarPageStyle}>
                  {text}
               </Link>
            ))}
         </Box>
      </Container>
   )
}
