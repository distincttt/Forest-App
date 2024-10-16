import { BoxProps, defineStyle, HeadingProps } from '@chakra-ui/react'

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
   fontSize: [120, 190, 250],
   color: '#fff',
   textShadow:
      '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1),0 1px 3px rgba(0, 0, 0, .3),0 3px 5px rgba(0, 0, 0, .2),0 5px 10px rgba(0, 0, 0, .25),0 10px 10px rgba(0, 0, 0, .2),0 20px 20px rgba(0, 0, 0, .15) ',
} as HeadingProps)

export const rightSideH3Style = defineStyle({
   as: 'h3',
   pos: 'absolute',
   fontSize: [40, 60, 80],
   color: '#fff',
   textShadow: '0 0 10px rgba(0, 0, 0, .5)',
   transform: 'translateY(150%)',
   ml: '13px',
} as HeadingProps)
