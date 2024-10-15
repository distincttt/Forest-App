import { Box, Heading, Image, Link } from '@chakra-ui/react'

import { bgImageStyle } from '../BannerStyle.ts'

import {
   leftSideBoxStyle,
   leftSideBtnStyle,
   leftSideH1BoxStyle,
   leftSideH1Style,
} from './BannerLeftSideStyle.ts'

interface BannerLeftSideProps {
   image: string
   visible: boolean
   firstName: string
   numberForest: string
   description: string
}

export const BannerLeftSide = ({
   image,
   visible,
   firstName,
   numberForest,
   description,
}: BannerLeftSideProps): JSX.Element => {
   return (
      <>
         <Image src={image} alt={numberForest} opacity={visible ? '1' : '0'} {...bgImageStyle} />
         <Box
            {...leftSideBoxStyle}
            transform={visible ? 'translateX(0)' : 'translateX(-100%)'}
            transition={visible ? '.5s ease' : '0s'}
            zIndex={visible ? '1' : '0'}
         >
            <Box {...leftSideH1BoxStyle}>
               <Heading {...leftSideH1Style}>{firstName}</Heading>
            </Box>
            <Box pos={'absolute'} bottom={2} left={'10%'} color={'#fff'}>
               <Heading as='h3' fontSize={20}>
                  {numberForest}
               </Heading>
               <Box as='p' fontSize={16} m={'10px 20px 15px 0'}>
                  {description}
               </Box>
               <Link {...leftSideBtnStyle}>More Details</Link>
            </Box>
         </Box>
      </>
   )
}
