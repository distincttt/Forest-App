import { Button, Icon } from '@chakra-ui/react'

import { rightSideBtnIconStyle, rightSideBtnStyle } from './BannerRightSideBtnStyle'

interface BannerRightSideBtnProps {
   id: number
   key: number
   bg: string
   svg: string
   iconColor: string
   hoverBtnBg: string
   hoverIconColor: string
   onClick: () => void
}

export const BannerRightSideBtn = ({
   id,
   bg,
   hoverBtnBg,
   onClick,
   iconColor,
   hoverIconColor,
   svg,
}: BannerRightSideBtnProps): JSX.Element => {
   return (
      <Button key={id} bg={bg} {...rightSideBtnStyle} _hover={{ bg: hoverBtnBg }} onClick={onClick}>
         <Icon {...rightSideBtnIconStyle} color={iconColor} _hover={{ color: hoverIconColor }}>
            <path fill='currentColor' d={svg} />
         </Icon>
      </Button>
   )
}
