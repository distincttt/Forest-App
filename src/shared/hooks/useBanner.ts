import { useState } from 'react'
import { Forests, NavigateBtns } from '../types'

export const useBanner = (): [Forests, NavigateBtns] => {
   const forestsStart: Forests = [
      {
         firstName: 'Chi',
         lastName: 'na',
         numberForest: '01. China Forest',
         description:
            'China Forest is a company that focuses on sustainable forestry and forest management in China. It is involved in the cultivation, harvesting, and processing of timber resources while promoting environmental conservation and biodiversity. The company aims to meet the growing demand for wood products while ensuring responsible and eco-friendly practices, balancing economic interests with long-term sustainability in the forestry sector. China Forest typically engages in reforestation, forest protection, and the development of forest products, such as pulp, paper, and construction materials.',
         image: '/src/images/china.jpg',
         visable: true,
      },
      {
         firstName: 'Ser',
         lastName: 'bia',
         numberForest: '02. Serbia Forest',
         description:
            'Serbia Forest is a state-owned company responsible for the management and conservation of Serbia’s forests. The organization oversees sustainable forest management, including the cultivation, protection, and harvesting of timber. Serbia Forest focuses on maintaining the ecological balance, preventing deforestation, and supporting biodiversity. The company also promotes reforestation and afforestation efforts, ensuring long-term sustainability of forest resources. Additionally, it provides wood products for various industries and contributes to Serbia’s economic and environmental well-being through eco-friendly forest practices.',
         image: '/src/images/serbia.jpg',
         visable: false,
      },
      {
         firstName: 'Afr',
         lastName: 'ica',
         numberForest: '03. Africa Forest',
         description:
            'Africa Forest refers to the continent’s vast forest ecosystems, including tropical rainforests and woodlands. These forests are crucial for biodiversity, climate regulation, and local livelihoods. Major forests include the Congo Basin, the second-largest rainforest globally. Africa faces challenges like deforestation and illegal logging, but efforts focus on conservation, sustainable management, and reforestation.',
         image: '/src/images/africa.jpg',
         visable: false,
      },
      {
         firstName: 'Bra',
         lastName: 'zil',
         numberForest: '04. Brazil Forest',
         description:
            'Serbia Forest is a state-owned company responsible for the management and conservation of Serbia’s forests. The organization oversees sustainable forest management, including the cultivation, protection, and harvesting of timber. Serbia Forest focuses on maintaining the ecological balance, preventing deforestation, and supporting biodiversity. The company also promotes reforestation and afforestation efforts, ensuring long-term sustainability of forest resources. Additionally, it provides wood products for various industries and contributes to Serbia’s economic and environmental well-being through eco-friendly forest practices.',
         image: '/src/images/brazil.jpg',
         visable: false,
      },
      {
         firstName: 'Jap',
         lastName: 'an',
         numberForest: '05. Japan Forest',
         description:
            'Japan Forest refers to the country`s extensive forested areas, which cover about 67% of its land. Japan practices sustainable forest management, balancing timber production with conservation efforts. The forests, made up of both native and plantation trees like cedar and cypress, play a vital role in biodiversity, climate regulation, and the local economy. Japan focuses on reforestation, responsible logging, and protecting its forests from natural disasters like typhoons and landslides.',
         image: '/src/images/japan.jpg',
         visable: false,
      },
   ]
   const [forests, setForest] = useState(forestsStart)

   const onClickNext = () => {
      let forestNumber = forests.findIndex((forest) => forest.visable === true)
      forestNumber++
      if (forestNumber > forests.length - 1) forestNumber = 0

      const newForests = forests.map((forest) => {
         return { ...forest, visable: false }
      })

      setForest([
         ...newForests.slice(0, forestNumber),
         { ...forests[forestNumber], visable: true },
         ...newForests.slice(forestNumber + 1),
      ])
   }
   const onClickPrev = () => {
      let forestNumber = forests.findIndex((forest) => forest.visable === true)
      forestNumber--
      if (forestNumber < 0) forestNumber = forests.length - 1

      const newForests = forests.map((forest) => {
         return { ...forest, visable: false }
      })

      setForest([
         ...newForests.slice(0, forestNumber),
         { ...forests[forestNumber], visable: true },
         ...newForests.slice(forestNumber + 1),
      ])
   }

   const navigateBtns: NavigateBtns = [
      {
         bg: 'transparent',
         svg: 'M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z',
         iconColor: '#fff',
         hoverBtnBg: '#fff',
         hoverIconColor: '#444',
         onClick: onClickPrev,
      },
      {
         bg: '#fff',
         svg: 'M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z',
         iconColor: '#444',
         hoverBtnBg: '#444',
         hoverIconColor: '#fff',
         onClick: onClickNext,
      },
   ]

   return [forests, navigateBtns]
}
