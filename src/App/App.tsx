import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { ForestWrapper } from '../components'

const theme = extendTheme({
   fonts: 'Montserrat, sans-serif',
})

export const App = (): JSX.Element => {
   return (
      <ChakraProvider theme={theme}>
         <ForestWrapper />
      </ChakraProvider>
   )
}
