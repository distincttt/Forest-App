import { BoxProps, defineStyle, HeadingProps } from '@chakra-ui/react'

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

export const leftSideH1BtnWrapperStyle = defineStyle({
   pos: 'absolute',
   bottom: 2,
   left: '10%',
   color: '#fff',
} as BoxProps)

export const leftSideH1Style = defineStyle({
   as: 'h1',
   fontSize: [120, 190, 250],
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
