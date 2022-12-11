import Image from 'next/image'
import { NextLayout } from '../NextLayout'
import { NextGridBlurredBackdrop } from '../../organisms/NextGridBlurredBackdrop'
import { NextCallToAction, NextCallToActionProps } from '../../organisms/NextCallToAction'
import { NextHero } from '../../organisms/NextHero'
import { Center, Container } from '@chakra-ui/react'
import NextFeatures from '../../organisms/NextFeatures'

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
      <Center>
        <Image src="/images/logos/logo_footer.png" alt="NeXTIME Logo" width={300} height={300} />
      </Center>
      <NextFeatures items={items.nextFeatureItems} title={'Essa jornada é pra você:'} />
      <Container maxW="container.lg" mb={20}>
        <NextGridBlurredBackdrop />
      </Container>
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
    </NextLayout>
  )
}
