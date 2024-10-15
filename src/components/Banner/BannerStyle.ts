import { ContainerProps, defineStyle, ImageProps } from '@chakra-ui/react'

export const containerStyle = defineStyle({
   maxW: '100%',
   p: 0,
   pos: 'relative',
   w: '100%',
   height: '100vh',
   overflow: 'hidden',
} as ContainerProps)

export const bgImageStyle = defineStyle({
   pos: 'absolute',
   w: '100%',
   h: '100%',
   objectFit: 'cover',
   pointerEvents: 'none',
   transition: '.3s ease',
} as ImageProps)
