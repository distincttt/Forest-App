import {
   BoxProps,
   ButtonProps,
   ContainerProps,
   defineStyle,
   HeadingProps,
   IconProps,
   ImageProps,
} from '@chakra-ui/react'

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

export const leftSideBoxStyle = defineStyle({
   pos: 'absolute',
   top: 0,
   left: 0,
   w: '50%',
   h: '100%',
} as BoxProps)

export const leftSideH1BoxStyle = defineStyle({
   pos: 'absolute',
   w: '100%',
   h: '100%',
   pr: '20px',
   bg: 'rgba(255, 255, 255, .1)',
   backdropFilter: 'blur(20px)',
   display: 'flex',
   justifyContent: 'flex-end',
   alignItems: 'center',
   sx: {
      WebkitMask: 'linear-gradient(#000 0 0), linear-gradient(#000 0 0)',
      WebkitMaskClip: 'text, padding-box',
      WebkitMaskComposite: 'xor',
   },
} as BoxProps)

export const leftSideH1Style = defineStyle({
   as: 'h1',
   fontSize: 250,
   textShadow: '0 0 10px rgba(255, 255, 255, .8)',
} as HeadingProps)

export const leftSideBtnStyle = defineStyle({
   display: 'inline-block',
   p: '13px 28px',
   background: '#fff',
   border: '2px solid #fff',
   borderRadius: 6,
   boxShadow: '0 0 10px rgba(0, 0, 0, .1)',
   fontSize: 16,
   color: '#444',
   fontWeight: 600,
   transition: '.5s',
   _hover: { background: 'transparent', color: '#fff' },
})

export const rightSideBoxStyle = defineStyle({
   pos: 'absolute',
   top: 0,
   right: 0,
   w: '50%',
   h: '100%',
   display: 'flex',
   alignItems: 'center',
} as BoxProps)

export const rightSideH1Style = defineStyle({
   as: 'h1',
   ml: '10px',
   fontSize: 250,
   color: '#fff',
   textShadow:
      '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1),0 1px 3px rgba(0, 0, 0, .3),0 3px 5px rgba(0, 0, 0, .2),0 5px 10px rgba(0, 0, 0, .25),0 10px 10px rgba(0, 0, 0, .2),0 20px 20px rgba(0, 0, 0, .15) ',
} as HeadingProps)

export const rightSideH3Style = defineStyle({
   as: 'h3',
   pos: 'absolute',
   fontSize: 80,
   color: '#fff',
   textShadow: '0 0 10px rgba(0, 0, 0, .5)',
   transform: 'translateY(150%)',
   ml: '13px',
} as HeadingProps)

export const rightSideBtnsStyle = defineStyle({
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

export const rightSideBtnsIconStyle = defineStyle({
   viewBox: '0 0 24 24',
   fontSize: 45,
} as IconProps)
