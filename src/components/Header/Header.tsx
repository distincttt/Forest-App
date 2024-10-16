import { Box, Container, Icon, Link } from '@chakra-ui/react'

import { iconSvg, navbarPage } from '../../constants'

import {
   linkIconStyle,
   containerStyle,
   iconStyle,
   logoStyle,
   navbarPageStyle,
   iconWrapperStyle,
} from './HeaderStyle'

export const Header = (): JSX.Element => {
   return (
      <Container {...containerStyle} justifyContent={'space-between'}>
         <Link {...logoStyle}>Forest.</Link>
         <Box {...iconWrapperStyle}>
            {iconSvg.map((svg, i) => (
               <Link key={i} {...linkIconStyle}>
                  <Icon {...iconStyle}>
                     <path fill='currentColor' d={svg} />
                  </Icon>
               </Link>
            ))}
         </Box>
         <Box display={['box', 'flex', 'flex']} flexDir={['column', 'column', 'row']}>
            {navbarPage.map((text, i) => (
               <Link as='nav' key={i} {...navbarPageStyle}>
                  {text}
               </Link>
            ))}
         </Box>
      </Container>
   )
}
