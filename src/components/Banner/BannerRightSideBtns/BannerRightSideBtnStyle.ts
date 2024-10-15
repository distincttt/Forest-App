import { ButtonProps, defineStyle, IconProps } from '@chakra-ui/react'

export const rightSideBtnStyle = defineStyle({
   display: 'inline-flex',
   justifyContent: 'center',
   alignItems: 'center',
   w: 50,
   h: 50,
   border: '2px solid #fff',
   borderRadius: 6,
   boxShadow: '0 0 10px rgba(0, 0, 0, .5)',
   ml: '25px',
   transition: '.5s',
   role: 'group',
} as ButtonProps)

export const rightSideBtnIconStyle = defineStyle({
   viewBox: '0 0 24 24',
   fontSize: 45,
} as IconProps)
