import { Container } from '@chakra-ui/react'

import { Header } from './Header'
import { BannerWrapper } from './Banner'

export const ForestWrapper = (): JSX.Element => {
   return (
      <Container maxWidth={'100%'} maxHeight={'100%'} p={0}>
         <Header />
         <BannerWrapper />
      </Container>
   )
}
