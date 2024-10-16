import { ContainerProps, defineStyle, IconProps } from '@chakra-ui/react'

export const containerStyle = defineStyle({
   pos: 'fixed',
   top: 0,
   left: 0,
   maxW: '100%',
   m: 0,
   p: '30px 5%',
   bg: 'transparent',
   display: 'flex',
   alignItems: 'center',
   textDecoration: 'none',
   zIndex: 100,
} as ContainerProps)

export const logoStyle = defineStyle({
   fontSize: 30,
   fontWeight: 700,
   color: '#fff',
   _hover: { textDecoration: 'none' },
})

export const iconWrapperStyle = defineStyle({
   m: [0, 0, '0 auto 0 50px'],
   pos: ['absolute', 'absolute', 'relative'],
   top: ['70%', '70%', null],
})

export const linkIconStyle = defineStyle({
   display: 'inline-flex',
   justifyContent: 'center',
   alignItems: 'center',
   w: ['30px', '35px', '40px'],
   h: ['30px', '35px', '40px'],
   background: 'transparent',
   border: '2px solid #fff',
   borderRadius: 6,
   mr: '10px',
   transition: '.5s',
   role: 'group',
   _hover: { bg: '#fff' },
})

export const iconStyle = defineStyle({
   viewBox: '0 0 24 24',
   color: '#fff',
   fontSize: 20,
   transition: '.5s',
   _groupHover: { color: '#444' },
} as IconProps)

export const navbarPageStyle = defineStyle({
   fontSize: 18,
   color: '#fff',
   fontWeight: 500,
   ml: '30px',
   textShadow: '0 0 10px rgba(0, 0, 0, .2)',
   _hover: { textDecoration: 'none' },
})
