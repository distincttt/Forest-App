import { Box, Button, Container, Heading, Icon, Image, Link } from '@chakra-ui/react'

import { useBanner } from '../../shared/hooks'

import {
   containerStyle,
   bgImageStyle,
   leftSideBoxStyle,
   leftSideBtnStyle,
   leftSideH1BoxStyle,
   leftSideH1Style,
   rightSideBoxStyle,
   rightSideBtnsIconStyle,
   rightSideBtnsStyle,
   rightSideH1Style,
   rightSideH3Style,
} from './BannerStyle'

export const Banner = (): JSX.Element => {
   const [forests, navigateBtns] = useBanner()
   return (
      <Container {...containerStyle}>
         <Box>
            {forests.map((forest, i) => (
               <Box key={i} pos={'absolute'} w={'100%'} h={'100%'}>
                  <Image
                     src={forest.image}
                     alt={forest.numberForest}
                     opacity={forest.visable ? '1' : '0'}
                     {...bgImageStyle}
                  />
                  <Box
                     {...leftSideBoxStyle}
                     transform={forest.visable ? 'translateX(0)' : 'translateX(-100%)'}
                     transition={forest.visable ? '.5s ease' : '0s'}
                     zIndex={forest.visable ? '1' : '0'}
                  >
                     <Box {...leftSideH1BoxStyle}>
                        <Heading {...leftSideH1Style}>{forest.firstName}</Heading>
                     </Box>
                     <Box pos={'absolute'} bottom={2} left={'10%'} color={'#fff'}>
                        <Heading as='h3' fontSize={20}>
                           {forest.numberForest}
                        </Heading>
                        <Box as='p' fontSize={16} m={'10px 20px 15px 0'}>
                           {forest.description}
                        </Box>
                        <Link {...leftSideBtnStyle}>More Details</Link>
                     </Box>
                  </Box>
                  <Box
                     {...rightSideBoxStyle}
                     transform={forest.visable ? 'translateX(0)' : 'translateX(100%)'}
                     transition={forest.visable ? '.5s ease' : '0s'}
                     zIndex={forest.visable ? '1' : '0'}
                  >
                     <Heading {...rightSideH1Style}>{forest.lastName}</Heading>
                     <Heading {...rightSideH3Style}>Forest</Heading>
                  </Box>
               </Box>
            ))}
         </Box>
         <Box pos={'absolute'} bottom={2} right={'5%'} zIndex={99}>
            {navigateBtns.map((btn, i) => (
               <Button
                  key={i}
                  bg={btn.bg}
                  {...rightSideBtnsStyle}
                  _hover={{ bg: btn.hoverBtnBg }}
                  onClick={() => btn.onClick()}
               >
                  <Icon
                     {...rightSideBtnsIconStyle}
                     color={btn.iconColor}
                     _hover={{ color: btn.hoverIconColor }}
                  >
                     <path fill='currentColor' d={btn.svg} />
                  </Icon>
               </Button>
            ))}
         </Box>
      </Container>
   )
}
