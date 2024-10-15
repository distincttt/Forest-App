import { useState } from 'react'

import { Forest, NavigateBtn } from '../types'
import { forestsStart } from '../../constants'

export const useBanner = (): [Forest[], NavigateBtn[]] => {
   const [forests, setForest] = useState(forestsStart)

   const onClick = (value: 'next' | 'prev') => {
      let forestNumber = forests.findIndex((forest) => forest.visible === true)
      if (value === 'next') {
         forestNumber++
         if (forestNumber > forests.length - 1) forestNumber = 0
      } else {
         forestNumber--
         if (forestNumber < 0) forestNumber = forests.length - 1
      }

      setForest((prev) =>
         prev.map((forest, index) => {
            if (index === forestNumber) forest.visible = true
            else forest.visible = false
            return forest
         }),
      )
   }

   const navigateBtns: NavigateBtn[] = [
      {
         bg: 'transparent',
         svg: 'M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z',
         iconColor: '#fff',
         hoverBtnBg: '#fff',
         hoverIconColor: '#444',
         onClick: () => onClick('prev'),
      },
      {
         bg: '#fff',
         svg: 'M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z',
         iconColor: '#444',
         hoverBtnBg: '#444',
         hoverIconColor: '#fff',
         onClick: () => onClick('next'),
      },
   ]

   return [forests, navigateBtns]
}
