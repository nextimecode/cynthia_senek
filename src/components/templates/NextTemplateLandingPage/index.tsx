import React from 'react'
import { NextLayout } from '../NextLayout'
import { NextWithBackgroundImage } from '../../organisms/NextWithBackgroundImage'
import { NextSplitWithImage } from '../../organisms/NextSplitWithImage'
import { NextGridBlurredBackdrop } from '../../organisms/NextGridBlurredBackdrop'
import { NextThreeTierPricingHorizontal } from '../../organisms/NextThreeTierPricingHorizontal'

export const NextTemplateLandingPage = ({ items }: any) => {
  return (
    <NextLayout isLogged={false} title={items.layout.title}>
      <NextWithBackgroundImage />
      <NextGridBlurredBackdrop />
      <NextSplitWithImage />
      <NextThreeTierPricingHorizontal />
    </NextLayout>
  )
}
