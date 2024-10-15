import { Box, Container } from '@chakra-ui/react'

import { useBanner } from '../../shared/hooks'
import { BannerLeftSide } from './BannerLeftSide/BannerLeftSide'

import { containerStyle } from './BannerStyle'
import { BannerRightSide } from './BannerRightSide/BannerRightSide'
import { BannerRightSideBtn } from './BannerRightSide/BannerRightSideBtns/BannerRightSideBtns'

export const BannerWrapper = (): JSX.Element => {
   const [forests, navigateBtns] = useBanner()
   return (
      <Container {...containerStyle}>
         <Box>
            {forests.map(
               ({ image, visible, firstName, numberForest, description, lastName }, key) => (
                  <Box key={key} pos={'absolute'} w={'100%'} h={'100%'}>
                     <BannerLeftSide
                        image={image}
                        visible={visible}
                        firstName={firstName}
                        numberForest={numberForest}
                        description={description}
                     />
                     <BannerRightSide visible={visible} lastName={lastName} />
                  </Box>
               ),
            )}
         </Box>
         <Box pos={'absolute'} bottom={2} right={'5%'} zIndex={1}>
            {navigateBtns.map(
               ({ bg, hoverBtnBg, onClick, iconColor, hoverIconColor, svg }, key) => (
                  <BannerRightSideBtn
                     key={key}
                     id={key}
                     bg={bg}
                     hoverBtnBg={hoverBtnBg}
                     onClick={onClick}
                     iconColor={iconColor}
                     hoverIconColor={hoverIconColor}
                     svg={svg}
                  />
               ),
            )}
         </Box>
      </Container>
   )
}
