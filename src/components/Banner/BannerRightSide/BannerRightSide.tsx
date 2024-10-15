import { Box, Heading } from '@chakra-ui/react'
import { rightSideBoxStyle, rightSideH1Style, rightSideH3Style } from './BannerRightSideStyle'

interface BannerRightSideProps {
   visible: boolean
   lastName: string
}

export const BannerRightSide = ({ visible, lastName }: BannerRightSideProps): JSX.Element => {
   return (
      <Box
         {...rightSideBoxStyle}
         transform={visible ? 'translateX(0)' : 'translateX(100%)'}
         transition={visible ? '.5s ease' : '0s'}
         zIndex={visible ? '1' : '0'}
      >
         <Heading {...rightSideH1Style}>{lastName}</Heading>
         <Heading {...rightSideH3Style}>Forest</Heading>
      </Box>
   )
}
