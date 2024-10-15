import { Box, Container, Icon, Link } from '@chakra-ui/react'

import { iconSvg } from '../../constants/iconSvg'
import { navbarPage } from '../../constants/navbarPage'

import { linkIconStyle, containerStyle, iconStyle, logoStyle, navbarPageStyle } from './HeaderStyle'

export const Header = (): JSX.Element => {
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
         <Box display={'flex'}>
            {navbarPage.map((text, i) => (
               <Link as='nav' key={i} {...navbarPageStyle}>
                  {text}
               </Link>
            ))}
         </Box>
      </Container>
   )
}
