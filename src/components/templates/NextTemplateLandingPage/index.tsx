import React from 'react'
import { NextLayout } from '../NextLayout'
// import { NextSplitWithImage } from '../../organisms/NextSplitWithImage'
import { NextGridBlurredBackdrop } from '../../organisms/NextGridBlurredBackdrop'
// import { NextThreeTierPricingHorizontal } from '../../organisms/NextThreeTierPricingHorizontal'
import { NextCallToAction, NextCallToActionProps } from '../../organisms/NextCallToAction'
import { NextHero } from '../../organisms/NextHero'
import { Container } from '@chakra-ui/react'

export const NextTemplateLandingPage = ({ items }: any) => {
  return (
    <NextLayout isLogged={false} title={items.layout.title}>
      <NextHero
        image={items.nextHeroItem.image}
        words={items.nextHeroItem.words}
        title={items.nextHeroItem.title}
        text={items.nextHeroItem.text}
        textButton={items.nextHeroItem.textButton}
        url={items.nextHeroItem.url}
      />
      <Container maxW="container.lg" mb={20}>
        <NextGridBlurredBackdrop />
      </Container>
      {/* <NextSplitWithImage /> */}
      {items.nextCallToActionItems?.map((item: NextCallToActionProps) => (
        <NextCallToAction
          id={item.id}
          key={item.id}
          title={item.title}
          text={item.text}
          image={item.image}
          textButton={item.textButton}
          directionMd={item.directionMd}
          width={item.width}
          height={item.height}
          url={item.url}
        />
      ))}
      {/* <NextThreeTierPricingHorizontal /> */}
    </NextLayout>
  )
}
