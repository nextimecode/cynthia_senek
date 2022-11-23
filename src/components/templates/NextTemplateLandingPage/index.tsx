import React from 'react'
import { NextLayout } from '../NextLayout'
import { NextWithBackgroundImage } from '../../organisms/NextWithBackgroundImage'
import { NextSplitWithImage } from '../../organisms/NextSplitWithImage'
import { NextGridBlurredBackdrop } from '../../organisms/NextGridBlurredBackdrop'
import { NextThreeTierPricingHorizontal } from '../../organisms/NextThreeTierPricingHorizontal'
import { NextCallToAction, NextCallToActionProps } from '../../organisms/NextCallToAction'

export const NextTemplateLandingPage = ({ items }: any) => {
  return (
    <NextLayout isLogged={false} title={items.layout.title}>
      <NextWithBackgroundImage />
      <NextGridBlurredBackdrop />
      <NextSplitWithImage />
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
      <NextThreeTierPricingHorizontal />
    </NextLayout>
  )
}
